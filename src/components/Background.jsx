import React from "react";
import {NavLink} from "react-router-dom";

class BackGround extends React.Component {
  render(){
  return (
    <>
    <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1>
                {this.props.name} <strong className="brand-name"> - Space Tourism Inc. </strong>
              </h1>
              <h2 className="my-3">
                Space Tousirm is something that always in the dream of every human being. We will make the dream into reality. NASA has tied up with Blue Origin and SpaceX to offer affordable Space Tour to common people. Let's go infinity and beyond.
              </h2>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
              <img src={this.props.imgsrc} className="img-fluid animated" alt="home img" />
              </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
}

export default BackGround;