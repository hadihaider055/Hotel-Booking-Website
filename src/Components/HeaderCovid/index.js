import React from "react";
import styles from "./headerCovid.module.css";
const HeaderCovid = () => {
  return (
    <div className={styles.headerCovid}>
      <p className={styles.headerCovid__text}>
        We know your travel plans may be impacted by COVID-19. Check local
        travel restrictions prior to booking your trip.
      </p>
    </div>
  );
};

export default HeaderCovid;
