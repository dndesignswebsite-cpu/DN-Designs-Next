import React from 'react'
import "./digital-marketing-agency-in-noida.css"
import Breadcrumb from '@/Components/BreadCrumb/BreadCrumb'
import TalkToUs from '@/Components/TalkToUs/TalkToUs'

function page() {

  return (
    <div>
      {/*Breadcrumb*/}
      <section>
        <Breadcrumb/>
      </section>

      {/* branding hero */}
      <section className="logo-designing-hero">
        <div className="container">
          <div className="row">
            <h1>Where Brands Are Born</h1>
            <h3>A Creative Branding Agency</h3>
            <div className="col-12 col-md-4">{/* .. */}</div>
            <div className="col-12 col-md-8">
              <div className="talk-to-us-desktop">
                <TalkToUs />
              </div>
              <p>
                Successful brands are not made in a day. They are a result of
                consistent hard work, perseverance and unwavering passion.
                Long-term vision, strategy and creativity are pivotal too. Lots
                of work and lots of dedication are required. This is why you
                need the services of a branding & design agency like us. Let’s
                walk you through our services and inform you of our capabilities
                and approach. If there are questions in your mind, check out our
                FAQs section. Alternatively, reach out to us and we will
                promptly answer them.
              </p>
              <div className="talk-to-us-mobile">
                <TalkToUs />
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Switch on your potential with digital marketing */}

<section className='switch-on'>
  <div className='container'>
    <div className='row'>

      <div className='col'>

        <div className='row'>
            <div className='col-6'>
              <div className='switch-on-div'>
                <div className='vertical-bar'></div>
                <div className='switch-on-div-content'>
                 <h3>30+</h3>
                 <p>of the global population uses the Internet</p>
                
                 </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='switch-on-div'>
                <div className='vertical-bar'></div>
                <div className='switch-on-div-content'>
                 <h3>30+</h3>
                 <p>of the global population are social media users.</p>
                 
                 </div>
              </div>
            </div>
          </div>

          <div className='mt-3'>
      <div className='col-9 '>
      <div className='switch-on-middle-div-para'>
      <p>Switch on your potential with digital marketing</p>
      </div>
      </div>
      <div className='col-2'>
  
      </div>
    </div>


  <div className=''>
      <div className='col switch-on-middle-div-img'>

        <img src='https://dndesigns.co.in/wp-content/uploads/2025/06/1-01-01.png' className='img-fluid'></img>
      </div>
    </div>
      </div>

      <div className='col'>
            <img  src='https://dndesigns.co.in/wp-content/uploads/2025/07/ghfh.jpg' className='img-fluid'/>
        </div>
    </div>

    
  </div>
</section>



{/* We Are The Leading Video */}
      <section className="we-are-the-leading">
        <div className="container">
          <div className="row">
            <h3>We Are The Leading Video Production Company For Brands</h3>
            <div className="col-12 col-md-6 we-are-the-leading-para">
              <p>
                A video shouldn’t just play; it should pull its viewer in (well,
                figuratively speaking). It should fulfil its objective (educate,
                promote or entertain), communicate brand value, build trust and
                inspire customers to convert. As a business animation studio in
                Noida, we provide you just that. It doesn’t matter whether you
                are an emerging start-up or an established brand; we work with
                equal enthusiasm.
              </p>
            </div>
            <div className="col-12 col-md-6 we-are-the-leading-para">
              <p>
                We focus on your objectives and vision and pair them up with our
                creative and technical skills. Our studio is teeming with
                strategists, scriptwriters, cinematographers, editors, social
                media experts and production team – all of whom pool in their
                special talents to transform your vision into reality. Want us
                to create a compelling video that grabs attention, evokes
                emotion and enhances engagement? Just get in touch with us.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default page
