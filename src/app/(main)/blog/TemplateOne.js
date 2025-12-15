import React from "react";
import Link from "next/link";
import "./TemplateOne.css";
import BlogFromTempOne from "./BlogFormTempOne/BlogFormTempOne";

function TemplateOne() {
  return (
    <div>
      <section className="tempOne">
        <div className="container">
          <div className="row blog-main-row">

            <div className="col-12 col-12 col-lg-8">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/11/Top-10-Makhana-Brands-in-India-2025.png"
                className="img-fluid"
              ></img>

              <h2 className="single-blog-list-post-head">
                Top 10 Makhana Brands in India in 2025
              </h2>

              <div className="row post-details">
                <div className="posted-by col-3 d-flex">
                  <p className="sstatic">Posted By :</p>
                  <p className="dyna"> DN Designs </p>
                </div>

                <div className="posted col-3 d-flex">
                  <p className="sstatic">Posted:</p>
                  <p className="dyna"> 12/11/2025</p>
                </div>
              </div>

              <p>
                In this fast-paced modern world, healthy snacking has become
                less of a choice and more of a necessity. With a variety of
                healthy food options filling the market aisles, this isn’t just
                a mere trend anymore, but is rapidly evolving into a new habit.
                Leading this revolution is Makhana (fox nuts), a traditional and
                humble superfood that has been rebranded without losing its
                roots.

                 In this fast-paced modern world, healthy snacking has become
                less of a choice and more of a necessity. With a variety of
                healthy food options filling the market aisles, this isn’t just
                a mere trend anymore, but is rapidly evolving into a new habit.
                Leading this revolution is Makhana (fox nuts), a traditional and
                humble superfood that has been rebranded without losing its
                roots.


                 In this fast-paced modern world, healthy snacking has become
                less of a choice and more of a necessity. With a variety of
                healthy food options filling the market aisles, this isn’t just
                a mere trend anymore, but is rapidly evolving into a new habit.
                Leading this revolution is Makhana (fox nuts), a traditional and
                humble superfood that has been rebranded without losing its
                roots.



                 In this fast-paced modern world, healthy snacking has become
                less of a choice and more of a necessity. With a variety of
                healthy food options filling the market aisles, this isn’t just
                a mere trend anymore, but is rapidly evolving into a new habit.
                Leading this revolution is Makhana (fox nuts), a traditional and
                humble superfood that has been rebranded without losing its
                roots.
              </p>
            </div>



            <div className="col-12 col-12 col-lg-4 blog-right-side">
              <div className="recent-posts-box">
                <h3>Recent Posts</h3>
                <p>Top 10 Makhana Brands in India in 2025</p>
                <p>Top 10 Makhana Brands in India in 2025</p>
                <p>Top 10 Makhana Brands in India in 2025</p>
                <p>Top 10 Makhana Brands in India in 2025</p>
              </div>

              <div className="blog-form sticky-blog-form">
                <BlogFromTempOne />
              </div>
            </div>


          </div>
        </div>
      </section>
    </div>
  );
}

export default TemplateOne;
