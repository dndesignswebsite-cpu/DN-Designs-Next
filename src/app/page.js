import HomePageBtn from "@/Components/HomePageBtn/HomePageBtn";
import styles from "./page.module.css";
import OurConstant from "@/Components/OurConstant/OurConstant";
import OurWorkHomeSection from "@/Components/OurWorkHomeSection/OurWorkHomeSection";
import Points from "@/Components/Points/Points";
import Testimonial from "@/Components/Testimonial/Testimonial";
import Form from "@/Components/Form/Form";

export default function Home() {
  //   const ourWork = () => {
  //   if (ourWorkRef.current) {
  //     ourWorkRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <>
      {/*.....hero...... */}
      <section className={`${styles.hero}`}>
        <div className="container">
          <div className={`${styles["hero-rows"]} row`}>
            <div className={`${styles["left-hero"]} col`}>
              <h1>We Build Brands That Inspire Confidence and Drive Profit</h1>
              <p>Let’s collaborate and craft a truly standout brand for you.</p>
              <div>
                {/* <button>Talk To Us</button>
                <button onClick={ourWork}>Explore Our Work</button> */}
                <HomePageBtn />
              </div>
            </div>
            <div className={`${styles["hero-img"]} col`}>
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/09/gkjeg.png"
                className={`${styles["hero-bg-img"]}`}
              ></img>
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/09/hgefef.png"
                className={`${styles["hero-img-main"]}`}
              ></img>
            </div>
          </div>
        </div>
      </section>

      {/*.....our brands desktop view...... */}

      <section className={`${styles["our-brand"]}`}>
        <div className="container">
          <h2 className={`${styles["our-brand-heading"]} text-center `}>
            Our Brand Journals
          </h2>
          <ul className={`${styles["cards"]}`}>
            <li className={`${styles["card"]} ${styles["card-1"]}`}>
              <div className={`${styles["card-body"]} ${styles["card-body-enlite"]}`}>
                <div className={`${styles["brand-overlay"]}`}>
                  <div className={`${styles["our-brand-content"]}`}>
                    <h3>Grin Care</h3>
                    <div className={`${styles["brand-buttons"]}`}>
                      <button>Brand Identity</button>
                      <button>UI/UX</button>
                      <button>Website</button>
                    </div>
                    <p>
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
                    src="https://dndesigns.co.in/wp-content/uploads/2019/02/GIF_1_1.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className={`${styles["brand-overlay"]}`}>
                  <div className={`${styles["our-brand-content"]}`}>
                    <h3>Grin Care</h3>
                    <div className={`${styles["brand-buttons"]}`}>
                      <button>Brand Identity</button>
                      <button>UI/UX</button>
                      <button>Website</button>
                    </div>
                    <p>
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
            <li className={`${styles["card"]} ${styles["card-3"]}`}>
              <div className={`${styles["card-body"]} ${styles["card-body-nectarpure"]}`}>
                <div className={`${styles["brand-overlay"]}`}>
                  <div className={`${styles["our-brand-content"]}`}>
                    <h3>Grin Care</h3>
                    <div className={`${styles["brand-buttons"]}`}>
                      <button>Brand Identity</button>
                      <button>UI/UX</button>
                      <button>Website</button>
                    </div>
                    <p>
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
            <li className={`${styles["card"]} ${styles["card-4"]}`}>
              <div className={`${styles["card-body"]} ${styles["card-body-grin"]}`}>
                <div className={`${styles["brand-overlay"]}`}>
                  <div className={`${styles["our-brand-content"]}`}>
                    <h3>Grin Care</h3>
                    <div className={`${styles["brand-buttons"]}`}>
                      <button>Brand Identity</button>
                      <button>UI/UX</button>
                      <button>Website</button>
                      <button>Website</button>
                    </div>
                    <p>
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
          </ul>
        </div>
      </section>

      {/* our brand mobile view */}

      <section className={`${styles["mobile-view-our-brand"]}`}>
        <div className="container">
          <div className="row">
            <h2 className="text-center">Our Brand Journals</h2>
            <div className={`${styles["our-brand-mobile-all-div"]} row`}>
              <div
                className={`${styles["our-brand-mobile-div"]} col-12 col-sm-12 col-md-6`}
              >
                <div className={`${styles["our-brand-mobile-div-clield"]}`}>
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/1.jpg"
                  className="img-fluid"
                />
                <div className={`${styles["our-brand-mobile-div-content"]}`}>
                  <h3 className={`${styles["mobile-view-our-brand-h3"]}`}>
                    Rithm’s Enlite
                  </h3>
                  <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                    <h4 className={`${styles["our-brand-mobile-btn"]}`}>
                      Brand Identity
                    </h4>
                    <h4 className={`${styles["our-brand-mobile-btn"]}`}>
                      Packaging
                    </h4>
                  </div>
                  <div>
                    <h4
                      className={`${styles["our-brand-mobile-btn"]} ${styles[" our-brand-mobile-btn-bottom"]} text-center`}
                    >
                      Communication Design
                    </h4>
                  </div>
                  <p>
                    For Rithm’s Enlite, a brand with sparkling mineral water and
                    prebiotic drink range, we designed a thoughtful and
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
                  <h3 className={`${styles["mobile-view-our-brand-h3"]}`}>
                    Rithm’s Enlite
                  </h3>
                  <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                    <h4 className={`${styles["our-brand-mobile-btn"]}`}>
                      Brand Identity
                    </h4>
                    <h4 className={`${styles["our-brand-mobile-btn"]}`}>
                      Packaging
                    </h4>
                  </div>
                  <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                    <h4 className={`${styles["our-brand-mobile-btn"]}`}>
                      Brand Identity
                    </h4>
                    <h4 className={`${styles["our-brand-mobile-btn"]}`}>
                      Packaging
                    </h4>
                  </div>
                  <p>
                    For Rithm’s Enlite, a brand with sparkling mineral water and
                    prebiotic drink range, we designed a thoughtful and
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
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/1.jpg"
                  className="img-fluid"
                />
                <div className={`${styles["our-brand-mobile-div-content"]}`}>
                  <h3 className={`${styles['mobile-view-our-brand-h3']}`}>
                    Rithm’s Enlite
                  </h3>
                  <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                    <h4 className={`${styles["our-brand-mobile-btn"]}`}>
                      Brand Identity
                    </h4>
                    <h4 className={`${styles["our-brand-mobile-btn"]}`}>
                      Packaging
                    </h4>
                  </div>
                  <div>
                    <h4
                      className={`${styles["our-brand-mobile-btn"]} ${styles[" our-brand-mobile-btn-bottom"]} text-center`}
                    >
                      Communication Design
                    </h4>
                  </div>
                  <p>
                    For Rithm’s Enlite, a brand with sparkling mineral water and
                    prebiotic drink range, we designed a thoughtful and
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
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/1.jpg"
                  className="img-fluid"
                />
                <div className={`${styles["our-brand-mobile-div-content"]}`}>
                  <h3 className={`${styles["mobile-view-our-brand-h3"]}`}>
                    Rithm’s Enlite
                  </h3>
                  <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                    <h4 className={`${styles["our-brand-mobile-btn"]}`}>
                      Brand Identity
                    </h4>
                    <h4 className={`${styles["our-brand-mobile-btn"]}`}>
                      Packaging
                    </h4>
                  </div>
                  <div>
                    <h4
                      className={`${styles["our-brand-mobile-btn"]} ${styles[" our-brand-mobile-btn-bottom"]} text-center`}
                    >
                      Communication Design
                    </h4>
                  </div>
                  <p>
                    For Rithm’s Enlite, a brand with sparkling mineral water and
                    prebiotic drink range, we designed a thoughtful and
                    eye-catching brand identity, including can design, logo
                    design and character design. We created the character and
                    the overall brand design around the brand name to promote
                    the refreshing and calming properties of the product.
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
      <Testimonial/>
      {/* Form */}
      <Form/>
    </>
  );
}
