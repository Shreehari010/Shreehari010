import React from "react";

import { Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";
import "../../Styles/logo.css";
import logo from "../../assets/images/fulllogo.png";

export default function TopNav() {
  return (
    <Navbar.Brand to="/">
      {" "}
      <div>
        <Link to="/" title="Syneins">
          <div>
            <img
              src={logo}
              height={80}
              width={200}
              style={{ borderRadius: "20px" }}
            ></img>
          </div>
        </Link>
      </div>
    </Navbar.Brand>
  );
}
