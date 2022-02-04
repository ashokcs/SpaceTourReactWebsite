import React from "react";
import astronut from "../images/astronut.gif";
import shuttle from "../images/shuttle_animated.gif";
import card1 from "../images/card1.jpeg";
import card2 from "../images/card2.jpeg";
import {NavLink} from "react-router-dom";
import Common from "./Common";
import BackGround from "./Background";
import Cards from "./Cards";

const Home = () => {
  return (
    <>
      <BackGround
      name="Michael Adam's launches two orbit Satillites into Deep Space on Blue Origin's" 
      imgsrc={shuttle} 
      />

      <Cards
      image1={card1}
      image2={card2}
      />

      <Common
      imgsrc={astronut} 
      visit="/service" 
      btname="Get Started" 
      />
   
    </>
  );
};

export default Home;
