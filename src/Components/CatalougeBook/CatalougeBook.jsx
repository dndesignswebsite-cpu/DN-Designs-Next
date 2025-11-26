import React from "react";
import "./CatalougeBook.css";
import LightBoxBookCatalouge from "./LightBoxBookCatalouge";

function CatalougeBook() {
  return (
    <div>
      <section className="catalougeBook">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/01/1.jpg"
                className="img-fluid"
              />
            </div>
            <div className="col">
              <LightBoxBookCatalouge
                type="flipbook"
                pages={[
                  "https://dndesigns.co.in/wp-content/uploads/2025/01/1.jpg",
                  "https://dndesigns.co.in/wp-content/uploads/2025/01/1.jpg",
                  "https://dndesigns.co.in/wp-content/uploads/2019/02/1-2.png.webp",
                  "https://dndesigns.co.in/wp-content/uploads/2019/02/1-2.png.webp",
                  "https://dndesigns.co.in/wp-content/uploads/2019/02/1-2.png.webp",
                  "https://dndesigns.co.in/wp-content/uploads/2019/02/1-2.png.webp",
                  "https://dndesigns.co.in/wp-content/uploads/2019/02/1-2.png.webp",
                ]}
              >
                <div>
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/01/1.jpg"
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
