import React from 'react'
import './BlogFormTempOne.css'

function BlogFromTempOne() {
  return (
    <div>
       <form className='BlogFormTempOne text-center'>
              


              <div className='input-grp'>
              {/* Name Field */}
              <div className="form-group p-2">
                <input
                  id="name-input"
                  type="text"
                  placeholder='Name'
                  required
                />
              </div>


              {/* Mobile Number Field */}
              <div className="form-group p-2">
                <input
                  id="mobile-input"
                  type="tel" 
                  placeholder='Mobile No.'
                  required
                />
              </div>
               </div>



              <div className='input-grp'>
              {/* Email Field */}
              <div className="form-group p-2">
                <input
                  id="email-input"
                  type="email"
                  placeholder='Email'
                  required
                />
              </div>


                {/* comapny Field */}
              <div className="form-group p-2">
                <input
                  id="company-input"
                  type="text"
                  placeholder='Company'
                  required
                />
              </div>
            </div>
              

              {/* Message Field */}
              <div className="form-group p-2 text-center blog-message-field">
                <textarea
                  id="message-input"
                  placeholder='Message' 
                ></textarea>
              </div>

              {/* Button */}
            
              <button className="sbmt-button-blog-frm" type="submit">
                Submit Now
              </button>
          
            </form>
    </div>
  )
}

export default BlogFromTempOne
