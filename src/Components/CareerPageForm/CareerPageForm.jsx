"use client";

import React from "react";
import { useState } from "react";
import "./CareerPageForm.css";

function CareerPageForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] =  useState("");
  const [resume, setResume] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [experience, setExperience] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(firstName+lastName+mobileNumber+email+resume+portfolioLink+jobRole+experience+coverLetter);
    setFirstName("")
    setLastName("");
    setMobileNumber("")
    setEmail("")
    setResume("")
    setPortfolioLink("")
    setJobRole("")
    setExperience("")
    setCoverLetter("")
  };
  return (
    <div>
      <section className="container">
      
        <form className="contact-form-career" onSubmit={handleSubmit}>
        <h2 className="text-center">What are you looking?</h2>
          {/* firstName */}
          <div className="row1">
            <div className="form-group">
              <label htmlFor="firstName-input">First Name
</label>
              <input
                id="firstName-input"
                type="text"
                placeholder="First Name
"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            {/* lastName */}
            <div className="form-group">
              <label htmlFor="lastName-input">
Last Name</label>
              <input
                id="lastName-input"
                type="text"
                placeholder="
Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="row1">
            {/* mobileNumber */}
            <div className="form-group">
              <label htmlFor="mobileNumber-input">
                Mobile No. <span className="required-star">*</span>
              </label>
              <input
                id="mobileNumber-input"
                type="tel"
                placeholder="Mobile No."
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </div>

            {/* email */}
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
            {/* resume */}
            <div className="form-group">
              <label htmlFor="resume-input">
                Upload Resume <span className="required-star">*</span>
              </label>
              <input
                id="resume-input"
                type="file"
                placeholder="Upload Resume"
                value={resume}
                onChange={(e) => setResume(e.target.value)}
                required
              />
            </div>

            {/* portfolioLink */}
            <div className="form-group">
              <label htmlFor="portfolio-input">
Portfolio Link</label>
              <input
                id="portfolio-input"
                type="text"
                placeholder="Portfolio Link"
                value={portfolioLink}
                onChange={(e) => setPortfolioLink(e.target.value)}
                required
              />
            </div>
          </div>




<div className="row1">
            {/* jobRole */}
            <div className="form-group">
              <label htmlFor="jobRole-input">
                Job Role <span className="required-star">*</span>
              </label>
              <input
                id="jobRole-input"
                type="text"
                placeholder="Job Role"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
                required
              />
            </div>

            {/* experience */}
            <div className="form-group">
              <label htmlFor="experience-input">Year of Experience</label>
              <input
                id="experience-input"
                type="text"
                placeholder="Year of Experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                required
              />
            </div>
          </div>



          <div className="row1">
            {/* cover letter */}
            <div className="form-group form-group-cover-letter">
              <label htmlFor="coverLetter-input">
               Cover Letter <span className="required-star">*</span>
              </label>
              <textarea
                id="coverLetter-input"
                type="text"
                placeholder="Cover Letter"
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                rows={10}
                required
              />
            </div>
          </div>

          {/* Button */}
          <div className="form-btn-div">
            <button className="sbmt-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default CareerPageForm;
