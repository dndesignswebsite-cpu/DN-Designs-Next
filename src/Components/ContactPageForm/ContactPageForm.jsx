"use client"

import React,{useState} from 'react'
import "./ContactPageForm.css"

function ContactPageForm() {
      const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobilenumber, setMobilenumber] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();
    alert(name + "" + email + mobilenumber + message);


    
  }
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
                  value={mobilenumber}
                  onChange={(e) => setMobilenumber(e.target.value)}
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
                READY TO START
              </button>
          
            </form>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default ContactPageForm
