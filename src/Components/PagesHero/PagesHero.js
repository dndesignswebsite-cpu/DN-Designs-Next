import React from 'react'
import "./PagesHero.css"
import TalkToUs from '../TalkToUs/TalkToUs'

function PagesHero({ heading, subHeading, para }) {
  return (
    <section className="pages-hero">
      <div className="container">
        <div className="row">
          <h1>{heading}</h1>
          <h3>{subHeading}</h3>
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-8">
            <div className="talk-to-us-desktop">
              <TalkToUs />
            </div>
            <p>{para}</p>
            <div className="talk-to-us-mobile">
              <TalkToUs/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PagesHero
