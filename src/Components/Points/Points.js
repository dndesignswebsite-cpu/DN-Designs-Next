import React from "react";
import "./Points.css";
import Image from "next/image";
import Link from "next/link";

function Points() {
  return (
    <div>
      {/*.....points...... */}

      <section className="point">
        <div className="container point-cont">
          <div className="row points-row">
            <div className="col-3 points-left">
              {/* <img src="https://dndesigns.co.in/uploads/pages/350x1100.webp" /> */}

              <Image
                src="https://dndesigns.co.in/uploads/pages/350x1100.webp"
                alt="blog"
                width={350}
                height={1101}
                className="responsive-img"
              />
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
                    <Link href="/branding" className="points-links-point">Brand Identity Design</Link><br></br>
                    <Link href="/packaging-design" className="points-links-point">Packaging Design</Link><br></br>
                    <Link href="/catalogue-designing" className="points-links-point">Catalogue Design</Link>
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
                    <Link href="/digital-marketing-agency-in-noida" className="points-links-point">Digital Marketing</Link><br></br>
                    <Link href="/influencer-marketing" className="points-links-point">Influencer Marketing</Link><br></br>
                    <Link href="/animation" className="points-links-point">Animation</Link>
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
                    <Link href="/ui-ux-design" className="points-links-point">UI/UX</Link><br></br>
                    <Link href="/web-designing-services-in-india" className="points-links-point">Website Design</Link><br></br>
                    <Link href="/seo-marketing-agency-in-noida" className="points-links-point">SEO</Link>
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
