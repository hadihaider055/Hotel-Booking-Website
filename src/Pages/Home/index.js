import React from "react";
import NavbarComp from "../../Components/Navbar";
import CoverImage from "../../Assets/cover-img.jpg";
import styles from "./home.module.css";
import HeaderCovid from "../../Components/HeaderCovid";
import TopDestination from "../../Components/TopDestinations";
import ExploreMore from "../../Components/ExploreMore";
import Testimonials from "../../Components/Testimonial";
import Footer from "../../Components/Footer";
import HeroForm from "../../Components/Hero Form";
const HomePage = () => {
  return (
    <div>
      <NavbarComp />
      <HeaderCovid />
      <HeroForm />
      <img src={CoverImage} alt="cover-img" className={styles.coverImg} />
      <TopDestination />
      <ExploreMore />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
