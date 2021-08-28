import React from "react";
import styles from "./topDest.module.css";
import { TopDestData } from "./topDestData";
import { ArrowForwardIos, ArrowBackIos } from "@material-ui/icons";
const TopDestination = () => {
  return (
    <div className={styles.topDest__div}>
      <div className={styles.topDest__header}>
        <h1 className={styles.topDest__title}>Top Destinations in Pakistan</h1>
      </div>
      <div className={styles.topDest__body}>
        <ArrowBackIos />
        {TopDestData.map((item) => {
          return (
            <div className={styles.dest__div} key={item.id}>
              <div className={styles.dest__imgDiv}>
                <img
                  src={item.img}
                  alt={item.name}
                  className={styles.dest__img}
                />
              </div>
              <div className={styles.dest__nameDiv}>
                <h2 className={styles.dest__name}>{item.name}</h2>
              </div>
            </div>
          );
        })}
        <ArrowForwardIos className={styles.topDest__icon} />
      </div>
    </div>
  );
};

export default TopDestination;
