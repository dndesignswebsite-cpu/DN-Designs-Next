export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from 'react'
import "./brand-audit.css"
import BrandAuditCta from '@/Components/BrandAuditCta/BrandAuditCta'
import CTAMarqueSwipper from '@/Components/CTAMarqueSwipper/CTAMarqueSwipper'

import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";
import { notFound } from "next/navigation";


// meta tags
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("dn-playbook/gully-labs", null, false);
  } catch (error) {
    return {
      title: "Gully Labs",
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
        pageData = await getPageById("dn-playbook/gully-labs", null, true);
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

  return (
    <div>

     {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "dn-playbook/gully-labs"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}


    {/* brand audit hero */}
      <section className='brand-audit-hero-section'>
        <div className='container'>
            <h1 className='brand-audit-hero-section-head'>The DN Playbook: Gully Labs</h1>
            <p className='brand-audit-hero-section-para'>Not The Indian Alternative To Nike. A Category Of Its Own.</p>
            <div className='hero-section-img-div'>
                <img src="https://dndesigns.co.in/uploads/pages/brand-audit-gully-labs-desktop.jpeg" className='hero-section-img hero-section-img-desktop img-fluid'></img>
                <img src="https://dndesigns.co.in/uploads/pages/brand-audit-gully-labs-mobile.jpeg" className='hero-section-img hero-section-img-mobile img-fluid'></img>
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
                <p className='table-of-content-section-para-first'>Can a three-year-old sneaker brand actually out-story companies that have been doing this for decades? And is "culturally inspired" still meaningful once you're the one hand-lasting every pair yourself?</p>
                </div>
                <div className='table-of-content-2nd-para-div'>
                    <p className="table-of-content-2nd-para">That's the question Gully Labs put in front of us.</p>
                    
                </div>


                {/* Brand at a glance */}
                <div className="brand-at-glance" id='brand-at-a-glance'>
                    <h2 className="brand-at-glance-head">Brand At A Glance</h2>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-4 brand-at-glance-col-1'>
                            <div className='brand-at-glance-text-div'>
                                <p className="brand-at-glance-text-div-para">Category</p>
                                <h3 className="brand-at-glance-text-div-head">Handcrafted sneakers, D2C</h3>
                            </div>

                            <div className='brand-at-glance-text-div'>
                                <p className="brand-at-glance-text-div-para">Founded In</p>
                                <h3 className="brand-at-glance-text-div-head">August 2023</h3>
                            </div>

                            <div className='brand-at-glance-text-div'>
                                <p className="brand-at-glance-text-div-para">Founders</p>
                                <h3 className="brand-at-glance-text-div-head">Arjun Singh & Animesh Mishra</h3>
                            </div>

                            <div className='brand-at-glance-text-div'>
                                <p className="brand-at-glance-text-div-para">Headquarters </p>
                                <h3 className="brand-at-glance-text-div-head">New Delhi/Noida</h3>
                            </div>
                            <div className='brand-at-glance-text-div'>
                                <p className="brand-at-glance-text-div-para">Backing/Funding</p>
                                <h3 className="brand-at-glance-text-div-head">Backed by Zeropearl VC and Saama Capital, with a Shark Tank India investment from Aman Gupta.</h3>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 brand-at-glance-img-div">
                            <img src="https://dndesigns.co.in/uploads/pages/BRAND-at-glanceewhbd.jpeg" className='img-fluid brand-at-glance-img'></img>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-4 brand-at-glance-col-1'>
                            

                             <div className='brand-at-glance-text-div'>
                                <p className="brand-at-glance-text-div-para">Positioning</p>
                                <h3 className="brand-at-glance-text-div-head">Sneakers built on Indian street culture, not logos.</h3>
                            </div>

                             <div className='brand-at-glance-text-div'>
                                <p className="brand-at-glance-text-div-para">Price Band</p>
                                <h3 className="brand-at-glance-text-div-head">₹4,990 to ₹15,990</h3>
                            </div>

                             <div className='brand-at-glance-text-div'>
                                <p className="brand-at-glance-text-div-para">Core Audience</p>
                                <h3 className="brand-at-glance-text-div-head">Urban Gen Z/millennial sneaker heads who want a story over a stock silhouette.</h3>
                            </div>

                             <div className='brand-at-glance-text-div'>
                                <p className="brand-at-glance-text-div-para">Playing Against</p>
                                <h3 className="brand-at-glance-text-div-head">Neeman's, Comet & Bacca Bucci</h3>
                            </div>

                            <div className='brand-at-glance-text-div'>
                                <p className="brand-at-glance-text-div-para">Notable Moment</p>
                                <h3 className="brand-at-glance-text-div-head">₹1 Cr on Shark Tank India, backed by Aman Gupta.</h3>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Brand Elements */}
                <section className='brand-elements-section' id='brand-elements'>
                    <h2 className='brand-elements-main-head'>Brand Elements</h2>
                    {/* row 1 */}
                    <div className='brand-element-row row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-9'>
                            <div className='brand-element-col'>
                                <p className='brand-element-col-para-label'>Name</p>
                                <ul className='brand-element-col-ul'>
                                    <li>"Gully" pulled straight from Indian street and neighbourhood slang.</li>
                                    <li>"Labs" added to signal craft and experimentation, not mass manufacturing.</li>
                                    <li>Reads homegrown first, premium second, the opposite order most D2C footwear brands choose.</li>
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
                                    <li>"गली" set large across the heel or back panel in Hindi script, no separate icon or symbol doing the work.</li>
                                    <li>"Labs" sits beside it in English, the only concession to a global-facing name.</li>
                                    <li>Typography carries the entire mark, moving away from the western-inspired visual language often used by premium Indian labels.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                      {/* row 3 */}
                    <div className='brand-element-row row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-9'>
                            <div className='brand-element-col'>
                                <p className='brand-element-col-para-label'>Distinctive Brand Codes</p>
                                <ul className='brand-element-col-ul'>
                                    <li>Fixed colour-first naming formula across every drop: Baaz Noor Yellow, Toofani Blue, Patang Red, Firki Indigo.</li>
                                    <li>A deep signature blue recurs across retail, packaging and product photography as the anchor tone.</li>
                                    <li>Materials such as natural rubber, bamboo, and Kantha stitching function as visual texture cues, not just spec sheet detail.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* row 4 */}
                    <div className='brand-element-row row'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-3'></div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-9'>
                            <div className='brand-element-col'>
                                <p className='brand-element-col-para-label'>Slogan</p>
                                <ul className='brand-element-col-ul'>
                                    <li>No single fixed slogan running across every touchpoint yet.</li>
                                    <li>The closest functioning line currently sits around "a rebellion against mediocrity".</li>
                                    <li>Reads more like a mission statement than a punchy, repeatable slogan.</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                      {/* row 5 */}
                    <div className='brand-element-row row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-9'>
                            <div className='brand-element-col'>
                                <p className='brand-element-col-para-label'>Brand Mantra</p>
                                <ul className='brand-element-col-ul'>
                                    <li>Indian craft, told without apology, the internal north star behind product and copy decisions.</li>
                                    <li>Shows up consistently in founder interviews rather than as a printed line anywhere.</li>
                                    <li>Functions the way Nike's "Authentic Athletic Performance" does, guiding decisions more than selling products.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* row 6 */}
                    <div className='brand-element-row row'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-3'></div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-9'>
                            <div className='brand-element-col'>
                                <p className='brand-element-col-para-label'>Tagline</p>
                                <ul className='brand-element-col-ul'>
                                    <li>Not yet fixed, still forming as the brand matures past its first few years.</li>
                                    <li>Individual drop names currently do a tagline's job, each one carrying its own mini-story.</li>
                                    <li>A genuine gap, worth closing deliberately (see Recommendations).</li>
                                </ul>
                            </div>
                        </div>
                    </div> 

                    {/* row 7 */}
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
                    </div> 

                </section>

                {/* gali labs image */}
                <section className='gali-labs-section'>
                    <img src="https://dndesigns.co.in/uploads/pages/brand-elements-brand-auditwend.jpeg" className='img-fluid gali-labs-image'></img>
                </section>

                {/* [ Let’s Talk ] */}
                <section className='lets-talk-section'>
                <div className='lets-talk-section-top-content'>
                <p className='lets-tak-label-para'>[ Still With Us? ]</p>
                <h2 className='lets-tak-main-head'>Nobody's found your gaps yet. </h2>
                {/* <TalkToUs/> */}
                <BrandAuditCta/>
                </div>

                <div className='brand-attributes-div' id='brand-attributes'>
                    <h2 className='brand-attributes-head'>Brand Attributes</h2>
                    <p className='brand-attributes-para'>Attributes are words a customer would reasonably associate with the brand.</p>
                    <div className='brand-attributes-points-div'>
                        <span className='brand-attributes-points'>Handcrafted</span>
                        <span className='brand-attributes-points'>Rooted in Indian culture</span>
                        <span className='brand-attributes-points'>Premium, Not Mass</span>
                        <span className='brand-attributes-points'>Story Led</span>
                        <span className='brand-attributes-points'>Design Forward</span>
                        <span className='brand-attributes-points'>Ethically Made</span>
                        <span className='brand-attributes-points'>Limited & Drop-Based</span>
                        <span className='brand-attributes-points'>Anti-Colonial in Tone, Deliberately</span>
                    </div>
                </div>
                </section>

                {/* SWOT */}
                <section className='swot-section' id='swot'>
                    <h2 className='swot-section-head'>SWOT</h2>
                    <div className='row swot-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4'>
                            <div className='swot-section-col'>
                                <p className='brand-element-col-para-label'>Strengths</p>
                                <ul className='brand-element-col-ul'>
                                    <li>Handcrafted positioning is genuinely hard to copy. It’s not just a marketing line. Every pair is hand-lasted, which most mass sneaker brands simply can't claim.</li>
                                    <li>Cultural storytelling is built into the product itself (Phulkari-inspired patterns, a Victory Blue tribute to India's 1948 Olympic gold, a Royal Enfield collab) rather than bolted on later as a campaign.</li>
                                    <li>Strong credibility loop between founders, Shark Tank exposure, and investors who've already built other successful Indian D2C brands (Bounce, Yogabar, Jar, Renee Cosmetics).</li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4'>
                            <div className='swot-section-col'>
                                <p className='brand-element-col-para-label'>Weaknesses</p>
                                <ul className='brand-element-col-ul'>
                                    <li>The retail footprint is still thin. Five physical stores nationally isn't enough to build the try-before-you-buy trust sneakers usually need.</li>
                                    <li>Premium handcrafted pricing puts the brand above where most of India's sneaker-buying demographic actually spends.</li>
                                    <li>Hand-lasted production and multi-week dispatch windows on some drops cap how fast they can scale without diluting the handmade promise.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                     <div className='row swot-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4'>
                            <div className='swot-section-col'>
                                <p className='brand-element-col-para-label'>Opportunities</p>
                                <ul className='brand-element-col-ul'>
                                    <li>Global appetite for "Made in India" storytelling is genuinely rising, and international expansion (US, UK) is already on their radar.</li>
                                    <li>The collab model (Royal Enfield, independent designers like Lead-A) is a proven lever they can keep pulling with other culturally resonant Indian names.</li>
                                    <li>The category still has room for a brand that owns "premium Indian sneaker" the way Neeman's owns "sustainable everyday shoe".</li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4'>
                            <div className='swot-section-col'>
                                <p className='brand-element-col-para-label'>Threats</p>
                                <ul className='brand-element-col-ul'>
                                    <li>Neeman's and other funded D2C sneaker brands are chasing the same wallet, with more retail scale already in place.</li>
                                    <li>Status buying in Indian sneaker culture still skews toward Nike, Adidas, and New Balance. Cultural storytelling has to work against that gravity, not just alongside it.</li>
                                    <li>Scaling handcrafted production without a factory-line model is a real operational ceiling, not just a brand narrative to manage.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


                {/* STP */}
                <section className='stp-section' id='stp'>
                <h2 className='stp-section-main-head'>
                STP
                </h2>
                    <div className='row stp-section-row'>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 stp-section-col order-2 order-lg-1">
                            <div className="stp-section-col-div">
                                <p className='stp-section-col-div-label-para'>Segmentation</p>
                                <p className='stp-section-col-div-desc-para'>Urban, digitally native Indian consumers, mostly Gen Z and young millennials, who treat sneakers as identity rather than utility.</p>
                            </div>

                              <div className="stp-section-col-div stp-section-col-div-middle">
                                <p className='stp-section-col-div-label-para'>Targeting </p>
                                <p className='stp-section-col-div-desc-para'>Sneakerheads and streetwear-adjacent buyers tired of choosing between global brands with no cultural relevance and local brands with no design credibility. Secondary audience: NRIs and international buyers curious about Indian culture and story, told through footwear.</p>
                            </div>

                              <div className="stp-section-col-div">
                                <p className='stp-section-col-div-label-para'>Positioning</p>
                                <p className='stp-section-col-div-desc-para'>Not "an affordable Indian alternative to Nike." Positioned as its own category entirely: premium, story-led, handcrafted sneakers that are Indian. Not sneakers apologising for being Indian.</p>
                            </div>
                        </div>

                        <div className='col-12 col-sm-12 col-md-12 col-lg-8 order-1 order-lg-2 stp-img-col'>
                            <img src="https://dndesigns.co.in/uploads/pages/stp-brand-audit-image-section.jpeg" className='img-fluid'></img>
                        </div>
                    </div>
                </section>


                {/* PoPs & PoDs */}
                <section className='pop-pod-section' id='pops-and-pods'>
                <h2 className='pop-pod-section-head'>POPs and PODs</h2>
                    <div className='row pop-pod-section-row'>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                            <div className='pop-pod-section-col'>
                                <h2 className='pop-pod-section-col-head'>Points of Parity - The Baseline To Even Compete</h2>
                                 <ul className='brand-element-col-ul'>
                                    <li>Comfort and durability that justify a premium price.</li>
                                    <li>Regular new drops to stay visible in a fast-moving sneaker culture.</li>
                                    <li>A social-first brand presence, since Instagram is where this category actually lives.</li>
                                </ul>
                            </div>
                        </div>

                          <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                            <div className='pop-pod-section-col'>
                                <h2 className='pop-pod-section-col-head'>Points of Difference - What's Genuinely Theirs</h2>
                                 <ul className='brand-element-col-ul'>
                                    <li>Hand-lasted construction at a price point where most competitors are still factory-made.</li>
                                    <li>A design language rooted in specific cultural references, not vague "colourful patterns". From Olympic gold tributes and Phulkari embroidery to city-inspired silhouettes.</li>
                                    <li>Physical retail as brand theatre. The Panchsheel Park flagship, built with manhole covers, lakhori brick, and a giant shoe sculpture over the entrance, is doing brand work most D2C sneaker startups skip entirely.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Product mix */}
                <section className='product-mix-section' id='product-mix'>
                    <h2 className='product-mix-section-head'>Product Mix</h2>
                    <div className='product-mix-section-img-div'>
                        <img src="https://dndesigns.co.in/uploads/pages/product-mix-image-section.jpeg" className='img-fluid product-mix-section-img'></img>
                    </div>
                     
                     {/* row 1 */}
                    <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                            <p className='product-mix-section-row-col-para'>Core silhouettes: the Gully Number 001 and Number 002, reworked across seasonal drops.</p>
                        </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                    </div>


                     {/* row 2 */}
                    <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                            <p className='product-mix-section-row-col-para'>Named, themed collections (KULFI, Migration, BAAZ, 1948 Victory Blue) each with its own story, instead of a flat, undifferentiated catalogue. </p>
                        </div>
                        </div>
                    </div>


                     {/* row 3 */}
                    <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                            <p className='product-mix-section-row-col-para'>Designer collabs (Lead-A) and brand collabs (Royal Enfield) sit alongside the core range, extending the world without replacing it.</p>
                        </div>
                        </div>
                        <div className='col-5'></div>
                    </div>
                </section>

                {/* Pricing, Distribution & Campaigns */}
                <section className='pricing-distrubution-section' id="pricing-distribution-campaigns">
                    <h2 className='pricing-distrubution-section-main-head'>Pricing, Distribution & Campaigns</h2>

                    <div className='row pricing-distrubution-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-4 mt-4'>
                            <div className='pricing-distrubution-section-col'>
                                <h2 className="pricing-distrubution-section-col-head">Pricing</h2>
                                <ul className='brand-element-col-ul'>
                                    <li>Sits between ₹4,990 and ₹15,990. Above mass Indian sneaker brands, below international sportswear brands.</li>
                                    <li>Pricing broadly follows product complexity: core leather and suede styles sit lower, while statement materials and collaboration editions command a premium.</li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-12 col-sm-12 col-md-12 col-lg-4 mt-4'>
                            <div className='pricing-distrubution-section-col'>
                                <h2 className="pricing-distrubution-section-col-head">Distribution</h2>
                                <ul className='brand-element-col-ul'>
                                    <li>D2C-first through their own website; retail still early-stage across five cities.</li>
                                    <li>The flagship store reads less like a sales point and more like a brand museum right now, worth more in earned media than daily footfall.</li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-12 col-sm-12 col-md-12 col-lg-4 mt-4'>
                            <div className='pricing-distrubution-section-col'>
                                <h2 className="pricing-distrubution-section-col-head">Campaigns</h2>
                                <ul className='brand-element-col-ul'>
                                    <li>The Shark Tank appearance is their biggest campaign moment to date, national visibility plus a validation story they'll keep referencing.</li>
                                    <li>Drop-based marketing tied to cultural moments does the ongoing work in between.</li>
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
                            <th className='competive-analysis-table-head-row-text' colspan="1">Competitive Stance</th>
                        </tr>
                        <tr className="competive-analysis-table-data-row">
                            <td className='competive-analysis-table-data-row-text'>Neeman's</td>
                            <td className='competive-analysis-table-data-row-text'>Sustainability and everyday comfort. Built for mass accessibility.</td>
                            <td className='competive-analysis-table-data-row-text'>₹2,000 – ₹6,999</td>
                            <td className='competive-analysis-table-data-row-text table-data-main-para'>Competing for the same wallet, not really the same cultural relevance.<br></br>Already ahead on retail scale, funding, and category-default awareness.</td>
                        </tr>
                          <tr className="competive-analysis-table-data-row">
                            <td className='competive-analysis-table-data-row-text'>Comet</td>
                            <td className='competive-analysis-table-data-row-text'>Youth-focused, limited-drop streetwear sneakers.</td>
                            <td className='competive-analysis-table-data-row-text'>₹4,000 – ₹5,500.</td>
                            <td className='competive-analysis-table-data-row-text table-data-main-para'>The closest style rival.<br></br> Undercuts Gully Labs on price while playing a similar hype and drop-culture game.<br></br>Thinner on cultural storytelling.<br></br>Closer to pure streetwear hype than heritage-craft narrative.</td>
                        </tr>
                          <tr className="competive-analysis-table-data-row">
                            <td className='competive-analysis-table-data-row-text'>Bacca Bucci</td>
                            <td className='competive-analysis-table-data-row-text'>Broader casual-to-formal footwear catalogue. </td>
                            <td className='competive-analysis-table-data-row-text'>₹1,000 to ₹3,000,</td>
                            <td className='competive-analysis-table-data-row-text table-data-main-para'>Wins on range and mass retail presence, not on any singular story.<br></br>More product-led than brand-led, the opposite of where Gully Labs is placing its bet.</td>
                        </tr>
                    </table>
                    </div>
                    {/* <p className='stratgic-note-para'><span className='stratgic-note-para-span'>Strategic Note:</span> "Same category, three entirely different bets on product vs. brand relevance."</p> */}
                </section>

                {/* brand attributes */}
                <section id="recall-value">
                     <div className='brand-attributes-div'>
                    <h2 className='brand-attributes-head'>Recall Value</h2>
                    <p className='brand-attributes-para'>What actually crosses a consumer's mind in the first second they hear "Gully Labs," before any research, before any product page.</p>
                    <div className='brand-attributes-points-div'>
                        <span className='brand-attributes-points'>That Blue Store With Gigantic Suspended Shoe Sculpture </span>
                        <span className='brand-attributes-points'>Handcrafted, Not Mass-Made</span>
                        <span className='brand-attributes-points'>Shark Tank Success, Backed By Aman Gupta</span>
                        <span className='brand-attributes-points'>Sneakers With A Story Behind Them</span>
                        <span className='brand-attributes-points'>Expensive, But For A Reason</span>
                        <span className='brand-attributes-points'>Indian, Unapologetically</span>
                        <span className='brand-attributes-points'>Limited Drops, Gone Fast</span>
                        
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
                                    <li>Most customers are one or two drops into the brand's life, too early for classic repeat-purchase loyalty.</li>
                                    <li>What's forming instead is community loyalty, people following the story and design language over any single shoe.</li>
                                    <li>Drop cadence is the current loyalty driver, not yet an always-on core range.</li>
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
                                    <li>The Shark Tank appearance drove more awareness than years of organic marketing could have.</li>
                                    <li>Consistent culture and design press keeps recall building steadily.</li>
                                    <li>Still nowhere near category-default the way Neeman's or global sportswear brands are.</li>
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
                                    <li>Hand-lasted construction and named, sourced materials make quality claims specific and demonstrable.</li>
                                    <li>Price point itself signals premium positioning before a customer even touches the product.</li>
                                    <li>The open question is whether perceived quality holds once production has to move past an artisanal pace.</li>
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
                                    <li>Top associations skew cultural: handcrafted, Indian, story-led, not Nike.</li>
                                    <li>Distinctive and ownable; most sneaker brands never build associations this specific.</li>
                                    <li>Some of it still borrows from the founders' Shark Tank story rather than the product alone, worth shifting over time.</li>
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

                     <p className='stratgic-note-para'><span className='stratgic-note-para-span'>Strategic Note:</span>    Strong on distinctiveness, still building on consistency and loyalty. The real equity test is whether a Gully Labs sneaker is recognisable without the logo or the founder story attached, on silhouette and material alone. It's not quite there yet. But it's closer than most three-year-old D2C brands manage.</p>
                </section>


                {/* gali shoes image */}
                <section className='gali-shoes-img-section'>
                    <img src="https://dndesigns.co.in/uploads/pages/elemnets-of-brand-equaity.jpeg" className='img-fluid gali-shoes-img'></img>
                </section>



            {/* Suggestions & Recommendations */}
                 <section className='product-mix-section' id='suggestions-recommendations'>
                    <h2 className='product-mix-section-head'>Suggestions & Recommendations</h2>
                     {/* row 1 */}
                    <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                        <p className='suggestions-recommendations-head-para'>Give The Packaging The Same Craft Story As The Shoe </p>
                            <p className='product-mix-section-row-col-para'>The unboxing moment currently undersells the product inside it. A packaging system carrying the same embroidery motifs and colour-naming logic as the sneakers, insert cards, tissue, and the box itself would make the craft narrative continuous instead of stopping at the shoebox.</p>
                        </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                    </div>


                     {/* row 2 */}
                    <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                         <p className='suggestions-recommendations-head-para'>Turn The Manifesto Into One Fixed, Repeatable Tagline </p>
                            <p className='product-mix-section-row-col-para'>Right now the brand's strongest line lives in interviews, not on the product. Codifying it into a single, ownable tagline gives every future touchpoint, packaging, ads and retail signage one consistent line to build recall around.</p>
                        </div>
                        </div>
                    </div>


                     {/* row 3 */}
                    <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                         <p className='suggestions-recommendations-head-para'>Put The Visual System Into A Formal Brand Guideline </p>
                            <p className='product-mix-section-row-col-para'>The colour-naming discipline and blue-anchored world already exist; they're just undocumented. Formalising them into a guideline is what keeps every future drop, collab, and vendor asset visually consistent as the team grows past its two founders.</p>
                        </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                    </div>


                    {/* row 4 */}
                    <div className='row product-mix-section-row'>
                       <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                         <p className='suggestions-recommendations-head-para'>Build The Cultural Storytelling Into The Website Itself  </p>
                            <p className='product-mix-section-row-col-para'>The product pages currently lean on photography alone. Structured, SEO-forward storytelling blocks, per-drop origin stories, and material notes would let the same craft narrative that works in the flagship store convert browsers online too.</p>
                        </div>
                        </div>
                     
                    </div>


                       {/* row 5 */}
                    <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                         <p className='suggestions-recommendations-head-para'>Design A Scalable Pop-Up Kit To Extend The Flagship's Brand Theatre </p>
                            <p className='product-mix-section-row-col-para'>One store can't carry the whole brand experience nationally. A modular pop-up or shop-in-shop kit, built once and reused across cities, would let smaller markets feel the same craft-forward theatre without full flagship capex.</p>
                        </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                    </div>



                </section>

                <div className='disclaimer-section'>
                    <p className='disclaimer-section-para'>Disclaimer:  Many images featured on this page are sourced from Gully Labs official website. All copyrights and intellectual property rights in these images remain with Gully Labs and/or their respective rights holders. DN Designs does not claim ownership of, or any rights to, these images.</p>
                   
                </div>

                

            </div>


           {/* table of content */}
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

            <li><a href='#recall-value' className='table-of-content-section-table-list-item'>Recall Value</a></li>

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

    </div>
  )
}

export default page
