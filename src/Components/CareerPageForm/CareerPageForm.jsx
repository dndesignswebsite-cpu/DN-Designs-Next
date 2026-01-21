"use client";

import React, { useState } from "react";
import "./CareerPageForm.css";

function CareerPageForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [experience, setExperience] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData for multipart/form-data request
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("mobile", mobileNumber);
      formData.append("jobRole", jobRole);
      formData.append("experience", experience);
      formData.append("portfolioLink", portfolioLink);
      formData.append("coverLetter", coverLetter);

      // Get the actual file from the input
      const fileInput = document.getElementById("resume-input");
      if (fileInput && fileInput.files && fileInput.files[0]) {
        formData.append("resume", fileInput.files[0]);
      }

      // Send to API
      const response = await fetch("/api/career", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        // Success - show toast and clear form
        const toast = await import("react-hot-toast");
        toast.default.success(
          data.message || "Application submitted successfully!",
        );

        setFirstName("");
        setLastName("");
        setMobileNumber("");
        setEmail("");
        setResume("");
        setPortfolioLink("");
        setJobRole("");
        setExperience("");
        setCoverLetter("");

        // Clear file input
        if (fileInput) {
          fileInput.value = "";
        }
      } else {
        // Error - show error message
        const toast = await import("react-hot-toast");
        toast.default.error(
          data.message || "Failed to submit application. Please try again.",
        );
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      const toast = await import("react-hot-toast");
      toast.default.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div>
      <section className="container">
        <form className="contact-form-career" onSubmit={handleSubmit}>
          <h2 className="text-center">What are you looking?</h2>
          {/* firstName */}
          <div className="row1">
            <div className="form-group">
              <label htmlFor="firstName-input">First Name</label>
              <input
                id="firstName-input"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            {/* lastName */}
            <div className="form-group">
              <label htmlFor="lastName-input">Last Name</label>
              <input
                id="lastName-input"
                type="text"
                placeholder="Last Name"
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
              <label htmlFor="portfolio-input">Portfolio Link</label>
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
            <button
              className="sbmt-button"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default CareerPageForm;
