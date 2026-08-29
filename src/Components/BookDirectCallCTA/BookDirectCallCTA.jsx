import React from 'react'
import "./BookDirectCallCTA.css"
import BookDirectCTABtn from '../BookDirectCTABtn/BookDirectCTABtn'

function BookDirectCallCTA() {
  return (
    <div>
     {/* book a direct call section */}
     <section className="book-a-direct-call-section">
        <div className='container'>
        <div className='book-a-direct-call-row'>
            <div className='row '>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                <div className='book-a-direct-call-col'>
                
                    <h2 className="book-a-direct-call-col-main-head">Book a Call With <br></br>  <span className='book-a-direct-call-col-main-head-span'>Our Founders</span></h2>
                </div>
            </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
            <div className='book-a-direct-call-col'>
                <p className='book-a-direct-call-col-para-desc'>
                    Got questions? Talk directly to the founders who'll be shaping your story. No sales reps, no scripts. Just a real conversation about your brand vision.
                </p>
                <div>
                <BookDirectCTABtn/>
                </div>
            </div>
            </div>
</div>
            </div>
        </div>
     </section>
    </div>
  )
}

export default BookDirectCallCTA
