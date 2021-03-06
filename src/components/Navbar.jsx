import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
    <div className="container-fluid">
      <NavLink  className="navbar-brand" to="/">Space Tourism Inc. </NavLink>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/">
            <img src={props.social1} height="30" width="30"/>
          </NavLink>
          <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/">
            <img src={props.social2} height="30" width="30"/>
          </NavLink>
          <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/">
            <img src={props.social3} height="30" width="30"/>
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
  </nav>
  <p>Go Infinity & Beyond!!</p>
  </div>
  </div>
</div>


        </>
    );
};

export default Navbar;
