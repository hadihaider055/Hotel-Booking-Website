import React from "react";
import ErrorImage from "../../Assets/ErrorImage.jpg";
import styles from "./Page404.module.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className={styles.pageNotFound__div}>
      <img
        src={ErrorImage}
        alt="404 Page Not Found!"
        className={styles.pageNotFound}
      />
      <Link to="/">
        <button className={styles.backtoHome}>Home</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
