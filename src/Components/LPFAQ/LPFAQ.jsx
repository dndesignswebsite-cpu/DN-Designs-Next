import React from 'react'
import LPFAQSingle from '../LPFAQSingle/LPFAQSingle'
import "./LPFAQ.css"

function LPFAQ() {
     const leftFaqs = [
       {
          question: "What is a brand positioning statement? ",
          answer:
            (<>It is an internal document - clear and concise - which defines your brand’s unique value that sets it apart from competitors in the market. It typically defines your target audience, product category, the unique benefits offered, and the reason why customers should trust your brand. It ensures your messaging and marketing stay consistent.</>)
        },
        {
          question: "What does a brand positioning agency do?",
          answer:
            (<>A brand positioning agency, like DN Designs, helps businesses create a distinct space for themselves in the market and the customers’ minds. It combines research insights and creativity to craft a positioning that connects with customers and drives profit.</>)
        },
        {
          question: "How long does the brand positioning process take? ",
          answer:
            (<>Usually, it takes 2 to 6 weeks to complete the process; however, the timelines can vary depending on the project complexities.</>)
        },
        {
          question: "Can an existing brand be repositioned? ",
          answer:
            "Yes, if you want to better adapt to market changes, target new audiences and grow your business, you can reposition your brand. As a brand positioning agency, we offer both brand positioning and repositioning services.  ",
        },
    
        
      ];
  return (
    <div>
      <div className='container'>
        <div className='row'>

        <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
            <LPFAQSingle title="CONTACT FAQs" leftFaqs={leftFaqs}/>
        </div>

        <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
        <div className='lp-faq-images-col'>
            <h2 className='lp-faq-images-col-head'>Inside Our Studio</h2>
            <div className='row'>
                <div className='col-7'>
                    <img src="https://dndesigns.co.in/uploads/pages/1-1.webp" className='img-fluid lp-faq-images'></img>
                </div>
                <div className='col-5'>
                    <img src="https://dndesigns.co.in/uploads/pages/2_mob.jpg" className='img-fluid lp-faq-images'></img>
                </div>
            </div>

            <div className='row mt-3'>
            <div className='col-5'>
                    <img src="https://dndesigns.co.in/uploads/pages/2_mob.jpg" className='img-fluid lp-faq-images'></img>
                </div>
                <div className='col-7'>
                    <img src="https://dndesigns.co.in/uploads/pages/1-1.webp" className='img-fluid lp-faq-images'></img>
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-7'>
                    <img src="https://dndesigns.co.in/uploads/pages/1-1.webp" className='img-fluid lp-faq-images'></img>
                </div>
                <div className='col-5'>
                    <img src="https://dndesigns.co.in/uploads/pages/2_mob.jpg" className='img-fluid lp-faq-images'></img>
                </div>
            </div>
        </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default LPFAQ
