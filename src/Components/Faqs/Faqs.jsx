"use client"

import React, { useState, useRef, useEffect } from "react";
import "./Faqs.css";

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

export default function Faqs({ leftFaqs, rightFaqs, title = "FAQs" }) {
  const [leftActive, setLeftActive] = useState(null);
  const [rightActive, setRightActive] = useState(null);

  return (
    <section className="faq-section">
      <div className="container">
        <div className="row">
          <h2 className="text-center">Frequently<span className="every-pr"> Asked Questions</span> </h2>
          {/* Left Column */}
          <div className="col-12 col-md-6">
            {leftFaqs.map((item, index) => (
              <AccordionItem
                key={`left-${index}`}
                question={item.question}
                answer={item.answer}
                isOpen={leftActive === index}
                onClick={() =>
                  setLeftActive(leftActive === index ? null : index)
                }
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="col-12 col-md-6">
            {rightFaqs.map((item, index) => (
              <AccordionItem
                key={`right-${index}`}
                question={item.question}
                answer={item.answer}
                isOpen={rightActive === index}
                onClick={() =>
                  setRightActive(rightActive === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
