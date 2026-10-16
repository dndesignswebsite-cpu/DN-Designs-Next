import React from 'react';
import "./BookADirectCallNewCTASection.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';


const BookADirectCallNewCTASection = () => {
    return (
        <div>
            <section className="book-direct-call-founders-section">
        <div className="container">
          <div className="book-direct-call-founders-section-contaier">
            <h2 className="book-direct-call-founders-section-head">Ready to Bring Your Brand to Life ?</h2>
            <p className="book-direct-call-founders-section-para">Book a discovery call with DN Designs to share your ideas, discuss your vision, and explore how we can build a distinctive, impactful brand that stands out in the market and drives business growth.</p>

            <Link href="/contact-us"><span className='lets-talk-new-cta-section'>Let’s Talk <FontAwesomeIcon icon={faArrowRight} size="18px" className="fontAwesomeIcon-right-arrow" /></span>
            </Link>
          </div>
        </div>
      </section>
        </div>
    );
}

export default BookADirectCallNewCTASection;
