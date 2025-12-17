"use client";

import React, { use, useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Form.css";

function Form({ FormHead, FormPara, pageName }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  let [btn, setBtn] = useState("Send Message");
  let [successMessage, setsuccessMessage] = useState("");

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

    // MOBILE VALIDATION
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

    // MESSAGE Validation
    if (!message.trim()) {
      setsuccessMessage("Message is required");
      return;
    }

    if (message.trim().length < 10) {
      setsuccessMessage("Message must be at least 10 characters long");
      return;
    }

    //validations passed
    let data = { name, email, mobile, message, pageName };
    console.log(data);
    setBtn("Sending...");

    fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, mobile, message, pageName }),
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
      });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });

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
                  <p>{FormPara}</p>
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
                        pattern="[0-9]{10}"
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
                        rows="6"
                      ></textarea>
                    </div>
                  </div>

                  <button type="submit" className="sbmt-btn">
                    {btn}
                  </button>
                  <p className="succes-class-form">{successMessage}</p>
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
