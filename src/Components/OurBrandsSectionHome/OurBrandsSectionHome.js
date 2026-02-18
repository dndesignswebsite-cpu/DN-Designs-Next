import React from 'react'
import styles from "./OurBrandsSectionHome.module.css"
import Link from 'next/link'
import Image from 'next/image'
// import styles from "../../app/(main)/page.module.css"


function OurBrandsSectionHome() {
    const imageUrl = "https://dndesigns.co.in/uploads/pages/";
  return (
    <div>
       {/*.....our brands desktop view...... */}
      <section className={`${styles["our-brand"]}`}>
        <div className="container">
          <h2
            className={`${styles["our-brand-heading"]} text-center heading-corbert`}
          >
            Our <span className={`${styles["every-pr"]}`}>Brand Journals</span>
          </h2>
          <ul className={`${styles["cards"]}`}>
            <Link href="/enlite-case-study">
              <li className={`${styles["card"]} ${styles["card-1"]}`}>
                <div
                  className={`${styles["card-body"]} ${styles["card-body-enlite"]}`}
                >
                  <div className={`${styles["brand-overlay"]}`}>
                    <div className={`${styles["our-brand-content"]}`}>
                      <h3 className="heading-corbert">Rithm’s Enlite</h3>
                      <div className={`${styles["brand-buttons"]}`}>
                        <button className="para-roboto">Brand Identity</button>
                        <button className="para-roboto">
                          Packaging Design
                        </button>
                        <button className="para-roboto">
                          Communication Design
                        </button>
                      </div>
                      <p className="para-roboto">
                        For Rithm’s Enlite, a brand with sparkling mineral water
                        and prebiotic drink range, we designed a thoughtful and
                        eye-catching brand identity, including can design, logo
                        design and character design. We created the character
                        and the overall brand design around the brand name to
                        promote the refreshing and calming properties of the
                        product.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </Link>

            <Link href="/wlues-case-study">
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
                        <button className="para-roboto">
                          Packaging Design
                        </button>
                        <button className="para-roboto">UI/UX</button>
                        <button className="para-roboto">Website</button>
                      </div>
                      <p className="para-roboto">
                        Makhana brand Wlue’s approached us to launch and promote
                        its product in the market. Their target audience was the
                        youth worldwide. We created its logo and packaging
                        design. In its packaging, we adopted a retro approach
                        with a superhero vibe, while through its logo (with a
                        star integrated in it), we established that the product
                        is meant for winners.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </Link>

            <Link href="/nectarpure-case-study">
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
                        Nutraceutical brand NECTARPURE partnered with us
                        primarily to establish its FusionMax Whey Protein
                        product as a niche lifestyle protein brand in the
                        market. We shaped their brand identity and crafted their
                        label design to give the product a premium feel. In
                        addition, we also focused on creating a compelling 3D ad
                        for their product and designed their website.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </Link>

            <Link href="/grincare-case-study">
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
            </Link>
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
              <Link
                href="/enlite-case-study"
                className={styles["mobile-casestudy-wrapper-link"]}
              >
              
                <div
                  className={`${styles["our-brand-mobile-div"]} col-12 col-sm-12 col-md-6`}
                >
                  <div className={`${styles["our-brand-mobile-div-clield"]}`}>
                    {/* <img
                    src={imageUrl + "enlite main graphic.webp"}
                    className="img-fluid"
                  /> */}
                    <Image
                      src={imageUrl + "enlite main graphic.webp"}
                      className={`${styles["responsive-img"]}`}
                      alt="home page image"
                      width={1500}
                      height={1000}
                    />
                    <div
                      className={`${styles["our-brand-mobile-div-content"]}`}
                    >
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
                        design and character design. We created the character
                        and the overall brand design around the brand name to
                        promote the refreshing and calming properties of the
                        product.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href="/wlues-case-study"
               className={styles["mobile-casestudy-wrapper-link"]}
              >
                <div
                  className={`${styles["our-brand-mobile-div"]} col-12 col-sm-12 col-md-6`}
                >
                  <div className={`${styles["our-brand-mobile-div-clield"]}`}>
                    <video
                      className="img-fluid"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source
                        src="https://dndesigns.co.in/uploads/videos/GIF_1_1.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <div
                      className={`${styles["our-brand-mobile-div-content"]}`}
                    >
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
                        youth worldwide. We created its logo and packaging
                        design. In its packaging, we adopted a retro approach
                        with a superhero vibe, while through its logo (with a
                        star integrated in it), we established that the product
                        is meant for winners.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href="/nectarpure-case-study"
                className={styles["mobile-casestudy-wrapper-link"]}
              >
                <div
                  className={`${styles["our-brand-mobile-div"]} col-12 col-sm-12 col-md-6`}
                >
                  <div className={`${styles["our-brand-mobile-div-clield"]}`}>
                    {/* <img
                      src={imageUrl + "nectarpure case study.webp"}
                      className="img-fluid"
                    /> */}
                    <Image
                      src={imageUrl + "nectarpure case study.webp"}
                      className={`${styles["responsive-img"]}`}
                      alt="home page image"
                      width={1500}
                      height={1000}
                    />
                    <div
                      className={`${styles["our-brand-mobile-div-content"]}`}
                    >
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
                        Nutraceutical brand NECTARPURE partnered with us
                        primarily to establish its FusionMax Whey Protein
                        product as a niche lifestyle protein brand in the
                        market. We shaped their brand identity and crafted their
                        label design to give the product a premium feel. In
                        addition, we also focused on creating a compelling 3D ad
                        for their product and designed their website.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href="/grincare-case-study"
                className={styles["mobile-casestudy-wrapper-link"]}
              >
                <div
                  className={`${styles["our-brand-mobile-div"]} col-12 col-sm-12 col-md-6`}
                >
                  <div className={`${styles["our-brand-mobile-div-clield"]}`}>
                    {/* <img
                      src={imageUrl + "grin care case study.webp"}
                      className="img-fluid"
                    /> */}

                    <Image
                      src={imageUrl + "grin care case study.webp"}
                      className={`${styles["responsive-img"]}`}
                      alt="home page image"
                      width={1500}
                      height={1000}
                    />
                    <div
                      className={`${styles["our-brand-mobile-div-content"]}`}
                    >
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
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default OurBrandsSectionHome
