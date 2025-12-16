import HomePageBtn from "@/Components/HomePageBtn/HomePageBtn";
import styles from "./page.module.css";
import OurConstant from "@/Components/OurConstant/OurConstant";
import OurWorkHomeSection from "@/Components/OurWorkHomeSection/OurWorkHomeSection";
import Points from "@/Components/Points/Points";
import Testimonial from "@/Components/Testimonial/Testimonial";
import Form from "@/Components/Form/Form";


// meta data 
export const metadata = {
  title: "DN Designs – Best Digital Marketing Agency",
  description: "Grow your business with top-quality digital marketing, SEO, and branding solutions.",
  
  authors: [{ name: "DN Designs Team", url: "https://dn-designs-next.vercel.app" }],
  
  alternates: { canonical: "https://dn-designs-next.vercel.app/" },
  
  robots: { index: true, follow: true },
  
  openGraph: {
    title: "DN Designs – Best Digital Marketing Agency",
    description: "Grow your business with top-quality digital marketing, SEO, and branding solutions.",
    url: "https://dn-designs-next.vercel.app/",
    siteName: "DN Designs",
    images: [{ 
      url: "https://dndesigns.co.in/wp-content/uploads/2025/08/enlite-2.jpg", 
      width: 1200, 
      height: 630, 
      alt: "DN Designs SEO and Digital Marketing" 
    }],
    type: "website"
  },
  
  twitter: {
    card: "summary_large_image",
    title: "DN Designs – Best Digital Marketing Agency",
    description: "Grow your business with top-quality digital marketing, SEO, and branding solutions.",
    images: ["https://dndesigns.co.in/wp-content/uploads/2025/08/enlite-2.jpg"]
  }
};
//meta end here






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
              <p className="para-roboto">Let’s collaborate and craft a truly standout brand for you.</p>
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
          <h2 className={`${styles["our-brand-heading"]} text-center heading-corbert`}>
            Our <span className={`${styles["every-pr"]}`}>Brand Journals</span>
          </h2>
          <ul className={`${styles["cards"]}`}>
            <li className={`${styles["card"]} ${styles["card-1"]}`}>
              <div className={`${styles["card-body"]} ${styles["card-body-enlite"]}`}>
                <div className={`${styles["brand-overlay"]}`}>
                  <div className={`${styles["our-brand-content"]}`}>
                    <h3 className="heading-corbert">Rithm’s Enlite</h3>
                    <div className={`${styles["brand-buttons"]}`}>
                      <button className="para-roboto">Brand Identity</button>
                      <button className="para-roboto">Packaging Design</button>
                      <button className="para-roboto">Communication Design</button>
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
                    src="https://dndesigns.co.in/wp-content/uploads/2019/02/GIF_1_1.mp4"
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
                    <h3 className="heading-corbert">Nectarpure</h3>
                    <div className={`${styles["brand-buttons"]}`}>
                      <button className="para-roboto">Brand Identity</button>
                      <button className="para-roboto">Label Design</button>
                      <button className="para-roboto">UI/UX</button>
                    </div>
                    <p className="para-roboto">
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
                    <h3 className="heading-corbert">Grin Care</h3>
                    <div className={`${styles["brand-buttons"]}`}>
                      <button className="para-roboto">Brand Identity</button>
                      <button className="para-roboto">UI/UX</button>
                      <button className="para-roboto">Website</button>
                    </div>
                    <p className="para-roboto">
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
            <h2 className={`${styles["our-brand-heading"]} text-center heading-corbert`}>Our <span className={`${styles["every-pr"]}`}>Brand Journals</span></h2>
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
                    <h3 className={`${styles["mobile-view-our-brand-h3"]} heading-corbert`}>
                      Rithm’s Enlite
                    </h3>
                    <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                      <h4 className={`${styles["our-brand-mobile-btn"]} para-roboto`}>
                        Packaging Design
                      </h4>
                      <h4 className={`${styles["our-brand-mobile-btn"]} para-roboto`}>
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
                    <h3 className={`${styles["mobile-view-our-brand-h3"]} heading-corbert`}>
                      Wlue's
                    </h3>
                    <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                      <h4 className={`${styles["our-brand-mobile-btn"]} para-roboto`}>
                        Brand Identity
                      </h4>
                      <h4 className={`${styles["our-brand-mobile-btn"]} para-roboto`}>
                        Packaging Design
                      </h4>
                    </div>
                    <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                      <h4 className={`${styles["our-brand-mobile-btn"]} para-roboto`}>
                       UI/UX
                      </h4>
                      <h4 className={`${styles["our-brand-mobile-btn"]} para-roboto`}>
                        Website
                      </h4>
                    </div>
                    <p className="para-roboto">
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
                    <h3 className={`${styles['mobile-view-our-brand-h3']} heading-corbert`}>
                      Nectarpure
                    </h3>
                    <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                      <h4 className={`${styles["our-brand-mobile-btn"]} para-roboto`}>
                        Brand Identity
                      </h4>
                      <h4 className={`${styles["our-brand-mobile-btn"]} para-roboto `}>
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
                    <h3 className={`${styles["mobile-view-our-brand-h3"]} heading-corbert`}>
                      Grin Care
                    </h3>
                    <div className={`${styles["our-brand-mobile-btn-up"]}`}>
                      <h4 className={`${styles["our-brand-mobile-btn"]} para-roboto`}>
                        Brand Identity
                      </h4>
                      <h4 className={`${styles["our-brand-mobile-btn"]} para-roboto`}>
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
