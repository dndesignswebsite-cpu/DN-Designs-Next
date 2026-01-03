import React from "react";
import Breadcrumb from "@/Components/BreadCrumb/BreadCrumb";
import "./influencer-marketing.css";
import StandAlonePackaging from "@/Components/StandAlonePackaging/StandAlonePackaging";
import Faqs from "@/Components/Faqs/Faqs";
import Form from "@/Components/Form/Form";
import PagesHero from "@/Components/PagesHero/PagesHero";
import { notFound } from "next/navigation";
import connectDB from "@/lib/config/database.js";
import { getPageById } from "@/lib/services/pageService.js";

// meta tags
export async function generateMetadata() {
  await connectDB();
  let seo;
  try {
    seo = await getPageById("about-us", null, false);
  } catch (error) {
    return {
      title: "About Us",
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
  // const response = await getPageData();
  // const pageData = response?.data;

  // if (!pageData) {
  //   notFound();
  // }

  const heading = "Influencer Marketing Agency in India";
  const subHeading = "Connecting You With the Right Influencers";
  const para =
    "Businesses need to be present where their target audience is, and in today’s digital world, they are largely on social media. This is the reason why a large number of businesses are opting for influencer marketing to promote their products. However, what exactly is influencer marketing and what are its benefits? Who are these influencers anyway? Join us, an influencer marketing agency in India, and learn all you need to know. To make things easier for you, we have also answered some of the most frequently asked questions around it.";

  const leftFaqs = [
    {
      question:
        "What do you mean by influencer marketing and how can it help grow my business?",
      answer:
        "Influencer marketing is all about connecting with social media influencers to promote your business. With a huge fan following, influencers help you reach a wider set of audience. When they talk positively about your brand, their followers trust them and feel confident to purchase your product. So, when you opt for influencer marketing, you increase your brand’s reach and credibility and eventually your sales and profits.",
    },
    {
      question: "How do I decide which influencer will best suit my business?",
      answer:
        "To decide which influencer is best suitable for your business, you must understand your product, target audience and the kind of content they consume. Accordingly, you should collaborate with an influencer who creates similar content and has a relevant audience that can connect with your brand. ",
    },
    {
      question:
        "Can you mention the different types of content that an influencer can create to promote my brand?",
      answer:
        "Influencers can create a variety of content - in text, video or image form - to promote your brand or product. This can include tutorials & how-to guides, product reviews, product unboxing, brand storytelling, Q&A, contests, polls, behind-the-scenes and user-generated content. Influencers primarily focus on creating content that their users will engage with.",
    },

    {
      question:
        "What is the purpose of an influencer marketing agency and why do I need one for my business?",
      answer:
        "Simply put, an influencer marketing agency can make your work easy. It can research your product and target audience, search for an ideal influencer and negotiate a contract with them. It can further help create an influencer marketing strategy, manage the entire campaign and thereafter analyse the results too. ",
    },

    {
      question:
        "How does DN Designs, as an influencer marketing agency, decide the best influencers and platforms for my business?",
      answer:
        "To select the perfect influencer who can bring positive results for your business, we carry out comprehensive research of your industry and target audience and understand your campaign goals. We further search for an influencer who suits your requirements and can create relevant and engaging content for the audience. Using the same research, we decide the best platform for your campaign. ",
    },

    {
      question:
        "Do you consult brands while deciding on influencers to work with?",
      answer:
        "Certainly, we keep you well-informed throughout the influencer selection process and seek your approval before taking the final selection call.",
    },
  ];

  const rightFaqs = [
    {
      question:
        "How much time do you need to launch an influencer marketing campaign?",
      answer:
        "Broadly speaking, an influencer marketing agency takes anywhere between 15 days to one month to launch a campaign. However, depending on the requirements of the campaign, it may take a little more time. These requirements could include the time needed to create high-quality or challenging content. ",
    },
    {
      question:
        "What should be the duration of a particular influencer marketing campaign?",
      answer:
        "There isn’t one specific period. The duration of a campaign depends on the goals. For example, a month-long campaign is sufficient to attain short-term objectives like a particular event promotion. In contrast, for a bigger goal, like a product launch and awareness, the campaign needs to run for around 2-3 months.",
    },

    {
      question:
        "How do influencer marketing agencies measure the success of a particular campaign? Do we receive a report also?",
      answer:
        "The success of any campaign depends on the achievement of the goals set in the initial stage. For instance, if the goal was to increase brand visibility and awareness, agencies can measure metrics like impressions and clicks. On the other hand, if the goal was to generate leads, agencies can monitor lead conversion and ROI. We regularly share all campaign reports with you.",
    },

    {
      question:
        "Are campaigns restricted to one particular platform, or can they run on different platforms at once?",
      answer:
        "No, campaigns do not need to be restricted to a specific platform. It can simultaneously run on different platforms.",
    },

    {
      question:
        "How are influencers compensated, and who handles these negotiations?",
      answer:
        "There are several ways to compensate influencers, including a flat one-time payment and a commission-based payment method. Influencers can also be given gifts instead of money. A combination of the two - fees and gifts - can also be made. An influencer marketing agency can handle the negotiations for compensation.",
    },
  ];

  // standalone
  const cards = [
    {
      id: 1,
      point: "01",
      title: "Brand Awareness & Trust",
      description:
        "Helps reach a newer and more targeted audience, enhancing brand awareness. Promotion by an influencer further establishes customers’ trust in your brand.",
      image: "https://dndesigns.co.in/wp-content/uploads/2025/06/3-1-1.jpg",
    },
    {
      id: 2,
      point: "02",
      title: "Fresh Content Strategy",
      description:
        "The same old content can become monotonous. New perspectives and increased creativity give your content strategy a new direction. ",
      image: "https://dndesigns.co.in/wp-content/uploads/2025/06/4-1-2.jpg",
    },
    {
      id: 3,
      point: "03",
      title: "Support SEO",
      description:
        "Interesting content engages consumers and encourages them to share it. This brings in more website traffic and, additionally, helps build quality backlinks.",
      image: "https://dndesigns.co.in/wp-content/uploads/2025/06/2-1-1.jpg",
    },
    {
      id: 4,
      point: "04",
      title: "Increase Conversion & ROI",
      description:
        "Influencers have the trust of their audience. They can, therefore, convince customers to purchase your products, bringing in increased sales and profits for you.",
      image: "https://dndesigns.co.in/wp-content/uploads/2025/06/3-2-1.jpg",
    },
    {
      id: 5,
      point: "05",
      title: "Cost Saving",
      description:
        "Traditional marketing is rather expensive. In comparison, influencer marketing is still an extremely cost-effective option, except of course in a few cases.",
      image: "https://dndesigns.co.in/wp-content/uploads/2025/06/3-2-1.jpg",
    },
  ];

  const mobileCrads = [
    {
      mobileImage:
        "https://dndesigns.co.in/wp-content/uploads/2025/06/1-1-1.jpg",
    },
    {
      mobileImage: "https://dndesigns.co.in/wp-content/uploads/2025/06/7-2.jpg",
    },
    {
      mobileImage:
        "https://dndesigns.co.in/wp-content/uploads/2025/06/nature-balance-mangoe-2.jpg",
    },
    {
      mobileImage: "https://dndesigns.co.in/wp-content/uploads/2025/06/1-1.jpg",
    },
  ];

  // form section content
  const FormHead = "Let’s Discuss Over a Cup of Coffee";
  const FormPara =
    "Influencers can bring in new visitors and customers for your brand. Therefore, influencer marketing becomes an important marketing strategy for your business. However, if you are not sure as to how to proceed, there is absolutely no need to worry. DN Designs, an influencer marketing company in India, is here to help you out. So, let’s meet and discuss your campaign requirements.";

  return (
    <div>
      {/*Breadcrumb*/}
      <section>
        <Breadcrumb />
      </section>

      {/* influencer marketing  */}
      <section className="branding-hero">
        <PagesHero heading={heading} subHeading={subHeading} para={para} />
      </section>

      {/*grow-your-business  */}
      <section className="grow-your-business">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-3">
              <div className="grow-your-bussiness-col-main">
                <div className="grow-your-bussiness-col-1">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="img-fluid"
                  ></img>
                  <h3>Grow Your Business</h3>
                  <p>
                    Influencer marketing has the power to boost your brand
                    visibility and business profit.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-6">
              <div className="grow-your-bussiness-col-2">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2023/10/kerfin7_nea_3157.png"
                  className="img-fluid"
                ></img>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-3">
              <div className="grow-your-bussiness-col-main">
                <div className="grow-your-bussiness-col-3">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="img-fluid"
                  ></img>
                  <h3>Expert Solutions</h3>
                  <p>
                    Let our experts connect you with influencers who can drive
                    real results for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Are The Leading Video */}
      <section className="we-are-the-leading">
        <div className="container">
          <div className="row">
            <h3>What is Influencer Marketing?</h3>
            <div className="col-12 col-md-6 we-are-the-leading-para">
              <p>
                With the rise of social media, a whole new set of stars has
                gained prominence - social media stars. These stars have a huge
                number of followers who not only interact with them but also
                trust them. Businesses collaborate with these stars or
                influencers to reach their target audience and promote their
                brand.
              </p>
            </div>
            <div className="col-12 col-md-6 we-are-the-leading-para">
              <p>
                This is what influencer marketing is all about. What is
                important for brands, though, is to collaborate with the right
                influencer who can bring about the desired results for the
                business. With the right partnership, brands can achieve much
                more than simply raising brand awareness. Let’s explore its
                advantages in a little detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* standalone */}
      <section className="standalone-sec-inf">
        <div className="container">
          <div className="row">
            <h2 className="text-center headg">
              Advantages of Investing in
              <span className="every-pr"> Influencer Marketing</span>{" "}
            </h2>
          </div>
        </div>
        <StandAlonePackaging cards={cards} mobileCrads={mobileCrads} />
      </section>

      {/* top capibilities */}

      <section className="top-cap">
        <div className="container">
          <div className="row">
            <h2 className="text-center headg">
              Types of <span className="every-pr"> Influencers</span>
            </h2>
            <div className="col-12 col-md-12 col-lg-4 px-2 top-cap-main-div">
              <div className=" top-cap-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="top-cap-btm">
                  <h3>Mega Influencers</h3>
                  <p>
                    Mega influencers are big celebrities (film & television
                    personalities, sports persons & social media personalities)
                    whose followers count run into millions. They are extremely
                    popular and thus each of their posts
                  </p>
                </div>
                <div className="top-cap-back-content">
                  <h3>Mega Influencers</h3>
                  <p>
                    Mega influencers are big celebrities (film & television
                    personalities, sports persons & social media personalities)
                    whose followers count run into millions. They are extremely
                    popular and thus each of their posts draws likes and
                    comments in large numbers. When they promote your brand, it
                    gets instant recognition. Working with them requires
                    significant investment.
                  </p>
                </div>
              </div>
              <img
                className="top-cap-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>

            <div className="col-12 col-md-12 col-lg-4 px-2 top-cap-main-div">
              <div className="p-3 top-cap-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="top-cap-btm">
                  <h3>Macro Influencers</h3>
                  <p>
                    Macro influencers can be your perfect choice if you are
                    looking to increase your brand awareness, but at a slightly
                    lower cost than that needed for mega influencers. These
                    influencers have primarily
                  </p>
                </div>
                <div className="top-cap-back-content">
                  <h3>Macro Influencers</h3>
                  <p>
                    Macro influencers can be your perfect choice if you are
                    looking to increase your brand awareness, but at a slightly
                    lower cost than that needed for mega influencers. These
                    influencers have primarily gained fame through social media
                    and have a substantial number of followers - between 1 to 10
                    lakhs - with a wide range of interests and engagement
                    levels.
                  </p>
                </div>
              </div>
              <img
                className="top-cap-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>

            <div className="col-12 col-md-12 col-lg-4 px-2 top-cap-main-div">
              <div className="p-3 top-cap-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="top-cap-btm">
                  <h3>Micro Influencers</h3>
                  <p>
                    If you want to raise brand trust and generate leads,
                    partnering with micro influencers is an ideal choice. They
                    have followers up to 100K, and their key strength is in
                    better engagement rates
                  </p>
                </div>
                <div className="top-cap-back-content">
                  <h3>Micro Influencers</h3>
                  <p>
                    If you want to raise brand trust and generate leads,
                    partnering with micro influencers is an ideal choice. They
                    have followers up to 100K, and their key strength is in
                    better engagement rates. Their authentic, relatable and
                    niche-specific content helps them earn the trust of their
                    audience. They can, thus, bring positive results for your
                    brand.
                  </p>
                </div>
              </div>
              <img
                className="top-cap-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>
          </div>

          <div className="row top-cap-row-2">
            <div className="col-12 col-md-12 col-lg-4 px-2 top-cap-main-div">
              <div className=" top-cap-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="top-cap-btm">
                  <h3>Nano Influencers</h3>
                  <p>
                    Nano influencers have around 10k followers only, and may
                    seem a little less influential. However, this is far from
                    true. Nano influencers share a far greater connection and
                    trust with their audience
                  </p>
                </div>
                <div className="top-cap-back-content">
                  <h3>Nano Influencers</h3>
                  <p>
                    Nano influencers have around 10k followers only, and may
                    seem a little less influential. However, this is far from
                    true. Nano influencers share a far greater connection and
                    trust with their audience. Their followers are, therefore,
                    some of the most engaged ones with higher chances of
                    conversion. Moreover, being relatively less expensive, they
                    are a more suitable option for smaller businesses.
                  </p>
                </div>
              </div>
              <img
                className="top-cap-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>

            <div className="col-12 col-md-12 col-lg-4 px-2 top-cap-main-div">
              <div className="p-3 top-cap-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="top-cap-btm">
                  <h3>Local Influencers</h3>
                  <p>
                    Local influencers are what you need when you want to scale
                    your business in a local area or community. These
                    budget-friendly influencers have built their presence and
                    authority within certain
                  </p>
                </div>
                <div className="top-cap-back-content">
                  <h3>Local Influencers</h3>
                  <p>
                    Local influencers are what you need when you want to scale
                    your business in a local area or community. These
                    budget-friendly influencers have built their presence and
                    authority within certain communities and areas, and can,
                    therefore, significantly influence the opinions and choices
                    of people there. Apart from online engagement, they interact
                    with the audience in real-life events too.
                  </p>
                </div>
              </div>
              <img
                className="top-cap-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>

            <div className="col-12 col-md-12 col-lg-4 px-2 top-cap-main-div">
              <div className="p-3 top-cap-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="top-cap-btm">
                  <h3>Content Creators</h3>
                  <p>
                    Content creators are similar to influencers, and yet they
                    are different. They create informative, educational and
                    entertaining content for digital platforms and could be
                    bloggers, vloggers, podcasters
                  </p>
                </div>
                <div className="top-cap-back-content">
                  <h3>Content Creators</h3>
                  <p>
                    Content creators are similar to influencers, and yet they
                    are different. They create informative, educational and
                    entertaining content for digital platforms and could be
                    bloggers, vloggers, podcasters, graphic designers,
                    photographers or even gamers. They focus on creating quality
                    content and building a personal brand. They are perfect for
                    a long-term collaboration.
                  </p>
                </div>
              </div>
              <img
                className="top-cap-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* faqs */}

      <section className="faqs">
        <Faqs title="CONTACT FAQs" leftFaqs={leftFaqs} rightFaqs={rightFaqs} />
      </section>

      {/* Form */}
      <Form
        FormHead={FormHead}
        FormPara={FormPara}
        pageName="influencer-marketing"
      />
    </div>
  );
}

export default page;
