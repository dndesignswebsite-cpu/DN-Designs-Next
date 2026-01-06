// export const dynamic = "force-dynamic";
// export const revalidate = 0;

// import React from "react";
// import connectDB from "@/lib/config/database";
// import * as blogService from "@/lib/services/blogService";
// import DefaultTemplate from "../DefaultTemplate";
// import CaseStudyTemplate from "../CaseStudyTemplate";
// import { cookies } from "next/headers";
// import { notFound } from "next/navigation";
// import { getAuthUserFromToken } from "@/lib/middleware/auth";

// // meta data start here
// export async function generateMetadata({ params }) {
//   const { slug } = await params;

//   await connectDB();

//   let blog;
//   try {
//     blog = await blogService.getBlogById(slug, null);
//     // console.log("SEO Blog Data:", blog);
//   } catch (error) {
//     console.error("Blog SEO Error:", error);
//     return {
//       title: "Blog Post",
//       robots: "noindex, nofollow",
//     };
//   }

//   if (!blog) return {};

//   const ogImage = blog.openGraph?.images?.[0]?.url || blog.featuredImage?.url;
//   const twitterImage = blog.twitter?.images?.[0]?.url || blog.featuredImage?.url;

//   return {
//     title: blog.metaTitle || blog.title,
//     description: blog.metaDescription || blog.excerpt || blog.content?.substring(0, 160),

//     robots: blog.robotsTag || "index, follow",

//     alternates: {
//       canonical: blog.alternates?.canonical || `https://dndesigns.co.in/blog/${slug}`,
//     },

//     openGraph: {
//       type: "article",
//       title: blog.openGraph?.title || blog.metaTitle || blog.title,
//       description: blog.openGraph?.description || blog.metaDescription,
//       url: blog.alternates?.canonical || `https://dndesigns.co.in/blog/${slug}`,
//       siteName: "DN Designs",
//       images: ogImage ? [
//         {
//           url: ogImage,
//           width: 1200,
//           height: 630,
//           alt: blog.featuredImage?.altText || blog.title,
//         }
//       ] : [],
//     },

//     twitter: {
//       card: "summary_large_image",
//       title: blog.twitter?.title || blog.metaTitle || blog.title,
//       description: blog.twitter?.description || blog.metaDescription,
//       images: twitterImage ? [twitterImage] : [],
//     },
//   };
// }
// // end here

// export default async function BlogDetailsPage({ params }) {
//   const { slug } = await params;

//   await connectDB();

//   // Get authentication context for previewing unpublished blogs
//   const cookieStore = await cookies();
//   const token = cookieStore.get("admin_token")?.value;
//   const user = await getAuthUserFromToken(token);

//   try {
//     // Pass user context to allow admins/editors to see unpublished posts
//     const blog = await blogService.getBlogById(slug, user);

//     if (!blog) {
//       notFound();
//     }

//     // Fetch recent posts for sidebar
//     const recentResult = await blogService.getAllBlogs(
//       { isPublished: "true" },
//       { limit: 5 }
//     );
//     const recentPosts = recentResult.blogs;

//     // Use the layout field to determine which template to show
//     if (blog.layout === "case-study") {
//       return <CaseStudyTemplate blog={blog} recentPosts={recentPosts} />;
//     }

//     // Default template for "default" or any other unrecognized layout
//     return <DefaultTemplate blog={blog} recentPosts={recentPosts} />;
//   } catch (error) {
//     console.error("Error fetching blog:", error);
//     notFound();
//   }
// }

export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import connectDB from "@/lib/config/database";
import * as blogService from "@/lib/services/blogService";
import DefaultTemplate from "../DefaultTemplate";
import CaseStudyTemplate from "../CaseStudyTemplate";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { getAuthUserFromToken } from "@/lib/middleware/auth";
import Script from "next/script";

// Meta data generation
export async function generateMetadata({ params }) {
  const { slug } = await params;
  await connectDB();
  let blog;
  try {
    blog = await blogService.getBlogById(slug, null);
  } catch (error) {
    console.error("Blog SEO Error:", error);
    return { title: "Blog Post", robots: "noindex, nofollow" };
  }
  if (!blog) return {};

  const ogImage = blog.openGraph?.images?.[0]?.url || blog.featuredImage?.url;
  const twitterImage =
    blog.twitter?.images?.[0]?.url || blog.featuredImage?.url;

  return {
    title: blog.metaTitle || blog.title,
    description:
      blog.metaDescription || blog.excerpt || blog.content?.substring(0, 160),
    robots: blog.robotsTag || "index, follow",
    alternates: {
      canonical:
        blog.alternates?.canonical || `https://dndesigns.co.in/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      title: blog.openGraph?.title || blog.metaTitle || blog.title,
      description: blog.openGraph?.description || blog.metaDescription,
      url: blog.alternates?.canonical || `https://dndesigns.co.in/blog/${slug}`,
      siteName: "DN Designs",
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: blog.featuredImage?.altText || blog.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.twitter?.title || blog.metaTitle || blog.title,
      description: blog.twitter?.description || blog.metaDescription,
      images: twitterImage ? [twitterImage] : [],
    },
  };
}
// end here

export default async function BlogDetailsPage({ params }) {
  const { slug } = await params;
  await connectDB();

  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  const user = await getAuthUserFromToken(token);

  try {
    const blog = await blogService.getBlogById(slug, user);
    if (!blog) return notFound();

    const recentResult = await blogService.getAllBlogs(
      { isPublished: "true" },
      { limit: 5 }
    );
    const recentPosts = recentResult.blogs;

    let cleanSchema = "";
    if (blog.headCode) {
      cleanSchema = blog.headCode
        .replace(/<script.*?>/gi, "")
        .replace(/<\/script>/gi, "")
        .trim();

      if (cleanSchema.includes('""')) {
        cleanSchema = cleanSchema.replace(/""/g, '"');
      }
    }

    return (
      <>
        {cleanSchema && (
          <script
            key={`schema-blog-${blog._id}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: cleanSchema }}
          />
        )}

        {blog.layout === "case-study" ? (
          <CaseStudyTemplate blog={blog} recentPosts={recentPosts} />
        ) : (
          <DefaultTemplate blog={blog} recentPosts={recentPosts} />
        )}
      </>
    );
  } catch (error) {
    console.error("Error fetching blog content:", error);
    return notFound();
  }
}
