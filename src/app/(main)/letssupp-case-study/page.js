import React from "react";
export const dynamic = "force-dynamic";
export const revalidate = 0;
import "./lets-up-case-study.css";
import Image from "next/image";
import LetssuppAosCompFirst from "@/Components/LetssuppAosComp/LetssuppAosCompFirst";
import LetssuppAosCompSecond from "@/Components/LetssuppAosComp/LetssuppAosCompSecond";
import { notFound } from "next/navigation";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";

// meta tags
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("letssupp-case-study", null, false);
  } catch (error) {
    return {
      title: "Letssupp Case Study",
      robots: "noindex, nofollow",
    };
  }

  return {
    title: seo.metaTitle || seo.title,
    description: seo.metaDescription || seo.description,

    robots: seo.robotsTag || "index, follow",

    alternates: {
      canonical: seo.alternates?.canonical,
    },

    openGraph: {
      type: seo.openGraph?.type || "website",
      title: seo.openGraph?.title || seo.metaTitle,
      description: seo.openGraph?.description || seo.metaDescription,
      url: seo.openGraph?.url || seo.alternates?.canonical,
      images: seo.openGraph?.images?.length
        ? seo.openGraph.images.map((img) => ({
            url: img.url,
            alt: img.alt || seo.title,
            width: img.width || 1200,
            height: img.height || 630,
          }))
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: seo.twitter?.title || seo.metaTitle,
      description: seo.twitter?.description || seo.metaDescription,
      images: seo.twitter?.images?.length
        ? seo.twitter.images.map((img) => img.url)
        : [],
    },
  };
}
// ends here

