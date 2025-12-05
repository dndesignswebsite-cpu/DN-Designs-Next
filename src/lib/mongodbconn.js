import mongoose from "mongoose";

export async function connectDB() {
  try {
    // await mongoose.connect("mongodb://localhost:27017/myblogapp");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.log("DB Error:", err);
  }
}