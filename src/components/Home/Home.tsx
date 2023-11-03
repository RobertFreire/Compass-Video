import React from "react";
import styles from "./Home.module.css";
import Details from "../MainDetails/Details/Details";
import Overlay from "../MainDetails/Overlay/Overlay";
import ButtonsMain from "../MainDetails/ButtonsMain/ButtonsMain";


const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.content} style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg)`}}>
        <Overlay>
          <div className={styles.information}>
           <Details
            title="Five Nights at Freddy's"
            year="2021"
            duration="1 h 41 min"
            genre="Drama, Sci-Fi & Fantasy"
            description="Recently fired and desperate for work, a troubled young man
            named Mike agrees to take a position as a night security guard
            at an abandoned theme restaurant: Freddy Fazbear's Pizzeria.
            But he soon discovers that nothing at Freddy's is what it
            seems." />
            <ButtonsMain />
          </div>
        </Overlay>
      </div>
    </section>
  );
};

export default Home;