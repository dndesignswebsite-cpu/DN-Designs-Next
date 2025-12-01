import Breadcrumb from '@/Components/BreadCrumb/BreadCrumb'
import PagesHero from '@/Components/PagesHero/PagesHero'
import React from 'react'
import "./brand-video-shoots.css"


// meta data 
export const metadata = {
  title: "Brand Video Shoots – DN Designs",
  description: "High-quality animation services for your brand, including 2D, 3D, and motion graphics.",
  
  authors: [{ name: "DN Designs Team", url: "https://dn-designs-next.vercel.app/brand-video-shoots" }],
  
  alternates: { canonical: "https://dn-designs-next.vercel.app/brand-video-shoots" },
  
  robots: { index: true, follow: true, nocache: true },
  
  openGraph: {
    title: "Brand Video Shoots – DN Designs",
    description: "High-quality animation services for your brand, including 2D, 3D, and motion graphics.",
    url: "https://dn-designs-next.vercel.app/brand-name-suggestion",
    siteName: "DN Designs",
    images: [{ 
      url: "https://dndesigns.co.in/wp-content/uploads/2025/08/enlite-2.jpg", 
      width: 1200, 
      height: 630, 
      alt: "DN Designs Animation Services" 
    }],
    type: "website"
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Brand Video Shoots – DN Designs",
    description: "High-quality animation services for your brand, including 2D, 3D, and motion graphics.",
    images: ["https://dndesigns.co.in/wp-content/uploads/2025/08/enlite-2.jpg"]
  }
};
//meta end here




function page() {
     // hero section content
  const heading ="Brand Video Shoots"
  const subHeading ="Video is a powerful way to communicate your brand's story, values, and personality."
  const para ="Brand video shots are obviously video productions made to highlight a company’s name, goods, or services. An emotional connection can be made with the audience and the brand’s values and personality can be conveyed through a video"
  

  return (
    <div>
       {/*Breadcrumb*/}
      <section>
        <Breadcrumb />
      </section>

      {/* branding hero section */}
      <section>
        <PagesHero heading={heading} subHeading={subHeading} para={para}/>
      </section>
      

      {/* Brand video shoots */}
      <section className='brand-video-shoots'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-12 col-lg-6 text-center'>
                    <img src='https://dndesigns.co.in/wp-content/uploads/2023/05/camera-man-1.png.webp' className='img-fluid'></img>
                </div>
                <div className='col-12 col-md-12 col-lg-6 brand-video-shoots-col-right'>
                    <h2>Brand video shoots</h2>
                    <p>include gathering video content to produce marketing or promotional videos for a company. These films can be published on social media, websites, or other marketing platforms and are often intended to highlight the brand’s goods, services, or values. An ordinary brand video shot involves the following steps:</p>
                    <p><span className='video-shoot-bold'>Pre-production:</span> The creative team will develop a concept and a screenplay for the video during this stage of the video shoot’s planning. They will also decide on the setting, accessories, and tools required for the shot.</p>
                    <p><span className='video-shoot-bold'>Production:</span> This is the phase during which the video is recorded. The production staff will direct the actors or spokespeople in the film and set up the necessary equipment, such as cameras, lighting, and sound. They will also film the product or service being used in the B-roll.</p>
                    <p>In the post-production phase, the uncut video is edited and polished to create the final product. Color grading, sound mixing, and the insertion of music or graphics are all examples of editing techniques.</p>
                </div>
            </div>
        </div>
      </section>

{/* We are Leading Video Production Company for Businesses and Brands. */}
      <section className='we-are-leading'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-12 col-lg-6 we-are-leading-left-col '>
                          <div className='we-are-leading-left-img-div text-center'>
                            <img src='https://dndesigns.co.in/wp-content/uploads/2023/05/video-1.svg' className='img-fluid'></img>
                            </div>
                            <h3>We are Leading Video Production Company for Businesses and Brands.</h3>
                        </div>
                        <div className='col-12 col-md-12 col-lg-6 we-are-leading-right-col'>
                            <p>We’re a full-service video production company that aligns your business goals with our creative vision and technical finesse, transforming imagination to execution. Whether you are an emerging start-up or an established brand, we are here to tell your story and boost your engagement with the power of videos.</p>
                            <p>Leveraging our vast talent pool of strategists, scriptwriters, cinematographers, editors, social media experts, web geeks and production team that can pull off every kind of film with effortless ease. To cut a long story short, think of us as your extended marketing team, your own video storytellers.</p>
                        </div>
                    </div>
                </div>
      </section>

      {/* Why Choose us? */}

      <section className='why-choose-us'>
        <div className='container'>
            <div className='row why-choose-us-row'>
            <div className='col'>
                <h3 className='text-center'>Why Choose us?</h3>
                <p>Careful preparation, execution, and editing are necessary to produce a versatile and innovative video. The following measures we take to create a video that stands out:</p>
                <p><span className='video-shoot-bold'>Establish our GOAL and MESSAGE:</span> Before we begin recording, we always decide what your video’s objective is. What does the video aim to accomplish? What point are we trying to make with the audience?</p>
                <p><span className='video-shoot-bold'>Select the appropriate format and style:</span> We may wish to select a certain video format and style depending on the goal and message. A social media video, on the other hand, maybe more relaxed and enjoyable while a promotional film would call for a more polished and professional appearance.</p>
                <p>Be adaptable to changing conditions and flexible when recording videos since sometimes things don’t go as planned. Unexpected possibilities or obstacles could arise, requiring us to remain adaptable and change our strategy. We may get fantastic footage and produce a more dynamic film by being adaptable and ready to shift direction when required.</p>
                <p>Once We’ve gathered all of your material, we start using creative editing techniques. We may bring our artistic concept to life through editing. To add visual appeal and variation to your film, we always think about utilising methods like jump cuts, slow motion, or time-lapse.</p>
                <p><span className='video-shoot-bold'>We Include music and sound effects:</span> These elements can improve the tone and atmosphere of your video. We Select music that complements our message and brand, and add sound effects to emphasise points or set the mood.</p>
            </div>
            </div>
        </div>
      </section>

      {/* Our Portfolio,, */}

      <section className='video-our-portfolio'>
        <div className='container'>
        <div className='row'><h3>Our Portfolio,,</h3></div>
        
            <div className='row text-center'>
            
            
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4">
  <div className="ratio ratio-16x9 shoot-video-youtube">
    <iframe
      src="https://www.youtube.com/embed/msHxJAch8AU?si=EpJgvW9k_c70HYLV"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
</div>

<div className="col-sm-12 col-md-12 col-lg-12 col-xl-4">
  <div className="ratio ratio-16x9 shoot-video-youtube">
    <iframe
      src="https://www.youtube.com/embed/msHxJAch8AU?si=EpJgvW9k_c70HYLV"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
</div>

<div className="col-sm-12 col-md-12 col-lg-12 col-xl-4">
  <div className="ratio ratio-16x9 shoot-video-youtube">
    <iframe
      src="https://www.youtube.com/embed/msHxJAch8AU?si=EpJgvW9k_c70HYLV"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
</div>         
            </div>
        </div>
      </section>
    </div>
  )
}

export default page
