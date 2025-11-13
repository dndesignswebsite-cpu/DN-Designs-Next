import React from "react";
import "./services.css";
import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";
import TalkToUs from "@/Components/TalkToUs/TalkToUs";

import "./services.css";

function page() {
  return (
    <div>
      {/*Breadcrumb*/}
      <section>
        <Breadcrumb />
      </section>

      {/* Hero section */}

      <section className="service-hero">
        <div className="container">
          <div className="row">
            <h1>Services</h1>
            <div className="col-12 col-md-4">{/* .. */}</div>
            <div className="col-12 col-md-8">
              <div className="talk-to-us-desktop">
                <TalkToUs />
              </div>
              <p>
                Successful brands are not made in a day. They are a result of
                consistent hard work, perseverance and unwavering passion.
                Long-term vision, strategy and creativity are pivotal too. Lots
                of work and lots of dedication are required. This is why you
                need the services of a branding & design agency like us. Let’s
                walk you through our services and inform you of our capabilities
                and approach. If there are questions in your mind, check out our
                FAQs section. Alternatively, reach out to us and we will
                promptly answer them.
              </p>
              <div className="talk-to-us-mobile">
                <TalkToUs />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
