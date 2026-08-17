import React from 'react'
import "./wellness-branding.css"
import Breadcrumb from '@/Components/BreadCrumb/BreadCrumb'
import IndustriesPageHero from '@/Components/IndustriesPageHero/IndustriesPageHero'
import Link from 'next/link';
import StrategicFrameworkFNB from '@/Components/StrategicFrameworkFNB/StrategicFrameworkFNB';
import Faqs from '@/Components/Faqs/Faqs';
import Form from '@/Components/Form/Form';
import StandAlonePackaging from '@/Components/StandAlonePackaging/StandAlonePackaging';
import AOSProvider from '@/Components/AosProvider/AosProvider';
import TalkToUs from '@/Components/TalkToUs/TalkToUs';

function page() {
  // hero banner data
  let heroLabel = "Building Brands People Try Once And Trust Forever";
  let heroHead = "Health and Wellness Branding Agency";
  let heroParaDesc =
    "In wellness, nobody buys the first time because of how beautiful your brand looks. They buy because something inside them believes this will actually work. That belief doesn't happen by accident. The health and wellness industry is crowded, over-claimed and quietly sceptical. Most buyers have been let down before, so every label, every shade of green and every line of copy on a packaging either earns confidence or loses it in seconds. This is what makes branding for health and wellness so different from branding anything else. DN Designs works as a health and wellness branding agency that make people notice first and then earn trust that lasts. ";


     let phaseLabel = "Our Process";
  let phaseHead = (<>How We Approach Wellness <span className="every-pr">Branding Projects</span></>);

  const phases = [
    {
      number: "01",
      label: "PHASE ONE",
      title: "Research & Discovery",
      desc: "We start by understanding your product, your category and your actual competitors, not just the obvious ones, so every decision afterwards is rooted in research rather than guesswork. ",
      // points: [
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",

      // ],
    },
    {
      number: "02",
      label: "PHASE TWO",
      title: "Strategy & Positioning ",
      desc: "We define what your brand stands for and who it's meant for, specific enough that saying no to the wrong customer becomes as clear as saying yes to the right one.",
      // points: [
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      // ],
    },

    {
      number: "03",
      label: "PHASE THREE",
      title: "Identity Design & Development",
      desc: "Name, visual language and brand voice are built together, so the brand feels like one coherent decision rather than several disconnected ones stitched together later.",
      // points: [
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      // ],
    },

    {
      number: "04",
      label: "PHASE FOUR",
      title: "Application",
      desc: "We take the identity across packaging, digital, and print, testing how it holds up where customers actually encounter it, not just in a presentation deck.",
      // points: [
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      // ],
    },

    {
      number: "05",
      label: "PHASE FIVE",
      title: "Launch Support ",
      desc: "Once everything is ready, it’s time for launch. We stay involved through go-to-market, refining messaging and assets as real feedback comes in.",
      // points: [
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      //   "COMPETITIVE LANDSCAPE MAPPING",
      // ],
    },
  ];

  // standalone
  const cards = [
    {
      id: 1,
      point: "01",
      title: "Pricing Power",
      description:
        "Strong branding lets wellness products hold premium pricing, because customers are paying for confidence, not just contents.",
      image:
        "https://dndesigns.co.in/uploads/pages/desktopfoodandbaverageshoverimageone.jpg",
    },
    {
      id: 2,
      point: "02",
      title: "Loyalty",
      description:
        "Brands with genuine positioning keep customers past the first purchase, because people stay loyal to what feels like it understands them.",
      image:
        "https://dndesigns.co.in/uploads/pages/desktopfoodandbaverageshoverimagefour.jpg",
    },
    {
      id: 3,
      point: "03",
      title: "Trust",
      description:
        "Clear, consistent branding closes the trust gap. Consumers see a brand that’s reliable, credible and trustworthy.",
      image:
        "https://dndesigns.co.in/uploads/pages/desktopfoodandbaverageshoverimagethree.jpg",
    },
    {
      id: 4,
      point: "04",
      title: "Growth",
      description:
        "A brand built to scale means every new product, market or channel builds on existing trust, instead of starting from zero each time.",
      image:
        "https://dndesigns.co.in/uploads/pages/desktopfoodandbaverageshoverimagetwo.jpg",
    }
  ];

  const mobileCrads = [
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/mobilefoodandbaverageshoverimageone.jpg",
    },
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/mobilefoodandbaverageshoverimagefour.jpg",
    },
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/mobilefoodandbaverageshoverimagethree.jpg",
    },
    {
      mobileImage:
        "https://dndesigns.co.in/uploads/pages/mobilefoodandbaverageshoverimagetwo.jpg",
    },
  ];

  const leftFaqs = [
    {
      question: "What is wellness branding? ",
      answer:
        "Wellness branding is the process of shaping how a health, beauty or nutrition product is perceived through its name, visuals, tone and packaging, so that it earns trust before a customer has tried it.",
    },
    {
      question:
        "Why does a supplement or beverage brand need branding at all if the product is strong? ",
      answer:
        "Because it’s about health and wellness. Consumers are naturally cautious about what they put on and in their body. They need to trust it, and that’s the whole point of branding in this space. It is the evidence customers use to decide whether the product is trustworthy and worth the risk of a first purchase.",
    },
    {
      question:
        "How is wellness branding different from branding in other industries? ",
      answer: 
          "The stakes feel higher here. People are putting this product in or on their body, so scepticism runs deeper, and claims get scrutinised in a way a fashion or tech brand rarely faces."
        
    },

    {
      question:
        "What does a wellness branding agency actually deliver? ",
      answer:
        "Typically strategy, identity, packaging and communication design, though the mix depends on the brand's stage. A launch-stage brand has different priorities than an established brand entering a new market.",
    },

    {
      question:
        "How long does a full branding project usually take? ",
      answer:
        "Most projects run over a month. However, the exact timeline may be longer depending on the scope of work. ",
    },
    {
      question:
        "Can an existing wellness brand be rebranded without losing loyal customers? ",
      answer:
        "Yes, an existing wellness brand can definitely be rebranded, keeping its current customer base intact. ",
    },
  ];

  const rightFaqs = [
    {
      question: "What makes luxury wellness branding different from mass-market branding? ",
      answer:
        "Restraint, mostly. Luxury wellness branding relies on fewer claims stated with more confidence, premium materials, and a visual language that signals exclusivity rather than volume.",
    },
    {
      question:
        "Do beauty and wellness branding agency handle packaging compliance, too? ",
      answer:
        "Beauty and wellness branding agency focus on designing packaging which is in compliance with regulatory requirements like mandatory disclosures, ingredient listings, and labeling guidelines. The focus is on making the packaging legally complaint. However, for regulatory approvals, you will need to collaborate with a certified regulatory consultant.  ",
    },

    {
      question: "What makes a branding agency the right fit for a luxury wellness brand? ",
      answer:
        "Category expertise and experience matters. Ask to see their previous work in the space, and assess if their design exudes luxury and premiumness through every element. Credibility and trustworthiness are obviously important factors to assess in their work.",
    },

    {
      question:
        "Does modern wellness branding mean minimal design only? ",
      answer:
        "Not necessarily. Minimal design in modern wellness branding is the underlying principle for clarity and calmness but a busier design still can feel modern if element hierarchy is correctly aligned with brand identity. ",
    },

    {
      question:
        "How often should a wellness brand refresh its identity? ",
      answer: 
          "There's no fixed timeline. The better signal is when messaging starts feeling generic against newer competitors, or when the brand has outgrown the story it launched with."
        
    },
  ];

  // form section content
  const FormHead = "Let's Talk Over a Cup of Coffee";
  const FormPara =
    "Somewhere between your formula and your first sale, there's a brand waiting to be built properly. You've noticed the gap already, that's likely the reason why you're reading this. Wellness branding services aren't about a prettier logo, they're about giving customers a reason to choose you over the next option on the shelf. DN Designs has spent years inside this category, working through the regulatory layouts, the sceptical buyers, the crowded feeds. So grab a coffee, tell us where your brand stands today, and let's work out what it needs to earn next.";


  return (
    <div>
      {/* breadcrump */}
      <Breadcrumb/>

      {/* hero section */}
       <IndustriesPageHero
        heroLabel={heroLabel}
        heroHead={heroHead}
        heroParaDesc={heroParaDesc}
      />


       {/* work portfolio */}
      <section className="portfolio">
        <div className="container">
          <h2 className="text-center">
            Our<span className="every-pr"> Work Portfolio</span>
          </h2>

          <div className="row port-row">
            {/* <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
                    <div className="port-div">
                      <img src="https://dndesigns.co.in/uploads/pages/Untitled-sunny-singh.webp" className="img-fluid" />
                      <div className="port-content">
                        <div className="potfolio-div-btns">
                          <div className="port-div-headg">
                            <h3>Pureluxe</h3>
                          </div>
                          <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Brand Identity</h4>
                            <h4 className="our-port-btn">Label Design</h4>
                          </div>
                        </div>
      
                        <p>
                          For the protein bar brand ‘Pureluxe’, we crafted a premium packaging design to appeal to its health-conscious and taste-driven consumers. The design captures the essence of indulgence and sophistication while balancing nutrition and flavour appeal. Each of the three variants reflects a modern and premium identity and creates a strong shelf presence.
                        </p>
                      </div>
                    </div>
                  </div> */}

            <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div">
              <div className="port-div">
                <video
                  src="https://dndesigns.co.in/uploads/videos/enli.mp4"
                  width="100%"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className=""
                />
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Nectarpure</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Label Design</h4>
                      <h4 className="our-port-btn">Brand Identity</h4>
                    </div>
                  </div>

                  <p>
                    Whey protein brand. We crafted a clean, minimal identity and
                    label design to position it as a lifestyle product, not
                    another gym supplement.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div">
              <div className="port-div">
                <video
                  src="https://dndesigns.co.in/uploads/videos/3ewhbhfderbj.mp4"
                  width="100%"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className=""
                />
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Let’s Supp</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Packaging</h4>
                      <h4 className="our-port-btn">Web Design</h4>
                    </div>
                  </div>

                  <p>
                    Nutraceutical Brand. We built a cohesive identity,
                    packaging, and digital design to reflect simplicity,
                    consistency, and care - inspiring trust and making wellness
                    a daily ritual.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
                    <div className="port-div">
                      <img src="https://dndesigns.co.in/uploads/pages/fluke.webp" className="img-fluid" />
                      <div className="port-content">
                        <div className="potfolio-div-btns">
                          <div className="port-div-headg">
                            <h3>Fluke</h3>
                          </div>
                          <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Brand Identity</h4>
                            <h4 className="our-port-btn">Label Design</h4>
                          </div>
                        </div>
      
                        <p>
                          For Fluke, a functional beverage brand, we created a clean, premium can design to resonate with its young & health-conscious audience. Through our design, we clearly highlighted key elements such as logo, functional benefits & flavour cues (accent colours behind the logo). With a white background, we created space for every element to shine.
                        </p>
                      </div>
                    </div>
                  </div> */}

            <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
              <div className="port-div">
                <img
                  src="https://dndesigns.co.in/uploads/pages/nwjkebhdn.webp"
                  className="img-fluid"
                />
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Wlue's</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Brand Identity</h4>
                      <h4 className="our-port-btn">Packaging</h4>
                    </div>
                  </div>

                  <p>
                    Makhana brand. With a retro superhero-inspired identity and
                    packaging, we gave it main-character energy, making it a Gen
                    Z favourite and the snack aisle hero.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row port-row">
            <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
              <div className="port-div">
                {/* <img src="https://dndesigns.co.in/uploads/pages/thames-5.webp" className="img-fluid" /> */}
                <video
                  src="https://dndesigns.co.in/uploads/videos/fmcg3sistersvideo.mp4"
                  width="100%"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className=""
                />
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>1 AM</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Brand Identity</h4>
                      <h4 className="our-port-btn">Label Design</h4>
                    </div>
                  </div>

                  <p>
                    Canned Cold Coffee Brand. From logo and identity to website
                    and social media, we brewed a bold and pretty cool brand
                    that Gen Z love vibing with.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
                    <div className="port-div">
                      <img src="https://dndesigns.co.in/uploads/pages/nwjkebhdn.webp" className="img-fluid" />
                      <div className="port-content">
                        <div className="potfolio-div-btns">
                          <div className="port-div-headg">
                            <h3>Wlue's</h3>
                          </div>
                          <div className="our-port-btn-up">
                            <h4 className="our-port-btn">Brand Identity</h4>
                            <h4 className="our-port-btn">Packaging</h4>
                          </div>
                        </div>
      
                        <p>
                          Makhana brand Wlue’s wanted to establish itself as a premium snacking brand globally. Its target audience were Gen Zers. Accordingly, we created colourful and eye-catching packaging designs for all its variants to appeal to its young and fun-loving audience.
                        </p>
                      </div>
                    </div>
                  </div> */}

            <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div ">
              <div className="port-div">
                <img
                  src="https://dndesigns.co.in/uploads/pages/Untitled-sunny-singh.webp"
                  className="img-fluid"
                />
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>3 Sisters</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Label Design</h4>
                      <h4 className="our-port-btn">Web Design</h4>
                    </div>
                  </div>

                  <p>
                    Premium Non-Alcoholic Drinks Brand. We built the digital
                    home for a full lineup of their non-alcoholic beverages that
                    are anything but ordinary.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4 px-2 port-main-div">
              <div className="port-div">
                <video
                  src="https://at1am.com/wp-content/uploads/2026/03/IMG_5792_1.mp4"
                  width="100%"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className=""
                />
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>iOrganic</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Label Design</h4>
                      <h4 className="our-port-btn">Packaging</h4>
                    </div>
                  </div>

                  <p>
                    Organic Food & Dairy brand. We brought a refined,
                    nature-inspired aesthetic to their festive and corporate
                    gift boxes, ensuring the unboxing experience is as special
                    as what's inside.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



       {/* why f and b */}
            <section className="why-fandb-section">
              <div className="container">
              <h2 className="why-fandb-section-head">Understanding the Health &  <span className="why-fandb-section-head-span">Wellness Industry 