async function page() {
  let imageUrl = "https://dndesigns.co.in/uploads/pages/";

  // ---
  await connectDB();
  let pageData;
  try {
    pageData = await getPageById("letssupp-case-study", null, true);
  } catch (error) {
    notFound();
  }

  if (!pageData) {
    notFound();
  }

  // ---  SCHEMA CLEANING LOGIC START ---
  let cleanSchema = "";
  if (pageData.headCode) {
    cleanSchema = pageData.headCode
      .replace(/<script.*?>/gi, "")
      .replace(/<\/script>/gi, "")
      .trim();
    if (cleanSchema.includes('""')) {
      cleanSchema = cleanSchema.replace(/""/g, '"');
    }
  }
  // --- SCHEMA CLEANING LOGIC END ---

   const TEXT = (<> <span className="marque-letsupfont">elevate </span>  <span className="marque-outfit"> your</span>,  {" "} {" "}<span className="marque-letsupfont"> wellness</span>  <span className="marque-outfit"> ritual</span></>);
  const COPIES = 8;

  return (
    <div>
      {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "letssupp-case-study"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}
      {/* hero section */}
      <section className="lets-up-hero">
        <div className="container-fluid p-0">
          <video
            src="https://dndesigns.co.in/uploads/videos/letsupCaseStudy.mp4"
            width="100%"
            autoPlay
            muted
            loop
            playsInline
            // className="enlitecasestudy-video"
          />
        </div>
      </section>

      {/* elevate your wellness ritual */}
      <section className="lets-up-elevate">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1 className="lets-up-elevate-h1">Let’s Supp</h1>
              <h2 className="lets-up-elevate-h2">
                Elevate Your Wellness Ritual
              </h2>
            </div>
            <div className="col-12 col-md-6 lets-up-elevate-btn">
              <div className="lets-up-elevate-btn-up-div">
                <span className="btn-1">Let’s Supp</span>
                <span className="btn-2">Branding</span>
                <span className="btn-3">Visual Identity</span>
              </div>

              <div className="lets-up-elevate-btn-down-div">
                <span className="btn-4">Packaging Design</span>
                <span className="btn-5">Nutraceutical</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* lets-up-first-image */}
      <section className="lets-up-first-image">
        <div className="container">
          <div className="row">
            <Image
              src="https://dndesigns.co.in/uploads/pages/letssupnewcase1.webp"
              className="responsive-img mt-5 lets-up-study-img1"
              alt="enlite case study page image"
              width={1500}
              height={1000}
            />
        
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="overview">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h3 className="overview-h3-head">INTRODUCTION</h3>
              <h2 className="overview-h3-main-head">Overview</h2>
              <p className="overview-content-para1-new">
                Building a ritual-driven nutraceutical brand
              </p>
              <div className="overview-btn-div">
                <span className="overview-btn-1">Nutraceuticals</span>
                <sapn className="overview-btn-2">Health Supplements</sapn>
                <span className="overview-btn-3">2025</span>
              </div>
            </div>

            <div className="col-12 col-lg-6 overview-content-col">
              <p className="overview-content-para1">
                "Wellness works best when it becomes a ritual."
              </p>

              <p className="overview-content-head">
                Let's Supp is a modern nutraceutical brand built around one core belief - wellness should not feel complicated. It should feel <span className="overview-content-head-span">simple, calm, and joyful.</span>
              </p>

              <p className="overview-content-head">
                In a category defined by <span className="overview-content-head-yellow">aggressive claims and visual overload,</span> the goal was to create a brand that feels trustworthy and clear. We developed a complete identity and brand system that transforms supplementation from a complex process into a simple, repeatable daily wellness ritual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* three image 1*/}
      <section className="three-image1">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <Image
                src={imageUrl + "letsupcase1.webp"}
                className="letsup-case-study-three-image-col-img responsive-img letssuppSaqureImg"
                alt="enlite case study page image"
                width={1500}
                height={1500}
                sizes="(max-width:767px) 100vw, 50vw"
              />
            </div>

            <div className="col-12 col-md-6">
              <Image
                src={imageUrl + "letsupcase2.webp"}
                className="letsup-case-study-three-image-col-img responsive-img letssuppSaqureImg"
                alt="enlite case study page image"
                width={1500}
                height={1500}
                sizes="(max-width:767px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Overview */}
          <section className="overview">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <h3 className="overview-h3-head">Where We Started</h3>
                  <h2 className="overview-h3-main-head">
                    Understanding The Problem
                  </h2>
                  <p className="overview-content-para1-new">
                    The Challenge We Were Given
                  </p>
                </div>

                <div className="col-12 col-lg-6 overview-content-col">
                  <p className="overview-content-head">
                   The nutraceutical landscape is saturated with <span className="overview-content-head-yellow">complex scientific information, exaggerated promises,</span> and visually overwhelming packaging systems.
                  </p>
                  <p className="overview-content-head">
                    Brands compete for attention through urgency rather than clarity, forcing consumers to evaluate and decode their choices constantly. They promise quick correction rather than long-term support. This creates friction, fatigue, anxiety and weak long-term recall.
                  </p>

                  <p className="overview-content-para1">
                    Let's Supp needed to stand apart - not by saying more, but by creating a system built on clarity, continuity, and quiet confidence.
                  </p>

                  <p className="overview-content-head">
                   The opportunity was to shift supplementation from reactive consumption to a clear, structured daily ritual.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="row">
          <div className="col-12">
            <Image
              src={imageUrl + "letsupcase4.webp"}
              className="responsive-img letsup-case-study-three-image-row-img letssuppThreeTwoImg"
              alt="enlite case study page image"
              width={1500}
              height={1000}
              sizes="(max-width:767px) 100vw, 100vw"
            />
          </div>
          </div>
        </div>
      </section>

     

      {/* lets-up-single-video */}
      <section className="">
        <div className="container">
         

          <div className="row">
           

            <div className="col-12 col-md-6">
              <Image
                src={imageUrl + "letsup8.webp"}
                className="letsup-case-study-three-image-col-img responsive-img letssuppSaqureImg"
                alt="enlite case study page image"
                width={1500}
                height={1500}
                sizes="(max-width:767px) 100vw, 50vw"
              />
            </div>
             <div className="col-12 col-md-6">
             

               <video
            src="https://dndesigns.co.in/uploads/videos/letssuonewcase2video.mp4"
            width="100%"
            autoPlay 
            muted
            loop
            playsInline
            className="enlitecasestudy-video"
          />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="overview">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h3 className="overview-h3-head">Strategic Insight</h3>
              <h2 className="overview-h3-main-head">
                Wellness Lives in Repetition
              </h2>
              <p className="overview-content-para1-new">
                The insight that became the foundation of the brand
              </p>
            </div>

            <div className="col-12 col-lg-6 overview-content-col">
              <p className="overview-content-head">
                Wellness is not defined by intensity. It is defined by <span className="overview-content-head-span">consistency.</span> The most meaningful health behaviours are quiet, repeated actions embedded into daily routine.
              </p>

              <p className="overview-content-para1">
                "Wellbeing is cumulative. It grows through small, repeated actions over time."
              </p>

              <p className="overview-content-head">
                This revealed an opportunity to <span className="overview-content-head-yellow">reposition supplementation</span> - not as a performance tool, but as a ritual. This insight became the strategic foundation of the entire brand, shaping every visual, verbal, and structural decision that followed.
              </p>

              <p className="overview-content-head">
                Our purpose became clear: to reduce decision fatigue and encourage consistency. When wellness becomes structured and predictable, it becomes sustainable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* three image 1*/}
      <section className="three-image1">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <video
                src="https://dndesigns.co.in/uploads/videos/lat4vid.mp4"
                width="100%"
                autoPlay
                muted
                loop
                playsInline
                className="enlitecasestudy-video"
              />
            </div>

            <div className="col-12 col-md-6">
              <Image
                src={imageUrl + "letsupcase12.jpg"}
                className="letsup-case-study-three-image-col-img responsive-img letssuppSaqureImg"
                alt="enlite case study page image"
                width={1500}
                height={1500}
                sizes="(max-width:767px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <video
                src="https://dndesigns.co.in/uploads/videos/lat3vid.mp4"
                width="100%"
                autoPlay
                muted
                loop
                playsInline
                className="enlitecasestudy-video"
              />
