/**
 * Blog Model
 * Defines the schema for blog posts
 */

import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    // Blog post title
    title: {
      type: String,
      required: [true, "Please provide a title"],
      trim: true,
      maxlength: [200, "Title cannot be more than 200 characters"],
    },

    // URL-friendly version of title (for SEO)
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },

    // Blog post content (can be HTML or markdown)
    content: {
      type: String,
      required: [true, "Please provide blog content"],
    },

    // Short excerpt/description for previews
    excerpt: {
      type: String,
      maxlength: [500, "Excerpt cannot be more than 500 characters"],
    },

    // Featured image (main image for the blog post)
    featuredImage: {
      url: {
        type: String,
        default: null,
      },
      publicId: {
        type: String,
        default: null,
      },
    },

    // Additional images array (for gallery or content images)
    images: [
      {
        url: {
          type: String,
        },
        publicId: {
          type: String,
        },
        caption: {
          type: String,
          default: "",
        },
      },
    ],

    // Videos array (for video content)
    videos: [
      {
        url: {
          type: String,
        },
        publicId: {
          type: String,
        },
        caption: {
          type: String,
          default: "",
        },
        // Video can be from different sources
        source: {
          type: String,
          enum: ["cloudinary", "youtube", "vimeo", "external"],
          default: "cloudinary",
        },
      },
    ],

    // Author reference (User who created the blog post)
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide an author"],
    },

    // Author name (stored for quick access without populating)
    authorName: {
      type: String,
      required: true,
    },

    // Tags for categorization
    tags: [
      {
        type: String,
        trim: true,
        lowercase: true,
      },
    ],

    // Category of the blog post
    category: {
      type: String,
      trim: true,
      default: "General",
    },

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

    // SEO meta keywords
    metaKeywords: [
      {
        type: String,
        trim: true,
      },
    ],

    // Canonical URL for SEO
    canonicalUrl: {
      type: String,
      trim: true,
      default: null,
    },

    // Robots meta tag (index, noindex, follow, nofollow)
    robotsTag: {
      type: String,
      trim: true,
      default: "index, follow",
    },

    // Custom head code (for scripts, styles, etc.)
    // Stored as plain string - can contain <script> tags
    headCode: {
      type: String,
      default: null,
    },

    // Open Graph metadata
    ogTitle: {
      type: String,
      trim: true,
      maxlength: [95, "OG title cannot be more than 95 characters"],
    },

    ogDescription: {
      type: String,
      trim: true,
      maxlength: [200, "OG description cannot be more than 200 characters"],
    },

    ogImage: {
      url: {
        type: String,
        default: null,
      },
      publicId: {
        type: String,
        default: null,
      },
    },

    // Twitter Card metadata
    twitterTitle: {
      type: String,
      trim: true,
      maxlength: [70, "Twitter title cannot be more than 70 characters"],
    },

    twitterDescription: {
      type: String,
      trim: true,
      maxlength: [
        200,
        "Twitter description cannot be more than 200 characters",
      ],
    },

    twitterImage: {
      url: {
        type: String,
        default: null,
      },
      publicId: {
        type: String,
        default: null,
      },
    },

    // Published status
    isPublished: {
      type: Boolean,
      default: false,
    },

    // Published date (when the blog was published)
    publishedAt: {
      type: Date,
      default: null,
    },

    // View count
    views: {
      type: Number,
      default: 0,
    },

    // Reading time in minutes (calculated or manual)
    readingTime: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

/**
 * Generate slug from title before saving
 * Creates URL-friendly version of the title
 */
blogSchema.pre("save", function (next) {
  if (this.isModified("title") && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
      .replace(/(^-|-$)/g, ""); // Remove leading/trailing hyphens
  }
  next();
});

/**
 * Calculate reading time based on content length
 * Assumes average reading speed of 200 words per minute
 */
blogSchema.methods.calculateReadingTime = function () {
  const wordsPerMinute = 200;
  const wordCount = this.content.split(/\s+/).length;
  this.readingTime = Math.ceil(wordCount / wordsPerMinute) || 1;
};

/**
 * Increment view count
 */
blogSchema.methods.incrementViews = function () {
  this.views += 1;
  return this.save();
};

// Create indexes for better query performance
blogSchema.index({ author: 1 });
blogSchema.index({ isPublished: 1, publishedAt: -1 });
blogSchema.index({ tags: 1 });
blogSchema.index({ category: 1 });

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
