"use client"

import React from 'react'
import "./CareerPageTab.css"

function CareerPageTab() {
    let tabsTittle =[1, 2, 3, 4, 5];

  return (
    <div>
          {
            tabsTittle.map((item)=>{
             return <h2>{item[3]}</h2>
            })
          }
    </div>
  )
}

export default CareerPageTab
