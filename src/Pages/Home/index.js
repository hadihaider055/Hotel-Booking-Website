import React from "react";
import NavbarComp from "../../Components/Navbar";
import CoverImage from "../../Assets/cover-img.jpg";
import styles from "./home.module.css";
import HeaderCovid from "../../Components/HeaderCovid";
import TopDestination from "../../Components/TopDestinations";
import ExploreMore from "../../Components/ExploreMore";
import Testimonials from "../../Components/Testimonial";
const HomePage = () => {
  return (
    <div>
      <NavbarComp />
      <HeaderCovid />
      <img src={CoverImage} alt="cover-img" className={styles.coverImg} />
      <TopDestination />
      <ExploreMore />
      <Testimonials />
    </div>
  );
};

export default HomePage;
