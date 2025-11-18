"use client"
import React from 'react'
import styles from "./HomePageBtn.module.css"

function HomePageBtn() {
  return (
    <>
      <div className={styles['hero']}>
        <button>Talk To Us</button>
        <button>Explore Our Work</button>
      </div>
      </>
  )
}

export default HomePageBtn
