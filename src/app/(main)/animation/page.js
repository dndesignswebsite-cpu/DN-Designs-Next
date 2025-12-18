import React from "react";
import "./animation.css";
import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";
import Faqs from "@/Components/Faqs/Faqs";
import Form from "@/Components/Form/Form";
import AnimationSwipper from "@/Components/AnimationSwipper/AnimationSwipper";
import PagesHero from "@/Components/PagesHero/PagesHero";
import ExploreOurVideoAnimation from "@/Components/ExploreOurVideoAnimation/ExploreOurVideoAnimation";


// meta data 
export const metadata = {
  title: "Animation Services – DN Designs",
  description: "High-quality animation services for your brand, including 2D, 3D, and motion graphics.",
  
  authors: [{ name: "DN Designs Team", url: "https://dn-designs-next.vercel.app/animation" }],
  
  alternates: { canonical: "https://dn-designs-next.vercel.app/animation" },
  
  robots: { index: true, follow: true, nocache: true },
  
  openGraph: {
    title: "Animation Services – DN Designs",
    description: "High-quality animation services for your brand, including 2D, 3D, and motion graphics.",
    url: "https://dn-designs-next.vercel.app/animation",
    siteName: "DN Designs",
    images: [{ 
      url: "https://dndesigns.co.in/wp-content/uploads/2025/08/animation-og.jpg", 
      width: 1200, 
      height: 630, 
      alt: "DN Designs Animation Services" 
    }],
    type: "website"
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Animation Services – DN Designs",
    description: "High-quality animation services for your brand, including 2D, 3D, and motion graphics.",
    images: ["https://dndesigns.co.in/wp-content/uploads/2025/08/animation-og.jpg"]
  }
};
//meta end here