</div>
          </div>
        </div>
      </section>

      {/*  text and image section  */}
      <section className="text-image-section top-spacing">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              

              <h3 className="overview-h3-head">Brand Principles</h3>
              <h2 className="overview-h3-main-head">
                Three pillars that guide every decision
              </h2>
            </div>

            <div className="col-12 col-lg-6">
              <Image
                src="https://dndesigns.co.in/uploads/pages/letsuppnewcase3.webp"
                className="letsup-case-study-three-image-col-img responsive-img bigger-z-index letssuppSaqureImg"
                alt="enlite case study page image"
                width={1500}
                height={1500}
                sizes="(max-width:767px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* small-large-image section */}
      <section className="small-large-image-section">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-12 col-lg-8">
              <video
                src="https://dndesigns.co.in/uploads/videos/lat8vid.mp4"
                width="100%"
                autoPlay
                muted
                loop
                playsInline
                className="enlitecasestudy-video less-video-z-index"
              />
            </div>

            <div className="col-12 col-lg-4 small-large-image-small-col">
              <video
                src="https://dndesigns.co.in/uploads/videos/lat9vid.mp4"
                width="100%"
                autoPlay
                muted
                playsInline
                className="enlitecasestudy-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* infinity logo section */}
      <section className="small-large-image-section-infinity">
        <div className="container small-large-image-section-infinity-container">
          <div className="row small-large-image-section-infinity-row">
            <div className="col-12 col-md-8">
              <Image
                src={imageUrl + "Artboard-34.jpg"}
                className="letsup-case-study-three-image-col-img responsive-img letssuppThreeTwoImg"
                alt="enlite case study page image"
                width={1500}
                height={1500}
                sizes="(max-width:767px) 100vw, 100vw"
              />
            </div>

            <div className="col-12 col-md-4">
              <Image
                src={imageUrl + "ghfq.jpg"}
                className="letsup-case-study-three-image-col-img responsive-img letssupp-aspect-ratio-img"
                alt="enlite case study page image"
                width={1500}
                height={1500}
                sizes="(max-width:767px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="absolute-infinity-div">
            <Image
              src={imageUrl + "infintylogoletsup.png"}
              className="letsup-case-study-three-image-col-img responsive-img infinity-logo-img "
              alt="enlite case study page image "
              width={1500}
              height={1500}
              sizes="(max-width:767px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

 

      {/* Overview */}
      <section className="overview">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h3 className="overview-h3-head">Brand Idea</h3>
              <h2 className="overview-h3-main-head">
                The Idea of Continuity
              </h2>
              <p className="overview-content-para1-new">
               Continuity as the core visual language
              </p>
            </div>

            <div className="col-12 col-lg-6 overview-content-col">
              <p className="overview-content-head">
               To express the strategic insight and principles, we built the brand around a single idea: <span className="overview-content-head-span">continuity.</span> 
              </p>

              <p className="overview-content-para1">
                “The infinity form is not decoration. It is the structural logic of the entire identity."
              </p>

              <p className="overview-content-head">
                This idea is expressed through the <span className="overview-content-head-yellow">infinity</span> structure - representing uninterrupted nourishment, daily repetition, and sustained wellbeing. Rather than functioning as a decorative symbol, continuity became the structural logic governing the entire identity system.
              </p>

              <p className="overview-content-head">
                The organic, flowing structure creates a natural connection between the brand and the product, enabling information to move seamlessly within a unified system. The form represents three interlocked ideas: 
              </p>
                <p className="overview-content-para1-new-strong"><span className="overview-content-para1-new-strong-strong">Continuity</span> - Wellness as an ongoing journey.</p>
                <p className="overview-content-para1-new-strong"><span className="overview-content-para1-new-strong-strong">Ritual </span> -  Daily supplementation as a dependable habit.</p>
                  <p className="overview-content-para1-new-strong"><span className="overview-content-para1-new-strong-strong">Flow</span> - The natural rhythm of the body in harmony with ingredients and lifestyle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* two image 1*/}
      <section className="three-image1">
        <div className="container">
          <div className="row">
          <div className="col-12">
            <Image
              src={imageUrl + "caselets.webp"}
              className="responsive-img letsup-case-study-three-image-row-img letssuppThreeTwoImg"
              alt="enlite case study page image"
              width={1500}
              height={1000}
              sizes="(max-width:767px) 100vw, 100vw"
            />
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6">
              <Image
                src={imageUrl + "letscase17.jpg"}
                className="letsup-case-study-three-image-col-img responsive-img letssuppSaqureImg"
                alt="enlite case study page image"
                width={1500}
                height={1500}
                sizes="(max-width:767px) 100vw, 50vw"
              />
            </div>

            <div className="col-12 col-md-6">
              <Image
                src={imageUrl + "letsupcase18.jpg"}
                className="letsup-case-study-three-image-col-img responsive-img letssuppSaqureImg"
                alt="enlite case study page image"
                width={1500}
                height={1500}
                sizes="(max-width:767px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="overview">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h3 className="overview-h3-head">Visual Identity</h3>
              <h2 className="overview-h3-main-head">
                Design Aligned with Purpose
              </h2>
              <p className="overview-content-para1-new">
                A system built on flow, not fragments
              </p>
            </div>

            <div className="col-12 col-lg-6 overview-content-col">
              <p className="overview-content-head">
                The visual identity of Let's Supp is built on discipline rather than decoration. In a category saturated with exaggerated claims and high-contrast packaging, restraint becomes a strategic advantage.
              </p>
              <p className="overview-content-head">
                Every visual decision is guided by clarity, structure, and continuity. The system reduces visual noise, supports hierarchy, and creates a calm presence that reflects sustained wellbeing rather than urgency.
              </p>

              <p className="overview-content-para1">
                "Design is not used to impress. It is used to build trust over time."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clarity over */}
      <div className="clarity-over">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 mt-3">
              <h3 className="clarity-over-haed">Clarity over decoration</h3>
              <p className="clarity-over-para">
                Every element serves a purpose. Information guides the eye naturally - hierarchy comes before expression.
              </p>
            </div>

            <div className="col-12 col-sm-12 col-md-4 col-lg-4 mt-3">
              <h3 className="clarity-over-haed">Restraint over intensity</h3>
              <p className="clarity-over-para">
                No aggressive contrast or crowded layouts. Generous spacing reduces cognitive load and creates breathing room.
              </p>
            </div>

            <div className="col-12 col-sm-12 col-md-4 col-lg-4 mt-3">
              <h3 className="clarity-over-haed">
               Consistency builds recognition
              </h3>
              <p className="clarity-over-para">
                Variations remain within the structure. These principles apply across packaging,
