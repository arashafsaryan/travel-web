import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Slider from "../components/Slider";
import ChooseUs from "../components/ChooseUs";
import BestDestination from "../components/BestDestination";
import TourGuides from "../components/TourGuides";
import ExploreWorld from "../components/ExploreWorld";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <>
      <Nav />
      <Header />
      <Slider />
      <ChooseUs />
      <BestDestination />
      <TourGuides />
      <ExploreWorld />
      <Footer />
    </>
  );
};

export default Landing;
