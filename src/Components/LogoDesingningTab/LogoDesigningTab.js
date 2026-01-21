"use client";

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LogoDesingningTab.css";


function LogoDesigningTab({ para1, para2, para3, para4, para5 }) {
  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap.bundle.min.js");
  // }, []);

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
               {para1}
              </p>
            </div>

            <div className="tab-pane fade" id="palette" role="tabpanel">
              <p>
               {para2}
               </p>
            </div>

            <div className="tab-pane fade" id="typography" role="tabpanel">
              <p>
               {para3}
                </p>
            </div>

            <div className="tab-pane fade" id="shape" role="tabpanel">
              <p>
                {para4}
                </p>
            </div>

            <div className="tab-pane fade" id="layout" role="tabpanel">
              <p>
               {para5}
               </p>
            </div>

          </div>
        </div>
      </section>

      {/* Mobile Tabs */}
      <section className="mobile-tabs mt-5">
        <div className="container">

          <h2 className="mobile-tab-heading">Logo Style</h2>
          <p className="mobile-tab-paragraph mt-4">
            {para1}
          </p>

          <h2 className="mobile-tab-heading mt-5">Colour palette</h2>
          <p className="mobile-tab-paragraph mt-4">
            {para2}
          </p>

          <h2 className="mobile-tab-heading mt-5">Typography</h2>
          <p className="mobile-tab-paragraph mt-4">
            {para3}
          </p>

          <h2 className="mobile-tab-heading mt-5">Shape</h2>
          <p className="mobile-tab-paragraph mt-4">
            {para4}
          </p>

          <h2 className="mobile-tab-heading mt-5">Layout</h2>
          <p className="mobile-tab-paragraph mt-4">
           {para5}
          </p>

        </div>
      </section>

    </div>
  );
}

export default LogoDesigningTab;
