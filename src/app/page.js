import HomePageBtn from "@/Components/HomePageBtn/HomePageBtn";
import styles from "./page.module.css";

export default function Home() {
  return (
     <>
        {/*.....hero...... */}
      <section className={`${styles.hero}`}>
        <div className="container">
          <div className={`${styles['hero-rows']} row`}>
            <div className={`${styles['left-hero']} col`}>
              <h1>We Build Brands That Inspire Confidence and Drive Profit</h1>
              <p>Let’s collaborate and craft a truly standout brand for you.</p>
              <div>
                {/* <button>Talk To Us</button>
                <button onClick={ourWork}>Explore Our Work</button> */}
                <HomePageBtn/>
              </div>
            </div>
            <div className={`${styles['hero-img']} col`}>
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/09/gkjeg.png"
                className={`${styles['hero-bg-img']}`}
              ></img>
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/09/hgefef.png"
                className={`${styles['hero-img-main']}`}
              ></img>
            </div>
          </div>
        </div>
      </section>

     </>
  );
}
