"use client"

import React, { useState, useRef, useEffect } from "react";
import "./LPFAQSingle.css"

function AccordionItem({ question, answer, isOpen, onClick }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className={`accordio-item ${isOpen ? "open" : ""}`}>
      <button className="accordio-link" onClick={onClick}>
        <div className="flex quesion">
          <h3>{question}</h3>
        </div>
        <i
          className={`icon ${isOpen ? "dd" : "aa"
            }`}
        ></i>
      </button>

      <div ref={contentRef} className="answer" style={{ maxHeight: height }}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function Faqs({ leftFaqs, title = "FAQs" }) {
  const [leftActive, setLeftActive] = useState(0);


  return (
    <section className="faq-section">
      <div className="container">
        <div className="row">
          <h2>Frequently<span className="every-pr"> Asked Questions</span> </h2>
          {/* Left Column */}
          <div className="col-12">
            {leftFaqs.map((item, index) => (
              <AccordionItem
                key={`left-${index}`}
                question={item.question}
                answer={item.answer}
                isOpen={leftActive === index}
                onClick={() => setLeftActive(index)}
              />
            ))}
          </div>

         
        </div>
      </div>
    </section>
  );
}
