"use client"

import React,{useState} from 'react'
import "./ContactPageForm.css"

function ContactPageForm() {
     const [name, setName] = useState("");
       const [email, setEmail] = useState("");
       const [mobile, setMobile] = useState("");
       const [message, setMessage] = useState("");
       let [btn, setBtn] = useState("Send Message");
       let [successMessage, setsuccessMessage] = useState("");
       let pageName = "Contact Us"



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
  return (
    <div>
    {/* form section */}
     <section className='form-section'>
      <div className="container">
        <div className="row">
          <div className="col-md-6 left-strip-col map">
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.649251732398!2d77.35829087528818!3d28.61029737567692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e656d7b05555d%3A0xf4c59d6befa39e13!2sDN%20Designs%20-%20Collaborative%20Brand%20Strategy%20%26%20Design%20Thinking%20In%20Noida%2C%20Delhi%20NCR%2C%20India!5e0!3m2!1sen!2sin!4v1761627555324!5m2!1sen!2sin" width="100%" height="810" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          <div className="col-md-6 form-col">
            <form className="contact-form" onSubmit={handleSubmit}>
              
              {/* Name Field */}
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

              {/* Email Field */}
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

              {/* Mobile Number Field */}
              <div className="form-group">
                <label htmlFor="mobile-input">Mobile No. <span className="required-star">*</span></label>
                <input
                  id="mobile-input"
                  type="tel" 
                  placeholder="Mobile No."
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="message-input">Message</label>
                <textarea
                  id="message-input"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              {/* Button */}
            
              <button className="sbmt-button" type="submit">
                {btn}
              </button>
          <p className="succes-class-form">{successMessage}</p>
            </form>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default ContactPageForm
