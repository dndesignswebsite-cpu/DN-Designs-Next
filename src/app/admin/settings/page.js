"use client";

import { useState, useRef, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faCamera,
  faSave,
  faEye,
  faEyeSlash,
  faCheck,
  faTimes,
  faPalette,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import "./settings.css";

export default function SettingsPage() {
  const queryClient = useQueryClient();
  const fileInputRef = useRef(null);

  // Get user from cache or state
  const cachedData = queryClient.getQueryData(["currentUser"]);
  const [user, setUser] = useState(cachedData?.data || null);

  // Profile form
  const [profileForm, setProfileForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });

  // Password form
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  // Avatar
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(user?.avatar || "");

  // Status messages
  const [profileSuccess, setProfileSuccess] = useState("");
  const [profileError, setProfileError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [avatarSuccess, setAvatarSuccess] = useState("");
  const [avatarError, setAvatarError] = useState("");

  // Theme customization
  const [primaryColor, setPrimaryColor] = useState("#0891b2");
  const [themeSuccess, setThemeSuccess] = useState("");

  // Preset color options
  const colorPresets = [
    { name: "Primary", color: "#ca2734", light: "#ca2734bd" },
    { name: "Cyan", color: "#0891b2", light: "#06b6d4" },
    { name: "Blue", color: "#376fd0", light: "#376fd0c2" },
    { name: "Teal", color: "#0d9488", light: "#14b8a6" },
    { name: "Slate", color: "#475569", light: "#64748b" },
  ];

  // Helper function to generate darker shade
  const darkenColor = (hex, percent) => {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max((num >> 16) - amt, 0);
    const G = Math.max(((num >> 8) & 0x00ff) - amt, 0);
    const B = Math.max((num & 0x0000ff) - amt, 0);
    return `#${(0x1000000 + R * 0x10000 + G * 0x100 + B)
      .toString(16)
      .slice(1)}`;
  };

  // Helper function to generate lighter shade
  const lightenColor = (hex, percent) => {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min((num >> 16) + amt, 255);
    const G = Math.min(((num >> 8) & 0x00ff) + amt, 255);
    const B = Math.min((num & 0x0000ff) + amt, 255);
    return `#${(0x1000000 + R * 0x10000 + G * 0x100 + B)
      .toString(16)
      .slice(1)}`;
  };

  // Apply theme colors to CSS variables
  const applyTheme = (color) => {
    const root = document.documentElement;
    const lightColor = lightenColor(color, 15);
    const darkColor = darkenColor(color, 15);

    root.style.setProperty("--admin-primary", color);
    root.style.setProperty("--admin-primary-light", lightColor);
    root.style.setProperty("--admin-primary-dark", darkColor);
    root.style.setProperty("--admin-secondary", lightColor);
  };

  // Load saved theme on mount
  useEffect(() => {
    const savedColor = localStorage.getItem("admin-primary-color");
    if (savedColor) {
      setPrimaryColor(savedColor);
      applyTheme(savedColor);
    }
  }, []);

  // Fetch current user on mount
  useEffect(() => {
    const fetchUser = async () => {
      const token = Cookies.get("admin_token");
      if (!token) return;

      try {
        const res = await fetch("/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data.data);
          setProfileForm({
            name: data.data.name || "",
            email: data.data.email || "",
          });
          setAvatarPreview(data.data.avatar || "");
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };
    fetchUser();
  }, []);

  // Profile update mutation
  const profileMutation = useMutation({
    mutationFn: async (data) => {
      const token = Cookies.get("admin_token");
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);

      const res = await fetch("/api/auth/update-profile", {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to update profile");
      }
      return res.json();
    },
    onSuccess: (data) => {
      setUser(data.data);
      setProfileSuccess("Profile updated successfully!");
      setProfileError("");
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
      setTimeout(() => setProfileSuccess(""), 3000);
    },
    onError: (err) => {
      setProfileError(err.message);
      setProfileSuccess("");
    },
  });

  // Password update mutation
  const passwordMutation = useMutation({
    mutationFn: async (data) => {
      const token = Cookies.get("admin_token");
      const formData = new FormData();
      formData.append("password", data.newPassword);

      const res = await fetch("/api/auth/update-profile", {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to update password");
      }
      return res.json();
    },
    onSuccess: () => {
      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setPasswordSuccess("Password updated successfully!");
      setPasswordError("");
      setTimeout(() => setPasswordSuccess(""), 3000);
    },
    onError: (err) => {
      setPasswordError(err.message);
      setPasswordSuccess("");
    },
  });

  // Avatar update mutation
  const avatarMutation = useMutation({
    mutationFn: async (file) => {
      const token = Cookies.get("admin_token");
      const formData = new FormData();
      formData.append("avatar", file);

      const res = await fetch("/api/auth/update-profile", {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to update avatar");
      }
      return res.json();
    },
    onSuccess: (data) => {
      setUser(data.data);
      setAvatarPreview(data.data.avatar);
      setAvatarFile(null);
      setAvatarSuccess("Avatar updated successfully!");
      setAvatarError("");
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
      setTimeout(() => setAvatarSuccess(""), 3000);
    },
    onError: (err) => {
      setAvatarError(err.message);
      setAvatarSuccess("");
    },
  });

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setProfileError("");
    profileMutation.mutate(profileForm);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setPasswordError("");

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError("New passwords do not match");
      return;
    }

    if (passwordForm.newPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    }

    passwordMutation.mutate(passwordForm);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setAvatarError("Image must be less than 5MB");
        return;
      }
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
      setAvatarError("");
    }
  };

  const handleAvatarUpload = () => {
    if (avatarFile) {
      avatarMutation.mutate(avatarFile);
    }
  };

  const cancelAvatarChange = () => {
    setAvatarFile(null);
    setAvatarPreview(user?.avatar || "");
    setAvatarError("");
  };

  // Theme handlers
  const handleColorChange = (color) => {
    setPrimaryColor(color);
    applyTheme(color);
    localStorage.setItem("admin-primary-color", color);
    setThemeSuccess("Theme color updated!");
    setTimeout(() => setThemeSuccess(""), 2000);
  };

  const handleCustomColorChange = (e) => {
    const color = e.target.value;
    setPrimaryColor(color);
    applyTheme(color);
  };

  const handleCustomColorSave = () => {
    localStorage.setItem("admin-primary-color", primaryColor);
    setThemeSuccess("Custom color saved!");
    setTimeout(() => setThemeSuccess(""), 2000);
  };

  const resetToDefault = () => {
    const defaultColor = "#0891b2";
    setPrimaryColor(defaultColor);
    applyTheme(defaultColor);
    localStorage.removeItem("admin-primary-color");
    setThemeSuccess("Theme reset to default!");
    setTimeout(() => setThemeSuccess(""), 2000);
  };

  return (
    <div className="settings-page">
      <div className="admin-page-header">
        <h1 className="admin-page-title">Account Settings</h1>
        <p className="admin-page-subtitle">
          Manage your profile, avatar, and password
        </p>
      </div>

      <div className="settings-grid">
        {/* Avatar Section */}
        <div className="admin-card settings-avatar-card">
          <h3 className="admin-card-title">Profile Picture</h3>

          <div className="settings-avatar-section">
            <div className="settings-avatar-wrapper">
              {avatarPreview ? (
                <img
                  src={avatarPreview}
                  alt="Avatar"
                  className="settings-avatar-image"
                />
              ) : (
                <div className="settings-avatar-placeholder">
                  <FontAwesomeIcon icon={faUser} />
                </div>
              )}
              <button
                type="button"
                className="settings-avatar-edit"
                onClick={() => fileInputRef.current?.click()}
              >
                <FontAwesomeIcon icon={faCamera} />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,.webp"
                onChange={handleAvatarChange}
                style={{ display: "none" }}
              />
            </div>

            <div className="settings-avatar-info">
              <p className="settings-avatar-name">
                {user?.name || "Admin User"}
              </p>
              <p className="settings-avatar-email">{user?.email || ""}</p>
              <p className="settings-avatar-hint">JPG, PNG or GIF. Max 5MB.</p>
            </div>
          </div>

          {avatarFile && (
            <div className="settings-avatar-actions">
              <button
                type="button"
                className="admin-btn admin-btn-primary"
                onClick={handleAvatarUpload}
                disabled={avatarMutation.isPending}
              >
                <FontAwesomeIcon icon={faCheck} />
                {avatarMutation.isPending ? "Uploading..." : "Save Avatar"}
              </button>
              <button
                type="button"
                className="admin-btn admin-btn-outline"
                onClick={cancelAvatarChange}
              >
                <FontAwesomeIcon icon={faTimes} />
                Cancel
              </button>
            </div>
          )}

          {avatarSuccess && (
            <div className="admin-alert admin-alert-success">
              {avatarSuccess}
            </div>
          )}
          {avatarError && (
            <div className="admin-alert admin-alert-error">{avatarError}</div>
          )}
        </div>

        {/* Profile Section */}
        <div className="admin-card">
          <h3 className="admin-card-title">Profile Information</h3>

          <form onSubmit={handleProfileSubmit}>
            {profileSuccess && (
              <div className="admin-alert admin-alert-success">
                {profileSuccess}
              </div>
            )}
            {profileError && (
              <div className="admin-alert admin-alert-error">
                {profileError}
              </div>
            )}

            <div className="admin-form-group">
              <label className="admin-form-label" htmlFor="profile-name">
                Full Name
              </label>
              <div className="settings-input-wrapper">
                <FontAwesomeIcon
                  icon={faUser}
                  className="settings-input-icon"
                />
                <input
                  type="text"
                  id="profile-name"
                  className="admin-form-input settings-input-with-icon"
                  value={profileForm.name}
                  onChange={(e) =>
                    setProfileForm({ ...profileForm, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label" htmlFor="profile-email">
                Email Address
              </label>
              <div className="settings-input-wrapper">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="settings-input-icon"
                />
                <input
                  type="email"
                  id="profile-email"
                  className="admin-form-input settings-input-with-icon"
                  value={profileForm.email}
                  onChange={(e) =>
                    setProfileForm({ ...profileForm, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="admin-btn admin-btn-primary"
              disabled={profileMutation.isPending}
            >
              <FontAwesomeIcon icon={faSave} />
              {profileMutation.isPending ? "Saving..." : "Update Profile"}
            </button>
          </form>
        </div>

        {/* Password Section */}
        <div className="admin-card">
          <h3 className="admin-card-title">Change Password</h3>

          <form onSubmit={handlePasswordSubmit}>
            {passwordSuccess && (
              <div className="admin-alert admin-alert-success">
                {passwordSuccess}
              </div>
            )}
            {passwordError && (
              <div className="admin-alert admin-alert-error">
                {passwordError}
              </div>
            )}

            <div className="admin-form-group">
              <label className="admin-form-label" htmlFor="new-password">
                New Password
              </label>
              <div className="settings-input-wrapper">
                <FontAwesomeIcon
                  icon={faLock}
                  className="settings-input-icon"
                />
                <input
                  type={showPasswords.new ? "text" : "password"}
                  id="new-password"
                  className="admin-form-input settings-input-with-icon"
                  value={passwordForm.newPassword}
                  onChange={(e) =>
                    setPasswordForm({
                      ...passwordForm,
                      newPassword: e.target.value,
                    })
                  }
                  placeholder="Enter new password"
                  required
                />
                <button
                  type="button"
                  className="settings-password-toggle"
                  onClick={() =>
                    setShowPasswords({
                      ...showPasswords,
                      new: !showPasswords.new,
                    })
                  }
                >
                  <FontAwesomeIcon
                    icon={showPasswords.new ? faEyeSlash : faEye}
                  />
                </button>
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label" htmlFor="confirm-password">
                Confirm New Password
              </label>
              <div className="settings-input-wrapper">
                <FontAwesomeIcon
                  icon={faLock}
                  className="settings-input-icon"
                />
                <input
                  type={showPasswords.confirm ? "text" : "password"}
                  id="confirm-password"
                  className="admin-form-input settings-input-with-icon"
                  value={passwordForm.confirmPassword}
                  onChange={(e) =>
                    setPasswordForm({
                      ...passwordForm,
                      confirmPassword: e.target.value,
                    })
                  }
                  placeholder="Confirm new password"
                  required
                />
                <button
                  type="button"
                  className="settings-password-toggle"
                  onClick={() =>
                    setShowPasswords({
                      ...showPasswords,
                      confirm: !showPasswords.confirm,
                    })
                  }
                >
                  <FontAwesomeIcon
                    icon={showPasswords.confirm ? faEyeSlash : faEye}
                  />
                </button>
              </div>
            </div>

            <div className="settings-password-requirements">
              <p>Password must:</p>
              <ul>
                <li
                  className={passwordForm.newPassword.length >= 6 ? "met" : ""}
                >
                  Be at least 6 characters long
                </li>
                <li
                  className={
                    passwordForm.newPassword === passwordForm.confirmPassword &&
                    passwordForm.confirmPassword
                      ? "met"
                      : ""
                  }
                >
                  Match confirmation
                </li>
              </ul>
            </div>

            <button
              type="submit"
              className="admin-btn admin-btn-primary"
              disabled={passwordMutation.isPending}
            >
              <FontAwesomeIcon icon={faLock} />
              {passwordMutation.isPending ? "Updating..." : "Change Password"}
            </button>
          </form>
        </div>

        {/* Theme Section */}
        <div className="admin-card settings-theme-card">
          <h3 className="admin-card-title">
            <FontAwesomeIcon icon={faPalette} style={{ marginRight: "8px" }} />
            Theme Customization
          </h3>

          {themeSuccess && (
            <div className="admin-alert admin-alert-success">
              {themeSuccess}
            </div>
          )}

          <div className="settings-theme-section">
            <label className="admin-form-label">Preset Colors</label>
            <div className="settings-color-presets">
              {colorPresets.map((preset) => (
                <button
                  key={preset.name}
                  type="button"
                  className={`settings-color-preset ${
                    primaryColor === preset.color ? "active" : ""
                  }`}
                  style={{ backgroundColor: preset.color }}
                  onClick={() => handleColorChange(preset.color)}
                  title={preset.name}
                >
                  {primaryColor === preset.color && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="settings-theme-section">
            <label className="admin-form-label" htmlFor="custom-color">
              Custom Color
            </label>
            <div className="settings-custom-color">
              <input
                type="color"
                id="custom-color"
                value={primaryColor}
                onChange={handleCustomColorChange}
                className="settings-color-picker"
              />
              <input
                type="text"
                value={primaryColor}
                onChange={(e) => {
                  if (/^#[0-9A-Fa-f]{6}$/.test(e.target.value)) {
                    setPrimaryColor(e.target.value);
                    applyTheme(e.target.value);
                  } else {
                    setPrimaryColor(e.target.value);
                  }
                }}
                className="admin-form-input settings-color-input"
                placeholder="#000000"
              />
              <button
                type="button"
                className="admin-btn admin-btn-primary"
                onClick={handleCustomColorSave}
              >
                <FontAwesomeIcon icon={faSave} />
                Save
              </button>
            </div>
          </div>

          <div className="settings-theme-section">
            <label className="admin-form-label">Preview</label>
            <div className="settings-theme-preview">
              <div
                className="settings-preview-box"
                style={{ backgroundColor: primaryColor }}
              >
                Primary
              </div>
              <div
                className="settings-preview-box"
                style={{ backgroundColor: lightenColor(primaryColor, 15) }}
              >
                Light
              </div>
              <div
                className="settings-preview-box"
                style={{ backgroundColor: darkenColor(primaryColor, 15) }}
              >
                Dark
              </div>
            </div>
          </div>

          <button
            type="button"
            className="admin-btn admin-btn-outline"
            onClick={resetToDefault}
          >
            <FontAwesomeIcon icon={faUndo} />
            Reset to Default
          </button>
        </div>
      </div>
    </div>
  );
}
