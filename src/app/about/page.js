import React from 'react'
import "./about.css"
import Breadcrumb from '@/Components/BreadCrumb/BreadCrumb'
import TalkToUs from '@/Components/TalkToUs/TalkToUs'
import Points from '@/Components/Points/Points'
import OurWorkServiceTabs from '@/Components/OurWorkServiceTabs/OurWorkServiceTabs'
import OurConstant from '@/Components/OurConstant/OurConstant'
import Form from '@/Components/Form/Form'
import PagesHero from '@/Components/PagesHero/PagesHero'

function page() {
  const heading ="Where Brands Are Born"
  const subHeading ="A Creative Branding Agency"
  const para ="  Successful brands are not made in a day. They are a result of consistent hard work, perseverance and unwavering passion. Long-term vision, strategy and creativity are pivotal too. Lots of work and lots of dedication are required. This is why you need the services of a branding & design agency like us. Let’s walk you through our services and inform you of our capabilities and approach. If there are questions in your mind, check out our FAQs section. Alternatively, reach out to us and we will promptly answer them."
               
  return (
    <div>
       {/*Breadcrumb*/}
      <section>
        <Breadcrumb />
      </section>

      {/* branding hero */}
     {/* ui/ux design */}
      <section className="branding-hero">
        <PagesHero heading={heading} subHeading={subHeading} para={para}/>
      </section>


{/* Projects Completed 300+ Successfully delivered across industries */}
<section className='projects-completed'>
    <div className='container'>
      <div className='row projects-completed-main-row'>
        <div className='col-12 col-md-12 col-lg-6'>
            <img  src='https://dndesigns.co.in/wp-content/uploads/2025/07/ghfh.jpg' className='img-fluid'/>
        </div>
        <div className='col-12 col-md-12 col-lg-6 projects-completed-div-main-col'>
          <div className='row'>
            <div className='col'>
              <div className='projects-completed-div'>
                 <h3>300+</h3>
                 <h4>Projects Completed</h4>
                 <p>Successfully delivered across industries</p>
              </div>
            </div>
            <div className='col'>
              <div className='projects-completed-div projects-completed-div-box-sh'>
                 <h3>300+</h3>
                 <h4>Projects Completed</h4>
                 <p>Successfully delivered across industries</p>
              </div>
            </div>
          </div>

                    <div className='row'>
                     <div className='col'>
              <div className='projects-completed-div projects-completed-div-box-sh'>
                 <h3>300+</h3>
                 <h4>Projects Completed</h4>
                 <p>Successfully delivered across industries</p>
              </div>
            </div>
            <div className='col'>
              <div className='projects-completed-div'>
                 <h3>300+</h3>
                 <h4>Projects Completed</h4>
                 <p>Successfully delivered across industries</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
</section>


{/*The Protagonists */}

      <section className="appr-pro">
        <div className="container">

          <div className="">
            <div className="row appr-pro-row-main">

             <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className="app-pro-div-first app-pro-div-white ">
                <div>
                  <h3>Discovery & Planning</h3>
                  <div className='app-pro-div-first-btn'>
                  <TalkToUs/>
                  </div>
                </div>
              </div>
            </div>

              <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-white">
                <div>
                  <h3>Discovery & Planning</h3>
                  <p>
                    The fundamentals come first - understanding the product, its
                    USP, the brand’s vision, its target audience and
                    competitors. Solid research leads to a solid foundation upon
                    which we base our strategic plan.
                  </p>
                </div>
              </div>
            </div>


             <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-white">
                <div>
                  <h3>Discovery & Planning</h3>
                  <p>
                    The fundamentals come first - understanding the product, its
                    USP, the brand’s vision, its target audience and
                    competitors. Solid research leads to a solid foundation upon
                    which we base our strategic plan.
                  </p>
                </div>
              </div>
            </div>

            </div>
          </div>

          <div className="row appr-pro-row-main">
            <div className="col-12 col-md-6 col-lg-3 mt-3">
            
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className="app-pro-div app-pro-div-gray">
                <div>
                  <h3>Design, Development & Execution</h3>
                  <p>
                    Designing and developing practical options follows. A
                    crucial aspect of this step is revision and refinement. We
                    work on and modify our designs to ensure they match your
                    vision.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-white">
                <div>
                  <h3>Testing & Launch</h3>
                  <p>
                    Once everything is ready, it’s time to test it. For us,
                    testing is important both before and after the product
                    launch. This is to ensure that everything works smoothly at
                    both stages.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-gray">
                <div>
                  <h3>Ongoing Support</h3>
                  <p>
                    We provide our clients with ongoing support even after the
                    project is over. If you face problems post-completion of the
                    work, we are there to resolve them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* We have got a dedicated team to support you and your vision */}
<section className="dedicated-team">
<div className='container'>
  <div className='row text-center'>
  <div className='dedicated-team-hedg'>
    <h2>We have got a dedicated team to
    <span className='dedicated-team-hedg-span'> support you and your vision</span></h2>
    </div>
    <img src='https://dndesigns.co.in/wp-content/uploads/2025/07/jfhf-scaled.jpg' className='img-fluid'/>
  </div>
</div>
</section>

{/* points */}
<Points/>
{/* our work tabs */}
<OurWorkServiceTabs/>

{/* Our constant companies */}
<OurConstant/>
{/* Form */}
<Form/>
    </div>
  )
}

export default page
