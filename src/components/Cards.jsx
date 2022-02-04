import React from "react";
import {NavLink} from "react-router-dom";
import card1 from "../images/card1.jpeg"
import card2 from "../images/card2.jpeg"

class Cards extends React.Component {
    render() 
    {
        return (
        <>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid ">
            <div className="row">
                <div className="col-10 mx-auto">
                <h1>A commonn person has made her way to the Space, Too</h1>
                <br></br>
                <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <div className="card">
                            <img src={card1} alt="Shuttle" />
                        </div>
                    </div>
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <div className="card">
                            <img src={card2} alt="Future Shuttle" />
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>);
    };
};

export default Cards;