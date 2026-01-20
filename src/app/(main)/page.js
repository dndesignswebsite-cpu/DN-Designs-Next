export const dynamic = "force-dynamic";
export const revalidate = 0;

import HomePageBtn from "@/Components/HomePageBtn/HomePageBtn";
import styles from "./page.module.css";
import OurConstant from "@/Components/OurConstant/OurConstant";
import OurWorkHomeSection from "@/Components/OurWorkHomeSection/OurWorkHomeSection";
import Points from "@/Components/Points/Points";
import Testimonial from "@/Components/Testimonial/Testimonial";
import Form from "@/Components/Form/Form";
import Script from "next/script";

// schema
const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dndesigns.co.in/#organization",
      name: "DN Designs",
      url: "https://dndesigns.co.in/",
      logo: {
        "@type": "ImageObject",
        "@id": "https://dndesigns.co.in/#logo",
        url: "https://dndesigns.co.in/logo.png",
        contentUrl: "https://dndesigns.co.in/logo.png",
        width: 512,
        height: 512,
      },
      sameAs: [
        "https://www.instagram.com/dn_designs_india/",
        "https://in.linkedin.com/company/dn-designs-india",
        "https://twitter.com/digitizersn",
      ],
    },

    {
      "@type": "ProfessionalService",
      "@id": "https://dndesigns.co.in/#localbusiness",
      name: "DN Designs",
      url: "https://dndesigns.co.in/",
      image: "https://dndesigns.co.in/logo.png",
      telephone: "+91-9416011100",
      priceRange: "₹₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "C-40, Second Floor, Block C, Sector 58",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201301",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        bestRating: "5",
        reviewCount: "69",
      },
      review: {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Bhagwat Agrawal",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        reviewBody:
          "After researching several branding and design agencies, I connected with DN Designs and appreciated their clarity and execution.",
      },
      parentOrganization: {
        "@id": "https://dndesigns.co.in/#organization",
      },
    },

    {
      "@type": "WebSite",
      "@id": "https://dndesigns.co.in/#website",
      url: "https://dndesigns.co.in/",
      name: "DN Designs",
      publisher: {
        "@id": "https://dndesigns.co.in/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://dndesigns.co.in/?s={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      inLanguage: "en-IN",
    },

    {
      "@type": "WebPage",
      "@id": "https://dndesigns.co.in/#homepage",
      url: "https://dndesigns.co.in/",
      name: "Creative Branding Agency | Brand Design & Packaging Company",
      description:
        "Trusted branding and design agency in Noida and Delhi NCR, India, specializing in brand strategy, visual identity, packaging design, and digital branding.",
      isPartOf: {
        "@id": "https://dndesigns.co.in/#website",
      },
      about: {
        "@id": "https://dndesigns.co.in/#organization",
      },
      primaryImageOfPage: {
        "@id": "https://dndesigns.co.in/#primaryimage",
      },
      breadcrumb: {
        "@id": "https://dndesigns.co.in/#breadcrumb",
      },
      inLanguage: "en-IN",
    },

    {
      "@type": "ImageObject",
      "@id": "https://dndesigns.co.in/#primaryimage",
      url: "https://dndesigns.co.in/hero.png",
      contentUrl: "https://dndesigns.co.in/hero.png",
      width: 1862,
      height: 1042,
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://dndesigns.co.in/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://dndesigns.co.in/",
        },
      ],
    },
  ],
};
// schema ends here

