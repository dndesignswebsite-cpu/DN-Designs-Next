import React from 'react'
import TalkToUs from '../TalkToUs/TalkToUs'
import "./IndustriesPageHero.css"

function IndustriesPageHero({heroLabel,heroHead, heroParaDesc, pageHeroimgurl}) {
  return (
    <div>
       {/* fnb page hero */}
      <section className="fnb-page-hero">
        <div className="container">
          <div className="row">

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
              <div className="fnb-page-hero-content-col">
                <p className="fnb-page-hero-content-col-label-para">{heroLabel}</p>
                <h1 className="fnb-page-hero-content-col-head">{heroHead} </h1>
                <p className="fnb-page-hero-content-col-desc-para">
                  {heroParaDesc}
                </p>
                <div className="fnb-page-hero-content-cta-div">
                    <TalkToUs/>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                <div className="fnb-page-hero-img-col">
                    <img src={pageHeroimgurl} className="img-fluid fnb-page-hero-img-col-img"></img>
                </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default IndustriesPageHero
