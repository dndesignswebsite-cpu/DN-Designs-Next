"use client"

import React from 'react'
import "./ConceptualPhotographyArrow.css"

function ConceptualPhotographyArrow() {
  return (
    <div class="conceptualphotographyarrowsection">
      <div className='row conceptualphotographyarrowsection-row'>
       <div className='col-3'>
       <div className='conceptualphotography-col-left'>
        <img src="https://dndesigns.co.in/uploads/pages/conceptualphotography1.jpg" className='img-fluid conceptualphotography-col-img conceptualphotography-col-img-upper'/>
        <img src="https://dndesigns.co.in/uploads/pages/conceptualphotography2.jpg" className='img-fluid conceptualphotography-col-img'/>
       </div>
       </div>

       <div className='col-6'>
        <img src="https://dndesigns.co.in/uploads/pages/newoneresizedconceptulphotographyimage.jpg" className='img-fluid conceptualphotography-mid-col-img'/>
       </div>

        <div className='col-3'>
       <div className='conceptualphotography-col-right'>
        <img src="https://dndesigns.co.in/uploads/pages/conceptualphotography3.jpg" className='img-fluid conceptualphotography-col-img conceptualphotography-col-img-upper'/>
       
        <img src="https://dndesigns.co.in/uploads/pages/conceptualphotography4.jpg" className='img-fluid conceptualphotography-col-img'/>
        
       </div>
       </div>


{/* svgs curvy line */}
<div className='wave-1'>
<svg
  class="wave"
  viewBox="0 0 300 200"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
>
  <path d="M0,150 C150,0 150,200 300,50" />
</svg>
  </div>


  <div className='wave-2'>
<svg
  class="wave"
  viewBox="0 0 300 200"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
>
  <path d="M0,150 C150,0 150,200 300,50" />
</svg>
  </div>


  <div className='wave-3'>
 <svg
  class="wave"
  viewBox="0 0 300 200"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
>
  <path d="M0,150 C150,0 150,200 300,50" />
</svg>
  </div>

  <div className='wave-4'>
 <svg
  class="wave"
  viewBox="0 0 300 200"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
>
  <path d="M0,150 C150,0 150,200 300,50" />
</svg>
  </div>

  {/* svg wave end */}

      </div>
    </div>
  )
}

export default ConceptualPhotographyArrow