export default function Home() {
  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "Some brands simply stand out! You recognise them, you trust them and you do not think twice before purchasing from them. That’s how powerful a brand can be! However, building such an influential brand is quite a task. No worries for you, though, for we are here to turn your dreams into reality. If you have the same vision for your brand, think no further. Just get in touch with us and tell us all you have in mind for your product.Let’s discuss how to make your brand something others love and envy.";

  const imageUrl = "https://dndesigns.co.in/uploads/pages/";

  return (
    <>
      <Script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      {/*.....hero...... */}
      <section className={`${styles.hero}`}>
        <div className="container">
          <div className={`${styles["hero-rows"]} row`}>
            <div className={`${styles["left-hero"]} col`}>
              <h1>We Build Brands That Inspire Confidence and Drive Profit</h1>
              <p className="para-roboto">
                Let’s collaborate and craft a truly standout brand for you.
              </p>
              <div>
                <HomePageBtn />
              </div>
            </div>
            <div className={`${styles["hero-img"]} col`}>
              <img
                // src="https://dndesigns.co.in/wp-content/uploads/2025/09/gkjeg.png"
                src={imageUrl + "gkjeg.webp"}
                className={`${styles["hero-bg-img"]}`}
              ></img>
              <img
                // src="https://dndesigns.co.in/wp-content/uploads/2025/09/hgefef.png"
                src={imageUrl + "hgefef.webp"}
                className={`${styles["hero-img-main"]}`}
              ></img>
            </div>
          </div>
        </div>
      </section>
      {/*.....our brands desktop view...... */}
      <section className={`${styles["our-brand"]}`}>
        <div className="container">
          <h2
            className={`${styles["our-brand-heading"]} text-center heading-corbert`}
          >
            Our <span className={`${styles["every-pr"]}`}>Brand Journals</span>
          </h2>
          <ul className={`${styles["cards"]}`}>
            <li className={`${styles["card"]} ${styles["card-1"]}`}>
              <div
                className={`${styles["card-body"]} ${styles["card-body-enlite"]}`}
              >
                <div className={`${styles["brand-overlay"]}`}>
                  <div className={`${styles["our-brand-content"]}`}>
                    <h3 className="heading-corbert">Rithm’s Enlite</h3>
                    <div className={`${styles["brand-buttons"]}`}>
                      <button className="para-roboto">Brand Identity</button>
                      <button className="para-roboto">Packaging Design</button>
                      <button className="para-roboto">
                        Communication Design
                      </button>
                    </div>
                    <p className="para-roboto">
                      For Rithm’s Enlite, a brand with sparkling mineral water
                      and prebiotic drink range, we designed a thoughtful and
                      eye-catching brand identity, including can design, logo
                      design and character design. We created the character and
                      the overall brand design around the brand name to promote
                      the refreshing and calming properties of the product.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className={`${styles["card"]} ${styles["card-2"]}`}>
              <div className={`${styles["card-body"]}`}>
                <video className="img-fluid" autoPlay muted loop playsInline>
                  <source
                    src="https://dndesigns.co.in/uploads/videos/GIF_1_1.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className={`${styles["brand-overlay"]}`}>
                  <div className={`${styles["our-brand-content"]}`}>
                    <h3 className="heading-corbert">Wlue's</h3>
                    <div className={`${styles["brand-buttons"]}`}>
                      <button className="para-roboto">Brand Identity</button>
                      <button className="para-roboto">Packaging Design</button>
                      <button className="para-roboto">UI/UX</button>
                      <button className="para-roboto">Website</button>
                    </div>
                    <p className="para-roboto">
                      Makhana brand Wlue’s approached us to launch and promote
                      its product in the market. Their target audience was the
                      youth worldwide. We created its logo and packaging design.
                      In its packaging, we adopted a retro approach with a
                      superhero vibe, while through its logo (with a star
                      integrated in it), we established that the product is
                      meant for winners.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className={`${styles["card"]} ${styles["card-3"]}`}>
              <div
                className={`${styles["card-body"]} ${styles["card-body-nectarpure"]}`}
              >
                <div className={`${styles["brand-overlay"]}`}>
                  <div className={`${styles["our-brand-content"]}`}>
                    <h3 className="heading-corbert">Nectarpure</h3>
                    <div className={`${styles["brand-buttons"]}`}>
                      <button className="para-roboto">Brand Identity</button>
                      <button className="para-roboto">Label Design</button>
                      <button className="para-roboto">UI/UX</button>
                    </div>
                    <p className="para-roboto">
                      Nutraceutical brand NECTARPURE partnered with us primarily
                      to establish its FusionMax Whey Protein product as a niche
                      lifestyle protein brand in the market. We shaped their
                      brand identity and crafted their label design to give the
                      product a premium feel. In addition, we also focused on
                      creating a compelling 3D ad for their product and designed
                      their website.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className={`${styles["card"]} ${styles["card-4"]}`}>
              <div
                className={`${styles["card-body"]} ${styles["card-body-grin"]}`}
              >
                <div className={`${styles["brand-overlay"]}`}>
                  <div className={`${styles["our-brand-content"]}`}>
                    <h3 className="heading-corbert">Grin Care</h3>
                    <div className={`${styles["brand-buttons"]}`}>
                      <button className="para-roboto">Brand Identity</button>
                      <button className="para-roboto">UI/UX</button>
                      <button className="para-roboto">Website</button>
                    </div>
                    <p className="para-roboto">
                      Oral care product brand GrinCare teamed up with us to
                      create a brand presence for itself in the dental
                      healthcare market. We helped design its brand identity,
                      clarify its market positioning, and craft a visually
                      appealing, user-friendly, and conversion-driven website.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* our brand mobile view */}
      <section className={`${styles["mobile-view-our-brand"]}`}>
        <div className="container">
          <div className="row">
            <h2
              className={`${styles["our-brand-heading"]} text-center heading-corbert`}
            >
              Our{" "}
              <span className={`${styles["every-pr"]}`}>Brand Journals</span>
            </h2>
            <div className={`${styles["our-brand-mobile-all-div"]} row`}>
              <div
                className={`${styles["our-brand-mobile-div"]} col-12 col-sm-12 col-md-6`}
              >
                <div className={`${styles["our-brand-mobile-div-clield"]}`}>
                  <img
                    src={imageUrl + "enlite main graphic.webp"}
                    className="img-fluid"
                  />
                  <div className={`${styles["our-brand-mobile-div-content"]}`}>
                    <h3
                      className={`${styles["mobile-view-our-brand-h3"]} heading-corbert`}
                    >
                      Rithm’s Enlite
                    </h3>
                    <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                      >
                        Packaging Design
                      </h4>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                      >
                        Packaging Design
                      </h4>
                    </div>
                    <div>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} ${styles["our-brand-mobile-btn-bottom"]} text-center para-roboto`}
                      >
                        Communication Design
                      </h4>
                    </div>
                    <p className="para-roboto">
                      For Rithm’s Enlite, a brand with sparkling mineral water
                      and prebiotic drink range, we designed a thoughtful and
                      eye-catching brand identity, including can design, logo
                      design and character design. We created the character and
                      the overall brand design around the brand name to promote
                      the refreshing and calming properties of the product.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`${styles["our-brand-mobile-div"]} col-12 col-sm-12 col-md-6`}
              >
                <div className={`${styles["our-brand-mobile-div-clield"]}`}>
                  <video className="img-fluid" autoPlay muted loop playsInline>
                    <source
                      src="https://dndesigns.co.in/wp-content/uploads/2019/02/GIF_1_1.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className={`${styles["our-brand-mobile-div-content"]}`}>
                    <h3
                      className={`${styles["mobile-view-our-brand-h3"]} heading-corbert`}
                    >
                      Wlue's
                    </h3>
                    <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                      >
                        Brand Identity
                      </h4>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                      >
                        Packaging Design
                      </h4>
                    </div>
                    <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                      >
                        UI/UX
                      </h4>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                      >
                        Website
                      </h4>
                    </div>
                    <p className="para-roboto">
                      Makhana brand Wlue’s approached us to launch and promote
                      its product in the market. Their target audience was the
                      youth worldwide. We created its logo and packaging design.
                      In its packaging, we adopted a retro approach with a
                      superhero vibe, while through its logo (with a star
                      integrated in it), we established that the product is
                      meant for winners.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`${styles["our-brand-mobile-div"]} col-12 col-sm-12 col-md-6`}
              >
                <div className={`${styles["our-brand-mobile-div-clield"]}`}>
                  <img
                    src={imageUrl + "grin care case study.webp"}
                    className="img-fluid"
                  />
                  <div className={`${styles["our-brand-mobile-div-content"]}`}>
                    <h3
                      className={`${styles["mobile-view-our-brand-h3"]} heading-corbert`}
                    >
                      Nectarpure
                    </h3>
                    <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                      >
                        Brand Identity
                      </h4>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} para-roboto `}
                      >
                        Label Design
                      </h4>
                    </div>
                    <div>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} ${styles["our-brand-mobile-btn-bottom"]} text-center para-roboto`}
                      >
                        UI/UX
                      </h4>
                    </div>
                    <p className="para-roboto">
                      Nutraceutical brand NECTARPURE partnered with us primarily
                      to establish its FusionMax Whey Protein product as a niche
                      lifestyle protein brand in the market. We shaped their
                      brand identity and crafted their label design to give the
                      product a premium feel. In addition, we also focused on
                      creating a compelling 3D ad for their product and designed
                      their website.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`${styles["our-brand-mobile-div"]} col-12 col-sm-12 col-md-6`}
              >
                <div className={`${styles["our-brand-mobile-div-clield"]}`}>
                  <img
                    src={imageUrl + "nectarpure case study.webp"}
                    className="img-fluid"
                  />
                  <div className={`${styles["our-brand-mobile-div-content"]}`}>
                    <h3
                      className={`${styles["mobile-view-our-brand-h3"]} heading-corbert`}
                    >
                      Grin Care
                    </h3>
                    <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                      >
                        Brand Identity
                      </h4>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} para-roboto`}
                      >
                        UI/UX
                      </h4>
                    </div>
                    <div>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} ${styles["our-brand-mobile-btn-bottom"]} text-center para-roboto`}
                      >
                        Website
                      </h4>
                    </div>
                    <p className="para-roboto">
                      Oral care product brand GrinCare teamed up with us to
                      create a brand presence for itself in the dental
                      healthcare market. We helped design its brand identity,
                      clarify its market positioning, and craft a visually
                      appealing, user-friendly, and conversion-driven website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*.....our-constant-companions...... */}
      <OurConstant />
      {/*.....Our work...... */}
      <OurWorkHomeSection />
      {/*.....points...... */}
      <Points />
      {/* testimonial  */}
      <Testimonial />
      <Form FormHead={FormHead} FormPara={FormPara} pageName="Landing Page" />
    </>
  );
}