digital, print, and environmental design.
              </p>
            </div>
          </div>
        </div>
      </div>

    
      
      {/* timeless care */}
      <section className="three-image1">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 modern-essentials-col">
            

                <video
                src="https://dndesigns.co.in/uploads/videos/letssuppnewcase4.mp4"
                width="100%"
                autoPlay
                muted
                loop
                playsInline
                className="enlitecasestudy-video"
              />
              
              <video
                src="https://dndesigns.co.in/uploads/videos/letssuppnewcase8wejegd.mp4"
                width="100%"
                autoPlay
                muted
                loop
                playsInline
                className="enlitecasestudy-video"
              />
              <div className="letssuppAosCompsecond">
            <LetssuppAosCompSecond/>
            </div>
            </div>

            <div className="col-12 col-md-6 modern-essentials-col">
              <video
                src="https://dndesigns.co.in/uploads/videos/letssuppnewcase7ejwghd.mp4"
                width="100%"
                autoPlay
                muted
                loop
                playsInline
                className="enlitecasestudy-video"
              />
             <div className="letssuppAosCompFirst">
            <LetssuppAosCompFirst/>
            </div>
             <Image
                src="https://dndesigns.co.in/uploads/pages/lestsuppcasenew17ewjhv.webp"
                className="letsup-case-study-three-image-col-img responsive-img letssuppSaqureImg"
                alt="enlite case study page image"
                width={1500}
                height={1500}
                sizes="(max-width:767px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>


       <section className="three-image1">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <Image
                src="https://dndesigns.co.in/uploads/pages/letsupcasen25.jpg"
                className="letsup-case-study-three-image-col-img responsive-img letssuppSaqureImg"
                alt="enlite case study page image"
                width={1500}
                height={1500}
                sizes="(max-width:767px) 100vw, 50vw"
              />
            </div>

            <div className="col-12 col-md-6">
              <Image
                src="https://dndesigns.co.in/uploads/pages/letssuppnewcase10wekdbh.webp"
                className="letsup-case-study-three-image-col-img responsive-img letssuppSaqureImg"
                alt="enlite case study page image"
                width={1500}
                height={1500}
                sizes="(max-width:767px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>




      {/* Overview */}
      <section className="overview">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h3 className="overview-h3-head">Logo Meaning</h3>
              <h2 className="overview-h3-main-head">
                A Mark of Continuous Care
              </h2>
              <p className="overview-content-para1-new">
                How the infinity lives inside the wordmark
              </p>
            </div>

            <div className="col-12 col-lg-6 overview-content-col">
              <p className="overview-content-head">
               The double "P" in SUPP forms a continuous loop inspired by infinity - representing consistency, renewal, and long-term wellbeing.
              </p>

              <p className="overview-content-head">
                The flowing structure reflects the brand's belief that health is built through small daily rituals rather than quick interventions. The logo appears intentional and undistorted - never competing with surrounding elements.
              </p>

              <p className="overview-content-head">
                Three versions of the logo exist:
              </p>
               <p className="overview-content-head">
                The primary wordmark for most communications
              </p>
               <p className="overview-content-head">
                The standalone brandmark for compact formats
              </p>
               <p className="overview-content-head">
                The brandmark with tagline for campaign environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* two image 1*/}
      <section className="three-image1">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <Image
                src="https://dndesigns.co.in/uploads/pages/letsupcase13.jpg"
                className="letsup-case-study-three-image-col-img responsive-img letssuppSaqureImg"
                alt="enlite case study page image"
                width={1500}
                height={1500}
                sizes="(max-width:767px) 100vw, 50vw"
              />
            </div>

            <div className="col-12 col-md-6">
              <Image
                src="https://dndesigns.co.in/uploads/pages/letssuppnewcase11hewjd.webp"
                className="letsup-case-study-three-image-col-img responsive-img letssuppSaqureImg"
                alt="enlite case study page image"
                width={1500}
                height={1500}
                sizes="(max-width:767px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="overview">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h3 className="overview-h3-head">Colour System</h3>
              <h2 className="overview-h3-main-head">Unified Through Tones</h2>
              <p className="overview-content-para1-new">
                Clarity, balance, and continuity in every colour choice
              </p>
            </div>

            <div className="col-12 col-lg-6 overview-content-col">
              <p className="overview-content-head">
                The colour palette defines the foundational identity of Let's Supp. These colours appear across packaging, digital platforms, and brand communications - establishing recognition across all master brand executions. Colours always feel intentional, restrained, and aligned with the brand's philosophy of sustained wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* two image 1*/}
      <section className="three-image1">
        <div className="container">
          <div className="row">
            <div className="col-12">
            <video
                src="https://dndesigns.co.in/uploads/videos/letssuppnewcase10kewhd.mp4"
                width="100%"
                autoPlay
                muted
                loop
                playsInline
                className="enlitecasestudy-video"
              />
              </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6">
              <Image
                src="https://dndesigns.co.in/uploads/pages/letsup9.webp"
                className="letsup-case-study-three-image-col-img responsive-img letssuppSaqureImg"
                alt="enlite case study page image"
                width={1500}
                height={1500}
                sizes="(max-width:767px) 100vw, 50vw"
              />
            </div>

            <div className="col-12 col-md-6">
              <Image
                src="https://dndesigns.co.in/uploads/pages/letsupcasess24.jpg"
                className="letsup-case-study-three-image-col-img responsive-img letssuppSaqureImg"
                alt="enlite case study page image"
                width={1500}
                height={1500}
                sizes="(max-width:767px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="overview">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h3 className="overview-h3-head">Typography</h3>
              <h2 className="overview-h3-main-head">
                Disciplined & Intentional
              </h2>
              <p className="overview-content-para1-new">
                A typographic system that communicates through structure, not decoration
              </p>
            </div>

            <div className="col-12 col-lg-6 overview-content-col">
            <p className="overview-content-head overview-content-head-span">Two voices, one system</p>
              <p className="overview-content-head">
                The typographic system balances a refined serif with a clean, highly readable sans serif to support communication across packaging, digital, and print.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* two image 1*/}
      <section className="three-image1">
        <div className="container">
          

          <div className="row">
            <div className="col-12 col-md-6">
              <Image
                src="https://dndesigns.co.in/uploads/pages/letssuppnewcase12wkjed.webp"
                className="letsup-case-study-three-image-col-img responsive-img letssuppSaqureImg"
                alt="enlite case study page image"
                width={1500}
                height={1500}
                sizes="(max-width:767px) 100vw, 50vw"
              />
            </div>

            <div className="col-12 col-md-6">
              <Image
                src="https://dndesigns.co.in/uploads/pages/letssuppnewcase4uwegd13.webp"
                className="letsup-case-study-three-image-col-img responsive-img letssuppSaqureImg"
                alt="enlite case study page image"
                width={1500}
                height={1500}
                sizes="(max-width:767px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="row">
          <div className="col-12">
             <video
                src="https://dndesigns.co.in/uploads/videos/lat7vid.mp4"
                width="100%"
                autoPlay
                muted
                loop
                playsInline
                className="enlitecasestudy-video"
              />
              </div>
          </div>

        </div>
      </section>

      {/* Overview */}
      <section className="overview">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h3 className="overview-h3-head">Packaging System</h3>
              <h2 className="overview-h3-main-head">
                Creating Clarity Through Structure
              </h2>
              <p className="overview-content-para1-new">
                The infinity form as information architecture
              </p>
            </div>

            <div className="col-12 col-lg-6 overview-content-col">
              <p className="overview-content-head">
               The packaging was designed to <span className="overview-content-head-span">simplify decision-making.</span> Information is organised in a clear, intuitive hierarchy, allowing users to understand the product quickly and confidently.
              </p>

              <p className="overview-content-head">
                The infinity concept is expressed as an abstract, flowing form within the packaging, guiding the composition and reinforcing a sense of continuous wellness. The form acts as the primary structure for organising information - with brand anchoring at the top, information flowing through the transition zone, and the product expression anchored at the bottom.
              </p>

              <p className="overview-content-para1">
                "Transparent containers reinforce honesty - allowing natural light to interact with the product and emphasise purity."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* three image 1*/}
      <section className="three-image1">
        <div className="container">
          <div className="row">
          <div className="col-12">
            <Image
              src={imageUrl + "letsupcase20.jpg"}
              className="responsive-img letsup-case-study-three-image-row-img letssuppThreeTwoImg"
              alt="enlite case study page image"
              width={1500}
              height={1000}
              sizes="(max-width:767px) 100vw, 100vw"
            />
            </div>
          </div>
        </div>
      </section>

      {/* three col content section start */}

      <section className="three-col-content-section">
        <div className="container">
          <div className="row three-row-content">
            <div className="col-12 col-md-4 three-col-content1">
              <p className="three-col-content-para">
                Protect, energize,<br></br> and thrive with<br></br>
                <span className="three-col-content-head">
                  {" "}
                  Advanced <br></br>Omega 3 care
                </span>
              </p>
            </div>

            <div className="col-12 col-md-4 three-col-content2">
              <p className="three-col-content-para">
                No Fish. No Smell.<br></br> No Guilt. Just Pure<br></br> Plant
                Based
                <span className="three-col-content-head">
                  {" "}
                  Vegan<br></br> Omega
                </span>
              </p>
            </div>

            <div className="col-12 col-md-4 three-col-content3">
              <p className="three-col-content-para">
                Daily Stress? Restore<br></br> your inner calm with<br></br>
                <span className="three-col-content-head">
                  {" "}
                  Magnesium <br></br>Balance
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* three image in a column */}
        <section className="three-img-col">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                <Image
                  src={imageUrl + "letsupcase21.jpg"}
                  className="letsup-case-study-three-image-col-img responsive-img letssuppSaqureImg"
                  alt="enlite case study page image"
                  width={1500}
                  height={1500}
                  sizes="(max-width:767px) 100vw, 50vw"
                />
              </div>

              <div className="col-12 col-md-4">
                <Image
                  src={imageUrl + "letsupcase22.jpg"}
                  className="letsup-case-study-three-image-col-img responsive-img letssuppSaqureImg"
                  alt="enlite case study page image"
                  width={1500}
                  height={1500}
                  sizes="(max-width:767px) 100vw, 50vw"
                />
              </div>

              <div className="col-12 col-md-4">
                <Image
                  src={imageUrl + "letscasej23.jpg"}
                  className="letsup-case-study-three-image-col-img responsive-img letssuppSaqureImg"
                  alt="enlite case study page image"
                  width={1500}
                  height={1500}
                  sizes="(max-width:767px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* three col content section for mobile */}

      <section className="three-col-content-mobile">
        <div className="container">
          <div className="row three-row-content g-0">
            <div className="col-12 three-col-mob-content1">
              <p className="three-col-content-para">
                Protect, energize,<br></br> and thrive with<br></br>
                <span className="three-col-content-head">
                  {" "}
                  Advanced <br></br>Omega 3 care
                </span>
              </p>
            </div>

            <div className="col-12">
              <Image
                src={imageUrl + "letsupcase21.jpg"}
                className="letsup-case-study-three-image-col-img responsive-img letssuppSaqureImg"
                alt="enlite case study page image"
                width={1500}
                height={1500}
                sizes="(max-width:767px) 100vw, 50vw"
              />
            </div>

            <div className="col-12 three-col-mob-content2">
              <p className="three-col-content-para">
                No Fish. No Smell.<br></br> No Guilt. Just Pure<br></br> Plant
                Based
                <span className="three-col-content-head">
                  {" "}
                  Vegan<br></br> Omega
                </span>
              </p>
            </div>

            <div className="col-12">
              <Image
                src={imageUrl + "letsupcase22.jpg"}
                className="letsup-case-study-three-image-col-img responsive-img letssuppSaqureImg"
                alt="enlite case study page image"
                width={1500}
                height={1500}
                sizes="(max-width:767px) 100vw, 50vw"
              />
            </div>

            <div className="col-12 three-col-mob-content3">
              <p className="three-col-content-para">
                Daily Stress? Restore<br></br> your inner calm with<br></br>
                <span className="three-col-content-head">
                  {" "}
                  Magnesium <br></br>Balance
                </span>
              </p>
            </div>

            <div className="col-12">
              <Image
                src={imageUrl + "letscasej23.jpg"}
                className="letsup-case-study-three-image-col-img responsive-img letssuppSaqureImg"
                alt="enlite case study page image"
                width={1500}
                height={1500}
                sizes="(max-width:767px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* two image 1*/}
      <section className="three-image1">
        <div className="container">
          <div className="row">
          <div className="col-12"> 
           
             <video
                src="https://dndesigns.co.in/uploads/videos/letsupcase19videonewcase.mp4"
                width="100%"
                autoPlay
                muted
                loop
                playsInline
                className="enlitecasestudy-video"
              />
              </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="overview">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h3 className="overview-h3-head">Brand in Context</h3>
              <h2 className="overview-h3-main-head"> Identity in Practice</h2>
              <p className="overview-content-para1-new">
                Extending continuity beyond packaging
              </p>
            </div>

            <div className="col-12 col-lg-6 overview-content-col">
              <p className="overview-content-head">
               The identity translates seamlessly <span className="overview-content-head-span">across digital and physical environments.</span> From product packaging to social communications and out-of-home advertising, the system maintains consistency while adapting fluidly to context.
              </p>

              <p className="overview-content-head">
                This creates a unified ecosystem where each interaction reinforces recognition and trust - where every touchpoint feels connected, calm, and intentional.
              </p>
            </div>
          </div>
        </div>
      </section>


        {/* two image 1*/}
      <section className="three-image1">
        <div className="container">
          <div className="row">
          <div className="col-12">
             <video
                src="https://dndesigns.co.in/uploads/videos/letsuppnewcasestudy21video.mp4"
                width="100%"
                autoPlay
                muted
                loop
                playsInline
                className="enlitecasestudy-video"
              />
              </div>
          </div>
        </div>
      </section>



       {/* two image 1*/}
      <section className="three-image1">
        <div className="container">
         

          <div className="row">
            <div className="col-12 col-md-6">
              <Image
                src="https://dndesigns.co.in/uploads/pages/letssuppnewcase414edwgjh.webp"
                className="letsup-case-study-three-image-col-img responsive-img letssuppSaqureImg"
                alt="enlite case study page image"
                width={1500}
                height={1500}
                sizes="(max-width:767px) 100vw, 50vw"
              />
               <Image
                src="https://dndesigns.co.in/uploads/pages/ejletsupcase.jpg"
                className="letsup-case-study-three-image-col-img responsive-img letssuppSaqureImg"
                alt="enlite case study page image"
                width={1500}
                height={1500}
                sizes="(max-width:767px) 100vw, 50vw"
              />
            </div>

            <div className="col-12 col-md-6">
              <Image
                src="https://dndesigns.co.in/uploads/pages/last-final.jpg"
                className="letsup-case-study-three-image-col-img responsive-img letssuppSaqureImg"
                alt="enlite case study page image"
                width={1500}
                height={1500}
                sizes="(max-width:767px) 100vw, 50vw"
              />
        
               <video
                src="https://dndesigns.co.in/uploads/videos/letssuppnewcase6hewjd.mp4"
                width="100%"
                autoPlay
                muted
                loop
                playsInline
                className="enlitecasestudy-video"
              />
            </div>
          </div>

        </div>
      </section>


          {/* two image 1*/}
      <section className="three-image1">
        <div className="container">
          <div className="row">
             <video
                src="https://dndesigns.co.in/uploads/videos/letssuppnewcase5hd.mp4"
                width="100%"
                autoPlay
                muted
                loop
                playsInline
                className="enlitecasestudy-video"
              />
          </div>
        </div>
      </section>


       {/* Overview */}
      <section className="overview">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h3 className="overview-h3-head">Social & Digital</h3>
              <h2 className="overview-h3-main-head">A calm voice across every channel</h2>
              {/* <p className="overview-content-para1-new">
                Extending continuity beyond packaging
              </p> */}
            </div>

            <div className="col-12 col-lg-6 overview-content-col">
              <p className="overview-content-head">
                The brand voice is calm, reflective and reassuring. Communication feels thoughtful rather than promotional, guiding people towards healthier routines without urgency or pressure.
              </p>

              <p className="overview-content-head">
                Messages are expressed through short statements that emphasise consistency, balance and everyday care. Rather than focusing on dramatic outcomes, Let's Supp highlights small habits that build long-term health.
              </p>
            </div>
          </div>
        </div>
      </section>


       {/* two image 1*/}
      <section className="three-image1">
        <div className="container">
          <div className="row">
          <div className="col-12">
           <video
                src="https://dndesigns.co.in/uploads/videos/lat5vid.mp4"
                width="100%"
                autoPlay
                muted
                loop
                playsInline
                className="enlitecasestudy-video"
              />