</span></h2>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                    <div className="why-fandb-section-col">
                      <p className="why-fandb-section-col-para">The wellness industry looks appealing from the outside, but building a credible brand inside is genuinely difficult. Every product claims to heal, boost, detox, or transform, and customers have grown sceptical of language that promises too much. A supplement brand and a skincare brand both face the same problem, proving genuine efficiency without regulatory language holding the whole thing back. Add in the fact that customers are trusting brands with something deeply personal, their health. A single unclear label or vague claim can end a sale before it starts.</p>
                    </div>
                  </div>

                   <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                    <div className="why-fandb-section-col">
                      <p className="why-fandb-section-col-para">This is exactly why custom branding for health and wellness businesses needs a different approach altogether, one built around credibility rather than hype. A wellness branding agency that understands this space treats every claim, ingredient story, and visual choice as part of building trust, not just decoration. Packaging has to look premium and still read as honest. Messaging has to feel warm and still stay compliant. Get this balance right, and a brand stops being just another supplement or drink on the shelf; it becomes something people actually believe in.</p>
                    </div>
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
                  What Actually Makes Health 
                  <span className="appr-pro-anime-main-head-span">
                    {" "}
                    & Wellness Brands Succeed
                  </span>
                </h2>
                {/* <p className="appr-pro-anime-main-para">
                  Great results are not achieved randomly. They need planning,
                  hard work, perseverance, and, when it comes to animated
                  videos, plenty of strategic vision and creativity as well.
                  That’s exactly what we do and what sets us apart.
                </p> */}
              </div>

              <div className="col-12 col-md-6 col-lg-3 mt-3">
                {/* <div className="app-pro-div app-pro-div-white">
                  <div>
                    <h3>Goal & Message</h3>
                    <p>
                      Before doing anything else, we establish our core
                      objectives - what do we want to achieve and what do we
                      want to communicate through the video.
                    </p>
                  </div>
                </div> */}
              </div>

              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <div className=" app-pro-div app-pro-div-white">
                  <div>
                    <h3>Clarity Over Cleverness</h3>
                    <p>
                      The brands that grow fastest in this space are the ones whose packaging tells you exactly what's inside and why it matters, in under three seconds.
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
                  <h3>Consistency Across Every Touchpoint </h3>
                  <p>
                   Wellness branding earns trust slowly, so a website, a product page and an Instagram grid all need to stay consistent to build and retain trust.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className="app-pro-div app-pro-div-gray">
                <div>
                  <h3>A Point Of View, Not Just A Product</h3>
                  <p>
                    Holistic wellness branding gives a brand something to stand for beyond ingredients, whether that's transparency, sustainability, or a philosophy.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-white">
                <div>
                  <h3>Design That Matches The Promise</h3>
                  <p>
                    A premium wellness brand with cheap-looking visuals will always underperform, because in wellness, packaging is read as a proxy for quality.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-gray">
                <div>
                  <h3>Language People Actually Trust</h3>
                  <p>
                   Overclaiming is the fastest way to lose a wellness buyer for good, so the best brands say less, but say it right and more convincingly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


       {/* FMCG Industries We Brand */}
      <section className="fmcg-industries-we-section">
        <div className="container">
        <div className="fmcg-industries-head-content">
          <h2 className="fmcg-industries-head">
            Industries We {" "}
            <span className="fmcg-industries-head-span">Serve</span>
          </h2>
          </div>

          <div className="fmcg-industries-row-div">
          {/* 1 */}
            <div className="fmcg-industries-single-col-div">
              <img src="https://dndesigns.co.in/uploads/pages/fmcgfoodandfirsticon.svg" className="fmcg-industries-icon"></img>
              <p className="fmcg-industries-para">Nutraceuticals</p>
            </div>
            {/* 2 */}
            <div className="fmcg-industries-single-col-div">
              <img src="https://dndesigns.co.in/uploads/pages/fmcgfoodandfirsticon.svg" className="fmcg-industries-icon"></img>
              <p className="fmcg-industries-para">Supplements</p>
            </div>
            {/* 3 */}
            <div className="fmcg-industries-single-col-div">
              <img src="https://dndesigns.co.in/uploads/pages/fmcgfoodandfirsticon.svg" className="fmcg-industries-icon"></img>
              <p className="fmcg-industries-para">Functional Beverages</p>
            </div>
            {/* 4 */}
            <div className="fmcg-industries-single-col-div">
              <img src="https://dndesigns.co.in/uploads/pages/fmcgfoodandfirsticon.svg" className="fmcg-industries-icon"></img>
              <p className="fmcg-industries-para">Healthy Snacks</p>
            </div>
            {/* 5 */}
            <div className="fmcg-industries-single-col-div">
              <img src="https://dndesigns.co.in/uploads/pages/fmcgfoodandfirsticon.svg" className="fmcg-industries-icon"></img>
              <p className="fmcg-industries-para">Organic Foods</p>
            </div>
            {/* 6 */}
            <div className="fmcg-industries-single-col-div">
              <img src="https://dndesigns.co.in/uploads/pages/fmcgfoodandfirsticon.svg" className="fmcg-industries-icon"></img>
              <p className="fmcg-industries-para">Ayurveda and Herbal Products</p>
            </div>
            {/* 7 */}
            <div className="fmcg-industries-single-col-div">
              <img src="https://dndesigns.co.in/uploads/pages/fmcgfoodandfirsticon.svg" className="fmcg-industries-icon"></img>
              <p className="fmcg-industries-para">Sports Nutrition</p>
            </div>
            {/* 8 */}
            <div className="fmcg-industries-single-col-div">
              <img src="https://dndesigns.co.in/uploads/pages/fmcgfoodandfirsticon.svg" className="fmcg-industries-icon"></img>
              <p className="fmcg-industries-para">Skincare and Personal Care</p>
            </div>
            {/* 9 */}
            <div className="fmcg-industries-single-col-div">
              <img src="https://dndesigns.co.in/uploads/pages/fmcgfoodandfirsticon.svg" className="fmcg-industries-icon"></img>
              <p className="fmcg-industries-para">Medical Nutrition</p>
            </div>
            {/* 10 */}
            <div className="fmcg-industries-single-col-div">
              <img src="https://dndesigns.co.in/uploads/pages/fmcgfoodandfirsticon.svg" className="fmcg-industries-icon"></img>
              <p className="fmcg-industries-para">Wellness Startups</p>
            </div>
          </div>
        </div>
      </section>


      {/* everything-a-food */}
      <section className="everything-a-food-section">
        <div className="container">
          <div className="everything-a-food-section-head-div">
            <h2 className="everything-a-food-section-head">
              Our Wellness Branding {" "}
              <span className="everything-a-food-section-head-span">
                {" "}
                Services 
              </span>
            </h2>
          </div>

          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
              <Link href="/brand-strategy">
                <div className="everything-a-food-section-col">
                  <div className="everything-a-food-section-col-content-div">
                    <p className="everything-a-food-section-col-content-div-para-label">
                      01 / Identity
                    </p>
                    <h2 className="everything-a-food-section-col-content-div-head">
                      Brand Identity Design
                    </h2>
                    <p className="everything-a-food-section-col-content-div-para-desc">
                      An FMCG brand's identity has to work at thumbnail size on
                      an app and at full size on a shelf. We build identity
                      systems that hold their shape across both, so recognition
                      does not drop just because the format changes.
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/foddandbeveragesneedtwo.jpg"
                    className="img-fluid everything-a-food-section-col-img"
                  ></img>
                </div>
              </Link>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
              <Link href="/brand-identity-design-services">
                <div className="everything-a-food-section-col">
                  <div className="everything-a-food-section-col-content-div">
                    <p className="everything-a-food-section-col-content-div-para-label">
                      02 / Positioning
                    </p>
                    <h2 className="everything-a-food-section-col-content-div-head">
                      Brand Positioning
                    </h2>
                    <p className="everything-a-food-section-col-content-div-para-desc">
                      In a crowded category, trying to appeal to everyone
                      usually means being memorable to no one. This is the core
                      of FMCG branding strategy. So, before designing, we
                      finalise what a brand can credibly claim and who it is
                      actually for.
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/foddandbeveragesneedthree.jpg"
                    className="img-fluid everything-a-food-section-col-img"
                  ></img>
                </div>
              </Link>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
              <Link href="/packaging-design">
                <div className="everything-a-food-section-col">
                  <div className="everything-a-food-section-col-content-div">
                    <p className="everything-a-food-section-col-content-div-para-label">
                      03 / Packaging
                    </p>
                    <h2 className="everything-a-food-section-col-content-div-head">
                      Packaging Design
                    </h2>
                    <p className="everything-a-food-section-col-content-div-para-desc">
                      As competition intensifies across digital and retail
                      shelves, FMCG packaging design carries more
                      responsibilities than ever. We design packaging that grabs
                      attention, builds buzz, and turns browsers into
                      buyers.{" "}
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/foddandbeveragesneedfour.jpg"
                    className="img-fluid everything-a-food-section-col-img"
                  ></img>
                </div>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
              <Link href="/branding">
                <div className="everything-a-food-section-col">
                  <div className="everything-a-food-section-col-content-div">
                    <p className="everything-a-food-section-col-content-div-para-label">
                      04 / Website
                    </p>
                    <h2 className="everything-a-food-section-col-content-div-head">
                      Website Design
                    </h2>
                    <p className="everything-a-food-section-col-content-div-para-desc">
                      For many FMCG brands, the website is where a first-time
                      buyer checks credibility before trusting an app listing or
                      a shelf pack. We build sites that turn that curiosity into
                      a first purchase.
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/foddandbeveragesneedone.jpeg"
                    className="img-fluid everything-a-food-section-col-img"
                  ></img>
                </div>
              </Link>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
              <Link href="/web-designing-services-in-india">
                <div className="everything-a-food-section-col">
                  <div className="everything-a-food-section-col-content-div">
                    <p className="everything-a-food-section-col-content-div-para-label">
                      05 / Visual Asset
                    </p>
                    <h2 className="everything-a-food-section-col-content-div-head">
                      Visual Asset Creation
                    </h2>
                    <p className="everything-a-food-section-col-content-div-para-desc">
                      Visuals have the power to capture attention and engage way
                      more than words ever can. We bring your FMCG products to
                      life with our professional photography and video content,
                      so they appeal and sell more across platforms.
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/foddandbeveragesneedsix.jpg"
                    className="img-fluid everything-a-food-section-col-img"
                  ></img>
                </div>
              </Link>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
              <Link href="/go-to-market-strategy">
                <div className="everything-a-food-section-col">
                  <div className="everything-a-food-section-col-content-div">
                    <p className="everything-a-food-section-col-content-div-para-label">
                      06 / GTM
                    </p>
                    <h2 className="everything-a-food-section-col-content-div-head">
                      GTM Strategy
                    </h2>
                    <p className="everything-a-food-section-col-content-div-para-desc">
                      Launching or relaunching an FMCG product means knowing
                      exactly which channels, listings and retail formats matter
                      first. We build GTM plans around how the category actually
                      moves, not a generic launch checklist.
                    </p>
                  </div>
                  <img
                    src="https://dndesigns.co.in/uploads/pages/foddandbeveragesneedfive.jpg"
                    className="img-fluid everything-a-food-section-col-img"
                  ></img>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>



        {/* OUR STRATEGIC FRAMEWORK desktop*/}
      <div className="fnb-our-framework-dektop">
        <StrategicFrameworkFNB
          phases={phases}
          phaseLabel={phaseLabel}
          phaseHead={phaseHead}
        />
      </div>

      {/* OUR STRATEGIC FRAMEWORK mobile*/}
      <section className="our-stregetic-framework fnb-our-framework-mobile">
        <div className="container">
          <div className="our-stregetic-framework-head-content-div">
            <p className="our-stregetic-framework-label-para">Our Process</p>
            <h2 className="our-stregetic-framework-head">
             How We Approach Wellness {" "}
              <span className="our-stregetic-framework-head-span">
                Branding Projects{" "}
              </span>
            </h2>
          </div>

          {/* phase 1 */}
          <AOSProvider>
            <div data-aos="fade-right" data-aos-duration="1500">
              <div className="row our-stregetic-framework-row">
                <div className="col">
                  <div className="our-stregetic-framework-col-content-div">
                    <p className="our-stregetic-framework-col-content-div-label-para">
                      PHASE ONE
                    </p>
                    <h2 className="our-stregetic-framework-col-content-div-head">
                      Research & Discovery
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                    We start by understanding your product, your category and your actual competitors, not just the obvious ones, so every decision afterwards is rooted in research rather than guesswork.
                    </p>
                    {/* <ul className="our-stregetic-framework-col-content-div-unorderd-list">
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                              </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </AOSProvider>

          {/* phase 2 */}
          <AOSProvider>
            <div data-aos="fade-left" data-aos-duration="1500">
              <div className="row our-stregetic-framework-row">
                <div className="col">
                  <div className="our-stregetic-framework-col-content-div">
                    <p className="our-stregetic-framework-col-content-div-label-para">
                      PHASE TWO
                    </p>
                    <h2 className="our-stregetic-framework-col-content-div-head">
                     Strategy & Positioning 
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                     We define what your brand stands for and who it's meant for, specific enough that saying no to the wrong customer becomes as clear as saying yes to the right one.
                    </p>
                    {/* <ul className="our-stregetic-framework-col-content-div-unorderd-list">
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                              </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </AOSProvider>
          {/* phase 3 */}
          <AOSProvider>
            <div data-aos="fade-right" data-aos-duration="1500">
              <div className="row our-stregetic-framework-row">
                <div className="col">
                  <div className="our-stregetic-framework-col-content-div">
                    <p className="our-stregetic-framework-col-content-div-label-para">
                      PHASE THREE
                    </p>
                    <h2 className="our-stregetic-framework-col-content-div-head">
                      Identity Design & Development
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                     Name, visual language and brand voice are built together, so the brand feels like one coherent decision rather than several disconnected ones stitched together later.
                    </p>
                    {/* <ul className="our-stregetic-framework-col-content-div-unorderd-list">
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                              </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </AOSProvider>

          {/* phase 4 */}
          <AOSProvider>
            <div data-aos="fade-left" data-aos-duration="1500">
              <div className="row our-stregetic-framework-row">
                <div className="col">
                  <div className="our-stregetic-framework-col-content-div">
                    <p className="our-stregetic-framework-col-content-div-label-para">
                      PHASE FOUR
                    </p>
                    <h2 className="our-stregetic-framework-col-content-div-head">
                      Application
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                    We take the identity across packaging, digital, and print, testing how it holds up where customers actually encounter it, not just in a presentation deck.
                    </p>
                    {/* <ul className="our-stregetic-framework-col-content-div-unorderd-list">
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                              </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </AOSProvider>

          {/* phase 5 */}
          <AOSProvider>
            <div data-aos="fade-right" data-aos-duration="1500">
              <div className="row our-stregetic-framework-row">
                <div className="col">
                  <div className="our-stregetic-framework-col-content-div">
                    <p className="our-stregetic-framework-col-content-div-label-para">
                      PHASE FIVE
                    </p>
                    <h2 className="our-stregetic-framework-col-content-div-head">
                      Launch Support
                    </h2>
                    <p className="our-stregetic-framework-col-content-div-desc-para">
                     Once everything is ready, it’s time for launch. We stay involved through go-to-market, refining messaging and assets as real feedback comes in.
                    </p>
                    {/* <ul className="our-stregetic-framework-col-content-div-unorderd-list">
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                                <li className="our-stregetic-framework-col-content-div-list-item">COMPETITIVE LANDSCAPE MAPPING</li>
                              </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </AOSProvider>
        </div>
      </section>

      {/* stand alone hover section */}
      <section className="standalone-sec-pac">
        <div className="container">
          <div className="row headg-row-div">
            <h2 className="text-center headg">
              The Impact Of Great 
              <span className="every-pr">
                {" "}
              Wellness Branding
              </span>{" "}
            </h2>
          </div>
        </div>
        <StandAlonePackaging cards={cards} mobileCrads={mobileCrads} />
      </section>

      {/* Why DN Designs? desktop*/}
      <section className="why-dn-designs">
        <div className="container">
          <div className="row">
            <div className="div-of-abs-img">
              <img
                src={
                  "https://dndesigns.co.in/uploads/pages/creative_agency_5.jpg"
                }
                alt="why-dn-designs"
                className="abs-img abs-img-1"
              />

              <img
                src={
                  "https://dndesigns.co.in/uploads/pages/creative_agency_1.jpeg"
                }
                alt="why-dn-designs"
                className="abs-img abs-img-2"
              />

              <img
                src={
                  "https://dndesigns.co.in/uploads/pages/creative_agency_2.jpg"
                }
                alt="why-dn-designs"
                className="abs-img abs-img-3"
              />

              <img
                src={
                  "https://dndesigns.co.in/uploads/pages/creative_agency_3.jpg"
                }
                alt="why-dn-designs"
                className="abs-img abs-img-4"
              />

              <img
                src={
                  "https://dndesigns.co.in/uploads/pages/creative_agency_4.jpg"
                }
                alt="why-dn-designs"
                className="abs-img abs-img-5"
              />
            </div>
          </div>

          <div className="row why-dn-sec-content-row">
            <div className="col-12 col-lg-6">
              <h2 className="why-dn-head">Why Work With Us? </h2>
              <p className="why-dn-para">
                We've worked across nutraceuticals, functional beverages, Ayurveda and personal care brands, building everything from first-time identities to full packaging and website systems. As one of the most consistent branding agencies working with health and wellness founders, our practice sits at the intersection of strategy and design, the kind of holistic wellness branding that treats a formula, a founder's story and a shelf full of competitors as one connected challenge to solve. 
              </p>
            </div>

            <div className="col-12 col-lg-6 why-dn-sec-content-btn-col">
              <TalkToUs />
            </div>
          </div>
        </div>
      </section>

      {/* Why DN Designs? mobile*/}

      <div className="why-dn-designs-mobile">
        <div className="container">
          <div className="why-dn-designs-mobile-content">
            <h2 className="why-dn-designs-mobile-head">Why Work With Us ?</h2>
            <p className="why-dn-designs-mobile-para">
              We've worked across nutraceuticals, functional beverages, Ayurveda and personal care brands, building everything from first-time identities to full packaging and website systems. As one of the most consistent branding agencies working with health and wellness founders, our practice sits at the intersection of strategy and design, the kind of holistic wellness branding that treats a formula, a founder's story and a shelf full of competitors as one connected challenge to solve.
            </p>
            <TalkToUs />
          </div>

          <div className="row">
            <div className="col-6">
              <img
                src={
                  "https://dndesigns.co.in/uploads/pages/creative_agency_5.jpg"
                }
                alt="why-dn-designs"
                className="img-fluid"
              />
            </div>
            <div className="col-6">
              <img
                src={"https://dndesigns.co.in/uploads/pages/2_mob.jpg"}
                alt="why-dn-designs"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="row why-dn-designs-mobile-mid-div">
            <div className="col-12">
              <img
                src={
                  "https://dndesigns.co.in/uploads/pages/creative_agency_1.jpeg"
                }
                alt="why-dn-designs"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <img
                src={"https://dndesigns.co.in/uploads/pages/3_mob.jpg"}
                alt="why-dn-designs"
                className="img-fluid"
              />
            </div>
            <div className="col-6">
              <img
                src={"https://dndesigns.co.in/uploads/pages/4_mob.jpg"}
                alt="why-dn-designs"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      {/* faqs */}
      <section className="faqs">
        <Faqs title="CONTACT FAQs" leftFaqs={leftFaqs} rightFaqs={rightFaqs} />
      </section>

      {/* Form */}
      <Form FormHead={FormHead} FormPara={FormPara} />
      
      

    </div>
  )
}

export default page
