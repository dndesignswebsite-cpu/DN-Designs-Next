/**
 * Tag Model
 * Defines the schema for blog tags
 */

import mongoose from "mongoose";

const tagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a tag name"],
      unique: true,
      trim: true,
      maxlength: [100, "Name cannot be more than 100 characters"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      maxlength: [500, "Description cannot be more than 500 characters"],
    },
    metaKeywords: [
      {
        type: String,
        trim: true,
      },
    ],
    // SEO meta title
    metaTitle: {
      type: String,
      trim: true,
      maxlength: [70, "Meta title cannot be more than 70 characters"],
    },
    // SEO meta description
    metaDescription: {
      type: String,
      maxlength: [160, "Meta description cannot be more than 160 characters"],
    },
    // Canonical URL for SEO
    alternates: {
      canonical: {
        type: String,
        trim: true,
        default: null,
      },
    },
    // Robots meta tag
    robotsTag: {
      type: String,
      trim: true,
      default: "index, follow",
    },
    // Open Graph metadata
    openGraph: {
      title: {
        type: String,
        trim: true,
        maxlength: [95, "OG title cannot be more than 95 characters"],
      },
      description: {
        type: String,
        trim: true,
        maxlength: [200, "OG description cannot be more than 200 characters"],
      },
      url: {
        type: String,
        trim: true,
        default: null,
      },
      siteName: {
        type: String,
        trim: true,
        default: null,
      },
      images: [
        {
          url: { type: String, default: null },
          width: { type: Number, default: null },
          height: { type: Number, default: null },
          alt: { type: String, default: null },
          publicId: { type: String, default: null },
        },
      ],
      type: {
        type: String,
        default: "website",
      },
    },
    // Twitter Card metadata
    twitter: {
      card: { type: String },
      title: {
        type: String,
        trim: true,
        maxlength: [70, "Twitter title cannot be more than 70 characters"],
      },
      description: {
        type: String,
        trim: true,
        maxlength: [
          200,
          "Twitter description cannot be more than 200 characters",
        ],
      },
      images: [
        {
          url: { type: String, default: null },
          publicId: { type: String, default: null },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Generate slug from name before saving
 */
tagSchema.pre("save", async function () {
  if (this.isModified("name") && !this.slug) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }
});

const Tag = mongoose.models.Tag || mongoose.model("Tag", tagSchema);

export default Tag;
