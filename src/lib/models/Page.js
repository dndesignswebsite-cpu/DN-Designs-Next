/**
 * Page Model
 * Defines the schema for website pages managed from dashboard
 */

import mongoose from "mongoose";

const pageSchema = new mongoose.Schema(
  {
    // Page title (displayed on the page)
    title: {
      type: String,
      required: [true, "Please provide a page title"],
      trim: true,
      maxlength: [200, "Title cannot be more than 200 characters"],
    },

    // URL-friendly version of title
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: [true, "Please provide a slug"],
    },

    // Page content sections (flexible JSON structure for different page layouts)
    content: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },

    // Short description/excerpt
    description: {
      type: String,
      trim: true,
      maxlength: [500, "Description cannot be more than 500 characters"],
    },

    authors: [
      {
        name: {
          type: String,
          trim: true,
          maxlength: [100, "Name cannot be more than 100 characters"],
        },
        url: {
          type: String,
          trim: true,
          maxlength: [100, "URL cannot be more than 100 characters"],
        },
      },
    ],

    // Page type/template identifier (e.g., 'home', 'about', 'services', 'contact')
    pageType: {
      type: String,
      trim: true,
      default: "default",
    },

    // Display order/priority
    order: {
      type: Number,
      default: 0,
    },

    // Featured image for the page
    featuredImage: {
      url: {
        type: String,
        default: null,
      },
      publicId: {
        type: String,
        default: null,
      },
      alt: {
        type: String,
        default: "",
      },
    },

    // Additional images array
    images: [
      {
        url: {
          type: String,
        },
        publicId: {
          type: String,
        },
        alt: {
          type: String,
          default: "",
        },
        caption: {
          type: String,
          default: "",
        },
      },
    ],

    // =====================
    // SEO FIELDS
    // =====================

    // SEO meta title
    metaTitle: {
      type: String,
      trim: true,
      maxlength: [70, "Meta title cannot be more than 70 characters"],
    },

    // SEO meta description
    metaDescription: {
      type: String,
      trim: true,
      maxlength: [160, "Meta description cannot be more than 160 characters"],
    },

    // Focus keywords for SEO
    focusKeywords: [
      {
        type: String,
        trim: true,
        lowercase: true,
      },
    ],

    // Canonical URL for SEO
    alternates: {
      canonical: {
        type: String,
        trim: true,
        default: null,
      },
    },

    // Robots meta tag (index, noindex, follow, nofollow)
    robotsTag: {
      type: String,
      trim: true,
      default: "index, follow",
    },

    // Custom head code (for scripts, styles, tracking codes, etc.)
    headCode: {
      type: String,
      default: null,
    },

    // =====================
    // OPEN GRAPH FIELDS
    // =====================
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
      images: [
        {
          url: {
            type: String,
            default: null,
          },
          publicId: {
            type: String,
            default: null,
          },
          height: {
            type: Number,
            default: null,
          },
          width: {
            type: Number,
            default: null,
          },
          alt: {
            type: String,
            default: "",
          },
        },
      ],
      type: {
        type: String,
        trim: true,
        default: "website",
      },
    },

    // =====================
    // TWITTER CARD FIELDS
    // =====================

    twitter: {
      card: {
        type: String,
      },
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
          url: {
            type: String,
            default: null,
          },
          publicId: {
            type: String,
            default: null,
          },
        },
      ],
    },
    // =====================
    // PUBLISHING FIELDS
    // =====================

    // Published status
    isPublished: {
      type: Boolean,
      default: false,
    },

    // Published date (editable)
    publishedAt: {
      type: Date,
      default: null,
    },

    // Last modified by (User reference)
    lastModifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    // View count for analytics
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

/**
 * Generate slug from title before saving (if not provided)
 */
pageSchema.pre("save", async function () {
  if (this.isModified("title") && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }
});

/**
 * Increment view count
 */
pageSchema.methods.incrementViews = function () {
  this.views += 1;
  return this.save();
};

// Create indexes for better query performance
// Note: slug index is already created by unique: true
pageSchema.index({ pageType: 1 });
pageSchema.index({ isPublished: 1, publishedAt: -1 });
pageSchema.index({ order: 1 });

const Page = mongoose.models.Page || mongoose.model("Page", pageSchema);

export default Page;
