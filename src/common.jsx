import React from "react";
import {NavLink} from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1>
              <strong className="brand-name"> Our Vision </strong>
              </h1>
              <h2 className="my-3">
              Space Adventures wants as many people as possible to experience what it is like to live in space, to circle the Earth, or travel beyond Earth orbit. In the next ten years, our clients will have a choice as to what vehicle to fly to space on
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

export default Common;
