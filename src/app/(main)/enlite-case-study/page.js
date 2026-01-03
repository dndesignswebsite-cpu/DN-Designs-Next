import "./enlite-case-study.css";
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
      title: "Enlite Case Study",
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

  return (
    <div>
      <div className="container-fluid p-0">
        <video
          src="https://dndesigns.co.in/wp-content/uploads/2025/09/1920-1.mp4"
          width="100%"
          autoPlay
          muted
          playsInline
          className="enlitecasestudy-video"
        />
      </div>

      <div className="container enlite-winner">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 col-md-6">
            <h2 class="enlitecasestudy-heading">Enlite</h2>
            <p id="enlitecasestudy-span">#Bubbleswithbenefits</p>
          </div>

          <div className="col-lg-6 col-12 col-md-6">
            <div className="enlitecase-study-wrapper">
              <div className="enlitecase-study-points">Beverages</div>
              <div className="enlitecase-study-points1">Drink Brand</div>
              <div className="enlitecase-study-points">2025</div>
            </div>

            <div className="enlitecase-study-wrapper1">
              <div className="enlitecase-study-points1">Branding</div>
              <div className="enlitecase-study-points">Label</div>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://dndesigns.co.in/wp-content/uploads/2025/11/Enlite1.jpg"
            alt=""
            className="img-fluid mt-5 enlitecase-study-img1"
          />
        </div>

        <div className="row align-items-start mt-5">
          <div className="col-lg-6 col-md-6 col-12">
            <h2 id="enliteoverview-heading1">Overview</h2>
            <h2 id="enliteoverview-heading2">
              Building Awareness for Enlite’s Unique Drinks
            </h2>
            <div className="enliteoverview-wrapper mt-5">
              <div className="enliteoverview-points1">Beverages</div>
              <div className="enliteoverview-points">Drink Brand</div>
              <div className="enliteoverview-points">2025</div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <p id="enliteoverview-p">
              Rithm’s Enlite is an innovative beverage brand specialising in a
              range of sparkling mineral waters and prebiotic drinks designed to
              promote hydration, digestive health, and overall wellness.
            </p>
            <h2 id="enliteoverview-h2">Problem Statement</h2>
            <p id="enliteoverview-para">
              Rithm’s Enlite introduced a new and unique category of pre-biotic
              sparkling drink — a product unlike any other currently available
              in the market. As a pioneer, the brand faced the challenge of
              building consumer awareness around this novel offering, educating
              the market on its natural flavors and scientifically backed health
              benefits, while differentiating itself in a competitive and
              evolving functional beverage landscape.
            </p>
          </div>
        </div>
      </div>

      <div className="container enlitecasestudy-images">
        <div className="row">
          <div className="col-lg-6 col-12 col-md-6 mb-3 mb-lg-0">
            <img
              src="https://dndesigns.co.in/wp-content/uploads/2019/02/Enlite2.jpg"
              alt=""
              className="img-fluid enlitecase-study-img8"
            />
          </div>

          <div className="col-lg-6 col-12 col-md-6">
            <img
              src="https://dndesigns.co.in/wp-content/uploads/2025/11/Enlite3.jpg"
              alt=""
              className="img-fluid enlitecase-study-img9"
            />
          </div>
        </div>

        <div className="row">
          <img
            src="https://dndesigns.co.in/wp-content/uploads/2019/02/Enlite4-1.jpg"
            alt=""
            className="img-fluid enlitecase-study-img5"
          />
        </div>

        <div className="row">
          <video
            src="https://dndesigns.co.in/wp-content/uploads/2025/11/elin.mp4"
            width="100%"
            autoPlay
            muted
            loop
            playsInline
            className="enlitecasestudy-video1"
          />
        </div>

        <div className="row pt-5">
          <div className="col-lg-6 col-12 col-md-6">
            <h2 id="enliteapproach-heading1">Our Approach</h2>
            <h2 id="enliteapproach-heading2">Logo & Character Design</h2>
            <p id="enliteoverview-para">
              For Enlite, we developed a cohesive brand identity that captures
              the essence of clarity, calmness, and lightness — all integral to
              the name itself. Central to this identity are the logo and a
              distinctive brand character, both designed to convey the product’s
              refreshing and uplifting personality.
            </p>
          </div>
          <div className="col-lg-6 col-12 col-md-6">
            <img
              src="https://dndesigns.co.in/wp-content/uploads/2019/02/Enlite5.jpg"
              alt=""
              className="img-fluid enlitecase-study-img6"
            />
          </div>
        </div>

        <div className="row">
          <img
            src="https://dndesigns.co.in/wp-content/uploads/2025/11/Enlite6.jpg"
            alt=""
            className="img-fluid enlitecase-study-img5"
          />
        </div>

        <div className="row">
          <video
            src="https://dndesigns.co.in/wp-content/uploads/2025/09/Can-2-1.mp4"
            width="100%"
            autoPlay
            muted
            loop
            playsInline
            className="enlitecasestudy-video1"
          />
        </div>

        <div className="row pt-lg-5">
          <div className="col-lg-6 col-12 col-md-6">
            <img
              src="https://dndesigns.co.in/wp-content/uploads/2025/09/Enlite7.jpg"
              alt=""
              className="img-fluid enlitecase-study-img6"
            />
          </div>
          <div className="col-lg-6 col-12 col-md-6">
            <h2 id="enliteapproach-heading1">Our Approach</h2>
            <h2 id="enliteapproach-heading2">Can Design</h2>
            <p id="enliteoverview-para">
              The can design was a central element in bringing the Enlite brand
              to life on the shelf. We aimed for a modern, visually calming
              aesthetic that communicates wellness, clarity, and refreshment at
              a glance. We also created distinct designs for its various product
              variants, ensuring each one maintained brand cohesion while
              highlighting unique flavors and functions.
            </p>
          </div>
        </div>

        <div className="row">
          <img
            src="https://dndesigns.co.in/wp-content/uploads/2025/09/Enlite8.jpg"
            alt=""
            className="img-fluid enlitecase-study-img5"
          />
        </div>
      </div>

      <div className="container enlitecasestudy-images">
        <div className="row">
          <div className="col-lg-6 col-12 col-md-6">
            <img
              src="https://dndesigns.co.in/wp-content/uploads/2025/09/Enlite9.jpg"
              alt=""
              className="img-fluid enlitecase-study-img7"
            />
          </div>

          <div className="col-lg-6 col-12 col-md-6">
            <img
              src="https://dndesigns.co.in/wp-content/uploads/2025/09/Enlite10.jpg"
              alt=""
              className="img-fluid enlitecase-study-img7"
            />
          </div>
        </div>

        <div className="row g-0">
          <div className="col-lg-6 col-12 col-md-6 px-0">
            <img
              src="https://dndesigns.co.in/wp-content/uploads/2025/09/Enlite11.jpg"
              alt=""
              className="img-fluid enlitecase-study-img2 mt-lg-4"
            />
          </div>

          <div className="col-lg-6 col-12 col-md-6 px-0">
            <img
              src="https://dndesigns.co.in/wp-content/uploads/2025/09/8.jpg"
              alt=""
              className="img-fluid enlitecase-study-img3 mt-lg-4"
            />
          </div>
        </div>

        <div className="row mt-lg-4">
          <div className="col-lg-6 col-12 col-md-6">
            <img
              src="https://dndesigns.co.in/wp-content/uploads/2025/09/Enlite13.jpg"
              alt=""
              className="img-fluid enlitecase-study-img7"
            />
          </div>

          <div className="col-lg-6 col-12 col-md-6">
            <img
              src="https://dndesigns.co.in/wp-content/uploads/2025/09/Enlite14.jpg"
              alt=""
              className="img-fluid enlitecase-study-img7"
            />
          </div>
        </div>

        <div className="row g-0">
          <div className="col-lg-6 col-md-6 col-12 px-0">
            <img
              src="https://dndesigns.co.in/wp-content/uploads/2025/09/Enlite15.jpg"
              alt=""
              className="img-fluid enlitecase-study-img2 mt-lg-4"
            />
          </div>

          <div className="col-lg-6 col-md-6 col-12 px-0">
            <img
              src="https://dndesigns.co.in/wp-content/uploads/2025/09/Enlite16.jpg"
              alt=""
              className="img-fluid enlitecase-study-img3 mt-lg-4"
            />
          </div>
        </div>

        <div className="row mt-lg-4">
          <div className="col-lg-6 col-12 col-md-6">
            <img
              src="https://dndesigns.co.in/wp-content/uploads/2025/09/Enlite17.jpg"
              alt=""
              className="img-fluid enlitecase-study-img7"
            />
          </div>

          <div className="col-lg-6 col-12 col-md-6">
            <img
              src="https://dndesigns.co.in/wp-content/uploads/2025/09/Enlite18.jpg"
              alt=""
              className="img-fluid enlitecase-study-img7"
            />
          </div>
        </div>

        <div className="row">
          <img
            src="https://dndesigns.co.in/wp-content/uploads/2025/09/Enlite19.jpg"
            alt=""
            className="img-fluid enlitecase-study-img"
          />
        </div>

        <div className="row mt-lg-4">
          <div className="col-lg-6 col-12 col-md-6">
            <img
              src="https://dndesigns.co.in/wp-content/uploads/2025/11/Enlite20.jpg"
              alt=""
              className="img-fluid enlitecase-study-img7"
            />
          </div>

          <div className="col-lg-6 col-12 col-md-6">
            <img
              src="https://dndesigns.co.in/wp-content/uploads/2025/11/Enlite21.jpg"
              alt=""
              className="img-fluid enlitecase-study-img7"
            />
          </div>
        </div>

        <div className="row">
          <img
            src="https://dndesigns.co.in/wp-content/uploads/2025/09/Enlite22.jpg"
            alt=""
            className="img-fluid enlitecase-study-img"
          />
        </div>
      </div>

      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="enliteoverview-wrapper">
              <div className="enlitecase-study-points">Enlite</div>
              <div className="enlitecase-study-points1">Branding</div>
            </div>

            <div className="enliteoverview-wrapper mt-3">
              <div className="enlitecase-study-points1">Label design</div>
              <div className="enlitecase-study-points">
                Bubbles With Benefits
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 enlite-sign-off">
            <h2 class="enlitecasestudy-heading">Enlite</h2>
            <p id="enlitecasestudy-span">#SigningOff</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
