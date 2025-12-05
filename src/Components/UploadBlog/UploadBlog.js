"use client"

import React, { useState } from 'react'

function UploadBlog() {
    let[title, setTitle]= useState("");
    let[slug, setSlug]= useState("");
    let[coverImage, setCoverImage]= useState("");
    let[content, setContent]= useState("");
    let[summary, setSummary]= useState("");
    let[blogCategory, setBlogCategory] = useState("");

    function sbmt(e){
        e.preventDefault();
       console.log(title+slug+coverImage+content+summary+blogCategory);
      //  console.log(blogCategory);

       let data = {title, slug, coverImage, content, summary, blogCategory}
    
         fetch(("/api/blog"),{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify(data),
    })
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        if(data.data.resp===false){
           console.log("data is not filled")
        }
        else{
            console.log("filled")
            setTitle("");
            setSlug("");
            setContent("");
            setSummary("");
            setCoverImage("");
        }
    })
    }
  return (
    <div>
       <div className="container mt-5">
      <form className="text-center" onSubmit={sbmt}>
        <div className="form-group my-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </div>

        <div className="form-group my-4">
          <input
            type="text"
            className="form-control"
            placeholder="slug"
            onChange={(e) => {
              setSlug(e.target.value);
            }}
            value={slug}
          />
        </div>

         <div className="form-group my-4">
          <input
            type="text"
            className="form-control"
            placeholder="coverImage"
            onChange={(e) => {
              setCoverImage(e.target.value);
            }}
            value={coverImage}
          />
        </div>

         <div className="form-group my-4">
          <textarea
            cols={20}
            rows={10}
            className="form-control"
            placeholder="content"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
          />
        </div>

        <div className="form-group my-4">
          <textarea
            cols={20}
            rows={5}
            className="form-control"
            placeholder="summary"
            onChange={(e) => {
              setSummary(e.target.value);
            }}
            value={summary}
          />
        </div>


        <div className="form-group my-4">
          <select id="blogCategory" name="blogCategory" onChange={(e)=>{setBlogCategory(e.target.value)}}>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
      </select>
        </div>






        <button type="submit" className="btn btn-primary text-center">
          Submit
        </button>
      </form>
    </div>
    </div>
  )
}

export default UploadBlog
