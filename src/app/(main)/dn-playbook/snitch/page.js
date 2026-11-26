export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from 'react'
import "../gully-labs/brand-audit.css"
import BrandAuditCta from '@/Components/BrandAuditCta/BrandAuditCta'
import CTAMarqueSwipper from '@/Components/CTAMarqueSwipper/CTAMarqueSwipper'

import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";
import { notFound } from "next/navigation";
import Breadcrumb from '@/Components/BreadCrumb/BreadCrumb';
import Form from '@/Components/Form/Form';
import TalkToUs from '@/Components/TalkToUsCityPages/TalkToUsCityPages';
import SwotTabSectionBrandAudit from '@/Components/SwotTabSectionBrandAudit/SwotTabSectionBrandAudit';
// import TalkToUs from '@/Components/TalkToUs/TalkToUs';


// meta tags
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("dn-playbook/snitch", null, false);
  } catch (error) {
    return {
      title: "Snitch",
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

    // ---
      await connectDB();
      let pageData;
      try {
        pageData = await getPageById("dn-playbook/snitch", null, true);
      } catch (error) {
        notFound();
      }
    
      if (!pageData) {
        notFound();
      }
    
      // ---  SCHEMA CLEANING LOGIC START ---
      let cleanSchema = "";
      if (pageData.headCode) {
        // Script tags remove karke raw JSON nikalna
        cleanSchema = pageData.headCode
          .replace(/<script.*?>/gi, "")
          .replace(/<\/script>/gi, "")
          .trim();
        if (cleanSchema.includes('""')) {
          cleanSchema = cleanSchema.replace(/""/g, '"');
        }
      }
      // --- SCHEMA CLEANING LOGIC END ---


       const tabs = [
        {
            id: "first_tab",
            title: "Strengths",
            heading: "Strengths",
            points: [
                "A speed engine few rivals match. Around 35 new styles land every day, made in factories that work exclusively for Snitch, so the catalogue never looks the same twice.",

                "A memorable, searchable name with strong social pull. Snitch has been called the fastest-growing Indian D2C fashion brand on Instagram, reach most young labels pay heavily for.",

                "A dense retail footprint of 135 stores across 56 cities. Stores now double as hubs for 60-minute delivery, joining physical presence to online speed.",
            ],
        },

        {
            id: "sec_tab",
            title: "Weaknesses",
            heading: "Weaknesses",
            points: [
                "The identity is thinner than the business. There’s no owned colour or fixed line, and the small grid mark does little work on its own, so recall rests mostly on the name.",

                "Constant newness makes it hard to say what Snitch stands for beyond “new”. With so many styles dropping every week, no single product or look defines the brand.",

                "Campaigns, collaborations and stores each carry a different energy, from Bollywood spoofs to cricket streetwear, with no single brand world tying them together.",
            ],
        },

        {
            id: "third_tab",
            title: "Opportunities",
            heading: "Opportunities",
            points: [
                "The UAE launch through Noon and Namshi needs an identity that works where the name is still unknown. A stronger visual system would help it hold its own beside global labels.",

                "Footwear, fragrance and Snitch Plus open the door to a clear sub-brand architecture, so each line can grow without blurring the master brand.",

                "Stores and 60-minute delivery can turn every handover and unboxing into a brand moment, with packaging and retail design carrying the drop energy.",
            ],
        },

        {
            id: "fourth_tab",
            title: "Threats",
            heading: "Threats",
            points: [
                "Rivals with stronger brand codes. The Souled Store owns fandom through 200+ official licences, and Rare Rabbit owns the premium end with a refined store experience.",

                "Bewakoof and other value labels compete on price and humour for the same young buyer, often with deep, routine discounts that pull shoppers towards cheaper options.",

                "Speed can be copied; an identity can’t. If larger retailers or rivals match the cadence, Snitch has little distinctive branding to fall back on.",
            ],
        },
    ];

           const tabs_stp = [
        {
            id: "first_tab",
            title: "Segmentation",
            heading: "Segmentation",
            points: [
                "Urban, digitally native Indian consumers, mostly Gen Z and young millennials, who treat sneakers as identity rather than utility.",
            ],
        },

        {
            id: "sec_tab",
            title: "Targeting",
            heading: "Targeting",
            points: [
                "Sneakerheads and streetwear-adjacent buyers tired of choosing between global brands with no cultural relevance and local brands with no design credibility. Secondary audience: NRIs and international buyers curious about Indian culture and story, told through footwear.",
            ],
        },

        {
            id: "third_tab",
            title: "Positioning",
            heading: "Positioning",
            points: [
                "Not 'an affordable Indian alternative to Nike.' Positioned as its own category entirely: premium, story-led, handcrafted sneakers that are Indian. Not sneakers apologising for being Indian.",
            ],
        },
    ];


      // form content
  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "Whether you have a brand to build, a problem to solve, a big idea you can’t stop thinking about, or simply don’t know where to begin, let’s talk. No formalities, no long briefs, no need to have everything figured out. Just a good conversation, a little curiosity, and a cup of coffee. We’ll bring the questions, you bring the idea, and together, let’s see where the conversation takes us.";

  return (
    <div>

     {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "dn-playbook/snitch"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}


      {/* breadcrump  */}
      <Breadcrumb/>


    {/* brand audit hero */}
      <section className='brand-audit-hero-section'>
        <div className='container'>
            <h1 className='brand-audit-hero-section-head'>The DN Playbook: SNITCH</h1>
            <p className='brand-audit-hero-section-para'>Built The “Zara Of India” Pitch. Can The Brand Keep Up With The Business?</p>
            <div className='hero-section-img-div'>
                <img src="https://dndesigns.co.in/uploads/pages/snitch_brand_audit_hero_section.webp" className='hero-section-img hero-section-img-desktop img-fluid'></img>
                <img src="https://dndesigns.co.in/uploads/pages/snitch_brand_audit_hero_section_mobile.webp" className='hero-section-img hero-section-img-mobile img-fluid'></img>
            </div>
        </div>
      </section>


      {/* table of content section */}
      <section className='table-of-content-section'>
      <div className='container'>
        <div className='row '>


        {/* table's side page content */}
            <div className='col-12 col-sm-12 col-md-12 col-lg-9 mt-4 order-2 order-lg-1'>
            {/* para div */}
                <div className='table-of-content-section-first-para'>
                <p className='table-of-content-section-para-first'>Indian menswear has a sameness problem. Scroll any D2C feed and the look repeats: an oversized shirt, a sale banner, a grid of near-identical product cards. Every label promises trendy, affordable and made for the modern man, and few give a shopper a reason to remember who sold him what. Snitch answered with speed, dropping new styles every day. But can a brand built on constant newness create an identity that lasts longer than a drop?</p>
                </div>
                <div className='table-of-content-2nd-para-div'>
                    <p className="table-of-content-2nd-para">That’s the question SNITCH put in front of us.</p>
                    
                </div>


                {/* Brand at a glance */}
                <div className="brand-at-glance" id='brand-at-a-glance'>
                    <h2 className="brand-at-glance-head">Brand At A Glance</h2>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-4 brand-at-glance-col-1'>
                            <div className='brand-at-glance-text-div'>
                                <p className="brand-at-glance-text-div-para">Category</p>
                                <h3 className="brand-at-glance-text-div-head">Men’s fast fashion (D2C, omnichannel).</h3>
                            </div>

                            <div className='brand-at-glance-text-div'>
                                <p className="brand-at-glance-text-div-para">Founding Year</p>
                                <h3 className="brand-at-glance-text-div-head">2019 as a B2B apparel brand; D2C from July 2020.</h3>
                            </div>

                            <div className='brand-at-glance-text-div'>
                                <p className="brand-at-glance-text-div-para">Founders</p>
                                <h3 className="brand-at-glance-text-div-head">Siddharth Dungarwal, with Chetan Siyal as founding member and CMO.</h3>
                            </div>

                            <div className='brand-at-glance-text-div'>
                                <p className="brand-at-glance-text-div-para">Headquarters </p>
                                <h3 className="brand-at-glance-text-div-head">Bengaluru </h3>
                            </div>
                            {/* <div className='brand-at-glance-text-div'>
                                <p className="brand-at-glance-text-div-para">Backing/Funding</p>
                                <h3 className="brand-at-glance-text-div-head">₹1.5 crore from Shark Tank India S2. 
₹110 crore Series A (2023) co-led by SWC Global and IvyCap Ventures. 
$40M Series B (2025) led by 360 ONE Asset.</h3>
                            </div> */}
                            <div className='brand-at-glance-text-div'>
                                <p className="brand-at-glance-text-div-para">Positioning in one line</p>
                                <h3 className="brand-at-glance-text-div-head">Trend-first menswear that drops daily, priced between Max and Zara.</h3>
                            </div>

                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 brand-at-glance-img-div">
                            <img src="https://dndesigns.co.in/uploads/pages/snitch_brand_audit_brand_at_glance.webp" className='img-fluid brand-at-glance-img'></img>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-4 brand-at-glance-col-1'>
                            

                             

                             <div className='brand-at-glance-text-div'>
                                <p className="brand-at-glance-text-div-para">Backing/Funding</p>
                                <h3 className="brand-at-glance-text-div-head">₹1.5 crore from Shark Tank India S2. 
₹110 crore Series A (2023) co-led by SWC Global and IvyCap Ventures. 
$40M Series B (2025) led by 360 ONE Asset.</h3>
                            </div>

                             <div className='brand-at-glance-text-div'>
                                <p className="brand-at-glance-text-div-para">Price Band</p>
                                <h3 className="brand-at-glance-text-div-head">Mass-premium, mostly ₹999–1,899.</h3>
                            </div>

                             <div className='brand-at-glance-text-div'>
                                <p className="brand-at-glance-text-div-para">Core Audience</p>
                                <h3 className="brand-at-glance-text-div-head">Urban Gen Z and millennial men, 18–35.</h3>
                            </div>

                             <div className='brand-at-glance-text-div'>
                                <p className="brand-at-glance-text-div-para">Playing Against</p>
                                <h3 className="brand-at-glance-text-div-head">The Souled Store, Rare Rabbit, Bewakoof.</h3>
                            </div>

                            <div className='brand-at-glance-text-div'>
                                <p className="brand-at-glance-text-div-para">Notable Moment</p>
                                <h3 className="brand-at-glance-text-div-head">An all-shark deal on Shark Tank India Season 2.</h3>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Brand Elements  */}
                <section className='brand-elements-section' id='brand-elements'>
                    <h2 className='brand-elements-main-head'>Brand Elements</h2>
                    {/* row 1 */}
                    <div className='brand-element-row row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-9'>
                            <div className='brand-element-col'>
                                <p className='brand-element-col-para-label'>Name</p>
                                <ul className='brand-element-col-ul'>
                                    <li>One sharp, slightly rebellious word in a category full of borrowed, Western-sounding labels.</li>
                                    <li>The founder’s meaning: to “snitch on trends and deliver pep” to a money-conscious, trend-hungry generation.</li>
                                    <li>Short and searchable, so it travels easily from app icon to store fascia.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* row 2 */}
                    <div className='brand-element-row row'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-3'></div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-9'>
                            <div className='brand-element-col'>
                                <p className='brand-element-col-para-label'>Logo</p>
                                <ul className='brand-element-col-ul'>
                                    <li>A symbol-and-wordmark lockup: a compact grid mark of interlaced lines sits to the left of SNITCH, set in heavy, widely spaced capitals.</li>
                                    <li>The mark can read as a hashtag or as woven threads, a fitting cue for a social-first fashion brand.</li>
                                    <li>Clean and monochrome, but the mark is small beside the bold wordmark, so the name still does most of the work.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                      {/* row 3 */}
                    <div className='brand-element-row row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-9'>
                            <div className='brand-element-col'>
                                <p className='brand-element-col-para-label'>Visual System</p>
                                <ul className='brand-element-col-ul'>
                                    <li>A black-and-white core with no claimed brand colour. Colour and print come from the product and the photography.</li>
                                    <li>That makes a neutral canvas for a catalogue that changes every day.</li>
                                    <li>The cost is recognition. Beyond the small grid mark, very little on a store, bag or post says Snitch.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* row 4 */}
                    <div className='brand-element-row row'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-3'></div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-9'>
                            <div className='brand-element-col'>
                                <p className='brand-element-col-para-label'>Tagline</p>
                                <ul className='brand-element-col-ul'>
                                    <li>“Last Minute? Snitch It.” (2025) is the strongest line. The CMO called it a brand ideology, and 60-minute delivery now gives it a real service to stand on.</li>
                                    <li>“Made in India, for the World” appears on the app listing as a statement of ambition.</li>
                                    <li>Neither is yet locked in across bags, stores and app.</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                      {/* row 5 */}
                    <div className='brand-element-row row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-9'>
                            <div className='brand-element-col'>
                                <p className='brand-element-col-para-label'>Characters</p>
                                <ul className='brand-element-col-ul'>
                                    <li>No mascot and no illustrated figure.</li>
                                    <li>Human faces come through collaborations, such as the SEVEN:THREE collection with cricketer Mohammed Siraj.</li>
                                    <li>They lend energy for a season, but no face or figure belongs to Snitch.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* row 6 */}
                    {/* <div className='brand-element-row row'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-3'></div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-9'>
                            <div className='brand-element-col'>
                                <p className='brand-element-col-para-label'>Tagline</p>
                                <ul className='brand-element-col-ul'>
                                    <li>Not yet fixed, still forming as the brand matures past its first two years.</li>
                                    <li>Individual drop names currently do a tagline's job, each one carrying its own mini-story.</li>
                                    <li>A genuine gap, worth closing deliberately (see Recommendations).</li>
                                </ul>
                            </div>
                        </div>
                    </div>  */}

                    {/* row 7
                    <div className='brand-element-row row'>
                   
                        <div className='col-12 col-sm-12 col-md-12 col-lg-9'>
                            <div className='brand-element-col'>
                                <p className='brand-element-col-para-label'>Characters</p>
                                <ul className='brand-element-col-ul'>
                                    <li>No mascot in the Amul girl or Nestle-family sense.</li>
                                    <li>The Panchsheel Park flagship is the closest thing to one: manhole covers, lakhori brick, a giant shoe sculpture over the entrance.</li>
                                    <li>Recurring motifs, the Sparrow mule, regional birds, festival themes, act as a rotating cast instead of a single fixed character.</li>
                                </ul>
                            </div>
                        </div>
                         <div className='col-12 col-sm-12 col-md-12 col-lg-3'></div>
                    </div>  */}

                </section>

                {/* gali labs image */}
                <section className='gali-labs-section'>
                    <img src="https://dndesigns.co.in/uploads/pages/snitch_brand_brand_audit_website_showcasing.webp" className='img-fluid gali-labs-image'></img>
                </section>

                {/* [ Let’s Talk ] */}
                <section className='lets-talk-section'>
                {/* <div className='lets-talk-section-top-content'>
                <p className='lets-tak-label-para'>[ Still With Us? ]</p>
                <h2 className='lets-tak-main-head'>Nobody's found your gaps yet. </h2>
                <BrandAuditCta/>
                </div> */}

                 {/* Ready For Your New Website? */}
                <div className='ready-for-your-new-website-section'>
                    <div className="ready-for-your-new-website-section-content">
                        <h2 className='ready-for-your-new-website-section-content-head'>Still With Us? Nobody's found your gaps yet. 
