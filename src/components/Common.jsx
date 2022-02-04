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
                Space Adventures are the one area human being are ever wondered and always excited to do!. We have a mission to make it real to the common people. So far it has been experienced only by the billioniares. We will change this fact. 
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
