import React from "react";
import "./CatalougeBook.css";
import LightBoxBookCatalouge from "./LightBoxBookCatalouge";

function CatalougeBook() {
  let imageUrl = "https://powerfilldrinks.com/uploads/pages/"
  
  return (
    <div>
      <section className="catalougeBookFlip">
        <div className="container-fluid">

          <div className="row">
            <div className="col-12 col-md-6 catalougeBookFlipCol">
              <img
                // src="https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg"
                src={imageUrl+"Green-Horn-Catalogue.webp"}
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-6 catalougeBookFlipCol">
              <LightBoxBookCatalouge
                type="flipbook"
                pages={[
                  "https://powerfilldrinks.com/uploads/pages/wherbfett.webp",

                  "https://powerfilldrinks.com/uploads/pages/whjjdbbhj.webp",

                  "https://powerfilldrinks.com/uploads/pages/weghhd.webp",

                  "https://powerfilldrinks.com/uploads/pages/wefascg.webp",
                ]}
              >
                <div>
                  <img
                    src={imageUrl+"wherbfett.webp"}
                    className="img-fluid"
                  />
                </div>
              </LightBoxBookCatalouge>
            </div>
          </div>



          <div className="row">
            <div className="col-12 col-md-6 catalougeBookFlipCol">
              <img
                src={imageUrl+"eiuwhiofwej.webp"}
                className="img-fluid"
              />
            </div>

            <div className="col-12 col-md-6 catalougeBookFlipCol">
              <LightBoxBookCatalouge
                type="flipbook"
                pages={[
                  "https://powerfilldrinks.com/uploads/pages/gh2wevdhv.webp",

                  "https://powerfilldrinks.com/uploads/pages/hjweghj.webp",

                  "https://powerfilldrinks.com/uploads/pages/rtwqfedgfewg.webp",

                  "https://powerfilldrinks.com/uploads/pages/twfehdghg.webp",

                  "https://powerfilldrinks.com/uploads/pages/g23yghdhjedh.webp",
                  "https://powerfilldrinks.com/uploads/pages/gh2wevdhv.webp",
                  
                ]}
              >
                <div>
                  <img
                    src={imageUrl+"gh2wevdhv.webp"}
                    className="img-fluid"
                  />
                </div>
              </LightBoxBookCatalouge>
            </div>
          </div>




          <div className="row">
            <div className="col-12 col-md-6 catalougeBookFlipCol">
              <img
                src={imageUrl+"Naturz_-Veda-Moc.webp"}
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-6 catalougeBookFlipCol">
              <LightBoxBookCatalouge
                type="flipbook"
                pages={[
                  "https://powerfilldrinks.com/uploads/pages/erjkdshfve.webp",

                  "https://powerfilldrinks.com/uploads/pages/hewgehg.webp",

                  "https://powerfilldrinks.com/uploads/pages/huieyfhdj.webp",

                  "https://powerfilldrinks.com/uploads/pages/reghderjkb.webp",

                  "https://powerfilldrinks.com/uploads/pages/3ewrcgyurgyu.webp",

                  "https://powerfilldrinks.com/uploads/pages/wheghvdew.webp",
                  "https://powerfilldrinks.com/uploads/pages/wgehdwjegdjs.webp",
                  "https://powerfilldrinks.com/uploads/pages/pastandn.webp"
                  
                ]}
              >
                <div>
                  <img
                  src={imageUrl+"erjkdshfve.webp"}
                    className="img-fluid"
                  />
                </div>
              </LightBoxBookCatalouge>
            </div>
          </div>




          <div className="row">
            <div className="col-12 col-md-6 catalougeBookFlipCol">
              <img
                src={imageUrl+"kavaliers.webp"}
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-6 catalougeBookFlipCol">
              {/* <LightBoxBookCatalouge
                type="flipbook"
                pages={[
                  "https://dndesigns.co.in/wp-content/uploads/2019/02/1-2.png.webp",
                  "https://dndesigns.co.in/wp-content/uploads/2019/02/1-2.png.webp",
                  "https://dndesigns.co.in/wp-content/uploads/2019/02/1-2.png.webp",
                  "https://dndesigns.co.in/wp-content/uploads/2019/02/1-2.png.webp",
                  "https://dndesigns.co.in/wp-content/uploads/2019/02/1-2.png.webp",
                  "https://dndesigns.co.in/wp-content/uploads/2019/02/1-2.png.webp",
                  
                ]}
              > */}
                <div>
                  <img
                    src={imageUrl+"kavaliers-1.webp"}
                    className="img-fluid"
                  />
                </div>
              {/* </LightBoxBookCatalouge> */}
            </div>
          </div>




          <div className="row">
            <div className="col-12 col-md-6 catalougeBookFlipCol">
              <img
                src={imageUrl+"double-click-to-change2-1.webp"}
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-6 catalougeBookFlipCol">
              <LightBoxBookCatalouge
                type="flipbook"
                pages={[
                  "https://dndesigns.co.in/wp-content/uploads/2019/02/1-2.png.webp",

                  "https://powerfilldrinks.com/uploads/pages/twefhdgvgh.webp",

                  "https://powerfilldrinks.com/uploads/pages/rtwdtefswg.webp",

                  "https://powerfilldrinks.com/uploads/pages/wgehdvnbdc.webp",

                  "https://dndesigns.co.in/wp-content/uploads/2019/02/1-2.png.webp",
                  
                  "https://dndesigns.co.in/wp-content/uploads/2019/02/1-2.png.webp",
                  
                ]}
              >
                <div>
                  <img
                    src={imageUrl+"uewgdj.webp"}
                    className="img-fluid"
                  />
                </div>
              </LightBoxBookCatalouge>
            </div>
          </div>



        </div>
      </section>
    </div>
  );
}

export default CatalougeBook;
