import React from 'react'
import LPFAQSingle from '../LPFAQSingle/LPFAQSingle'
import "./LPFAQ.css"

function LPFAQ() {
     const leftFaqs = [
       {
          question: "What services does DN Designs offer? ",
          answer:
            (<>As a full-service branding & marketing agency, we offer complete branding solutions for modern businesses. We craft your brand strategy and positioning, and design your identity, packaging and catalogue. In addition, we help boost your brand presence through our digital marketing, photography and animation services.</>)
        },
        {
          question: "How are you different from other branding agencies?",
          answer:
            (<>We don’t focus on the visual aspect alone. Instead, we combine research, strategy and creativity to create brands that impress visually and drive recognition, sales and profits.</>)
        },
        {
          question: "Which industries do you serve? ",
          answer:
            (<>We work across multiple industries, including FMCG, food & beverage, pharmaceuticals, nutraceutical, skincare, jewellery, technology, education, tourism, etc.</>)
        },
        {
          question: "Can you work with clients outside India? ",
          answer:
            "Yes, we are a global branding agency and work with both Indian and international clients.",
        },
        {
          question: "Do you work only with established businesses? ",
          answer:
            "We work with all types of businesses - startups, mid-size and well-established. We customise our branding, design and marketing services to suit their requirements.",
        },
        {
          question: "Do you provide packaging design services? ",
          answer:
            "Yes, we provide packaging design services. Our strategic packaging designs help your products stand out and drive purchase in both physical and digital environments.",
        },
        {
          question: "Does your creative agency provide animation and photography services?",
          answer:
            "Yes, our creative agency offers services like product photography, brand shoots, motion graphics and animated videos. These help brands capture attention, build recognition, and connect with their audience across platforms.",
        },
        {
          question: "Can your rebranding agency transform my existing brand?",
          answer:
            "Yes, we can definitely help transform your existing business. We can refresh your identity, refine your positioning and strengthen your communication to ensure your brand stands out in the market, connects with target customers and drives business growth. ",
        },
         {
          question: "How can we get started?",
          answer:
            "Simply fill out our contact form or give us a call. We can schedule a meeting immediately or as per your convenience.",
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
                    <img src="https://dndesigns.co.in/uploads/pages/hhhfekjgefj.jpg" className='img-fluid lp-faq-images'></img>
                </div>
                <div className='col-5'>
                    <img src="https://dndesigns.co.in/uploads/pages/rtyuio.jpg" className='img-fluid lp-faq-images'></img>
                </div>
            </div>

            <div className='row mt-3'>
            <div className='col-5'>
                    <img src="https://dndesigns.co.in/uploads/pages/ru3yu.jpg" className='img-fluid lp-faq-images'></img>
                </div>
                <div className='col-7'>
                    <img src="https://dndesigns.co.in/uploads/pages/yui.jpg" className='img-fluid lp-faq-images'></img>
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-7'>
                    <img src="https://dndesigns.co.in/uploads/pages/kphghf.jpg" className='img-fluid lp-faq-images'></img>
                </div>
                <div className='col-5'>
                    <img src="https://dndesigns.co.in/uploads/pages/uyrygjk.jpg" className='img-fluid lp-faq-images'></img>
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
