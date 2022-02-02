import React from "react";
import {NavLink} from "react-router-dom";

const BackGround = (props) => {
  return (
    <>
    <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1>
                {props.name} <strong className="brand-name"> - Space Tourism Inc. </strong>
              </h1>
              <h2 className="my-3">
                space tourism, recreational space travel, either on established government-owned vehicles such as the Russian Soyuz and the International Space Station (ISS) or on vehicles fielded by private companies. Since the flight of the world’s first space tourist, American businessman Dennis Tito, on April 28, 2001, space tourism has gained new prominence as more suborbital and orbital tourism opportunities have become available.
              </h2>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
              <img src={props.imgsrc} className="img-fluid animated" alt="home img" />
              </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BackGround;