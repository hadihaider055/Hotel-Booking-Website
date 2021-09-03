import React from "react";
import ErrorImage from "../../Assets/ErrorImage.jpg";
import styles from "./Page404.module.css";
import { useHistory } from "react-router-dom";

const PageNotFound = () => {
  const history = useHistory();
  return (
    <div className={styles.pageNotFound__div}>
      <img
        src={ErrorImage}
        alt="404 Page Not Found!"
        className={styles.pageNotFound}
      />
      <button className={styles.backtoHome} onClick={() => history.push("/")}>
        Home
      </button>
    </div>
  );
};

export default PageNotFound;
