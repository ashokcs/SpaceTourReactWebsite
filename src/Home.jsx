import React from "react";
import astronut from "../src/images/astronut.gif";
import shuttle from "../src/images/shuttle_animated.gif";
import card1 from "../src/images/card1.jpeg";
import card2 from "../src/images/card2.jpeg";
import {NavLink} from "react-router-dom";
import Common from "./common";
import BackGround from "./background";
import Cards from "./cards";

const Home = () => {
  return (
    <>
      <BackGround
      name="Michael Strahan's launch into space on Blue Origin's New Shepard" 
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
