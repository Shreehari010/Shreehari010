import React, { useState } from "react";
import $ from 'jquery';

import TopNav from "../TopNav/TopNav";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Switch } from "@material-ui/core";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import { useSelector } from "react-redux";
import { darkModeAction } from "../../Action/checkAction";
import { Navbar } from "react-bootstrap";
import "../../Styles/HeaderComponent.css";

export default function Header() {
  const [mode, setmode] = useState(false);

  const dispatch = useDispatch();
  const config = useSelector((state) => state.NavTopReducer);
  const themeChange = (value) => {
    setmode(!mode);
    if (mode == true) {
      console.log("true");
      dispatch(darkModeAction("dark"));
    } else {
      console.log("false");
      dispatch(darkModeAction("light"));
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight - 2400,
      behavior: "smooth",
    });
  };
  const handleClick1 = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight - 1100,
      behavior: "smooth",
    });
  };

  $(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $("button.navbar-toggler").click();
        }
    });
});

  return (
    <>
      <Navbar
        expand="lg"
        sticky="top"
        style={{ backgroundColor: "whitesmoke", position: "sticky" }}
      >
        
        <div className="container">
          <TopNav />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="#navbarNav"
            data-target="#navbarNav" 
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav"   style={{paddingLeft:"70px",float:"right"}} >
            <ul className="navbar-nav ms-auto " >
            <Link to="/"   data-bs-toggle="collapse"
            data-bs-target="#navbarNav">
                {" "}
                <HeaderComponent />
              </Link>
              <Link to="/"  data-bs-toggle="collapse"
            data-bs-target="#navbarNav">
                {" "}
                <div className="ml-2 main-Container">
                  <h4
                    className="HeaderIcon"
                    style={{
                      fontFamily: '"Times New Roman",Georgia,Serif',
          
                    }}
                    onClick={handleClick}
                    active
                  >
                    Features
                  </h4>
                </div>
              </Link>
              <Link to="/TermsAndCondition" target="_blank" >
              <HeaderComponent heading="Terms & Condition" />
              </Link>
              <Link to="/PrivacyPolicy"  target="_blank" >
          
                <HeaderComponent heading="Privacy Policy"  data-bs-toggle="collapse"
            data-bs-target="#navbarNav" />
              </Link>
              <Link to="/"  data-bs-toggle="collapse"
            data-bs-target="#navbarNav">
                <div className="ml-2 main-Container">
                  <h4
                    className="HeaderIcon"
                    style={{
                      fontFamily: '"Times New Roman",Georgia,Serif',
                    }}
                    onClick={handleClick1}
                  >
                    Contact Us
                  </h4>
                </div>
              </Link>

              <div className="pt-2 pl-4"  >
                <Switch
               
                  classes={{ checked: "text-dark" }}
                  onClick={() => themeChange()}
                />
              </div>
            </ul>
          </div>
        </div>
      </Navbar>
    </>
  );
}
