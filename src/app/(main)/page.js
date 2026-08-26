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
import Image from "next/image";
import OurBrandsSectionHome from "@/Components/OurBrandsSectionHome/OurBrandsSectionHome";
import HomePageHero from "@/Components/HomePageHero/HomePageHero";
import LPBrandIdentityCategorySwipper from "@/Components/LPBrandIdentityCategorySwipper/LPBrandIdentityCategorySwipper";
import HomePageIndustriesSwipper from "@/Components/HomePageIndustriesSwipper/HomePageIndustriesSwipper";
import CTAMarqueSwipper from "@/Components/CTAMarqueSwipper/CTAMarqueSwipper";

// schema
// HOME PAGE SCHEMA
const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    // {
    //   "@type": "ProfessionalService",
    //   "@id": "https://dndesigns.co.in/#professionalservice",
    //   name: "DN Designs",
    //   url: "https://dndesigns.co.in/",
    //   image:
    //     "https://dndesigns.co.in/uploads/pages/dn-logo.png",
    //   priceRange: "₹₹₹",
    //   telephone: "+91-9416011100",
    //   address: {
    //     "@type": "PostalAddress",
    //     streetAddress: "C-40, Second Floor, C Block, Sector 58",
    //     addressLocality: "Noida",
    //     addressRegion: "Uttar Pradesh",
    //     postalCode: "201301",
    //     addressCountry: "IN",
    //   },
    //   geo: {
    //     "@type": "GeoCoordinates",
    //     latitude: 28.6102974,
    //     longitude: 77.3582909,
    //   },
    //   openingHoursSpecification: {
    //     "@type": "OpeningHoursSpecification",
    //     dayOfWeek: [
    //       "Monday",
    //       "Tuesday",
    //       "Wednesday",
    //       "Thursday",
    //       "Friday",
    //       "Saturday",
    //     ],
    //     opens: "10:00",
    //     closes: "20:00",
    //   },
    //   areaServed: {
    //     "@type": "Country",
    //     name: "India",
    //   },
    //   parentOrganization: {
    //     "@id": "https://dndesigns.co.in/#organization",
    //   },
    //   aggregateRating: {
    //     "@type": "AggregateRating",
    //     ratingValue: "5.0",
    //     bestRating: "5",
    //     reviewCount: "153",
    //   },
    // },

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
        "@id": "https://dndesigns.co.in/#homepage-image",
      },
      inLanguage: "en-IN",
    },

    {
      "@type": "ImageObject",
      "@id": "https://dndesigns.co.in/#homepage-image",
      url: "https://dndesigns.co.in/uploads/pages/hgefef.webp",
      contentUrl: "https://dndesigns.co.in/uploads/pages/hgefef.webp",
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
  // home page hero content
  const title = "We Build Brands That Inspire Confidence and Drive Profit";
  const description = "Let’s collaborate and craft a truly standout brand for you.";

  // form content
  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "Whether you have a brand to build, a problem to solve, a big idea you can’t stop thinking about, or simply don’t know where to begin, let’s talk. No formalities, no long briefs, no need to have everything figured out. Just a good conversation, a little curiosity, and a cup of coffee. We’ll bring the questions, you bring the idea, and together, let’s see where the conversation takes us.";

  const imageUrl = "https://dndesigns.co.in/uploads/pages/";

  return (
    <>
     <Script
  id="home-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(homeSchema),
  }}
/>
      {/*.....hero...... */}
      {/* <section className={`${styles.hero}`}>
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
              

              <Image 
                src={imageUrl + "gkjeg.webp"}
                className={`${styles["hero-bg-img"]} ${styles["responsive-img"]}`}
                alt="home page image"
                width={1000}
                height={1000}
                 priority 
                />

              

               <Image 
               src={imageUrl + "hgefef.webp"}
                className={`${styles["hero-img-main"]} ${styles["responsive-img"]}`}
                alt="home page image"
                width={700}
                height={700}
                 priority 
                />
            </div>
          </div>
        </div>
      </section> */}

      <HomePageHero title={title} description={description} />
     

     {/* our brands section */}
        <OurBrandsSectionHome heading1="Our " heading2="Brand Journals"/>  
      {/*.....our-constant-companions...... */}
      <OurConstant />

     

       {/*.....Our work...... */}
      <section id="ourworksection">
      <OurWorkHomeSection />
      </section>

       {/* industries we serve */}
      {/* <LPBrandIdentityCategorySwipper/> */}
      <HomePageIndustriesSwipper/>

      {/* cta swipper */}
      <CTAMarqueSwipper/>



      {/*.....points...... */}
      <Points />
      {/* testimonial  */}
      <Testimonial />
      {/* form */}
      <Form FormHead={FormHead} FormPara={FormPara} pageName="Landing Page" />
    </>
  );
}
