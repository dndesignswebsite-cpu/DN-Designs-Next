"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

function SingleBlog() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch("/api/blog") // existing API route
      .then((res) => res.json())
      .then((data) => {
        // find blog by slug
        const singleBlog = data.find((item) => item.slug === slug);
        setBlog(singleBlog);
      });
  }, [slug]);

  if (!blog) return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading...</p>;

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <img 
        src={blog.coverImage} 
        alt={blog.title} 
        style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }}
      />
      <h1 style={{ marginBottom: "20px" }}>{blog.title}</h1>
      <p style={{ lineHeight: "1.8" }}>{blog.content}</p>
    </div>
  );
}

export default SingleBlog;
