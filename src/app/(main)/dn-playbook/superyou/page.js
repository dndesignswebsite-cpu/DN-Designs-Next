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
import Form from '@/Components/Form/Form';


// meta tags
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("dn-playbook/superyou", null, false);
  } catch (error) {
    return {
      title: "Superyou",
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
        pageData = await getPageById("dn-playbook/superyou", null, true);
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


      // form content
  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "Whether you have a brand to build, a problem to solve, a big idea you can’t stop thinking about, or simply don’t know where to begin, let’s talk. No formalities, no long briefs, no need to have everything figured out. Just a good conversation, a little curiosity, and a cup of coffee. We’ll bring the questions, you bring the idea, and together, let’s see where the conversation takes us.";

  return (
    <div>

     {/* schema */}
      {cleanSchema && (
        <script
          key={`schema-page-${pageData._id || "dn-playbook/superyou"}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanSchema }}
        />
      )}
      {/*schema ends here */}


      {/* breadcrump */}
      <Breadcrumb/>


    {/* brand audit  hero */}
      <section className='brand-audit-hero-section'>
        <div className='container'>
            <h1 className='brand-audit-hero-section-head'>The DN Playbook: SuperYou</h1>
            <p className='brand-audit-hero-section-para'>Protein Didn’t Need A Lecture. It Needed A Personality.</p>
            <div className='hero-section-img-div'>
                <img src="https://dndesigns.co.in/uploads/pages/desktopewirkSuperYou_combined_banner.jpeg" className='hero-section-img hero-section-img-desktop img-fluid'></img>
                <img src="https://dndesigns.co.in/uploads/pages/stpsuperyouimageSUPERYON-Protein-Bar-Trio.jpeg" className='hero-section-img hero-section-img-mobile img-fluid'></img>
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
                <p className='table-of-content-section-para-first'>India is told constantly that it’s protein-deficient, and it’s bored of hearing it. Most of the category answers with the same look: beige pouches, clinical fonts, a nutritionist’s slide turned into packaging. It taught people to eat protein out of obligation, not desire. So how do you make a macronutrient feel like a treat, not a chore?</p>
                </div>
                <div className='table-of-content-2nd-para-div'>
                    <p className="table-of-content-2nd-para">That’s the question SuperYou put in front of us.</p>
                    
                </div>


                {/* Brand at a glance */}
                <div className="brand-at-glance-phool" id='brand-at-a-glance'>
                    <h2 className="brand-at-glance-head-phool">Brand At A Glance</h2>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-4 brand-at-glance-col-1-phool'>
                            <div className='brand-at-glance-text-div-phool'>
                                <p className="brand-at-glance-text-div-para-phool">Category</p>
                                <h3 className="brand-at-glance-text-div-head-phool">Protein snacking and functional nutrition (FMCG). </h3>
                            </div>

                            <div className='brand-at-glance-text-div-phool'>
                                <p className="brand-at-glance-text-div-para-phool">Founders </p>
                                <h3 className="brand-at-glance-text-div-head-phool">Ranveer Singh & Nikunj Biyani, under venture studio Think9 Consumer. </h3>
                            </div>

                            <div className='brand-at-glance-text-div-phool'>
                                <p className="brand-at-glance-text-div-para-phool">Backing/Funding </p>
                                <h3 className="brand-at-glance-text-div-head-phool">Think9 Consumer; Series A backed by Rainmatter Capital.</h3>
                            </div>

                            <div className='brand-at-glance-text-div-phool'>
                                <p className="brand-at-glance-text-div-para-phool">Price Band </p>
                                <h3 className="brand-at-glance-text-div-head-phool">Mass-premium: ₹30–120 per snack pack; ₹2,550–3,000/kg protein powder. </h3>
                            </div>
                            
                            {/* <div className='brand-at-glance-text-div-phool'>
                                <p className="brand-at-glance-text-div-para-phool">Playing Against </p>
                                <h3 className="brand-at-glance-text-div-head-phool">The Whole Truth, Yoga Bar, RiteBite Max Protein.  </h3>
                            </div> */}

                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 brand-at-glance-img-div-phool">
                            <img src="https://dndesigns.co.in/uploads/pages/brandataglancesuperyouimage.jpeg" className='img-fluid brand-at-glance-img-phool'></img>
                            {/* <div className='brand-at-glance-text-div-phool brand-at-glance-text-div-phool-img-col'>
                                <p className="brand-at-glance-text-div-para-phool">Core Audience</p>
                                <h3 className="brand-at-glance-text-div-head-phool">Urban, sustainability-conscious Indian millennials and Gen Z buying wellness and home fragrance online, plus a growing NRI/global gifting audience.</h3>
                            </div> */}
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-4 brand-at-glance-col-1-phool'>
                            

                             <div className='brand-at-glance-text-div-phool'>
                                <p className="brand-at-glance-text-div-para-phool">Founding Year  </p>
                                <h3 className="brand-at-glance-text-div-head-phool">November 2024  </h3>
                            </div>

                             <div className='brand-at-glance-text-div-phool'>
                                <p className="brand-at-glance-text-div-para-phool">Headquarters</p>
                                <h3 className="brand-at-glance-text-div-head-phool">Mumbai </h3>
                            </div>

                             <div className='brand-at-glance-text-div-phool'>
                                <p className="brand-at-glance-text-div-para-phool">Positioning in one line </p>
                                <h3 className="brand-at-glance-text-div-head-phool">A snack brand first and a nutrition brand second.  </h3>
                            </div>

                             <div className='brand-at-glance-text-div-phool'>
                                <p className="brand-at-glance-text-div-para-phool">Core Audience </p>
                                <h3 className="brand-at-glance-text-div-head-phool">Urban everyday snackers: office workers, college students and families. Snackers first, fitness-conscious second.  </h3>
                            </div>

                            {/* <div className='brand-at-glance-text-div-phool'>
                                <p className="brand-at-glance-text-div-para-phool">Notable Moment</p>
                                <h3 className="brand-at-glance-text-div-head-phool">Launch film built around Ranveer Singh’s line “My supply is now yours”.</h3>
                            </div> */}
                        </div>
                    </div>

                    <div className='row brand-at-glance-bottom-row g-3'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                         <div className='brand-at-glance-text-div-phool brand-at-glance-text-div-phool-bottom-row'>
                                <p className="brand-at-glance-text-div-para-phool">Playing Against </p>
                                <h3 className="brand-at-glance-text-div-head-phool">The Whole Truth, Yoga Bar, RiteBite Max Protein.  </h3>
                            </div>
                            </div>

                             
                           <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                            <div className='brand-at-glance-text-div-phool brand-at-glance-text-div-phool-bottom-row'>
                                <p className="brand-at-glance-text-div-para-phool">Notable Moment</p>
                                <h3 className="brand-at-glance-text-div-head-phool">Launch film built around Ranveer Singh’s line “My supply is now yours”.</h3>
                            </div>
                            </div>
                    </div>

                     {/* <div className='brand-at-glance-text-div-phool brand-at-glance-text-div-phool-bottom'>
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
                            </div> */}
                    
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
                                    <li>Wordmark-led, with no symbol or icon riding shotgun. The type carries the brand’s energy on its own. </li>
                                    <li>Bold italic capitals with softly tapered strokes, set tight so the name reads as one fast word. It feels athletic without reaching for the dumbbell-and-flex cliché. </li>
                                    <li>Red and white stay constant across the range, with the wordmark flipping between white-on-red and red-on-pale. It also appears in solid black on neutral packs.  </li>
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
                                    <li>“SuperYou” sells a state, not a product. It’s aspirational language borrowed from self-improvement, not sports science. </li>
                                    <li>Two words fused into one, which reads fast on a shelf and faster on a phone screen.</li>
                                    <li>No “protein” in the name, which has let the brand move from wafers to chips to powders and creatine under one word. </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                      {/* row 3 */}
                    <div className='brand-element-row row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-9'>
                            <div className='brand-element-col'>
                                <p className='brand-element-col-para-label'>Visual System </p>
                                <ul className='brand-element-col-ul'>
                                    <li>A bold red anchors the range, standing apart from the beige-and-kraft aesthetic much of the protein category often leans on.</li>
                                    <li>Colour codes flavour. Flavour-coloured ends on the wafers & colour-blocked bodies on the chips. The red stays fixed, so the brand is recognisable while the flavour changes. </li>
                                    <li>The wafers read more confectionery than supplement: a crimped wrapper, the wafer on show, protein kept to a small tag. They look built to compete with chocolate, not the gym aisle.  </li>
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
                                    <li>No single, consistently codified slogan has been locked and repeated across packaging and campaigns yet. The brand is still auditioning lines.</li>
                                    <li>The closest thing functioning as one is the launch campaign (“Now You Know”) hook, "my supply is now yours," tied directly to Ranveer Singh's persona. It introduces SuperYou as the source of his energy, but it belongs to the launch moment, not the brand at large. </li>
                                    
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
                                    <li>“If it’s not tasty, it’s not SuperYou” is the founder’s stated test for the brand’s products, set out in a founder’s note and repeated when a 20g bar was scrapped over its chewy taste. </li>
                                    <li>The mission runs on two ideas: put protein into what India already loves, and take the guilt out of snacking. Pro and creatine stretch the brand towards performance, but the snack range still lives by both.</li>
                                    
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
                                    <li>The strongest candidate is “Don’t just be You, be SuperYou,” from the launch post. It plays directly on the name and fits the brand’s aspirational pitch, but it doesn’t appear on the packs.</li>
                                    <li>“Power up your world” surfaced in a launch quote from Ranveer Singh, but it reads as a one-off line, not a brand-level promise.</li>
                                    <li>“Maaad” is the brand’s recurring voice. The founder’s note calls the chips “maaad tasty,” the August 2026 Power Puffs launch calls them its “maaadest protein snack drop yet,” and one flavour is named “Maaad Achari.” It works as a signature word across naming and copy, not as a locked line. </li>
                                    <li>None of these has been locked in and repeated across every touchpoint, which leaves the tagline slot open.</li>
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
                                    <li>None. No mascot, no illustrated figure. Packaging relies on food photography and flavour colour, not characters. </li>
                                    <li>The brand’s human character lives in communications: Ranveer Singh’s persona is the hook of the launch film. His face stays off the packs, which looks like a deliberate choice. It lets the product stand on its own on the shelf, even as the advertising leans on him.</li>
                                </ul>
                            </div>
                        </div>
                         <div className='col-12 col-sm-12 col-md-12 col-lg-3'></div>
                    </div> 

                </section>

                {/* gali labs image */}
                <section className='gali-labs-section'>
                    <img src="https://dndesigns.co.in/uploads/pages/imagesuperbrandauditsuper-u-lap.jpeg" className='img-fluid gali-labs-image'></img>
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
                        <span className='brand-attributes-points'>Bold</span>
                        <span className='brand-attributes-points'>Accessible</span>
                        <span className='brand-attributes-points'>Playful</span>
                        <span className='brand-attributes-points'>Energetic</span>
                        <span className='brand-attributes-points'>Culturally fluent </span>
                        <span className='brand-attributes-points'>Confident</span>
                        <span className='brand-attributes-points'>Indulgent-but-functional</span>
                        {/* <span className='brand-attributes-points'>Women-powered</span>
                        <span className='brand-attributes-points'>Quietly confident</span> */}
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
                                    <li>First-mover in a format it helped define. SuperYou launched what is billed as India’s first protein wafer bar, giving it a head start in building the format. </li>
                                    <li>A look that is recognisable at a glance, on the pack and on a quick-commerce screen. Stands apart from the muted palettes much of the category leans on. </li>
                                    <li>Celebrity co-founder brings instant top-of-funnel awareness most D2C brands spend years and lakhs trying to buy.</li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4'>
                            <div className='swot-section-col'>
                                <p className='brand-element-col-para-label'>Weaknesses</p>
                                <ul className='brand-element-col-ul'>
                                    <li>No single line travels with the logo on every pack. The brand has a distinctive voice in its campaigns, but not yet one repeatable phrase that anchors it. </li>
                                    <li>Marketing leans heavily on Ranveer Singh’s persona, so campaign momentum is exposed if his profile or availability changes. His face isn’t on the packs, which limits that risk without removing it. </li>
                                    <li>The positioning stretches from chocolate alternative to performance supplement. That’s a powerful range, but it needs disciplined messaging so neither audience feels the brand isn’t for them. </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                     <div className='row swot-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4'>
                            <div className='swot-section-col'>
                                <p className='brand-element-col-para-label'>Opportunities</p>
                                <ul className='brand-element-col-ul'>
                                    <li>A name tied to no single product lets “SuperYou” travel without a rebrand. It has already moved from wafers to chips, powders and creatine, and the founders have named breakfast cereals and biscuits as next. </li>
                                    <li>Quick commerce lets the brand launch and test new formats fast. The Mega Protein Wafer debuted exclusively on Instamart and the brand’s own site, with a wider rollout planned, which is typically quicker than a traditional retail listing. </li>
                                    <li>Creator-led, real-use content is already visible on the brand’s site, through a shoppable video carousel, an affiliate programme and refer-and-earn. Scaling it would add depth beyond celebrity-led films and ease the brand’s reliance on one face. </li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-12 col-sm-12 col-md-12 col-lg-6 mt-4'>
                            <div className='swot-section-col'>
                                <p className='brand-element-col-para-label'>Threats</p>
                                <ul className='brand-element-col-ul'>
                                    <li>Legacy FMCG brands acquiring other brands (Yoga Bar under ITC, Max Protein under Zydus) brings distribution muscle to competitors, which SuperYou doesn't have yet. SuperYou’s offline reach has grown quickly, but it competes against rivals with deeper corporate resources behind them. </li>
                                    <li>The category is getting crowded fast. Protein is being added to everything from water to sweets, diluting the novelty SuperYou built its launch on.</li>
                                    <li>If Ranveer Singh's public profile shifts for any reason, the brand's awareness engine takes a direct hit even with the smart decision to keep his face off-pack.</li>
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
                                <p className='stp-section-col-div-desc-para'>The market splits into three tiers: hardcore fitness consumers who already buy whey and bars, health-conscious mainstream consumers put off by clinical supplement branding, and casual snackers who buy on taste and convenience with health as a secondary tick box. SuperYou segments on occasion and mindset rather than demographics, targeting the snacking moment itself, from the mid-meeting craving to the pre-class bite, with everyday personas such as office workers, college students and families as its face.</p>
                            </div>

                              <div className="stp-section-col-div stp-section-col-div-middle">
                                <p className='stp-section-col-div-label-para'>Targeting</p>
                                <p className='stp-section-col-div-desc-para'>The brand primarily targets the third group, casual snackers who want something that feels like a treat first. This is a deliberate departure from the gym-goers and fitness influencers targeting many existing protein bar brands lean towards. Fitness buyers aren’t ignored either, since the Mega Wafer and Pro both speak to them, but the snack range is built to look nothing like a supplement. </p>
                            </div>

                              <div className="stp-section-col-div">
                                <p className='stp-section-col-div-label-para'>Positioning</p>
                                <p className='stp-section-col-div-desc-para'>SuperYou positions itself as the protein brand for people who don't identify as "protein people." It sits closer to confectionery in shelf presence and impulse-purchase behaviour than to sports nutrition, while still delivering functional protein numbers that satisfy the health-conscious buyer underneath the fun exterior.</p>
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
                            <div className='pop-pod-section-col'>
                                <h2 className='pop-pod-section-col-head'>Points of Parity</h2>
                                 <ul className='brand-element-col-ul'>
                                    <li>Delivers a protein claim of 10g or more per serving across most formats (10g in the wafers and chips, 20g in the Mega Wafer), in line with what shoppers expect from a protein product. </li>
                                    <li>Positions on no added sugar, a claim also made by competitors such as RiteBite Max Protein and increasingly common in the better-for-you set. </li>
                                    <li>Available across the same quick commerce and marketplace channels as many other challenger brands.</li>
                                </ul>
                            </div>
                        </div>

                          <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                            <div className='pop-pod-section-col'>
                                <h2 className='pop-pod-section-col-head'>Points of Difference</h2>
                                 <ul className='brand-element-col-ul'>
                                    <li>A layered-wafer, chocolate-bar-style format that is India’s first protein wafer bar, giving protein a familiar snack shape.  </li>
                                    <li>Fermented yeast protein gives the wafers and Pro a different story from whey or plant protein: a source new to most Indian shoppers, paired with digestive enzymes and pitched as lighter on the stomach. </li>
                                    <li>Wafers and chips are dressed as treats, built to sit beside chocolate bars and everyday chips, not supplements. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Product mix */}
                <section className='product-mix-section' id='product-mix'>
                    <h2 className='product-mix-section-head'>Product Mix</h2>
                    <div className='product-mix-section-img-div'>
                        <img src="https://dndesigns.co.in/uploads/pages/productmixsuperyouimageGemini_Generated_Image_nf0wb2nf0wb2nf0w.jpeg" className='img-fluid product-mix-section-img'></img>
                    </div>
                     
                     {/* row 1 */}
                    <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                            <p className='product-mix-section-row-col-para'>Protein Wafers, the flagship format and still the bestseller, across chocolate, strawberry, cheese, choco peanut butter, coffee, and cookies & cream flavours.</p>
                        </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                    </div>


                     {/* row 2 */}
                    <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                            <p className='product-mix-section-row-col-para'>Protein Wafer Minis, a smaller 5g-protein, under 100-calorie format aimed at more frequent, lower-commitment snacking occasions. Available in mango, cookies & cream, hazelnut, and orange flavours.</p>
                        </div>
                        </div>
                    </div>


                     {/* row 3 */}
                    <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                            <p className='product-mix-section-row-col-para'>Multigrain protein chips (in super masala, sour cream & onion, cheese & tomato and pudina flavours) move the brand into savoury territory beyond the original sweet wafer.</p>
                        </div>
                        </div>
                        <div className='col-5'></div>
                    </div>

                    
                     {/* row 4 */}
                    <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                            <p className='product-mix-section-row-col-para'>Power Puffs, baked multigrain puffs with 13g of protein per pack, pitched as a family snack for any time of day. Available in maaad achari, cheesy cheese, chilli masala and pizza party flavours. </p>
                        </div>
                        </div>
                    </div>

                     {/* row 5 */}
                    <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                            <p className='product-mix-section-row-col-para'>Fermented Yeast Protein Powders and a 20g "Mega" wafer extend the range toward the higher-intent, higher-protein-need buyer without abandoning the core snacker.</p>
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
                                    <li>Snacks sit on a tight ladder at list price: the 5g Minis at ₹30 a unit, the 10g wafer at ₹60 and the 20g Mega at ₹120–125, which works out to roughly ₹6 a gram of protein across the wafer formats. The 40g chips, with 10g of protein, list lower at ₹40.</li>
                                    <li>Powders form a separate tier. Fermented yeast protein lists at ₹2,549–2,649 for a 1kg jar and ₹1,499 for a 500g jar, and creatine at ₹599. </li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-12 col-sm-12 col-md-12 col-lg-4 mt-4'>
                            <div className='pricing-distrubution-section-col'>
                                <h2 className="pricing-distrubution-section-col-head">Distribution</h2>
                                <ul className='brand-element-col-ul'>
                                    <li>Sold through its own website, Amazon, Flipkart and the main quick-commerce apps (Blinkit, Instamart and Zepto), which gave it national reach and fast delivery from launch. The Mega Wafer debuted as an Instamart exclusive. </li>
                                    <li>Offline presence has grown quickly, from select modern trade outlets at launch to more than 4,500 modern and general trade stores across metro and Tier II cities by November 2025, by the brand’s own count. </li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-12 col-sm-12 col-md-12 col-lg-4 mt-4'>
                            <div className='pricing-distrubution-section-col'>
                                <h2 className="pricing-distrubution-section-col-head">Campaigns</h2>
                                <ul className='brand-element-col-ul'>
                                    <li>The launch film, part of the “Now You Know” campaign, made Ranveer Singh’s persona the hook. “My supply is now yours” answered the question everyone was asking, “What is he on?”, and revealed SuperYou as the secret behind his energy. </li>
                                    <li>Off the film, the brand talks snacking, not training. Content stays with daily energy and everyday cravings, and the Swiggy tie-up meets people where they already order.</li>
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
                            <th className='competive-analysis-table-head-row-text' colspan="1">Price range</th>
                            <th className='competive-analysis-table-head-row-text' colspan="1">Competitor stance</th>
                        </tr>
                        <tr className="competive-analysis-table-data-row">
                            <td className='competive-analysis-table-data-row-text'>The Whole Truth</td>
                            <td className='competive-analysis-table-data-row-text'><ul>
                                <li>Clean-label positioning built on dates, cashews and raw whey, with the full ingredient list printed on the front of pack. </li>
                                 <li> Positions itself against how packaged food hides what’s in it, an argument carried through campaigns such as “Healthy” Food vs The Whole Truth. </li>
                                </ul></td>
                            <td className='competive-analysis-table-data-row-text'><ul>
                                <li>Roughly ₹100–110 per 52g bar at list price, with six-bar packs at ₹100 a bar. It sits at the premium end of protein snacking. </li>
                                <li>Promotions appear carefully managed to protect the premium image.</li>
                                </ul></td>
                            <td className='competive-analysis-table-data-row-text table-data-main-para'>
                                <ul>
                                    <li>Holds the trust-and-transparency territory in the category.</li>
                                    <li>Visual identity leans minimal and text-heavy on pack, which makes SuperYou's colour-led, playful design an easy point of shelf contrast. </li>
                                </ul>
                            </td>
                        </tr>
                          <tr className="competive-analysis-table-data-row">
                            <td className='competive-analysis-table-data-row-text'>Yoga Bar</td>
                            <td className='competive-analysis-table-data-row-text'>
                                <ul>
                                    <li>Broad range spanning nutrition and protein bars, muesli, oats, cereals and peanut butter, anchored on all-natural, no-artificial-ingredient claims rather than one hero format. </li>
                                    <li>Founded in 2014, giving it a decade’s head start and wide availability across e-commerce and grocery platforms.</li>
                                </ul>
                            </td>
                            <td className='competive-analysis-table-data-row-text'>
                                <ul>
                                    <li>Breakfast protein bars list at about ₹60 each, nearer ₹40 at selling prices. </li>
                                    <li>20g whey bars list at ₹125–140, close to the ₹120–125 of SuperYou’s 20g Mega Wafer, so the two price ladders overlap. </li>
                                </ul>
                            </td>
                            <td className='competive-analysis-table-data-row-text table-data-main-para'>
                                <ul>
                                    <li>ITC-backed since its 2023 acquisition, with ITC pledging its sales and distribution strengths to scale the brand. </li>
                                    <li>Leans on natural ingredients, breakfast and post-workout use. SuperYou’s edge is the snack-first, playful look and taste-led pitch.</li>
                                </ul>
                            </td>
                        </tr>
                          <tr className="competive-analysis-table-data-row">
                            <td className='competive-analysis-table-data-row-text'>RiteBite Max Protein </td>
                            <td className='competive-analysis-table-data-row-text'>
                                <ul>
                                    <li>Straightforward functional positioning built around daily protein and fibre targets, vitamins, electrolytes and meal-replacement use cases.</li>
                                    <li> Deep flavour and format range: choco classic, fruit and nut, almond apricot, aimed at habitual daily consumption rather than occasional treat. </li>
                                </ul>
                            </td>
                            <td className='competive-analysis-table-data-row-text'>
                                <ul>
                                <li>Core 50g bars list at ₹60–75, directly overlapping SuperYou’s ₹60 wafer at the same 10g of protein. </li>
                                <li>Six-packs list at ₹70–80 a bar, so multipacks add little value pressure. </li>
                                </ul>
                            </td>
                            <td className='competive-analysis-table-data-row-text table-data-main-para'>
                                <ul>
                                    <li>Owned by Zydus Wellness following the Naturell acquisition, giving it a category leader positioning in the protein snacking segment.</li>
                                    <li>Messaging centres on everyday nutrition and weight management, not gym culture, so it contests the same daily-snack occasion SuperYou targets. </li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                    </div>
                    {/* <p className='stratgic-note-para'><span className='stratgic-note-para-span'>Strategic Note:</span> "Same category, three entirely different bets on product vs. brand relevance."</p> */}
                </section>

                {/* brand attributes */}
                <section id="instant-recall">
                     <div className='brand-attributes-div'>
                    <h2 className='brand-attributes-head'>Instant Recall</h2>
                    <p className='brand-attributes-para'>What crosses a consumer's mind first when SuperYou comes up:</p>
                    <div className='brand-attributes-points-div'>
                        <span className='brand-attributes-points'>Ranveer Singh’s Brand</span>
                        <span className='brand-attributes-points'>The Protein Wafer</span>
                        <span className='brand-attributes-points'>That Loud Red Wordmark</span>
                        <span className='brand-attributes-points'>10 Grams In Every Bite</span>
                        <span className='brand-attributes-points'>Chocolate, But Better For You</span>
                        <span className='brand-attributes-points'>Protein, Minus The Gym</span>
                        <span className='brand-attributes-points'>Maaad Tasty </span>
                        
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
                                    <li>The offer builds repeat purchase: steady new flavours and formats widen the reasons to come back, and Build Your Own Box, combos, refer-and-earn, and a prepaid bonus on the brand’s site reward repeat buying. </li>
                                    <li>Minis lower the cost of entry at about ₹30 a unit and open a new snacking moment, which makes them a natural trial and top-up format.  </li>
                                    <li>Still too young a brand to have a proven loyalty cohort independent of the celebrity halo. </li>
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
                                    <li>Strong for a two-year-old brand. Much of that traces to Ranveer Singh’s profile and the launch film, helped by wide availability across e-commerce, quick commerce and 4,500+ stores.  </li>
                                    <li>“India’s first protein wafer” is a lasting, ownable line, though it protects the story rather than the format, which rivals can copy. </li>
                                    <li>Awareness is currently celebrity-anchored more than product-anchored, which is a real dependency risk. </li>
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
                                    <li>Packaging does heavy lifting: the bold red wordmark and flavour-coded packs read as confident and polished at a ₹50–60 price point. The brand treats packaging as a core marketing asset. </li>
                                    <li>The ingredient story, fermented yeast protein, no added sugar and no palm oil, backed by published lab reports, gives a sturdier quality case than design alone. </li>
                                    <li>Four product lines in the first year, a scrapped bar that failed on taste and a planned ₹40–50 crore R&D spend point to a quality discipline beyond marketing. </li>
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
                                    <li>On the snack range, the brand is associated with energy, confidence and everyday indulgence, not clinical health or bodybuilding. Pro and creatine pull the other way, towards performance. </li>
                                    <li>Cultural relevance comes through pop-culture-led social content and creator clips, not only celebrity broadcast. </li>
                                    <li>The brand world still leans on one person’s values. The independent cues that could carry it without him are the red wordmark, the “maaad” voice and the 10g promise. </li>
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

                     <p className='stratgic-note-para'><span className='stratgic-note-para-span'>The Strategic Note:</span>   Strong on reach and distinctiveness, still building proof of loyalty and independence from its celebrity co-founder. The real equity test is whether SuperYou is recognisable without Ranveer Singh attached, on the red wordmark, the 10g promise and the “maaad” voice alone. It’s moving that way, but not there yet. </p>
                </section>


                {/* gali shoes image */}
                <section className='gali-shoes-img-section'>
                    <img src="https://dndesigns.co.in/uploads/pages/lastsuperyouimageSuperYou-Pro-Fitness-Supplement-Ad.jpeg" className='img-fluid gali-shoes-img'></img>
                </section>



            {/* Suggestions & Recommendations */}
                 <section className='product-mix-section' id='suggestions-recommendations'>
                    <h2 className='product-mix-section-head'>Suggestions And Recommendations</h2>
                     {/* row 1 */}
                    <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                        <p className='suggestions-recommendations-head-para'>Turn “Don’t Just Be You, Be SuperYou” Into One Fixed, Repeatable Tagline</p>
                            <p className='product-mix-section-row-col-para'>The brand has plenty of voice: a launch-film line, a name-play from the launch post and a recurring “maaad” tone. But no single line travels with the logo. Locking the name-play line, with a short voice guide for the “maaad” tone around it, gives pack, ads and site one consistent thing to build recall on.  </p>
                        </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                    </div>


                     {/* row 2 */}
                    <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                         <p className='suggestions-recommendations-head-para'>Put The Visual System Into A Formal Brand Guideline </p>
                            <p className='product-mix-section-row-col-para'>One codified system for type, colour, flavour banding, claim placement and creator content keeps every future launch recognisably SuperYou, whoever makes the asset.</p>
                        </div>
                        </div>
                    </div>


                     {/* row 3 */}
                    <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                         <p className='suggestions-recommendations-head-para'>Build A Tiered Pack System So Pro Reads Credible Without Breaking The Brand</p>
                            <p className='product-mix-section-row-col-para'>The snack range is dressed as confectionery, with protein kept to a small tag. The Pro tubs and creatine pouch lead on performance claims and read as supplements. One master-brand system with format-specific rules, and a clear hierarchy for which claim leads on indulgent versus performance packs, lets each format look credible without diluting the snack-first positioning. On Pro, where nutrition leads, the fermented yeast story can lead too. On the snack range, it stays a quiet back-of-pack line in the brand’s own food-first voice. </p>
                        </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                    </div>


                    {/* row 4 */}
                    <div className='row product-mix-section-row'>
                       <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                         <p className='suggestions-recommendations-head-para'>Give The Brand A Signature Sign-Off That Carries Recognition Without Ranveer Singh</p>
                            <p className='product-mix-section-row-col-para'>The launch film turns on Ranveer Singh’s persona, and Biyani has said Singh is expected to drive awareness and attract consumer interest. A fixed brand sign-off, made up of the wordmark, the locked tagline and a flavour band, applied to every film, reel and creator clip, would attach recognition to SuperYou’s own cues, whoever is on screen.  </p>
                        </div>
                        </div>
                     
                    </div>


                       {/* row 5 */}
                    <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                         <p className='suggestions-recommendations-head-para'>Give Every Flavour A Name That Sounds Like SuperYou</p>
                            <p className='product-mix-section-row-col-para'>Flavour names run in two registers. The wafers, minis, and chips use plain descriptors, while newer launches lean playful, from Maaad Achari and Pizza Party on Power Puffs to Orange Kick on creatine. A naming formula built on the “maaad” voice, paired with the flavour colour code, would make each new flavour a brand moment instead of a label.  </p>
                        </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                    </div>


                         {/* row 6 */}
                    {/* <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                         <p className='suggestions-recommendations-head-para'>Restructure Website Navigation. Add Occasion-Based Browsing.</p>
                            <p className='product-mix-section-row-col-para'>The main menu mixes product types (sticks, cones, diffusers, oils) with themed collections, and the only occasion-led entries are seasonal (such as Diwali and Diwali Corporate Gifting). DN would introduce dual navigation: shop by product and shop by occasion (daily ritual, festive celebration, gifting, wellness, home ambience), and turn corporate gifting into a year-round section, so discovery is easier and gifting has a permanent home.  </p>
                        </div>
                        </div>
                        
                    </div> */}


                         {/* row 7  */}
                    {/* <div className='row product-mix-section-row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className="product-mix-section-row-col">
                         <p className='suggestions-recommendations-head-para'>Build A Loyalty Programme Around The Brand’s Mission</p>
                            <p className='product-mix-section-row-col-para'>Phool’s refill packs and combos encourage repeat purchase, but there’s no visible loyalty programme beyond it. DN would design one that rewards customers with the brand’s story and not just discounts: members would follow the impact their purchases create, such as flowers recycled and women employed, and get early access to new launches and festive collections. This would turn one-off gifting buyers into year-round customers.  </p>
                        </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5'></div>
                    </div> */}





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

                    {/* Form */}
      <Form FormHead={FormHead} FormPara={FormPara} />
      

    </div>
  )
}

export default page
