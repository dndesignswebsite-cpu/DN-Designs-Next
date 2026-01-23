"use client";

import React, { useState } from "react";
import "./BlogFormTempOne.css";

function BlogFromTempOne() {
  // FORM STATES
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [btn, setBtn] = useState("Send Message");
  const [successMessage, setsuccessMessage] = useState("");

  const pageName = "Blog Page";

  // FORM SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    // VALIDATION
    if (!name.trim()) {
      setsuccessMessage("Name is required");
      return;
    }

    if (!email.trim()) {
      setsuccessMessage("Email is required");
      return;
    }

    if (!mobile.trim()) {
      setsuccessMessage("Mobile number is required");
      return;
    }

    if (!/^[0-9]+$/.test(mobile)) {
      setsuccessMessage("Mobile number must contain digits only");
      return;
    }

    if (mobile.length !== 10) {
      setsuccessMessage("Mobile number must be exactly 10 digits");
      return;
    }

    if (!message.trim()) {
      setsuccessMessage("Message is required");
      return;
    }

    if (message.trim().length < 10) {
      setsuccessMessage("Message must be at least 10 characters long");
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
        mobile,
        message,
        pageName,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          setName("");
          setEmail("");
          setMobile("");
          setMessage("");
          setBtn("Send Message");
          setsuccessMessage("Message Sent Successfully");
        } else {
          setBtn("Send Message");
          setsuccessMessage("Message not sent, please try again");
        }
      })
      .catch(() => {
        setBtn("Send Message");
        setsuccessMessage("Something went wrong");
      });
  };

  return (
    <form className="BlogFormTempOne" onSubmit={handleSubmit}>
    <div className="blog-form-srip">
    <h3 className="text-center">Book a Free Consultation </h3>
    <p className="text-center">For Your Branding and Design Requirements.</p>
    </div>

    <div className="grop-form-below-strip">
      {/* NAME + MOBILE */}
      <div className="input-grp">
        <div style={{ width: "50%", paddingRight: "10px" }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div style={{ width: "50%", paddingLeft: "10px" }}>
          <input
            type="tel"
            placeholder="Mobile No."
            maxLength={10}
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
      </div>
      

      {/* EMAIL */}
      <div style={{ marginTop: "15px" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* MESSAGE */}
      <div style={{ marginTop: "15px" }}>
        <textarea
          placeholder="Message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      {/* SUCCESS / ERROR MESSAGE */}
      {successMessage && (
        <p style={{ marginTop: "10px", textAlign: "center" }}>
          {successMessage}
        </p>
      )}

      {/* SUBMIT BUTTON */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button className="sbmt-button-blog-frm" type="submit">
          {btn}
        </button>
      </div>
      </div>
    </form>
  );
}

export default BlogFromTempOne;
