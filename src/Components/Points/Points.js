import React from "react";
import "./Points.css";

function Points() {
  return (
    <div>
      {/*.....points...... */}

      <section className="point">
        <div className="container point-cont">
          <div className="row points-row">
            <div className="col-3 points-left">
              <img src="https://dndesigns.co.in/uploads/pages/350x1100.webp" />
            </div>
            <div className="col-12 col-md-12 col-lg-9 points-right">
              <div className="points row">
                <div className="col-12 col-md-12 col-lg-2">
                  <h2>1</h2>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                  <h3>Branding</h3>
                </div>
                <div className="points-para col-12 col-md-12 col-lg-4">
                  <p>
                    It is a significant challenge to create a space for your
                    product in the market. It requires strategic thinking,
                    creative skills, and a relentless pursuit of goals.
                  </p>
                  <p>Worried? Don’t be, for we are here.</p>
                </div>
                <div className="points-para col-12 col-md-12 col-lg-3">
                  <p>We provide end-to-end branding services.</p>
                  <p>
                    Brand Identity Design<br></br>
                    Packaging Design<br></br>
                    Catalogue Design
                  </p>
                </div>
              </div>

              <div className="points row Points-Comm">
                <div className="col-12 col-md-12 col-lg-2">
                  <h2>2</h2>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                  <h3>Communication Strategy</h3>
                </div>
                <div className="points-para col-12 col-md-12 col-lg-4">
                  <p>
                    Customers must be aware of your excellent product.
                    Communication, therefore, is crucial to establishing and
                    strengthening your brand’s presence in the market.
                  </p>
                  <p>What are you waiting for then? Connect with us today.</p>
                </div>
                <div className="points-para col-12 col-md-12 col-lg-3">
                  <p>
                    Let our experts devise a communication strategy for you.
                  </p>
                  <p>
                    Digital Marketing <br></br>
                    Influencer Marketing<br></br>
                    Animation
                  </p>
                </div>
              </div>

              <div className="points row">
                <div className="col-12 col-md-12 col-lg-2">
                  <h2>3</h2>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                  <h3>Web Design</h3>
                </div>
                <div className="points-para col-12 col-md-12 col-lg-4">
                  <p>
                    To establish your online presence, a visually appealing,
                    SEO-optimised and user-friendly website is essential. It
                    boosts your brand image and generates business.
                  </p>
                  <p>
                    We excel in designing, developing and promoting your
                    website.
                  </p>
                </div>
                <div className="points-para col-12 col-md-12 col-lg-3">
                  <p>Explore our range of web design services.</p>
                  <p>
                    UI/UX<br></br>
                    Website Design<br></br>
                    SEO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Points;
