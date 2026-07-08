import Image from 'next/image'
import React from 'react'

function BrandIdentityDesignServicesBanner() {
  return (
    <div>
      {/* brand positioni banner image*/}
            <section className="brand-positioning-banner-img">
              <div className='container'>
                <div className="brand-positioning-banner-img-desktop">
               
                 <Image
                                src="https://dndesigns.co.in/uploads/pages/BRAND-POSITINING-lap.webp"
                                alt="brand positioning"
                                width={1500}
                                height={800}
                                className="brand-positioning-banner-img-desktop-img"
                                 sizes="(max-width:768px) 100vw, 100vw"
                                priority
                              />
                              
                </div>
                <div className="brand-positioning-banner-img-mobile">
               
                 <Image
                                src="https://dndesigns.co.in/uploads/pages/bp-phone.webp"
                                alt="brand positioning"
                                width={1080}
                                height={864}
                                className="brand-positioning-banner-img-mobile-img"
                                 sizes="(max-width:768px) 100vw, 100vw"
                                priority
                              />
                </div>
              </div>
            </section>

            
    </div>
  )
}

export default BrandIdentityDesignServicesBanner
