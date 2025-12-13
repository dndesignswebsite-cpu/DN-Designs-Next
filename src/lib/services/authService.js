/**
 * Auth Service
 * Business logic for authentication and user management
 */

import * as userRepository from "@/lib/repositories/userRepository.js";
import {
  AppError,
  throwError,
  logError,
} from "@/lib/middleware/errorHandler.js";
import { generateToken } from "@/lib/utils/generateToken.js";
import { uploadImageBuffer, deleteImage } from "@/lib/config/fileStorage.js";

export const register = async (userData) => {
  const { name, email, password, role } = userData;

  const userExists = await userRepository.existsByEmail(email);
  if (userExists) {
    throwError("User already exists with this email", 400, {
      function: "register",
      email,
    });
  }

  const user = await userRepository.create({
    name,
    email,
    password,
    role: role || "user",
  });

  const token = generateToken(user._id);

  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
    },
    token,
  };
};

export const login = async (email, password) => {
  if (!email || !password) {
    throwError("Please provide email and password", 400, { function: "login" });
  }

  const user = await userRepository.findByEmail(email, { select: "+password" });

  if (!user) {
    throwError("Invalid credentials", 401, { function: "login", email });
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throwError("Invalid credentials", 401, { function: "login", email });
  }

  if (!user.isActive) {
    throwError("Your account has been deactivated", 401, {
      function: "login",
      userId: user._id,
    });
  }

  const token = generateToken(user._id);

  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
    },
    token,
  };
};

export const getCurrentUser = async (userId) => {
  const user = await userRepository.findById(userId);
  if (!user) {
    throwError("User not found", 404, { function: "getCurrentUser", userId });
  }
  return user;
};

export const getAllUsers = async (filters = {}, pagination = {}) => {
  const filter = {};

  if (filters.role) filter.role = filters.role;
  if (filters.isActive !== undefined) {
    filter.isActive = filters.isActive === "true" || filters.isActive === true;
  }
  if (filters.search) {
    filter.$or = [
      { name: { $regex: filters.search, $options: "i" } },
      { email: { $regex: filters.search, $options: "i" } },
    ];
  }

  const result = await userRepository.findAll(filter, {
    page: pagination.page,
    limit: pagination.limit,
    select: "-password",
  });

  return {
    users: result.users,
    count: result.users.length,
    total: result.pagination.total,
    page: result.pagination.page,
    pages: result.pagination.pages,
  };
};

export const getUserById = async (userId) => {
  const user = await userRepository.findById(userId, { select: "-password" });
  if (!user) {
    throwError(`User not found with id of ${userId}`, 404, {
      function: "getUserById",
      userId,
    });
  }
  return user;
};

export const updateUser = async (
  userId,
  updateData,
  currentUser,
  avatarBuffer = null
) => {
  const existingUser = await userRepository.findById(userId);
  if (!existingUser) {
    throwError(`User not found with id of ${userId}`, 404, {
      function: "updateUser",
      userId,
    });
  }

  if (currentUser.id !== userId && currentUser.role !== "admin") {
    throwError("Not authorized to update this user", 403, {
      function: "updateUser",
      userId,
    });
  }

  if (avatarBuffer) {
    try {
      const result = await uploadImageBuffer(avatarBuffer);

      if (existingUser.avatar && existingUser.avatar.includes("cloudinary")) {
        try {
          const urlParts = existingUser.avatar.split("/");
          const filename = urlParts[urlParts.length - 1];
          const oldPublicId = filename.split(".")[0];
          await deleteImage(oldPublicId);
        } catch (error) {
          logError(error, {
            function: "updateUser",
            operation: "deleteOldAvatar",
          });
        }
      }

      updateData.avatar = result.secure_url;
    } catch (error) {
      throwError(error, 500, {
        function: "updateUser",
        operation: "uploadAvatar",
      });
    }
  }

  if (updateData.email && updateData.email !== existingUser.email) {
    const emailExists = await userRepository.existsByEmail(updateData.email);
    if (emailExists) {
      throwError("Email already exists", 400, {
        function: "updateUser",
        email: updateData.email,
      });
    }
  }

  if (currentUser.role !== "admin") {
    delete updateData.role;
    delete updateData.isActive;
  }

  return await userRepository.updateById(userId, updateData);
};

export const deleteUser = async (userId, currentUser) => {
  if (currentUser.id === userId) {
    throwError("You cannot delete your own account", 400, {
      function: "deleteUser",
      userId,
    });
  }

  const user = await userRepository.findById(userId);
  if (!user) {
    throwError(`User not found with id of ${userId}`, 404, {
      function: "deleteUser",
      userId,
    });
  }

  if (user.avatar && user.avatar.includes("cloudinary")) {
    try {
      const urlParts = user.avatar.split("/");
      const filename = urlParts[urlParts.length - 1];
      const publicId = filename.split(".")[0];
      await deleteImage(publicId);
    } catch (error) {
      logError(error, { function: "deleteUser", operation: "deleteAvatar" });
    }
  }

  await userRepository.deleteById(userId);
  return true;
};

export const updateProfile = async (
  userId,
  updateData,
  avatarBuffer = null
) => {
  const user = await userRepository.findById(userId);
  if (!user) {
    throwError("User not found", 404, { function: "updateProfile", userId });
  }

  if (avatarBuffer) {
    try {
      const result = await uploadImageBuffer(avatarBuffer);

      if (user.avatar && user.avatar.includes("cloudinary")) {
        try {
          const urlParts = user.avatar.split("/");
          const filename = urlParts[urlParts.length - 1];
          const oldPublicId = filename.split(".")[0];
          await deleteImage(oldPublicId);
        } catch (error) {
          logError(error, {
            function: "updateProfile",
            operation: "deleteOldAvatar",
          });
        }
      }

      updateData.avatar = result.secure_url;
    } catch (error) {
      throwError(error, 500, {
        function: "updateProfile",
        operation: "uploadAvatar",
      });
    }
  }

  if (updateData.email && updateData.email !== user.email) {
    const emailExists = await userRepository.existsByEmail(updateData.email);
    if (emailExists) {
      throwError("Email already exists", 400, {
        function: "updateProfile",
        email: updateData.email,
      });
    }
  }

  return await userRepository.updateById(userId, updateData);
};
