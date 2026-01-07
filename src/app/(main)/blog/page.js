"use client";

import React, { useState, useEffect } from "react";
import "./blog.css";
import Link from "next/link";
import { slugify } from "@/lib/utils/slugify";
import LoadingSpinner from "@/Components/Loading Spinner/LoadingSpinner";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  // const [showScrollTop, setShowScrollTop] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 500) {
  //       setShowScrollTop(true);
  //     } else {
  //       setShowScrollTop(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  const fetchBlogs = async (pageNum, isLoadMore = false) => {
    try {
      if (isLoadMore) setLoadingMore(true);
      else setLoading(true);

      const res = await fetch(
        `/api/blogs?page=${pageNum}&limit=5&isPublished=true`
      );
      const result = await res.json();

      if (result.success) {
        if (isLoadMore) {
          setBlogs((prev) => [...prev, ...result.data]);
        } else {
          setBlogs(result.data);
        }
        setHasMore(
          result.data.length === 5 &&
            result.total >
              (isLoadMore
                ? blogs.length + result.data.length
                : result.data.length)
        );
      }
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchBlogs(1);
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchBlogs(nextPage, true);
  };

  return (
    <div>
      <section className="blog-list">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-8">
              {loading ? (
                <div className="text-center py-5">
                  <LoadingSpinner isLoading={true} />
                </div>
              ) : blogs.length > 0 ? (
                <>
                  {blogs.map((blog) => (
                    <div key={blog._id} className="single-blog-list-post mb-5">
                      {blog.featuredImage?.url && (
                        <Link href={`/blog/${blog.slug}`}>
                          <img
                            src={blog.featuredImage.url}
                            className="img-fluid"
                            alt={blog.title}
                          />
                        </Link>
                      )}

                      <div className="row post-details">
                        <div className="posted-by col d-flex">
                          <p className="sstatic">Posted By :</p>
                          <p className="dyna">{blog.authorName}</p>
                        </div>

                        <div className="category col d-flex">
                          <p className="sstatic">Categories:</p>
                          <Link
                            href={`/blog/category/${slugify(
                              blog.primaryCategory || "General"
                            )}`}
                            className="dyna"
                          >
                            {blog.primaryCategory || "General"}
                          </Link>
                        </div>

                        <div className="posted col d-flex">
                          <p className="sstatic">Posted:</p>
                          <p className="dyna">
                            {new Date(
                              blog.publishedAt || blog.createdAt
                            ).toLocaleDateString()}
                          </p>
                        </div>
                      </div>

                      <h2>
                        <Link
                          href={`/blog/${blog.slug}`}
                          className="single-blog-list-post-head"
                        >
                          {blog.title}
                        </Link>
                      </h2>

                      <p className="single-blog-list-post-para">
                        {blog.excerpt ||
                          blog.content?.substring(0, 200) + "..." ||
                          ""}
                      </p>

                      <Link href={`/blog/${blog.slug}`}>
                        <button className="blog-read-more-btn">
                          Read More
                        </button>
                      </Link>
                    </div>
                  ))}

                  {hasMore && (
                    <div className="text-center mt-4">
                      <button
                        className="blog-load-more-btn"
                        onClick={handleLoadMore}
                        disabled={loadingMore}
                      >
                        {loadingMore ? "Loading..." : "Load More"}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-5">
                  <h3>No blogs found</h3>
                </div>
              )}
            </div>

            <div className="col-12 col-md-12 col-lg-4">
              {blogs.length > 0 && (
                <div className="blog-sidebar">
                  <h4 className="sidebar-title">Recent Posts</h4>
                  <div className="recent-posts-list">
                    {blogs.slice(0, 5).map((post) => (
                      <Link
                        key={post._id}
                        href={`/blog/${post.slug}`}
                        className="recent-post-card"
                      >
                        {post.featuredImage?.url && (
                          <img
                            src={post.featuredImage.url}
                            alt={post.title}
                            className="recent-post-thumbnail"
                            style={{objectFit: "contain" }}
                          />
                        )}
                        <h5 className="recent-post-title">{post.title}</h5>
                        <small className="recent-post-date">
                          {new Date(
                            post.publishedAt || post.createdAt
                          ).toLocaleDateString()}
                        </small>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button
      <button
        className={`scroll-to-top-btn ${showScrollTop ? "visible" : ""}`}
        onClick={scrollToTop}
        title="Scroll to Top"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button> */}
    </div>
  );
}

export default BlogPage;
