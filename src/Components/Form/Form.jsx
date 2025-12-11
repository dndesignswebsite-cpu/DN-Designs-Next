"use client"

import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Form.css"
import { set } from "mongoose";

function Form({ FormHead, FormPara, pageName }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(name + " " + email + " " + mobile + " " + message);
    let data = {name, email, mobile, message, pageName};
    console.log(data);



      fetch("api/contact",{
                  method:"POST",
                  headers:{
                      "Content-Type":"application/json"
                  },
                  body:JSON.stringify({name, email, mobile, message})
              })
              .then((res)=>{
                  return res.json();
              })
              .then((data)=>{
                  if(data.success===true){
                      alert("Message Sent Successfully");
                      setName("");
                      setEmail("");
                      setMobile("");
                      setMessage("");
                  }
              })

  }; 

  
//      useEffect(() => {
//   const handleLoad = () => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       mirror: false,
//     });
//     AOS.refresh();
//   };
//   window.addEventListener("load", handleLoad);
//   return () => {
//     window.removeEventListener("load", handleLoad);
//   };
// }, []);



useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    mirror: false,
  });

  // Wait for React rendering to finish before refreshing AOS
  setTimeout(() => {
    AOS.refresh();
  }, 500);
}, []);

  
return (
    <div>
      <section className="all-page-form">
        <div className="container">
          <div className="row form-row">
            <div className="col-12 col-md-12 col-lg-5 form-left-content">
            <div className="form-content-wrapper">
            
           
            <div data-aos="fade-right" className="form-main-content">
              <h3>{FormHead}</h3>
              <p>
                {FormPara}
              </p>
              </div>

            </div>
            </div>

            <div className="col-12 col-md-12 col-lg-7 form-wrapper">
              <div className="form-box">
                <form className="main-form" onSubmit={handleSubmit}>

                  <div className="frm-group row">

                    <div className="inpt col-12 col-md-12 col-lg-6">
                      <label htmlFor="name">
                        Name <span>*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="inpt col-12 col-md-12 col-lg-6">
                      <label htmlFor="mobile">
                        Mobile No. <span className="color">*</span>
                      </label>
                      <input
                        id="mobile"
                        type="tel"
                        placeholder="Mobile No."
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                      />
                    </div>

                  </div>
                 
                 <div className="row">
                  <div className="inpt">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      
                    />
                  </div>
                  </div>
                 
                 <div className="row">
                  <div className="inpt">
                    <label htmlFor="text-area">Project Details</label>
                    <textarea
                      id="text-area"
                      placeholder="Project Details"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows="8"
                    ></textarea>
                  </div>
                  </div>

                  <button type="submit" className="sbmt-btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default Form;
