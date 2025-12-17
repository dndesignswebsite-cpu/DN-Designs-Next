import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer
      className={`${styles["main-footer-div"]} ${styles["ff"]}  text-white pt-5 pb-3`}
    >
      <div className="container mb-5">
        <div className="container mb-4">
          <h5 className="fw-semibold">
            Join DN Today. Getting More Done Together.
          </h5>
        </div>

        <div className="container mt-5 ">
          <div className="row mt-5">
            <div
              className={`${styles["footer-li"]} col-12 col-md-4 mb-4 mb-md-0 `}
            >
              <ul className="list-unstyled fs-2 fw-bold">
                <li className="mb-2">
                  <Link
                    href="/about-us"
                    className="text-white text-decoration-none"
                  >
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/services"
                    className="text-white text-decoration-none"
                  >
                    Service
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/contact-us"
                    className="text-white text-decoration-none"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/career"
                    className="text-white text-decoration-none"
                  >
                    Career
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-white text-decoration-none"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-4 ms-auto text-start text-md-end footer-right-sec">
              <div className="mb-4">
                <h6 className={`${styles["footer-add-conn"]} fw-bold  mb-4`}>
                  Address
                </h6>
                <p className="mb-0">
                  C-40, Second Floor, Block C, Sector 58, Noida,
                  <br />
                  Uttar Pradesh 201301
                </p>
              </div>

              <div className="mt-5">
                <h6 className={`${styles["footer-add-conn"]} fw-bold  mb-4`}>
                  Contact Us
                </h6>
                <p className={`${styles["contact-details"]} mb-0`}>
                  <a href="tel:+91 9416011100"> +91 941 601 1100 </a>
                  <br />
                  <a href="tel:+91 7206605872"> +91 720 660 5872 </a>
                  <br />
                  <a href="mailto:info@dndesigns.co.in">info@dndesigns.co.in</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles["footer-hr"]} container mt-4 pt-3`}>
          <p className="mb-0">
            Copyright © 2025 DN Designs. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
