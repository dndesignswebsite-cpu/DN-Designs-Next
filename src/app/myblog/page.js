"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

function Page() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data); // data store
      });
  }, []);

  return (
    <div style={{ 
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "20px",
      padding: "20px"
    }}>
      
      {blogs.map((blog, index) => (
        <div 
          key={index} 
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "15px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}
        >
          <img 
            src={blog.coverImage} 
            alt={blog.title} 
            style={{ width: "100%", borderRadius: "5px" }}
          />
          <h2>{blog.title}</h2>
          <p>{blog.summary}</p>

         <Link href={`/myblog/${blog.slug}`} style={{ color: "blue", fontWeight: "bold" }}>
            Read More
          </Link> 
        </div>
      ))}

    </div>
  );
}

export default Page;
