import React from "react";
import styles from "./exploreMore.module.css";
import { ExploreMoreData } from "./exploreMoreData";
const ExploreMore = () => {
  return (
    <div className={styles.exploreMore__div}>
      <div className={styles.explore__head}>
        <h1 className={styles.explore__title}>
          Explore more travel vacation rentals
        </h1>
      </div>
      <div className={styles.exploreMore__body}>
        {ExploreMoreData.map((item) => {
          return (
            <div className={styles.explore__card} key={item.id}>
              <img
                src={item.img}
                alt={item.name}
                className={styles.explore__img}
              />
              <h2 className={styles.explore__cardHeading}>{item.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMore;