function page() {
  const heading = "Animation Company in India";
  const subHeading = "Creating Impactful Video Solutions For Business Growth";
  const para =
    "Animated videos have a charm and a power to engross the viewers. For brands, these videos are a smart choice to share stories, build brand awareness, simplify complex product/service information and evoke strong emotional responses from customers. Need more details? Stick around as we, an animation company in India, are just getting started. Find out about the animated video solutions we offer, explore our portfolio and learn why you should partner with us. If you have questions, take a closer look at our FAQs section. We might have answered them already. Cheers!";

  const leftFaqs = [
    {
      question: "What kind of animated videos does your company create?",
      answer:
        "One of the most popular animation studios in India, DN Designs, provides a complete range of animated videos. These formats include product demo videos, corporate videos, promotional videos and explainer videos. As for video styles, we provide 2D, 3D, motion graphics and CGI videos.",
    },
    {
      question: "How do I decide which type of video best suits my business?",
      answer:
        "To decide which types of videos will benefit your company, you should first know your business goals and your target audience’s requirements. For instance, if your product is new, you can select a product demo or a promotional video to help launch & market it better. You can also go for 3D animated videos to enhance your users’ experience. If you are unsure about how you should proceed, don’t worry. Just contact us, and we will research and make appropriate recommendations.",
    },
    {
      question: "How much time do you need to create an animated video?",
      answer:
        "The time needed to create an animated video varies from one project to another. The major reasons for this are the format & style of the videos, the complexities involved in the process and the number of feedback and revisions required. However, for your reference, a short and simple 2D explainer video can be completed in a couple of weeks, while a more complex 3D video can take up to a month.",
    },

      {
      question: "Can you explain your video-making process?",
      answer:
        "We start with a briefing session where we understand your goals, audience and vision. Based on this, we brainstorm concepts and decide on the type of video to be created, its tone and timeline. We then move towards the scripting and storyboarding stages, where we write an engaging script and sketch the visual flow of the story. It is now time to add voice-overs and turn your storyboard into an animation. In the end, we go for the sound design of the video.",
    },

      {
      question: "How many revisions can I ask for?",
      answer:
        "Animation videos take a lot of time, and therefore, we seek your approval and incorporate suggested changes (even if they are major) at every stage of our process to ensure that we are moving in the right direction. However, in case you need changes close to video completion or after it, we can provide you with limited revision options twice.",
    },

      {
      question: "I have a script ready, and I can also provide the voiceover recordings. Can you include it in the video?",
      answer:
        "Sure! We can definitely create a video based on the script and voiceover recording that you provide.",
    },

     {
      question: "I need videos in different languages. Can DN Designs help?",
      answer:
        "Yes, we can certainly help you with this. We can create videos with voiceover in different languages and add subtitles in the needed language.",
    },
  ];

  const rightFaqs = [
    {
      question: "Do you keep our brand style and follow brand guidelines when creating videos?",
      answer: "Yes. As a business animation company in India, we do understand the importance of keeping your brand identity intact in your videos. You can share your brand guidelines with us, and we will ensure to retain your brand’s logo, design aesthetics, fonts, colours, and voice in the video we create.",
    },
    {
      question: "Can you utilise the existing footage that I have or update an old video?",
      answer: "Yes, we can definitely do that. For the purpose, we can use your current branding elements, add fresh voice-overs and include new scenes or animated overlays.",
    },

    {
      question: "How much do your video creation services cost?",
      answer: "Costing depends on the scope of your project - the format and style of the video (motion graphic or 3D video), its length and the complexities involved. To get an idea about the cost of your project, simply get in touch with us.",
    },

    {
      question: "Who retains the ownership of the video?",
      answer: "Once the payment for the service is made, you have full rights over the video. You can use it wherever you want to - be it on your website, social media, ad campaign, emails or physical events and conferences.",
    },

    {
      question: "In what format will I receive the videos?",
      answer: "We will deliver your videos in formats suitable for various platforms. This includes MP4 (HD or 4K) and social formats (square or vertical)."
    },

     {
      question: "How are you better than the other major animation studios in Noida?",
      answer: "We are a team of skilled strategists, creative storytellers and expert video creators and editors. We create a video that fulfils your business objectives and impresses your audience. We keep ourselves updated with the current market trends and focus on generating a return on investment through our videos. We also offer flexible pricing options."
    },

     {
      question: "Do you offer video marketing services too?",
      answer: "Yes, we can help you create and set up your YouTube channel and optimise videos for SEO purposes. We can also adapt your videos for integration on various social media channels, email and ad campaigns as well as your website. As part of the video marketing services, we can also manage your campaigns, engage with your community and track the performance of your video marketing strategy."
    },
  ];

  // form section content
  const FormHead = "Let’s Discuss Over a Cup of Coffee"
  const FormPara = "Usually, customers prefer to watch an animated video over reading long blogs, manuals or documentation. How do we know this? Well, statistics say this, and we, as consumers, do the same. As an animation company in Noida, we create videos that capture attention, provide the required information, strike an emotional chord with customers and build trust. Want a similar experience for your customers? Let’s discuss your project over a cup of coffee."
  const pageName = "animation"

  return (
    <div>
      {/*Breadcrumb*/}
      <section>
        <Breadcrumb />
      </section>

      {/* branding hero */}
      {/* ui/ux design */}
      <section className="branding-hero">
        <PagesHero heading={heading} subHeading={subHeading} para={para} />
      </section>

      {/* Explore Our Video Gallery */}
      <section className="explore-our-video-gallery">
        <div className="container">
          <div className="row">
            <h2>Explore Our Video Gallery</h2>
          </div>
          <ExploreOurVideoAnimation />
        </div>
      </section>

      <AnimationSwipper />

      {/* We Are The Leading Video */}
      <section className="we-are-the-leading">
        <div className="container">
          <div className="row">
            <h3>We Are The Leading Video <span className="every-pr"> Production Company For Brands</span></h3>
            <div className="col-12 col-md-6 we-are-the-leading-para">
              <p>
                A video shouldn’t just play; it should pull its viewer in (well,
                figuratively speaking). It should fulfil its objective (educate,
                promote or entertain), communicate brand value, build trust and
                inspire customers to convert. As a business animation studio in
                Noida, we provide you just that. It doesn’t matter whether you
                are an emerging start-up or an established brand; we work with
                equal enthusiasm.
              </p>
            </div>
            <div className="col-12 col-md-6 we-are-the-leading-para">
              <p>
               We focus on your objectives and vision and pair them up with our creative and technical skills. Our studio is teeming with strategists, scriptwriters, cinematographers, editors, social media experts and production team – all of whom pool in their special talents to transform your vision into reality. Want us to create a compelling video that grabs attention, evokes emotion and enhances engagement? Just get in touch with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Characteristics of Good Brand Name? */}

      <section className="characteristics-of-good">
        <div className="container">
          {/* 1st row */}
          <div className="row">
            <h2 className="text-center headg">
              Creative and Effective<br/>
              <span className="every-pr"> Animated Video Solutions</span>
            </h2>
            <div className="col-12 col-md-6 col-lg-4 px-2 characteristics-of-good-main-div">
              <div className=" characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Explainer Video</h3>
                  <p>
                    Let’s engage your audience and market your product & services through explainer videos. Animation combined with 
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Explainer Video</h3>
                  <p>
                    Let’s engage your audience and market your product & services through explainer videos. Animation combined with vocal narratives and dynamic music creates a video that leaves a lasting impression and encourages users to take action. Good for new product launch & demo as well as complex products and services explanations.
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4 px-2 characteristics-of-good-main-div">
              <div className=" characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Corporate Videos</h3>
                  <p>
                    Partner with us to create professional corporate videos to reach your target audience and communicate your message
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Corporate Videos</h3>
                  <p>
                    Partner with us to create professional corporate videos to reach your target audience and communicate your message. These videos are for both external (product/service promotion, brand awareness) and internal (employee training) communication. They are far more informative in nature and aim to build trust in their audience.
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4 px-2 characteristics-of-good-main-div">
              <div className="p-3 characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>3D Animation</h3>
                  <p>
                  Want to give your customers a 360-degree view of your product and make them feel that it is real? Go for 3D animation videos
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>3D Animation</h3>
                  <p>
                    Want to give your customers a 360-degree view of your product and make them feel that it is real? Go for 3D animation videos. As a 3D animation company in Noida, we make highly creative, smooth, detailed and cinematic videos that showcase and explain your products and services.
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>
          </div>

          {/* 2nd row */}
          <div className="row characteristics-of-good-second-row">
            <div className="col-12 col-md-6 col-lg-4 px-2 characteristics-of-good-main-div">
              <div className=" characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Promotional Video</h3>
                  <p>
                    Give your audience a quick and captivating view of your product, services and events. Grab their attention with 
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Promotional Video</h3>
                  <p>
                   Give your audience a quick and captivating view of your product, services and events. Grab their attention with eye-catching visuals, establish brand identity through design elements and create an upbeat mood through inspiring background music. We are there to guide you throughout.
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4 px-2 characteristics-of-good-main-div">
              <div className=" characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>2D Animation Video</h3>
                  <p>
                    Experience the magic of simple, timeless and versatile 2D animation videos. As an animation studio in Noida
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>2D Animation Video</h3>
                  <p>
                    Experience the magic of simple, timeless and versatile 2D animation videos. As an animation studio in Noida, we create informative but engaging videos to make your complex ideas appear easy, establish your brand narrative and boost audience engagement. These are particularly good for explainer and social media videos.
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4 px-2 characteristics-of-good-main-div">
              <div className="p-3 characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Product Demo Video</h3>
                  <p>
                   Demonstrate to your audience how your product functions and what its key features and benefits are
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Product Demo Video</h3>
                  <p>
                   Demonstrate to your audience how your product functions and what its key features and benefits are. Let them see your product in action through our animated videos. We create high-resolution, professional and practical videos for your product’s promotion and marketing.
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/*The Protagonists */}

      <section className="appr-pro-anime">
        <div className="container">
          <div>
            <div className="row appr-pro-anime-row-main">
              <div className="col-12 col-md-12 col-lg-6 mt-3">
                <h2 className="appr-pro-anime-main-head">
                  Why Choose Us
                </h2>
                <p className="appr-pro-anime-main-para">Great results are not achieved randomly. They need planning, hard work, perseverance, and, when it comes to animated videos, plenty of strategic vision and creativity as well. That’s exactly what we do and what sets us apart.</p>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <div className="app-pro-div app-pro-div-white">
                  <div>
                    <h3>Goal & Message</h3>
                    <p>
                      Before doing anything else, we establish our core objectives - what do we want to achieve and what do we want to communicate through the video.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <div className=" app-pro-div app-pro-div-white">
                  <div>
                    <h3>Format & Style</h3>
                    <p>
                      To create visually impressive and emotionally connecting videos, we select suitable formats and styles. Depending on the objective, it could be a professional explainer video or a 3D entertaining promotional video.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row appr-pro-anime-row-main">
            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-white">
                <div>
                  <h3>Adaptability</h3>
                  <p>
                    Expect the unexpected. We believe in this and are, thus, forever ready to accept challenges that pop up during our process. The end result is always remarkable and something we feel proud of.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className="app-pro-div app-pro-div-gray">
                <div>
                  <h3>Creative Editing</h3>
                  <p>
                    Our creative video editors at our animation studio in Noida apply their skills effectively to turn your raw video footage into a visually impressive story. The aim is to bring your initial concept vision to life.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-white">
                <div>
                  <h3>Music & Sound Design</h3>
                  <p>
                    Without music and sound design, your video will lack something crucial - the feel. We know this, and therefore, we create music and sound design that sets the mood and adds value to your story.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-gray">
                <div>
                  <h3>Quality Assurance & Delivery</h3>
                  <p>
                    Quality and timely service - these are two of the most vital guiding principles of our company. As an animation company in Noida, we strive to deliver exactly what you want, and on time!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Power of Animation */}
      <section className="power-of-animation">
        <div className="container">
          <div className="row text-center power-of-animation-row">
            <h3>The Power of <span className="every-pr"> Animation</span></h3>
            <p>Spark Interest & Build Engagement</p>
            <div className="col-12 col-md-6 ">
              <div className="horror-image-col">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2019/02/1-2.jpg"
                  className="img-fluid horror-img"
                ></img>
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2019/02/11.jpg"
                  className="img-fluid normal-img"
                ></img>
              </div>
            </div>

            <div className="col-12 col-md-6  ">
              <div className="horror-image-col">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2019/02/2-2.jpg"
                  className="img-fluid horror-img"
                ></img>
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2019/02/22.jpg"
                  className="img-fluid normal-img"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Engagement  User Conversion */}

      <section className="user-engagement">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-5">
              <div className="user-engagement-div user-engagement-div-sh">
                <div className="user-eng-up-div">
                  <img
                    className="user-eng-svg-img"
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                  ></img>
                  <h4>
                    <span className="user-engagement-number">
                      36% <br />
                    </span>{" "}
                    INCREASE
                  </h4>
                </div>
                <h3>User Engagement</h3>
                <p>
                  Users are more inclined to engage with and trust a business
                  after watching animation videos. The engagement can increase
                  2X on interactive videos compared to static ones.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-2">
              <div className="user-engagement-div">
                <img
                  src="http://dndesigns.co.in/wp-content/uploads/2025/07/172356855_ae84189b-ee2b-40e9-8ad6-4b3c9585df84.jpg"
                  className="user-engagement-div-mid-img"
                ></img>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-5">
              <div className="user-engagement-div user-engagement-div-sh">
                <div className="user-eng-up-div">
                  <img
                    className="user-eng-svg-img"
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                  ></img>
                  <h4>
                    <span className="user-engagement-number">
                      31% <br />
                    </span>{" "}
                    INCREASE
                  </h4>
                </div>
                <h3>User Conversion</h3>
                <p>
                 Statistics say that the audience retains more than 90% of the information when they consume it in video form. A staggering 85% are more likely to make a purchase, too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faqs */}

      <section className="faqs">
        <Faqs title="CONTACT FAQs" leftFaqs={leftFaqs} rightFaqs={rightFaqs} />
      </section>

      {/* Form */}
      <Form FormHead={FormHead} FormPara={FormPara} pageName={pageName}/>
    </div>
  );
}

export default page;
