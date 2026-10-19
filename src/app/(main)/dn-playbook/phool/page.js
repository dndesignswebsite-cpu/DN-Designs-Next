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
import "./phool-brand-audit.css"


// meta tags
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("dn-playbook/phool", null, false);
  } catch (error) {
    return {
      title: "Phool",
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
        pageData = await getPageById("dn-playbook/phool", null, true);
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
          key={`schema-page-${pageData._id || "dn-playbook/phool"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}


      {/* breadcrump */}
      <Breadcrumb/>


    {/* brand audit hero */}
      <section className='brand-audit-hero-section'>
        <div className='container'>
            <h1 className='brand-audit-hero-section-head'>The DN Playbook: PHOOL</h1>
            <p className='brand-audit-hero-section-para'>A Brand Grown From Temple Flower Waste</p>
            <div className='hero-section-img-div'>
                <img src="https://dndesigns.co.in/uploads/pages/Phooll-hero-lapehrj.jpeg" className='hero-section-img hero-section-img-desktop img-fluid'></img>
                <img src="https://dndesigns.co.in/uploads/pages/Phooll-hero-mobilewgsda.jpeg" className='hero-section-img hero-section-img-mobile img-fluid'></img>
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
                <p className='table-of-content-section-para-first'>Every year, tonnes of pesticide and insecticide laden temple flower waste end up straight into the rivers, causing pollution. Until Phool, few had thought to turn that waste into a fragrance brand desirable enough to sit on a premium shelf, let alone one that would eventually bring Alia Bhatt on board as an investor. Phool, a Kanpur startup, rewrote that script, turning discarded petals into a fragrance brand with real shelf appeal. So, what did it take to build that appeal, and what is still missing? </p>
                </div>
                <div className='table-of-content-2nd-para-div'>
                    <p className="table-of-content-2nd-para">That is what we look at here. </p>
                    
                </div>


                {/* Brand at a glance */}
                <div className="brand-at-glance-phool" id='brand-at-a-glance'>
                    <h2 className="brand-at-glance-head-phool">Brand At A Glance</h2>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-4 brand-at-glance-col-1-phool'>
                            <div className='brand-at-glance-text-div-phool'>
                                <p className="brand-at-glance-text-div-para-phool">Brand Name</p>
                                <h3 className="brand-at-glance-text-div-head-phool">Phool (PHOOL / Phool.co)</h3>
                            </div>

                            <div className='brand-at-glance-text-div-phool'>
                                <p className="brand-at-glance-text-div-para-phool">Founders	</p>
                                <h3 className="brand-at-glance-text-div-head-phool">Ankit Agarwal & Prateek Kumar</h3>
                            </div>

                            <div className='brand-at-glance-text-div-phool'>
                                <p className="brand-at-glance-text-div-para-phool">Headquarters </p>
                                <h3 className="brand-at-glance-text-div-head-phool">Kanpur, Uttar Pradesh, India</h3>
                            </div>

                            <div className='brand-at-glance-text-div-phool'>
                                <p className="brand-at-glance-text-div-para-phool">Playing Against</p>
                                <h3 className="brand-at-glance-text-div-head-phool">Nirmalaya, Prabhu Shriram, Cycle Pure Agarbathi.</h3>
                            </div>
                            <div className='brand-at-glance-text-div-phool'>
                                <p className="brand-at-glance-text-div-para-phool">Category</p>
                                <h3 className="brand-at-glance-text-div-head-phool">D2C wellness & home fragrance - charcoal-free incense sticks/cones, essential oils, havan cups, car fresheners, Fleather (flower-leather).</h3>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 brand-at-glance-img-div-phool">
                            <img src="https://dndesigns.co.in/uploads/pages/phoolbrandauditiagewehb.jpg" className='img-fluid brand-at-glance-img-phool'></img>
                            <div className='brand-at-glance-text-div-phool brand-at-glance-text-div-phool-img-col'>
                                <p className="brand-at-glance-text-div-para-phool">Core Audience</p>
                                <h3 className="brand-at-glance-text-div-head-phool">Urban, sustainability-conscious Indian millennials and Gen Z buying wellness and home fragrance online, plus a growing NRI/global gifting audience.</h3>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-4 brand-at-glance-col-1-phool'>
                            

                             <div className='brand-at-glance-text-div-phool'>
                                <p className="brand-at-glance-text-div-para-phool">Parent Company</p>
                                <h3 className="brand-at-glance-text-div-head-phool">Kanpur Flowercycling Private Limited</h3>
                            </div>

                             <div className='brand-at-glance-text-div-phool'>
                                <p className="brand-at-glance-text-div-para-phool">Year of Establishment</p>
                                <h3 className="brand-at-glance-text-div-head-phool">2017</h3>
                            </div>

                             <div className='brand-at-glance-text-div-phool'>
                                <p className="brand-at-glance-text-div-para-phool">Positioning</p>
                                <h3 className="brand-at-glance-text-div-head-phool">Charcoal-free luxury incense made from recycled temple flowers.</h3>
                            </div>

                             <div className='brand-at-glance-text-div-phool'>
                                <p className="brand-at-glance-text-div-para-phool">Price Band</p>
                                <h3 className="brand-at-glance-text-div-head-phool">Mid-to-premium, roughly ₹95 to ₹2,000+ </h3>
                            </div>

                            <div className='brand-at-glance-text-div-phool'>
                                <p className="brand-at-glance-text-div-para-phool">Notable Moment</p>
                                <h3 className="brand-at-glance-text-div-head-phool">Bollywood actor Alia Bhatt coming on as an investor, plus recognitions including a UN Momentum for Change Award and a PETA India innovation award for its Fleather material.</h3>
                            </div>
                        </div>
                    </div>

                     <div className='brand-at-glance-text-div-phool brand-at-glance-text-div-phool-bottom'>
                                <p className="brand-at-glance-text-div-para-phool">Funding</p>
                                <ul>
                                    <li className='brand-at-glance-text-div-head-phool'>
                                        Early Backers: IAN Fund, Social Alpha, Draper Richards Kaplan Foundation, IIT Kanpur.
                                    </li>

                                    <li className='brand-at-glance-text-div-head-phool'>
                                        April 2022: $8M Series A, led by Sixth Sense Ventures, Alia Bhatt and IAN Fund also participating.
                                    </li>

                                    <li className='brand-at-glance-text-div-head-phool'>
                                       2023: Government R&D grant added to the mix.
                                    </li>
                                    <li className='brand-at-glance-text-div-head-phool'>
                                       Total raised: ~$9.4M across these rounds. 
                                    </li>
                                </ul>
                            </div>
                    
                </div>


                {/* Brand Elements */}
                <section className='brand-elements-section' id='brand-elements'>
                    <h2 className='brand-elements-main-head'>Brand Elements</h2>
                    {/* row 1 */}
                    <div className='brand-element-row row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-9'>
                            <div className='brand-element-col'>
                                <p className='brand-element-col-para-label'>Logo</p>
                                <ul className='brand-element-col-ul'>
                                    <li>Phool’s logo is a clean, uppercase sans-serif wordmark in gold, with a solid circular form replacing the second “O” and a boxed tagline, “Made from temple flowers”, beneath it. </li>
                                    <li>The circle is sometimes read as a bindi, a nod to the women who collect and process the temple flowers. It also has a small line beneath it that links to the tagline box.</li>
                                    <li>The identity keeps the typography uncluttered while giving the brand a distinctive visual cue without relying on a conventional floral illustration.</li>
                                    <li>It reads more like a considered lifestyle label than an eco NGO, with the sustainability story left to a quiet tagline, which is the right call for a premium shelf. </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* row 2 */}
                    <div className='brand-element-row row'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-3'></div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-9'>
                            <div className='brand-element-col'>
                                <p className='brand-element-col-para-label'>Name</p>
                                <ul className='brand-element-col-ul'>
                                    <li>Phool is simply the Hindi word for flower, spelt to travel internationally while staying rooted in the language of the ritual it's built on.</li>
                                    <li>Short, ownable, easy to say in English or Hindi. Rare for a category this cluttered with generic "agarbatti" naming.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                      {/* row 3 */}
                    <div className='brand-element-row row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-9'>
                            <div className='brand-element-col'>
                                <p className='brand-element-col-para-label'>Colour Theme </p>
                                <ul className='brand-element-col-ul'>
                                    <li>Phool balances a clean, understated website aesthetic with a varied packaging palette, from saturated reds, blues and pinks on festive lines to softer tones elsewhere. </li>
                                    <li>The varied treatments give each range its own character and help Phool appeal to both purpose-conscious consumers and those seeking a premium fragrance experience. </li>
                                    <li>That variety works while the range is small, but it needs a system as the catalogue grows. </li>
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
                                    <li>The tagline, “Made from temple flowers,” states the product’s origin as a plain fact, without moral language like “save the rivers” or “eco-friendly”.</li>
                                    <li>It carries one fact only, leaving the women’s employment and the river pollution story to other parts of the brand’s communication. </li>
                                    <li>Four calm words support the premium, non-NGO positioning. </li>
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
                                    <li>Phool has no officially stated brand mantra, but the line on its homepage, “Good For You, Good For The Planet & Good For The People Who Make It,” comes closest to one.</li>
                                    <li>It covers three audiences in one line: the customer, the environment and the women who make the products. That keeps the brand’s value from being reduced to sustainability alone.</li>
                                    <li>It’s structurally solid, but at 14 words, it hasn’t been distilled into something a consumer would easily repeat back.</li>
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
                                    <li>Not yet fixed, still forming as the brand matures past its first few years.</li>
                                    <li>Individual drop names currently do a tagline's job, each one carrying its own mini-story.</li>
                                    <li>A genuine gap, worth closing deliberately (see Recommendations).</li>
                                </ul>
                            </div>
                        </div>
                    </div>  */}

                    {/* row 7 */}
                    {/* <div className='brand-element-row row'>
                   
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
                    <img src="https://dndesigns.co.in/uploads/pages/BRANDSELEMENTSphoolbrandauidtwiefug.jpeg" className='img-fluid gali-labs-image'></img>
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
                    {/* <p className='brand-attributes-para'>Attributes are words a customer would reasonably associate with the brand.</p> */}
                    <div className='brand-attributes-points-div'>
                        <span className='brand-attributes-points'>Sustainable</span>
                        <span className='brand-attributes-points'>Ritual-rooted</span>
                        <span className='brand-attributes-points'>Premium-accessible</span>
                        <span className='brand-attributes-points'>Purpose-led</span>
                        <span className='brand-attributes-points'>Origin-led </span>
                        <span className='brand-attributes-points'>Craft-driven</span>
                        <span className='brand-attributes-points'>Modern-Indian</span>
                        <span className='brand-attributes-points'>Women-powered</span>
                        <span className='brand-attributes-points'>Quietly confident</span>
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
                                    <li>Distinctive input material (temple flowers) and a patented flowercycling process, run at a scale few competitors can match.</li>
                                    <li>Strong third-party validation: Fair for Life-Fairtrade and Ecocert certifications, UN awards, and Alia Bhatt as an investor. Its Fleather product also won PETA recognition.</li>
                                    <li>A clear social impact story (women’s livelihoods) that is built into how the products are made, not added for marketing.</li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4'>
                            <div className='swot-section-col'>
                                <p className='brand-element-col-para-label'>Weaknesses</p>
                                <ul className='brand-element-col-ul'>
                                    <li>No officially stated brand mantra: the closest line, the homepage banner, is long and hard to repeat, so the verbal identity is less developed than the visual and product story. </li>
                                    <li>Reliant on a single hero narrative (temple waste) across a growing and diversifying product range, which risks category confusion as SKUs multiply.</li>
                                    <li>Premium pricing in a category where mass-market incense sells for a fraction of the price. Frequent discounting can undercut the premium positioning. </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                     <div className='row swot-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4'>
                            <div className='swot-section-col'>
                                <p className='brand-element-col-para-label'>Opportunities</p>
                                <ul className='brand-element-col-ul'>
                                    <li>Fleather (Phool's flower-based vegan leather material) and its other biomaterials give Phool a credible path beyond incense into fashion, packaging and B2B materials, categories that could offer higher value than fragrance. </li>
                                    <li>Corporate and festive gifting (Diwali, Rakhi) is a proven high-AOV occasion the brand is already leaning into and can push harder.</li>
                                    <li>Global wellness and clean-fragrance demand gives an opening to export the "premium, modern-Indian" positioning.</li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4'>
                            <div className='swot-section-col'>
                                <p className='brand-element-col-para-label'>Threats</p>
                                <ul className='brand-element-col-ul'>
                                    <li>Legacy incense brands (Cycle, Mangaldeep) have decades of trade distribution and trust; something Phool cannot out-scale on price.</li>
                                    <li>New D2C wellness and home-fragrance entrants can borrow Phool’s sustainability language, and genuine rivals such as Nirmalaya already offer a similar temple-flower story. Phool’s scale, certifications and patented process help it stay distinct. </li>
                                    <li>As more brands make “eco” claims, sustainability alone is becoming a weaker differentiator, which makes Phool’s focus on desirability and origin all the more important. </li>
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
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 stp-section-col order-2 order-lg-1">
                            <div className="stp-section-col-div">
                                <p className='stp-section-col-div-label-para'>Segmentation</p>
                                <p className='stp-section-col-div-desc-para'>The market broadly splits into three groups: traditional ritual buyers who want affordable, functional incense from a trusted heritage name, urban wellness consumers who treat home fragrance as a lifestyle category, and a values-led segment that chooses brands on sustainability and ethical sourcing credentials. Phool sits mainly across the second and third groups. </p>
                            </div>

                              <div className="stp-section-col-div stp-section-col-div-middle">
                                <p className='stp-section-col-div-label-para'>Targeting</p>
                                <p className='stp-section-col-div-desc-para'>Phool targets digitally native, mid-to-upper income Indian consumers, largely 25 to 45, who already buy candles, diffusers or clean beauty online and are comfortable paying more for provenance. It also hopes to draw older buyers away from non-organic incense. It's a considered-purchase mindset, not an impulse-buy-at-the-temple-gate mindset, which shapes everything from AOV to gifting-led SKUs.</p>
                            </div>

                              <div className="stp-section-col-div">
                                <p className='stp-section-col-div-label-para'>Positioning</p>
                                <p className='stp-section-col-div-desc-para'>Phool positions itself as the brand that made incense modern: a ritual product reframed as a lifestyle and wellness purchase, built on a supply chain story few competitors can match. It occupies the intersection of tradition, sustainability and premium craft, a space the legacy incense category left largely underserved. </p>
                            </div>
                        </div>

                        <div className='col-12 col-sm-12 col-md-12 col-lg-12 order-1 order-lg-2 stp-img-col'>
                            <img src="https://dndesigns.co.in/uploads/pages/phooldnplaybookbrandaurtwehsdj.jpg" className='img-fluid'></img>
                        </div>
                    </div>
                </section>


                {/* PoPs & PoDs */}
                <section className='pop-pod-section' id='pops-and-pods'>
                <h2 className='pop-pod-section-head'>PoPs and PoDs</h2>
                    <div className='row pop-pod-section-row'>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                            <div className='pop-pod-section-col'>
                                <h2 className='pop-pod-section-col-head'>Points of Parity</h2>
                                 <ul className='brand-element-col-ul'>
                                    <li>Serves the same core need as any incense brand: fragrance for ritual, meditation or ambient home use.</li>
                                    <li>Available through the same channels competitors use: D2C website, quick commerce, marketplaces, select retail stores.</li>
                                    <li>Offers standard incense formats of sticks, cones and dhoop, and extends into home-fragrance formats such as diffusers.</li>
                                </ul>
                            </div>
                        </div>

                          <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                            <div className='pop-pod-section-col'>
                                <h2 className='pop-pod-section-col-head'>Points of Difference</h2>
                                 <ul className='brand-element-col-ul'>
                                    <li>Made from recycled temple flowers using a patented process, and produced at a larger scale than other flower-recycling brands. </li>
                                    <li>Charcoal-free formulation, a real functional difference from most mass-market incense.</li>
                                    <li>Fair for Life-Fairtrade and Ecocert certified, and recognised with UN awards, credentials that few Indian incense brands hold. Its Fleather product has also won PETA recognition.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Product mix */}
                <section className='product-mix-section' id='product-mix'>
                    <h2 className='product-mix-section-head'>Product Mix</h2>
                    <div className='product-mix-section-img-div'>
                        <img src="https://dndesigns.co.in/uploads/pages/A-Vibrant-Diwali-Celebration-Still-Life.jpg.webp" className='img-fluid product-mix-section-img'></img>
                    </div>
                     
                     {/* row 1 */}
                    <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                            <p className='product-mix-section-row-col-para'>Core incense range: sticks, cones, dhoop and bambooless incense across multiple fragrance families.</p>
                        </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                    </div>


                     {/* row 2 */}
                    <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                            <p className='product-mix-section-row-col-para'>Ritual accessories: havan cups, and festive/devotional collections tied to specific deities and occasions. </p>
                        </div>
                        </div>
                    </div>


                     {/* row 3 */}
                    <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                            <p className='product-mix-section-row-col-para'>Home and lifestyle extensions: reed diffusers, essential oils, car fresheners, candles, mosquito repellents.</p>
                        </div>
                        </div>
                        <div className='col-5'></div>
                    </div>

                    
                     {/* row 4 */}
                    <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                            <p className='product-mix-section-row-col-para'>Gifting: curated boxes for occasions like Diwali & Rakhi. Corporate gifting, now a meaningful part of the catalogue. </p>
                        </div>
                        </div>
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
                                    <li>Tiered clearly: everyday incense priced to compete with premium (not mass) shelf, gift sets priced as considered purchases.</li>
                                    <li>Combo packs, refill packs, and bundling used to lift AOV, though discounts are also widely used across the range.</li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-12 col-sm-12 col-md-12 col-lg-4 mt-4'>
                            <div className='pricing-distrubution-section-col'>
                                <h2 className="pricing-distrubution-section-col-head">Distribution</h2>
                                <ul className='brand-element-col-ul'>
                                    <li>D2C-first through phool.co, supported by marketplace and quick commerce presence.</li>
                                    <li>Expanding into corporate gifting as a distinct B2B-lite channel alongside consumer retail.</li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-12 col-sm-12 col-md-12 col-lg-4 mt-4'>
                            <div className='pricing-distrubution-section-col'>
                                <h2 className="pricing-distrubution-section-col-head">Campaigns</h2>
                                <ul className='brand-element-col-ul'>
                                    <li>Festive-led activity (Diwali, Rakhi, Holi) and temple-themed collections such as Banke Bihari, alongside an active Instagram presence.</li>
                                    <li>Story-led press and awards (UN, PETA for Fleather) supply much of the brand credibility.</li>
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
                            <td className='competive-analysis-table-data-row-text'>Nirmalaya</td>
                            <td className='competive-analysis-table-data-row-text'>Delhi NCR-based D2C brand and Phool’s closest direct rival, also making charcoal-free incense from recycled temple flowers, with a smaller scale and a patent claim of its own. </td>
                            <td className='competive-analysis-table-data-row-text'>Low-to-mid, with 40-stick packs around ₹150, overlapping Phool’s everyday incense band.</td>
                            <td className='competive-analysis-table-data-row-text table-data-main-para'>The most direct threat, competing for the same buyer on the same story. Phool must keep widening its lead in scale and credentials.</td>
                        </tr>
                          <tr className="competive-analysis-table-data-row">
                            <td className='competive-analysis-table-data-row-text'>Prabhu Shriram</td>
                            <td className='competive-analysis-table-data-row-text'>Premium incense brand emphasising fragrance quality and craft, aimed at consumers who treat incense as an elevated ritual product. </td>
                            <td className='competive-analysis-table-data-row-text'>Mid-range for everyday packs (roughly ₹50 to ₹150), moving to premium in gift sets (around ₹2,000). </td>
                            <td className='competive-analysis-table-data-row-text table-data-main-para'>A premium rival competing on fragrance and storytelling. Phool’s edge is its origin and certifications. </td>
                        </tr>
                          <tr className="competive-analysis-table-data-row">
                            <td className='competive-analysis-table-data-row-text'>Cycle Pure Agarbathi</td>
                            <td className='competive-analysis-table-data-row-text'>Mass-market agarbatti brand widely regarded as a household staple with extensive trade and retail distribution. </td>
                            <td className='competive-analysis-table-data-row-text'>Very low, with common packs at roughly ₹20 to ₹55 and larger packs up to about ₹120. </td>
                            <td className='competive-analysis-table-data-row-text table-data-main-para'>Not a rival for the same buyer. It wins on reach, which Phool isn’t contesting. </td>
                        </tr>
                    </table>
                    </div>
                    {/* <p className='stratgic-note-para'><span className='stratgic-note-para-span'>Strategic Note:</span> "Same category, three entirely different bets on product vs. brand relevance."</p> */}
                </section>

                {/* brand attributes */}
                <section id="instant-recall">
                     <div className='brand-attributes-div'>
                    <h2 className='brand-attributes-head'>Instant Recall</h2>
                    <p className='brand-attributes-para'>What crosses a consumer's mind first when Phool comes up:</p>
                    <div className='brand-attributes-points-div'>
                        <span className='brand-attributes-points'>Temple flowers</span>
                        <span className='brand-attributes-points'>Flowercycling</span>
                        <span className='brand-attributes-points'>Charcoal-free incense</span>
                        <span className='brand-attributes-points'>Women-made</span>
                        <span className='brand-attributes-points'>Cleaner rivers</span>
                        <span className='brand-attributes-points'>Premium fragrance</span>
                        {/* <span className='brand-attributes-points'>Limited Drops, Gone Fast</span> */}
                        
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
                                    <li>Repeat purchase is supported by consumable-category mechanics: refill packs and combos encourage habitual reorder. </li>
                                    <li>Gifting occasions such as Diwali create seasonal spikes that don’t appear to be built into a year-round subscription or membership model. </li>
                                    <li>No loyalty programme or community layer is visible on the main D2C pages, a gap for a brand with such a strong values story. </li>
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
                                    <li>Awareness is driven largely by earned media and awards (UN recognition and PETA recognition for Fleather) rather than visible mass advertising. </li>
                                    <li>Alia Bhatt’s investment adds a credibility signal and press visibility for the brand. </li>
                                    <li>Awareness skews urban and digitally native, with limited reach in the much larger mass-retail incense segment. </li>
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
                                    <li>Charcoal-free positioning and strong customer ratings signal quality above mass agarbatti, while Fairtrade and Ecocert certifications add ethical and natural credibility. </li>
                                    <li>A restrained logo paired with richly illustrated packaging gives the brand a crafted, considered feel. </li>
                                    <li>Perceived quality is currently carried more by the sustainability story than by fragrance/product storytelling, which under-sells the actual product experience.</li>
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
                                    <li>Strongly associated with temple flower waste, sustainability and women's employment, among the clearest association sets in the category. </li>
                                    <li>Increasingly associated with innovation via Fleather, which pulls the brand beyond incense into biomaterials.</li>
                                    <li>Weakly associated with any single sensory or emotional cue (a signature scent, a signature ritual moment), the kind of association that turns a functional purchase into a habit-forming one.</li>
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

                     <p className='stratgic-note-para'><span className='stratgic-note-para-span'>Strategic Takeaway:</span>   Phool has built something few challenger brands manage: a functional differentiation story that is true and difficult to match at scale. That is the foundation of real equity. Where it leaves value on the table is in turning that operational story into brand feeling. The brand is still stronger as a case study than as a craving, and closing that gap is largely a verbal identity and storytelling challenge, with a signature sensory cue as the missing piece. </p>
                </section>


                {/* gali shoes image */}
                <section className='gali-shoes-img-section'>
                    <img src="https://dndesigns.co.in/uploads/pages/Festive-Gift-in-a-Cozy-Homebrand-audit.jpeg" className='img-fluid gali-shoes-img'></img>
                </section>



            {/* Suggestions & Recommendations */}
                 <section className='product-mix-section' id='suggestions-recommendations'>
                    <h2 className='product-mix-section-head'>Suggestions & Recommendations</h2>
                     {/* row 1 */}
                    <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                        <p className='suggestions-recommendations-head-para'>Build A Proper Verbal Identity System. </p>
                            <p className='product-mix-section-row-col-para'>The closest thing to a mantra, the 14-word homepage banner, is too long to travel. DN would develop a short, ownable line that carries the emotional promise (ritual, calm, modern India) alongside the logo tagline, “Made from temple flowers,” then codify tone of voice across packaging, web and social so every touchpoint sounds like one brand. </p>
                        </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                    </div>


                     {/* row 2 */}
                    <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                         <p className='suggestions-recommendations-head-para'>Give The Flowercyclers A Visual Identity.</p>
                            <p className='product-mix-section-row-col-para'>The women who make every product are the single most differentiating asset Phool has, and there's no character, illustration or consistent visual signature built around them. DN would design a recurring visual motif or character system rooted in the flowercyclers, giving the brand the "character" layer it's currently missing entirely.</p>
                        </div>
                        </div>
                    </div>


                     {/* row 3 */}
                    <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                         <p className='suggestions-recommendations-head-para'>Fix The Packaging Architecture Across The Expanding SKU Range. </p>
                            <p className='product-mix-section-row-col-para'>Phool’s range now spans incense sticks and cones, dhoop, diffusers, candles, car fresheners, scarves and festive gift boxes, and the packaging uses a different visual language for each. The varied palettes give each range character, but the risk is fragmentation as the catalogue grows. DN would build a modular packaging and colour-coding system by fragrance family and occasion, so products stay recognisable on the shelf and online as the range scales. This is core packaging design work, exactly where a full-service agency adds value. </p>
                        </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                    </div>


                    {/* row 4 */}
                    <div className='row product-mix-section-row'>
                       <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                         <p className='suggestions-recommendations-head-para'>Turn The Web Storytelling Into A Converting Asset.</p>
                            <p className='product-mix-section-row-col-para'>The site leans heavily on functional description and third-party press quotes, while its own narrative carries few sensory or emotional cues. DN would rebuild the homepage and product storytelling around SEO-structured, scroll-driven content that leads with fragrance and feeling, then backs it with the sustainability proof, aimed at improving organic discovery and time-on-site. </p>
                        </div>
                        </div>
                     
                    </div>


                       {/* row 5 */}
                    <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                         <p className='suggestions-recommendations-head-para'>Give Fleather Its Own Narrative. </p>
                            <p className='product-mix-section-row-col-para'>Fleather (Phool’s flower-based vegan leather material) is an award-winning innovation, but it has little visible presence on the site. Phool has already spoken of launching it as a separate brand selling to other businesses. DN can shape a distinct identity and communication strategy for that brand, so it can be positioned to fashion and materials buyers on its own terms and not be read through a home-fragrance lens. </p>
                        </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                    </div>


                         {/* row 6 */}
                    <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                         <p className='suggestions-recommendations-head-para'>Restructure Website Navigation. Add Occasion-Based Browsing.</p>
                            <p className='product-mix-section-row-col-para'>The main menu mixes product types (sticks, cones, diffusers, oils) with themed collections, and the only occasion-led entries are seasonal (such as Diwali and Diwali Corporate Gifting). DN would introduce dual navigation: shop by product and shop by occasion (daily ritual, festive celebration, gifting, wellness, home ambience), and turn corporate gifting into a year-round section, so discovery is easier and gifting has a permanent home.  </p>
                        </div>
                        </div>
                        
                    </div>


                         {/* row 7 */}
                    <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                         <p className='suggestions-recommendations-head-para'>Build A Loyalty Programme Around The Brand’s Mission</p>
                            <p className='product-mix-section-row-col-para'>Phool’s refill packs and combos encourage repeat purchase, but there’s no visible loyalty programme beyond it. DN would design one that rewards customers with the brand’s story and not just discounts: members would follow the impact their purchases create, such as flowers recycled and women employed, and get early access to new launches and festive collections. This would turn one-off gifting buyers into year-round customers.  </p>
                        </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                    </div>





                </section>

                <div className='disclaimer-section'>
                    <p className='disclaimer-section-para'>Disclaimer:  Many images featured on this page are sourced from the brand's official website. All copyrights and intellectual property rights in these images remain with the brand and/or their respective rights holders. DN Designs does not claim ownership of, or any rights to, these images.</p>
                   
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

    </div>
  )
}

export default page