</h2>
                        <TalkToUs/>
                    </div>
                </div>




                <div className='brand-attributes-div' id='brand-attributes'>
                    <h2 className='brand-attributes-head'>Brand Attributes</h2>
                    {/* <p className='brand-attributes-para'>Attributes are words a customer would reasonably associate with the brand.</p> */}
                    <div className='brand-attributes-points-div'>
                        <span className='brand-attributes-points'>Fast</span>
                        <span className='brand-attributes-points'>Trend-led</span>
                        <span className='brand-attributes-points'>Bold</span>
                        <span className='brand-attributes-points'>Accessible</span>
                        <span className='brand-attributes-points'>Young</span>
                        <span className='brand-attributes-points'>Cheeky</span>
                        <span className='brand-attributes-points'>Ambitious</span>
                        
                    </div>
                </div>


               
                </section>

                {/* SWOT */}
                <section className='swot-section' id='swot'>
                    <h2 className='swot-section-head'>SWOT</h2>
                    <SwotTabSectionBrandAudit tabs={tabs}/>
                </section>

               


                {/* STP */}
                {/* <section className='stp-section' id='stp'>
                    <div className='row stp-section-row'>
                         <div className='col-12 col-sm-12 col-md-12 col-lg-5 order-2 order-lg-1 stp-img-col'>
                            <img src="https://dndesigns.co.in/uploads/pages/stp-brand-audit-image-section.jpeg" className='img-fluid'></img>
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-7 stp-section-col order-1 order-lg-2">
                            <h2 className='stp-section-main-head'>
                STP
                </h2>
                            <SwotTabSectionBrandAudit tabs={tabs_stp}/>
                        </div>   
                    </div>
                </section> */}

                {/* STP */}
                <section className='stp-section' id='stp'>
                <h2 className='stp-section-main-head'>
                STP
                </h2>
                    <div className='row stp-section-row'>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 stp-section-col order-2 order-lg-1">
                            <div className="stp-section-col-div">
                                <p className='stp-section-col-div-label-para'>Segmentation</p>
                                <p className='stp-section-col-div-desc-para'>Indian menswear broadly splits into three groups: value buyers who shop on price at mass retailers, premium buyers who pay for fabric and label, and a fast-growing middle who want global trends without global prices. Snitch segments that middle by behaviour more than income: how often a man shops, how quickly he wants the newest look, and how much of his discovery happens on a phone.</p>
                            </div>

                              <div className="stp-section-col-div stp-section-col-div-middle">
                                <p className='stp-section-col-div-label-para'>Targeting</p>
                                <p className='stp-section-col-div-desc-para'>Snitch targets urban Gen Z and millennial men, 18 to 35, who are money-conscious but trend-hungry, across metros and a growing list of Tier II cities. They find the brand through the app, Instagram and creator content, and increasingly walk into its stores. It’s a “need it for tonight” mindset, which is exactly what “Last Minute? Snitch It” speaks to.</p>
                            </div>

                              <div className="stp-section-col-div">
                                <p className='stp-section-col-div-label-para'>Positioning</p>
                                <p className='stp-section-col-div-desc-para'>Snitch positions itself as India’s homegrown answer to global fast fashion. In the founder’s words, it is “perfectly positioned between a Max Retail and Zara/H&M.” It competes on speed and trend at a price most global labels can’t match. The brand narrative is ambitious and global-facing, while its visual identity is still catching up.</p>
                            </div>
                        </div>

                        {/* <div className='col-12 col-sm-12 col-md-12 col-lg-12 order-1 order-lg-2 stp-img-col'>
                            <img src="https://dndesigns.co.in/uploads/pages/phooldnplaybookbrandaurtwehsdj.jpg" className='img-fluid'></img>
                        </div> */}
                    </div>
                </section>


                {/* PoPs & PoDs */}
                <section className='pop-pod-section' id='pops-and-pods'>
                <h2 className='pop-pod-section-head'>PoPs and PoDs</h2>
                    <div className='row pop-pod-section-row'>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                            <div className='pop-pod-section-col-black'>
                                <h2 className='pop-pod-section-col-head-black'>Points of Parity</h2>
                                 <ul className='brand-element-col-ul-black'>
                                    <li>Trend-led menswear at accessible prices, the same ground The Souled Store, Bewakoof and most D2C labels claim.</li>
                                    <li>Available through the same channels as rivals: app, website, marketplaces and exclusive stores.</li>
                                    <li>Social-first, creator-led marketing built on humour and pop culture, a playbook the whole category uses.</li>
                                </ul>
                            </div>
                        </div>

                          <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                            <div className='pop-pod-section-col-white'>
                                <h2 className='pop-pod-section-col-head-white'>Points of Difference</h2>
                                 <ul className='brand-element-col-ul-white'>
                                    <li>Daily drops at real scale, around 35 new styles a day, with sketch-to-shelf measured in weeks, not seasons.</li>
                                    <li>Stores that double as fulfilment hubs, delivering in 60 minutes in Bengaluru, Ahmedabad and Delhi.</li>
                                    <li>Inclusion and circularity built into the core: Snitch Plus in 3XL to 6XL, and Relove for buying and reselling pre-owned Snitch pieces.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Product mix  */}
                <section className='product-mix-section' id='product-mix'>
                    <h2 className='product-mix-section-head'>Product Mix</h2>
                    <div className='product-mix-section-img-div'>
                        <img src="https://dndesigns.co.in/uploads/pages/snitch_brand_audit_proct_mix.webp" className='img-fluid product-mix-section-img'></img>
                    </div>
                    <div className='product-mix-list-div'>
                        <ul className='product-mix-list'>
                            <li className='product-mix-list-item'>Shirts, the brand’s highest-selling category since launch and still the anchor of the range.</li>
                            <li className='product-mix-list-item'>Bottomwear and co-ords: jeans, trousers, cargos and Korean-fit pants, plus the co-ord sets Snitch is widely credited with popularising.</li>
                            <li className='product-mix-list-item'>Layering and essentials: T-shirts, polos, overshirts, jackets, hoodies, sweaters and innerwear, giving the range a full, year-round wardrobe.</li>

                                <li className='product-mix-list-item'>Snitch Plus, launched in July 2024 in sizes 3XL to 6XL, starting with shirts and T-shirts, with more categories planned.</li>
                                    <li className='product-mix-list-item'>Lifestyle lines and capsules: sneakers, boots and everyday footwear, the Reserve fragrance range, belts, sunglasses and luggage. Collaboration drops such as SEVEN:THREE with Mohammed Siraj sit alongside Relove, the brand’s resale programme.</li>
                        </ul>
                    </div>
                </section>


                {/* Pricing, Distribution & Campaigns */}
                <section className='pricing-distrubution-section' id="pricing-distribution-campaigns">
                    <h2 className='pricing-distrubution-section-main-head'>Pricing, Distribution & Campaigns</h2>

                    <div className='row pricing-distrubution-section-row'>

                        <div className='col-12 col-sm-12 col-md-12 col-lg-4 mt-4'>
                            <div className='pricing-distrubution-section-col-black'>
                                <h2 className="pricing-distrubution-section-col-head-black">Pricing</h2>
                                <ul className='brand-element-col-ul-pdc-black'>
                                    <li>A tight ladder: ₹999–1,099 for tees and shirts, up to ₹1,899 for jeans and trousers.</li>
                                    <li> Most of the range sells at full price on its own channels, a confident signal in a discount-heavy category.</li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-12 col-sm-12 col-md-12 col-lg-4 mt-4'>
                            <div className='pricing-distrubution-section-col-white'>
                                <h2 className="pricing-distrubution-section-col-head-white">Distribution</h2>
                                <ul className='brand-element-col-ul-white'>
                                    <li>App and website lead online, alongside marketplaces, and Noon and Namshi in the UAE.</li>
                                    <li>135 stores across 56 cities, with 60-minute delivery from stores in Bengaluru, Ahmedabad and Delhi.</li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-12 col-sm-12 col-md-12 col-lg-4 mt-4'>
                            <div className='pricing-distrubution-section-col-white'>
                                <h2 className="pricing-distrubution-section-col-head-white">Campaigns</h2>
                                <ul className='brand-element-col-ul-white'>
                                    <li>2024 Bollywood spoofs, built on lookalikes from Kabhi Khushi Kabhie Gham and Delhi Belly, took cheeky swipes at Zara, H&M and GAP.</li>
                                    <li>“Last Minute? Snitch It” (2025) turned speed into the brand story, and SEVEN:THREE with Siraj followed in 2026.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Competitve Analysis */}
                <section className='competitve-analysis-section'>
                    <h2 className='competitve-analysis-section-head' id='competitor-analysis'>Competitor Analysis</h2>

                    {/* competive analysis table */}
                    <div className='competive-analysis-table-wrapper'>
                   <table className="competive-analysis-table">
                        <tr className='competive-analysis-table-head-row'>
                            <th className='competive-analysis-table-head-row-text' colspan="1">Brand</th>
                            <th className='competive-analysis-table-head-row-text' colspan="1">Core Focus</th>
                            <th className='competive-analysis-table-head-row-text' colspan="1">Price Range</th>
                            <th className='competive-analysis-table-head-row-text' colspan="1">Competitor Stance</th>
                        </tr>
                        <tr className="competive-analysis-table-data-row">
                            <td className='competive-analysis-table-data-row-text'>The Souled Store</td>
                            <td className='competive-analysis-table-data-row-text'>Pop-culture apparel and merchandise built on 200+ official licences, from Marvel to Naruto and One Piece, with a growing store network and a paid membership.</td>
                            <td className='competive-analysis-table-data-row-text'>Men’s tees mostly ₹899–1,899, with oversized styles at ₹999–1,699, sitting right on Snitch’s core ladder.</td>
                            <td className='competive-analysis-table-data-row-text table-data-main-para'>Owns fandom, where the licence does the selling and price matters less. Snitch’s edge is wider styling, from shirts to co-ords, beyond graphic tees.</td>
                        </tr>
                          <tr className="competive-analysis-table-data-row">
                            <td className='competive-analysis-table-data-row-text'>Rare Rabbit</td>
                            <td className='competive-analysis-table-data-row-text'>Premium luxe-casual menswear from Bengaluru’s The House of Rare, known for refined fabrics and a polished store experience across about 200 stores.</td>
                            <td className='competive-analysis-table-data-row-text'>Shirts list at about ₹2,599–4,999, though marketplace discounts of 35–55% often bring them closer to Snitch’s upper band.</td>
                            <td className='competive-analysis-table-data-row-text table-data-main-para'>One tier up on fabric, finish and retail design. It wins the shopper who trades up; Snitch competes on speed at roughly half the list price.</td>
                        </tr>
                          <tr className="competive-analysis-table-data-row">
                            <td className='competive-analysis-table-data-row-text'>Bewakoof</td>
                            <td className='competive-analysis-table-data-row-text'>Humour-led graphic casualwear with regional-language prints and licensed Marvel, Disney and DC merchandise, majority-owned by Aditya Birla’s TMRW. </td>
                            <td className='competive-analysis-table-data-row-text'>Tees sell at about ₹649–999 against listed MRPs of ₹1,299–1,999, with routine 23–65% discounts.</td>
                            <td className='competive-analysis-table-data-row-text table-data-main-para'>Fights on price and novelty, with group backing for supply chain and stores. Snitch’s full-price discipline is the clearest contrast.</td>
                        </tr>
                    </table>
                    </div>
                    {/* <p className='stratgic-note-para'><span className='stratgic-note-para-span'>Strategic Note:</span> "Same category, three entirely different bets on product vs. brand relevance."</p> */}
                </section>

                {/* brand attributes */}
                <section id="instant-recall">
                     <div className='brand-attributes-div'>
                    <h2 className='brand-attributes-head'>Instant Recall</h2>
                    <p className='brand-attributes-para'>What crosses a consumer’s mind first when SNITCH comes up:</p>
                    <div className='brand-attributes-points-div'>
                        <span className='brand-attributes-points'>The All-Shark Deal</span>
                        <span className='brand-attributes-points'>New Styles Every Day</span>
                        <span className='brand-attributes-points'>The Zara Of India </span>
                        <span className='brand-attributes-points'>Co-ord Sets </span>
                        <span className='brand-attributes-points'>Last Minute? Snitch It </span>
                        <span className='brand-attributes-points'>60-Minute Delivery</span>
                        <span className='brand-attributes-points'>Made In India, For The World</span>
                        
                    </div>
                </div>
                </section>



                  {/* Brand Elements */}
                <section className='brand-elements-section' id='elements-of-brand-equity'>
                    <h2 className='brand-elements-main-head'>Elements of Brand Equity</h2>
                    {/* row 1 */}
                    <div className='brand-element-row row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-9'>
                            <div className='brand-element-col'>
                                <p className='brand-element-col-para-label'>Brand Loyalty</p>
                                <ul className='brand-element-col-ul'>
                                    <li>Built on cadence. Daily styles, Thursday drops and app previews with first-six-hour launch discounts give shoppers a reason to return.</li>
                                    <li>No owned membership programme yet. Rewards come through a partner tie-up, not a Snitch-branded club, though Relove keeps customers inside the ecosystem.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* row 2 */}
                    <div className='brand-element-row row'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-3'></div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-9'>
                            <div className='brand-element-col'>
                                <p className='brand-element-col-para-label'>Brand Awareness</p>
                                <ul className='brand-element-col-ul'>
                                    <li>Shark Tank gave the brand a national moment, and fast Instagram growth has kept it visible to a young, mobile-first audience.</li>
                                    <li>135 storefronts now carry awareness offline, from metros to Tier II cities and the Northeast.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                      {/* row 3 */}
                    <div className='brand-element-row row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-9'>
                            <div className='brand-element-col'>
                                <p className='brand-element-col-para-label'>Perceived Quality</p>
                                <ul className='brand-element-col-ul'>
                                    <li>Set at accessible fast fashion, and largely met at the price.</li>
                                    <li>Full-price selling on most of its own listings signals confidence, though speed limits how far fabric and finish claims can go.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* row 4 */}
                    <div className='brand-element-row row'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-3'></div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-9'>
                            <div className='brand-element-col'>
                                <p className='brand-element-col-para-label'>Brand Association</p>
                                <ul className='brand-element-col-ul'>
                                    <li> Strongly tied to speed, trend and value, and to the “Zara of India” ambition the market now repeats back.</li>
                                    <li>Weak on visual cues. Recall sits with the name and the drops, not yet with its grid mark, a colour or a line.</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                      {/* row 5 */}
                    {/* <div className='brand-element-row row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-9'>
                            <div className='brand-element-col'>
                                <p className='brand-element-col-para-label'>Logo</p>
                                <ul className='brand-element-col-ul'>
                                    <li>"गली" set large across the heel or back panel in Hindi script, no separate icon or symbol doing the work</li>
                                    <li>"Labs" sits beside it in English, the only concession to a global-facing name</li>
                                    <li>Typography carries the entire mark, deliberately rejecting the anglicised, Italian-sounding names most premium Indian labels reach for</li>
                                </ul>
                            </div>
                        </div>
                    </div> */}

                    {/* row 6 */}
                    {/* <div className='brand-element-row row'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-3'></div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-9'>
                            <div className='brand-element-col'>
                                <p className='brand-element-col-para-label'>Logo</p>
                                <ul className='brand-element-col-ul'>
                                    <li>"गली" set large across the heel or back panel in Hindi script, no separate icon or symbol doing the work</li>
                                    <li>"Labs" sits beside it in English, the only concession to a global-facing name</li>
                                    <li>Typography carries the entire mark, deliberately rejecting the anglicised, Italian-sounding names most premium Indian labels reach for</li>
                                </ul>
                            </div>
                        </div>
                    </div>  */}

                     <p className='stratgic-note-para'><span className='stratgic-note-para-span'>The Strategic Note:</span>    Strong on speed, reach and pricing discipline, still building a brand system as distinctive as its business model. The real equity test is whether a SNITCH bag, store or post is recognisable without the name on it, as the brand enters new categories and the Gulf. It’s moving that way, but not there yet.</p>
                </section>


                {/* gali shoes image */}
                <section className='gali-shoes-img-section'>
                    <img src="https://dndesigns.co.in/uploads/pages/snitch_brand_audit_suggestion_recomdation.webp" className='img-fluid gali-shoes-img'></img>
                </section>



            {/* Suggestions & Recommendations */}
                     {/* new suggestion and recondation section */}
                <section className="new-suggestions-recommendation-section" id='suggestions-recommendations'>
                    <div className='container'>
                        <h2 className='new-suggestions-recommendation-section-head'>Suggestions And Recommendations</h2>

                        <div className='new-suggestions-recommendation-section-content-div'>
                            <h3 className='new-suggestions-recommendation-section-content-div-head'>Lock “Last Minute? Snitch It” As The One Fixed Tagline</h3>
                            <p className='new-suggestions-recommendation-section-content-div-para-desc'>The brand already has its strongest line, and 60-minute delivery now gives it a real service to stand on. Make “Last Minute? Snitch It” the master line on bags, store fascias, app screens and every campaign. A short tone-of-voice guide would capture the cheeky, quick-witted voice of the Bollywood spoofs around it. “Made in India, for the World” can stay as the brand’s statement of origin and ambition.</p>
                            <span className='new-suggestions-recommendation-section-content-div-number-span'>01</span>
                        </div>


                        <div className='new-suggestions-recommendation-section-content-div'>
                            <h3 className='new-suggestions-recommendation-section-content-div-head'>Build An Identity System That Travels</h3>
                            <p className='new-suggestions-recommendation-section-content-div-para-desc'>A monochrome identity with a small grid mark and no owned colour is easy to lose beside global labels on a Dubai marketplace. DN would build it out into a full system: a claimed accent colour, the grid mark scaled up into a signature pattern and graphic device, clear logo lockups and typography rules. Set down in a brand guideline, it would keep SNITCH recognisable on Noon, Namshi and future storefronts where the name is still new.</p>
                            <span className='new-suggestions-recommendation-section-content-div-number-span'>02</span>
                        </div>


                        <div className='new-suggestions-recommendation-section-content-div'>
                            <h3 className='new-suggestions-recommendation-section-content-div-head'>Design Packaging That Carries The Drop Energy</h3>
                            <p className='new-suggestions-recommendation-section-content-div-para-desc'>Snitch already uses eco-friendly materials such as corn-starch poly bags, but the packaging carries little of the brand’s story. DN would design a modular system with one fixed structure and rotating drop-specific finishes, so every unboxing and every 60-minute handover feels as new as the clothes inside. Small touches, such as the drop date or collection name on the pack, would turn speed into something customers can see and keep.</p>
                            <span className='new-suggestions-recommendation-section-content-div-number-span'>03</span>
                        </div>


                        <div className='new-suggestions-recommendation-section-content-div'>
                            <h3 className='new-suggestions-recommendation-section-content-div-head'>Turn snitch.com Into A Storytelling Asset</h3>
                            <p className='new-suggestions-recommendation-section-content-div-para-desc'>Branded searches like “snitch store” and “snitch shirts” already bring traffic, but the site is built to sell products, with little room for the brand’s own story. DN would add an SEO-structured editorial layer, with drop stories, styling guides, collaboration features and the Made in India narrative. That gives visitors a reason to stay, explore and come back, and gives Snitch a place to say what it stands for beyond newness.</p>
                            <span className='new-suggestions-recommendation-section-content-div-number-span'>04</span>
                        </div>


                        <div className='new-suggestions-recommendation-section-content-div'>
                            <h3 className='new-suggestions-recommendation-section-content-div-head'>Give Snitch Plus, Relove And Lifestyle Lines A Sub-Brand Architecture</h3>
                            <p className='new-suggestions-recommendation-section-content-div-para-desc'>Snitch Plus, Relove, footwear and the Reserve fragrances currently sit as features inside the main range. DN would define a master-brand system with sub-brand rules for naming, colour, packaging and tone. That would turn inclusion, circularity and lifestyle into visible brand pillars, help shoppers find their way through a growing catalogue, and make every new category launch feel unmistakably SNITCH.</p>
                            <span className='new-suggestions-recommendation-section-content-div-number-span'>05</span>
                        </div>
                    </div>
                </section>



                <div className='disclaimer-section'>
                    <p className='disclaimer-section-para'>Disclaimer:  Many images featured on this page are sourced from the brand's official website. All copyrights and intellectual property rights in these images remain with the brand and/or their respective rights holders. DN Designs does not claim ownership of, or any rights to, these images.</p>  
                </div>



            

                

            </div>


           {/* table of content  */}
            <div className='col-12 col-sm-12 col-md-12 col-lg-3 mt-4 order-1 order-lg-2'>
            <div className='table-of-content-section-table'>
            <h2 className='table-of-content-section-table-head'>Table of Contents</h2>
            <ol className='table-of-content-section-table-list'>

            <li><a href='#brand-at-a-glance' className='table-of-content-section-table-list-item'>Brand At A Glance</a></li>

            <li><a href='#brand-elements' className='table-of-content-section-table-list-item'>Brand Elements</a></li>

            <li><a href='#brand-attributes' className='table-of-content-section-table-list-item'>Brand Attributes</a></li>

            <li><a href='#swot' className='table-of-content-section-table-list-item'>SWOT</a></li>

            <li><a href='#stp' className='table-of-content-section-table-list-item'>STP</a></li>

            <li><a href='#pops-and-pods' className='table-of-content-section-table-list-item'>POPs and PODs</a></li>

            <li><a href='#product-mix' className='table-of-content-section-table-list-item'>Product Mix</a></li>

            <li><a href='#pricing-distribution-campaigns' className='table-of-content-section-table-list-item'>Pricing, Distribution & Campaigns</a></li>

            <li><a href='#competitor-analysis' className='table-of-content-section-table-list-item'>Competitor Analysis</a></li>

            <li><a href='#instant-recall' className='table-of-content-section-table-list-item'>Instant Recall</a></li>

            <li><a href='#elements-of-brand-equity' className='table-of-content-section-table-list-item'>Elements of Brand Equity</a></li>

            <li><a href='#suggestions-recommendations' className='table-of-content-section-table-list-item'>Suggestions & Recommendations</a></li>
            </ol>
            </div>
            </div>

        </div>
      </div>
      </section>


         {/* gali labs and bluorng */}
                {/* <section className='gali-labs-and-bluorng-section'>
                <div className='container'>
                    <div className='row gali-labs-and-bluorng-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                            <div className='gali-labs-and-bluorng-section-row-col'>
                                <img src="https://dndesigns.co.in/uploads/pages/3hgewjrhfber.webp" className='gali-labs-and-bluorng-img img-fluid'></img>
                                <div className="gali-labs-and-bluorng-text-div">
                                    <p className='gali-labs-and-bluorng-text'>Gully Labs</p>
                                    <p className='gali-labs-and-bluorng-text gali-labs-and-bluorng-text-color'>Brand Audit</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                            <div className='gali-labs-and-bluorng-section-row-col'>
                                <img src="https://dndesigns.co.in/uploads/pages/3hgewjrhfber.webp" className='gali-labs-and-bluorng-img img-fluid'></img>
                                <div className="gali-labs-and-bluorng-text-div">
                                    <p className='gali-labs-and-bluorng-text'>Gully Labs</p>
                                    <p className='gali-labs-and-bluorng-text gali-labs-and-bluorng-text-color'>Brand Audit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section> */}

                <CTAMarqueSwipper/>

                  {/* [ Let’s Talk ] */}
                {/* <section className='container lets-talk-section'>
                <div className='lets-talk-section-top-content'>
                <p className='lets-tak-label-para'>[ Still With Us?  ]</p>
                <h2 className='lets-tak-main-head'>Nobody's found your gaps yet. </h2>
                
                <BrandAuditCta/>
                </div>
                </section> */}

                    {/* Form */}
      <Form FormHead={FormHead} FormPara={FormPara} />
      

    </div>
  )
}

export default page
