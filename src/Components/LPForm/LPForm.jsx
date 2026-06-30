"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./LPForm.css";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function LPForm({ FormHead, FormPara, pageName }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [serviceRequired, setServiceRequired] = useState("");
  const [projectDetails, setProjectDetails] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation

    if (!name.trim()) {
      toast.error("Name is required");
      return;
    }

    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    if (!mobile.trim()) {
      toast.error("Mobile number is required");
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      toast.error("Please enter a valid 10 digit mobile number");
      return;
    }

    if (!serviceRequired.trim()) {
      toast.error("Please enter required service");
      return;
    }

    if (!projectDetails.trim()) {
      toast.error("Please enter project details");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/lpform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          mobile,
          serviceRequired,
          projectDetails,
          pageName,
        }),
      });

      const data = await response.json();

      if (response.ok) {
  toast.success(
    data.message || "Enquiry submitted successfully!"
  );

  setName("");
  setEmail("");
  setMobile("");
  setServiceRequired("");
  setProjectDetails("");

  
  setTimeout(() => {
    router.push("/lp/thank-you");
  }, 1000);
}

      // if (response.ok) {
      //   toast.success(
      //     data.message || "Enquiry submitted successfully!"
      //   );

      //   setName("");
      //   setEmail("");
      //   setMobile("");
      //   setServiceRequired("");
      //   setProjectDetails("");
      // }
        else {
        toast.error(
          data.message || "Failed to submit enquiry."
        );
      }
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="all-page-form">
      <div className="container all-page-form-container">
        <div className="row form-row">
          <div className="col-12">
            <div className="form-box">
            <div className="form-content-head-para">
               <h2 className="form-content-head">Let's Build Your Brand</h2>
               <p className="form-content-para">Fill the form · Get a free strategy call</p>
               </div>
              <form className="main-form" onSubmit={handleSubmit}>

                <div className="row">
                  <div className="inpt">
                    {/* <label htmlFor="name">
                      Name 
                    </label> */}

                    <input
                      id="name"
                      type="text"
                      placeholder="Enter Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="row frm-group">

                  <div className="col-lg-6 col-md-6 col-12">

                    <div className="inpt">

                      {/* <label htmlFor="email">
                        Email 
                      </label> */}

                      <input
                        id="email"
                        type="email"
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />

                    </div>

                  </div>

                  <div className="col-lg-6 col-md-6 col-12">

                    <div className="inpt">

                      {/* <label htmlFor="mobile">
                        Mobile Number 
                      </label> */}

                      <input
                        id="mobile"
                        type="tel"
                        maxLength={10}
                        placeholder="Enter Mobile Number"
                        value={mobile}
                        onChange={(e) =>
                          setMobile(
                            e.target.value.replace(/\D/g, "")
                          )
                        }
                        required
                      />

                    </div>

                  </div>

                </div>
                                <div className="row">

                  <div className="inpt">

                    {/* <label htmlFor="serviceRequired">
                      Service Required
                    </label> */}

                    <textarea
                      id="serviceRequired"
                      rows="1"
                      placeholder="Which service are you looking for?"
                      value={serviceRequired}
                      onChange={(e) =>
                        setServiceRequired(e.target.value)
                      }
                      required
                    />

                  </div>

                </div>

                <div className="row">

                  <div className="inpt">

                    {/* <label htmlFor="projectDetails">
                      Project Details 
                    </label> */}

                    <textarea
                      id="projectDetails"
                      rows="5"
                      placeholder="Tell us about your project..."
                      value={projectDetails}
                      onChange={(e) =>
                        setProjectDetails(e.target.value)
                      }
                      required
                    />

                  </div>

                </div>

                <button
                  type="submit"
                  className="sbmt-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LPForm;