</div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6">
            <video
                src="https://dndesigns.co.in/uploads/videos/letssuppnewcase9ewvhgd.mp4"
                width="100%"
                autoPlay
                muted
                loop
                playsInline
                className="enlitecasestudy-video"
              />
            </div>

            <div className="col-12 col-md-6">
              <Image
                src="https://dndesigns.co.in/uploads/pages/letssuppnewcase15whdb.webp"
                className="letsup-case-study-three-image-col-img responsive-img letssuppSaqureImg"
                alt="enlite case study page image"
                width={1500}
                height={1500}
                sizes="(max-width:767px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>



{/* marque */}
      <section className="marquee-section">
      <div className="marquee-track-wrapper">
        <div className="marquee-track">
          {Array.from({ length: COPIES }).map((_, i) => (
            <span key={i} className="marquee-item">
              {/* {`Consistency. Balance. Everyday care. `.repeat(8)} */}
              {TEXT}
            </span>
          ))}
        </div>
      </div>
    </section>


          {/* two image 1*/}
      <section className="three-image1">
        <div className="container">
          <div className="row">
          <div className="col-12">
            <Image
              src="https://dndesigns.co.in/uploads/pages/letsupcaseh32.jpg"
              className="responsive-img letsup-case-study-three-image-row-img letssuppThreeTwoImg"
              alt="enlite case study page image"
              width={1500}
              height={1000}
              sizes="(max-width:767px) 100vw, 100vw"
            />
            </div>
          </div>
        </div>
      </section>




      {/* signing off section */}
      <section className="signing-off-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 lets-up-elevate-btn-signing-off">
              <div className="lets-up-elevate-btn-up-div">
                <span className="btn-1">Let’s Supp</span>
                <span className="btn-2">Branding</span>
              </div>

              <div className="lets-up-elevate-btn-down-div">
                <span className="btn-4">Brand architecture</span>
                <span className="btn-5">Branding Identity</span>
              </div>
              <div className="lets-up-elevate-btn-down-div">
                <span className="btn-5">Packaging and label designs</span>
              </div>

              <div className="lets-up-elevate-btn-down-div">
                <span className="btn-1">UI/UX</span>
                <span className="btn-4">Website Development</span>
              </div>
            </div>

            <div className="col-12 col-md-6 signing-off-content-section">
              <h2 className="signing-off-head">Letssupp</h2>
              <p className="signing-off-para">#SigningOff</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
