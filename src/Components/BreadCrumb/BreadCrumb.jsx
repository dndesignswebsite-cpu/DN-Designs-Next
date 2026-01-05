"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";
import "./BreadCrumb.css";

const Breadcrumb = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(x => x);

  
  const domain = "https://dn-designs-next.vercel.app/"; 
 
  
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    ...paths.map((value, index) => ({
      label: decodeURIComponent(value).charAt(0).toUpperCase() + decodeURIComponent(value).slice(1),
      href: "/" + paths.slice(0, index + 1).join("/")
    }))
  ];

  // JSON-LD schema object
  // const schemaData = {
  //   "@context": "https://schema.org",
  //   "@type": "BreadcrumbList",
  //   itemListElement: breadcrumbItems.map((item, i) => ({
  //     "@type": "ListItem",
  //     position: i + 1,
  //     name: item.label,
  //     item: domain + item.href
  //   }))
  // };

  return (
    <div>
      {/* SEO Schema */}
      {/* <Script id="breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script> */}

      {/* UI Section */}
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
