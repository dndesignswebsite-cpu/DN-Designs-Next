"use client";

import React, { useState } from "react";
import "./WebsiteAuditForm.css";

function WebsiteAuditForm() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [message, setMessage] = useState("");
  const [btn, setBtn] = useState("READY TO START");
  const [successMessage, setSuccessMessage] = useState("");

  const pageName = "Website Audit Page";

  // SUBMIT HANDLER
  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!name.trim()) {
      setSuccessMessage("Name is required");
      return;
    }

    if (!email.trim()) {
      setSuccessMessage("Email is required");
      return;
    }

    if (!mobilenumber.trim()) {
      setSuccessMessage("Mobile number is required");
      return;
    }

    if (!/^[0-9]+$/.test(mobilenumber)) {
      setSuccessMessage("Mobile number must contain digits only");
      return;
    }

    if (mobilenumber.length !== 10) {
      setSuccessMessage("Mobile number must be exactly 10 digits");
      return;
    }

    if (!message.trim()) {
      setSuccessMessage("Website URL is required");
      return;
    }

    // SEND DATA
    setBtn("Sending...");

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        mobile: mobilenumber,
        message, 
        pageName,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          setName("");
          setEmail("");
          setMobilenumber("");
          setMessage("");
          setBtn("READY TO START");
          setSuccessMessage("Request Submitted Successfully");
        } else {
          setBtn("READY TO START");
          setSuccessMessage("Submission failed, please try again");
        }
      })
      .catch(() => {
        setBtn("READY TO START");
        setSuccessMessage("Something went wrong");
      });
  };

  return (
    <section className="container">
      <form className="contact-form" onSubmit={handleSubmit}>
       
        <div className="row1">
          <div className="form-group">
            <label htmlFor="name-input">Name</label>
            <input
              id="name-input"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email-input">Email</label>
            <input
              id="email-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        
        <div className="row1">
          <div className="form-group">
            <label htmlFor="mobile-input">
              Mobile No. <span className="required-star">*</span>
            </label>
            <input
              id="mobile-input"
              type="tel"
              placeholder="Mobile No."
              maxLength={10}
              value={mobilenumber}
              onChange={(e) => setMobilenumber(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message-input">Website URL</label>
            <input
              id="message-input"
              type="text"
              placeholder="Website URL"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
        </div>

        
        {successMessage && (
          <p className="succes-class-form">{successMessage}</p>
        )}

        {/* BUTTON */}
        <div className="form-btn-div">
          <button className="sbmt-button" type="submit">
            {btn}
          </button>
        </div>
      </form>
    </section>
  );
}

export default WebsiteAuditForm;
