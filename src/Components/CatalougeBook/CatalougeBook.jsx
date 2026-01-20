import React from "react";
import "./CatalougeBook.css";
import LightBoxBookCatalouge from "./LightBoxBookCatalouge";

function CatalougeBook() {
  let imageUrl = "https://dndesigns.co/uploads/pages/";

  return (
    <div>
      <section className="catalougeBookFlip">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6 catalougeBookFlipCol">
              <img
                // src="https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg"
                src={imageUrl + "Green-Horn-Catalogue.webp"}
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-6 catalougeBookFlipCol">
              <LightBoxBookCatalouge
                type="flipbook"
                pages={[
                  "https://dndesigns.co/uploads/pages/wherbfett.webp",

                  "https://dndesigns.co/uploads/pages/whjjdbbhj.webp",

                  "https://dndesigns.co/uploads/pages/weghhd.webp",

                  "https://dndesigns.co/uploads/pages/wefascg.webp",
                ]}
              >
                <div>
                  <img
                    src={imageUrl + "wherbfett.webp"}
                    className="img-fluid"
                  />
                </div>
              </LightBoxBookCatalouge>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 catalougeBookFlipCol">
              <img src={imageUrl + "eiuwhiofwej.webp"} className="img-fluid" />
            </div>

            <div className="col-12 col-md-6 catalougeBookFlipCol">
              <LightBoxBookCatalouge
                type="flipbook"
                pages={[
                  "https://dndesigns.co/uploads/pages/gh2wevdhv.webp",

                  "https://dndesigns.co/uploads/pages/hjweghj.webp",

                  "https://dndesigns.co/uploads/pages/rtwqfedgfewg.webp",

                  "https://dndesigns.co/uploads/pages/twfehdghg.webp",

                  "https://dndesigns.co/uploads/pages/g23yghdhjedh.webp",
                  "https://dndesigns.co/uploads/pages/gh2wevdhv.webp",
                ]}
              >
                <div>
                  <img
                    src={imageUrl + "gh2wevdhv.webp"}
                    className="img-fluid"
                  />
                </div>
              </LightBoxBookCatalouge>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 catalougeBookFlipCol">
              <img
                src={imageUrl + "Naturz_-Veda-Moc.webp"}
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-6 catalougeBookFlipCol">
              <LightBoxBookCatalouge
                type="flipbook"
                pages={[
                  "https://dndesigns.co/uploads/pages/erjkdshfve.webp",

                  "https://dndesigns.co/uploads/pages/hewgehg.webp",

                  "https://dndesigns.co/uploads/pages/huieyfhdj.webp",

                  "https://dndesigns.co/uploads/pages/reghderjkb.webp",

                  "https://dndesigns.co/uploads/pages/3ewrcgyurgyu.webp",

                  "https://dndesigns.co/uploads/pages/wheghvdew.webp",
                  "https://dndesigns.co/uploads/pages/wgehdwjegdjs.webp",
                  "https://dndesigns.co/uploads/pages/pastandn.webp",
                ]}
              >
                <div>
                  <img
                    src={imageUrl + "erjkdshfve.webp"}
                    className="img-fluid"
                  />
                </div>
              </LightBoxBookCatalouge>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 catalougeBookFlipCol">
              <img src={imageUrl + "kavaliers.webp"} className="img-fluid" />
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
                  src={imageUrl + "kavaliers-1.webp"}
                  className="img-fluid"
                />
              </div>
              {/* </LightBoxBookCatalouge> */}
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 catalougeBookFlipCol">
              <img
                src={imageUrl + "double-click-to-change2-1.webp"}
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-6 catalougeBookFlipCol">
              <LightBoxBookCatalouge
                type="flipbook"
                pages={[
                  "https://dndesigns.co.in/wp-content/uploads/2019/02/1-2.png.webp",

                  "https://dndesigns.co/uploads/pages/twefhdgvgh.webp",

                  "https://dndesigns.co/uploads/pages/rtwdtefswg.webp",

                  "https://dndesigns.co/uploads/pages/wgehdvnbdc.webp",

                  "https://dndesigns.co.in/wp-content/uploads/2019/02/1-2.png.webp",

                  "https://dndesigns.co.in/wp-content/uploads/2019/02/1-2.png.webp",
                ]}
              >
                <div>
                  <img src={imageUrl + "uewgdj.webp"} className="img-fluid" />
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
