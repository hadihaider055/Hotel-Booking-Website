import React from "react";
import NavbarComp from "../../Components/Navbar";
import CoverImage from "../../Assets/cover-img.jpg";
import styles from "./home.module.css";
import HeaderCovid from "../../Components/HeaderCovid";
const HomePage = () => {
  return (
    <div>
      <img src={CoverImage} alt="cover-img" className={styles.coverImg} />
      <NavbarComp />
      <HeaderCovid />
    </div>
  );
};

export default HomePage;
