"use client";

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LogoDesingningTab.css";

function LogoDesigningTab() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div>
      {/* Desktop Tabs */}
      <section>
        <div className="container logo-tabs-container mt-5 mb-5 tabs-section">
          <ul className="nav nav-tabs custom-tabs" id="logoTabs" role="tablist">
            
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="style-tab"
                data-bs-toggle="tab"
                data-bs-target="#style"
                type="button"
                role="tab"
              >
                Logo Style
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="palette-tab"
                data-bs-toggle="tab"
                data-bs-target="#palette"
                type="button"
                role="tab"
              >
                Colour palette
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="typography-tab"
                data-bs-toggle="tab"
                data-bs-target="#typography"
                type="button"
                role="tab"
              >
                Typography
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="shape-tab"
                data-bs-toggle="tab"
                data-bs-target="#shape"
                type="button"
                role="tab"
              >
                Shape
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="layout-tab"
                data-bs-toggle="tab"
                data-bs-target="#layout"
                type="button"
                role="tab"
              >
                Layout
              </button>
            </li>

          </ul>

          {/* TAB CONTENT */}
          <div className="tab-content custom-tab-content" id="logoTabsContent">

            <div className="tab-pane fade show active" id="style" role="tabpanel">
              <p>
               Type/Style is all about how your logo appears in totality. As the best logo design company in India, we invest a lot of thought and carefully select the logo style for your brand depending on your requirements. We take into consideration your brand identity, personality, voice and how you want to be perceived by your audience, and match it up with the best logo type. These styles include combination marks, wordmarks, letter marks, abstract, emblems and dynamic.
              </p>
            </div>

            <div className="tab-pane fade" id="palette" role="tabpanel">
              <p>
               Colours convey certain emotions, and hence are a crucial design element. Our creative logo designers in Noida choose a colour palette that perfectly reflects your brand’s personality and emotions. To ensure the right selection and usage of colours, we – a logo design agency in Delhi NCR – research your target audience and market and additionally decide which colour will effectively communicate your brand’s USP.
               </p>
            </div>

            <div className="tab-pane fade" id="typography" role="tabpanel">
              <p>
               Like colours, typography, too, conveys the brand identity – its message, voice and tone. Whether your brand voice is more polished and professional or it is warm and friendly, whether it is inspiring and uplifting or leans more towards authority, your typography can reveal all. As a logo design agency, we can create a premium logo design that communicates your brand voice accurately.
                </p>
            </div>

            <div className="tab-pane fade" id="shape" role="tabpanel">
              <p>
                Like colours and typography, shapes too have a psychological effect on customers. These are silent messengers of brand personality, values and tone. For example, shapes like circles and ovals convey a feeling of inclusiveness and community. On the other hand, squares and rectangles evoke a sense of stability and reliability. Designers at a logo designing agency know this and hence select an appropriate shape for your creative company logo.</p>
            </div>

            <div className="tab-pane fade" id="layout" role="tabpanel">
              <p>
               Anything in the background doesn’t have much value. This could perhaps be true for a lot of things, but not logo design. Think of the red background of the McDonald’s logo. The feel of the brand is not complete without this background. As a logo design agency, we understand the importance of this design element and therefore create a layout that enhances the effect of your logo. While deciding the layout, we consider the need to incorporate a symbol or a tagline as well.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Mobile Tabs */}
      <section className="mobile-tabs mt-5">
        <div className="container">

          <h2 className="mobile-tab-heading">Logo Style</h2>
          <p className="mobile-tab-paragraph mt-4">
            Type/Style is all about how your logo appears in totality. As the best logo design company in India, we invest a lot of thought and carefully select the logo style for your brand depending on your requirements. We take into consideration your brand identity, personality, voice and how you want to be perceived by your audience, and match it up with the best logo type. These styles include combination marks, wordmarks, letter marks, abstract, emblems and dynamic.
          </p>

          <h2 className="mobile-tab-heading mt-5">Colour palette</h2>
          <p className="mobile-tab-paragraph mt-4">
            Colours convey certain emotions, and hence are a crucial design element. Our creative logo designers in Noida choose a colour palette that perfectly reflects your brand’s personality and emotions. To ensure the right selection and usage of colours, we – a logo design agency in Delhi NCR – research your target audience and market and additionally decide which colour will effectively communicate your brand’s USP.
          </p>

          <h2 className="mobile-tab-heading mt-5">Typography</h2>
          <p className="mobile-tab-paragraph mt-4">
            Like colours, typography, too, conveys the brand identity – its message, voice and tone. Whether your brand voice is more polished and professional or it is warm and friendly, whether it is inspiring and uplifting or leans more towards authority, your typography can reveal all. As a logo design agency, we can create a premium logo design that communicates your brand voice accurately.
          </p>

          <h2 className="mobile-tab-heading mt-5">Shape</h2>
          <p className="mobile-tab-paragraph mt-4">
            Like colours and typography, shapes too have a psychological effect on customers. These are silent messengers of brand personality, values and tone. For example, shapes like circles and ovals convey a feeling of inclusiveness and community. On the other hand, squares and rectangles evoke a sense of stability and reliability. Designers at a logo designing agency know this and hence select an appropriate shape for your creative company logo.
          </p>

          <h2 className="mobile-tab-heading mt-5">Layout</h2>
          <p className="mobile-tab-paragraph mt-4">
           Anything in the background doesn’t have much value. This could perhaps be true for a lot of things, but not logo design. Think of the red background of the McDonald’s logo. The feel of the brand is not complete without this background. As a logo design agency, we understand the importance of this design element and therefore create a layout that enhances the effect of your logo. While deciding the layout, we consider the need to incorporate a symbol or a tagline as well.
          </p>

        </div>
      </section>

    </div>
  );
}

export default LogoDesigningTab;
