"use client";

import { useRouter } from "next/navigation";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <main className="dn-404">

      {/* Background decorative elements */}
      <div className="dn-404-circle dn-404-circle-one"></div>
      <div className="dn-404-circle dn-404-circle-two"></div>

      {/* Main container */}
      <div className="dn-404-container">

        {/* Top label */}
        <div className="dn-404-top">
          <span className="dn-404-top-line"></span>
          <span>PAGE NOT FOUND</span>
        </div>


        {/* Main visual */}
        <div className="dn-404-visual">

          <div className="dn-404-number">
            <span>4</span>

            <span className="dn-404-zero">
              0

              <span className="dn-404-zero-dot"></span>
            </span>

            <span>4</span>
          </div>


          {/* Funny emoji */}
          <div className="dn-404-emoji-wrap">
            <div className="dn-404-emoji-circle"></div>

            <div className="dn-404-emoji">
              🫠
            </div>

            <span className="dn-404-emoji-label">
              lost somewhere
            </span>
          </div>

        </div>


        {/* Content */}
        <div className="dn-404-content">

          <div className="dn-404-heading">

            <span className="dn-404-small-heading">
              WELL... THIS IS AWKWARD.
            </span>

            <h1>
              Looks like this page
              <br />
              <span>got creatively lost.</span>
            </h1>

          </div>


          <div className="dn-404-description">

            <p>
              The page you're looking for doesn't seem to exist.
              Maybe it took a wrong turn somewhere along the way.
            </p>

            <button
              className="dn-404-button"
              onClick={() => router.replace("/")}
            >
              <span>Take Me Home</span>

              <span className="dn-404-button-arrow">
                →
              </span>
            </button>

          </div>

        </div>


        {/* Bottom detail */}
        <div className="dn-404-bottom">

          <span>
            404 / 404
          </span>

          <div className="dn-404-bottom-line"></div>

          <span>
            DN DESIGNS
          </span>

        </div>

      </div>

    </main>
  );
}