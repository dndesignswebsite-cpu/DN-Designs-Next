import React from "react";
import Link from "next/link";
import "./DefaultTemplate.css";
import "./blog.css";
import BlogFromTempOne from "./BlogFormTempOne/BlogFormTempOne";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { slugify } from "@/lib/utils/slugify";

function DefaultTemplate({ blog, recentPosts }) {
  if (!blog) return null;

  return (
    <div>
      <section className="tempOne">
        <div className="container">
          <div className="row blog-main-row">
            <div className="col-12 col-lg-8">
              {blog.featuredImage?.url && (
                <img
                  src={blog.featuredImage.url}
                  className="blog-feature-image img-fluid"
                  alt={blog.featuredImage.altText || blog.title}
                />
              )}

              <h2 className="single-blog-list-post-head">{blog.title}</h2>

              <div className="blog-meta-row d-flex align-items-center mt-3 mb-4">
                <div className="blog-meta-item d-flex align-items-center me-4">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="blog-meta-icon me-2"
                  />
                  <span className="blog-meta-text">
                    {blog.authorName || "DN Designs"}
                  </span>
                </div>
                <div className="blog-meta-item d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="blog-meta-icon me-2"
                  />
                  <span className="blog-meta-text">
                    {new Date(
                      blog.publishedAt || blog.createdAt
                    ).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>

              {blog.categories?.length > 0 && (
                <div className="blog-categories-list mb-4">
                  <span className="blog-categories-label">Categories:</span>
                  {blog.categories.map((cat, index) => (
                    <Link
                      key={index}
                      href={`/blog/category/${slugify(cat)}`}
                      className="blog-category-tag"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              )}

              <div
                className="blog-content mt-4"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {blog.tags?.length > 0 && (
                <div className="blog-tags-footer d-flex align-items-center">
                  <span className="blog-tags-label">Tags:</span>
                  <div className="blog-tags-container">
                    {blog.tags.map((tag, index) => (
                      <span key={index} className="blog-tag-item">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="col-12 col-lg-4 blog-right-side">
              <div className="recent-posts-box p-4">
                <h3 className="recent-posts-title">Recent Posts</h3>
                {recentPosts?.length > 0 ? (
                  recentPosts.map((post) => (
                    <Link
                      key={post._id}
                      href={`/blog/${post.slug}`}
                      className="recent-post-sidebar-link text-decoration-none d-flex align-items-start mb-3"
                    >
                      <img
                        src={post.featuredImage?.url || "/placeholder-blog.jpg"}
                        alt={post.title}
                        className="recent-post-sidebar-thumb me-3"
                      />
                      <p className="recent-post-sidebar-name">{post.title}</p>
                    </Link>
                  ))
                ) : (
                  <p>No recent posts</p>
                )}
              </div>

              <div className="blog-form sticky-blog-form">
                <BlogFromTempOne />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DefaultTemplate;
