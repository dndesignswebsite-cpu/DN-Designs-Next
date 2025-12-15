// "use client"

import React from 'react'
import "./blog.css"
import Link from 'next/link'

function page() {

  return (
    <div>
       <section className='blog-list'>
        <div className='container'>
          <div className='row'>

            <div className='col-8 single-blog-list-post'>
                 <img src='https://dndesigns.co.in/wp-content/uploads/2025/11/Top-10-Makhana-Brands-in-India-2025.png' className='img-fluid'></img>

                 <div className='row post-details'>
                  <div className='posted-by col d-flex'>
                    <p className='sstatic'>Posted By :</p>
                    <p className='dyna'> DN Designs </p>
                  </div>

                  <div className='category col d-flex'>
                    <p className='sstatic'>Categories:</p>
                    <p className='dyna'>Packaging Design </p>
                  </div>

                  <div className='posted col d-flex'>
                    <p className='sstatic'>Posted:</p>
                    <p className='dyna'> 12/11/2025</p>
                  </div>
                 </div>

                 <h2><Link href="" className='single-blog-list-post-head'>Top 10 Makhana Brands in India in 2025</Link>
                 </h2>

                 <p className='single-blog-list-post-para'>In this fast-paced modern world, healthy snacking has become less of a choice and more of a necessity. With a variety of healthy food options filling the market aisles, this isn’t just a mere trend anymore, but is rapidly evolving into a new habit. Leading this revolution is Makhana (fox nuts), a traditional and humble […]</p>

                 <button className='blog-read-more-btn'>Read More</button>
                 

            </div>


            <div className='col-4'>
                Recent Posts
            </div>
          </div>
        </div>
       </section>

      <Link href="/temp1">temp1</Link>
      <Link href="/temp2">temp2</Link>
    </div>
  )
}

export default page
