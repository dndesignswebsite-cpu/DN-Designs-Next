"use client"; 

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./BreadCrumb.css";

const Breadcrumb = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(x => x);

  return (
    <div>
      <section>
        <div className="container breadCrump">
          <div className="row">
            <div className="col">
              <Link className="Bread" href="/">Home</Link>
              {paths.map((value, index) => {
                const fullPath = "/" + paths.slice(0, index + 1).join("/");
                const label = decodeURIComponent(value).charAt(0).toUpperCase() + decodeURIComponent(value).slice(1);
                return (
                  <span key={index}>
                    <span className="breadCrump-prev">{" > "}</span>
                    <Link className="Bread-sub" href={fullPath}>{label}</Link>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Breadcrumb;
