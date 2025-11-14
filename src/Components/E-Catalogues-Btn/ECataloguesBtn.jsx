"use client"

import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./ECataloguesBtn.css"

function ECataloguesBtn() {
  return (
    <div>
        <div className="e-catalogues-left-btn-div">
                  <button>Get in Touch
                   <FontAwesomeIcon
                    icon={faArrowRight}
                    size="18px"
                    className="fontAwesomeIcon-right-arrow"
                  />
                  </button>
                </div>
    </div>
  )
}

export default ECataloguesBtn
