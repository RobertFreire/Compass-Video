import React from "react";
import VerAgora from "../Buttons/see-now/VerAgora";
import styles from "./Home.module.css";
import MoreInfo from "../Buttons/MoreInfo/MoreInfo";
import PlusBtn from "../Buttons/PlusBtn/PlusBtn";
import FavBtn from "../Buttons/FavBtn/FavBtn";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.content}>
        <div className={styles.overlay_1}>
          <div className={styles.overlay_2}>
            <div className={styles.information}>
              <div className={styles.details}>
                <h1 className={styles.title}>Five Nights at Freddy's</h1>
                <p>2021 • 1 h 41 min</p>
                <p>Drama, Sci-Fi & Fantasy</p>
                <p className={styles.description}>
                  Recently fired and desperate for work, a troubled young man
                  named Mike agrees to take a position as a night security guard
                  at an abandoned theme restaurant: Freddy Fazbear's Pizzeria.
                  But he soon discovers that nothing at Freddy's is what it
                  seems.
                </p>
              </div>
              <div className={styles.buttons}>
                <VerAgora/>
                <MoreInfo/>
                <PlusBtn/>
                <FavBtn/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
