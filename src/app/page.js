import HomePageBtn from "@/Components/HomePageBtn/HomePageBtn";
import styles from "./page.module.css";
import OurConstant from "@/Components/OurConstant/OurConstant";
import OurWorkHomeSection from "@/Components/OurWorkHomeSection/OurWorkHomeSection";
import Points from "@/Components/Points/Points";
import Testimonial from "@/Components/Testimonial/Testimonial";
import Form from "@/Components/Form/Form";



// meta tags
export const metadata = {
  title: "Home | DN Designs",
  description: "We build brands that inspire confidence and drive profit",
  openGraph: {
    title: "Home | DN Designs",
    description: "Showcasing our premium brand identity & packaging designs",
    url: "https://dndesigns.co.in/",
    siteName: "DN Designs",
    images: [
      {
        url: "https://dndesigns.co.in/wp-content/uploads/2025/09/gkjeg.png",
        width: 1200,
        height: 630,
        alt: "DN Designs Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | DN Designs",
    description: "Showcasing our premium brand identity & packaging designs",
    images: [
      "https://dndesigns.co.in/wp-content/uploads/2025/09/gkjeg.png"
    ],
  },
};


export default function Home() {
  //   const ourWork = () => {
  //   if (ourWorkRef.current) {
  //     ourWorkRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // form section content
  const FormHead ="Let’s Discuss Over a Cup of Coffee"    
  const FormPara ="Some brands simply stand out! You recognise them, you trust them and you do not think twice before purchasing from them. That’s how powerful a brand can be! However, building such an influential brand is quite a task. No worries for you, though, for we are here to turn your dreams into reality. If you have the same vision for your brand, think no further. Just get in touch with us and tell us all you have in mind for your product.Let’s discuss how to make your brand something others love and envy."   

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
            Our <span className={`${styles["every-pr"]}`}>Brand Journals</span>
          </h2>
          <ul className={`${styles["cards"]}`}>
            <li className={`${styles["card"]} ${styles["card-1"]}`}>
              <div className={`${styles["card-body"]} ${styles["card-body-enlite"]}`}>
                <div className={`${styles["brand-overlay"]}`}>
                  <div className={`${styles["our-brand-content"]}`}>
                    <h3>Rithm’s Enlite</h3>
                    <div className={`${styles["brand-buttons"]}`}>
                      <button>Brand Identity</button>
                      <button>Packaging Design</button>
                      <button>Communication Design</button>
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
                    <h3>Wlue's</h3>
                    <div className={`${styles["brand-buttons"]}`}>
                      <button>Brand Identity</button>
                      <button>Packaging Design</button>
                      <button>UI/UX</button>
                      <button>Website</button>
                    </div>
                    <p>
                      Makhana brand Wlue’s approached us to launch and promote its product in the market. 
                      Their target audience was the youth worldwide. We created its logo and packaging design. 
                      In its packaging, we adopted a retro approach with a superhero vibe, while through its logo
                       (with a star integrated in it), we established that the product is meant for winners.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className={`${styles["card"]} ${styles["card-3"]}`}>
              <div className={`${styles["card-body"]} ${styles["card-body-nectarpure"]}`}>
                <div className={`${styles["brand-overlay"]}`}>
                  <div className={`${styles["our-brand-content"]}`}>
                    <h3>Nectarpure</h3>
                    <div className={`${styles["brand-buttons"]}`}>
                      <button>Brand Identity</button>
                      <button>Label Design</button>
                      <button>UI/UX</button>
                    </div>
                    <p>
                      Nutraceutical brand NECTARPURE partnered with us primarily to establish its FusionMax 
                      Whey Protein product as a niche lifestyle protein brand in the market. We shaped their 
                      brand identity and crafted their label design to give the product a premium feel. In addition, 
                      we also focused on creating a compelling 3D ad for their product and designed their website.
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
                    </div>
                    <p>
                      Oral care product brand GrinCare teamed up with us to create a 
                      brand presence for itself in the dental healthcare market. We helped 
                      design its brand identity, clarify its market positioning, and craft a
                       visually appealing, user-friendly, and conversion-driven website.
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
            <h2 className={`${styles["our-brand-heading"]} text-center`}>Our Brand Journals</h2>
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
                        Packaging Design
                      </h4>
                      <h4 className={`${styles["our-brand-mobile-btn"]}`}>
                        Packaging Design
                      </h4>
                    </div>
                    <div>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} ${styles["our-brand-mobile-btn-bottom"]} text-center`}
                      >
                        Communication Design
                      </h4>
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
                      Wlue's
                    </h3>
                    <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                      <h4 className={`${styles["our-brand-mobile-btn"]}`}>
                        Brand Identity
                      </h4>
                      <h4 className={`${styles["our-brand-mobile-btn"]}`}>
                        Packaging Design
                      </h4>
                    </div>
                    <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                      <h4 className={`${styles["our-brand-mobile-btn"]}`}>
                       UI/UX
                      </h4>
                      <h4 className={`${styles["our-brand-mobile-btn"]}`}>
                        Website
                      </h4>
                    </div>
                    <p>
                      Makhana brand Wlue’s approached us to launch and promote its product in the market. 
                      Their target audience was the youth worldwide. We created its logo and packaging design. 
                      In its packaging, we adopted a retro approach with a superhero vibe, while through its logo
                       (with a star integrated in it), we established that the product is meant for winners.
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
                      Nectarpure
                    </h3>
                    <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                      <h4 className={`${styles["our-brand-mobile-btn"]}`}>
                        Brand Identity
                      </h4>
                      <h4 className={`${styles["our-brand-mobile-btn"]}`}>
                        Label Design
                      </h4>
                    </div>
                    <div>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} ${styles["our-brand-mobile-btn-bottom"]} text-center`}
                      >
                       UI/UX
                      </h4>
                    </div>
                    <p>
                      Nutraceutical brand NECTARPURE partnered with us primarily to establish its FusionMax 
                      Whey Protein product as a niche lifestyle protein brand in the market. We shaped their 
                      brand identity and crafted their label design to give the product a premium feel. In addition, 
                      we also focused on creating a compelling 3D ad for their product and designed their website.
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
                      Grin Care
                    </h3>
                    <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                      <h4 className={`${styles["our-brand-mobile-btn"]}`}>
                        Brand Identity
                      </h4>
                      <h4 className={`${styles["our-brand-mobile-btn"]}`}>
                       UI/UX
                      </h4>
                    </div>
                    <div>
                      <h4
                        className={`${styles["our-brand-mobile-btn"]} ${styles["our-brand-mobile-btn-bottom"]} text-center`}
                      >
                        Website
                      </h4>
                    </div>
                    <p>
                      Oral care product brand GrinCare teamed up with us to create a 
                      brand presence for itself in the dental healthcare market. We helped 
                      design its brand identity, clarify its market positioning, and craft a
                       visually appealing, user-friendly, and conversion-driven website.
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
      {/* Form */}
      <Form FormHead={FormHead} FormPara={FormPara}/>
    </>
  );
}
