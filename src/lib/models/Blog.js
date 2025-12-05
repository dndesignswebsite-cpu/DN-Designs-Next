import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: String,
  slug: String,
  content:String,
  summary:String,
  coverImage:String,
  blogCategory:String
});

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);
