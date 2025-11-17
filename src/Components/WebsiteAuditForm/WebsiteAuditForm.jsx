"use client"

import React,{useState} from 'react'
import "./WebsiteAuditForm.css"

function WebsiteAuditForm() {
    const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [mobilenumber, setMobilenumber] = useState('');
      const [websiteUrl, setwebsiteUrl] = useState('');
      const handleSubmit = (e)=>{
        e.preventDefault();
        alert(name + "" + email + mobilenumber + websiteUrl);
      }
  return (
    <div>
      <section className='container'>
     <form className="contact-form" onSubmit={handleSubmit}>
              
              {/* Name Field */}
              <div className='row1'>
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
              </div>

<div className='row1'>


              {/* Mobile Number Field */}
              <div className="form-group">
                <label htmlFor="mobile-input">Mobile No. <span className="required-star">*</span></label>
                <input
                  id="mobile-input"
                  type="tel" 
                  placeholder="Mobile No."
                  value={mobilenumber}
                  onChange={(e) => setMobilenumber(e.target.value)}
                  required
                />
              </div>

              {/* website */}
               <div className="form-group">
                <label htmlFor="url-input">Website URL</label>
                <input
                  id="url-input"
                  type="text"
                  placeholder="Website URl"
                  value={websiteUrl}
                  onChange={(e) => setwebsiteUrl(e.target.value)}
                  required
                />
              </div>
              
</div>
              {/* Button */}
            <div className='form-btn-div'>
              <button className="sbmt-button" type="submit">
                READY TO START
              </button>
              </div>
          
            </form>
      </section>
    </div>
  )
}

export default WebsiteAuditForm
