import React from "react";
import Contact from "./Contact";
import image1 from "../../assets/images/phone-screen.png";
import playstore from "../../assets/images/playstore.png";
import appstore from "../../assets/images/appstore.png";
import gmail from "../../assets/images/gmail12.png";
import Card from "../../Theme/Component/container";
import "../../Styles/ContactStyle.css";
import ContactMap from "./ContactMap";

export default function contactPage() {
  return (
    <div style={{ paddingBottom: "30px" }}>
      <div
        style={{
          textAlign: "center",
          fontFamily: "'Times New Roman', Times, serif",
          fontSize: "40px",
          color: "gray",
          textShadow: " -1px 1px 10px rgba(0, 0, 0, 0.75)",
        }}
      >
        Contact Us
      </div>
      <hr></hr>
      {/* <Card className="card shadow border-0 py-4 ml-5 mr-3" style={{width:"auto",paddingLeft:"50px"}}>    */}
      <div className="row">
        <div classname="col-md-4  ml-5 " style={{ alignItems: "center" }}>
          <div
            className="col-md-4  py-4 ml-3 "
            style={{ alignItems: "center", width: "auto" }}
           >
            <img
              src={image1}
              style={{ borderRadius: "50px" }}
              width={280}
            ></img>

            {/* <div className=" col-md-2 py-4 mt-4 mr-4">
              <img
                src={playstore}
                style={{ borderRadius: "50px" }}
                width={150}
              ></img>
            </div>
            <div className="col-md-2 pt-1">
              <img
                src={appstore}
                style={{ borderRadius: "50px" }}
                width={150}
              ></img>
            </div> */}
            {/* </div>
             */}
          </div>
        </div>

        <div className="col-md-6" style={{ paddingTop: "30px" }}>
          <Card
            className="card shadow border-0 py-2 ml-5 mr-3"
            style={{ width: "auto", paddingLeft: "20px",paddingRight:"90px" }}
           >
            <div style={{  height: "50%" }}>
              <div className="iconsContact">
                <i
                  className="zmdi zmdi-pin zmdi-hc-2x"
                  style={{ color: "#C0C527 " }}
                />
                <div className="contact-body">
                  <h6 className="text-uppercase" style={{ color: "blue" }}>
                    ADDRESS
                  </h6>
                  <address className="mb-0">
                    T-2308,B Block,Ardente office One Hoodi Circle,WhiteField
                    Bangalore,Karnataka-560048
                  </address>
                </div>
              </div>
              <div className="iconsContact">
                <i className="zmdi zmdi-phone zmdi-hc-fw" />
                <div className="contact-body">
                  <h6 className="text-uppercase">Phone</h6>
                  <div>
                    <span className="jr-link text-primary disable-link">
                      +91 9123431234
                    </span>
                  </div>
                  <div>
                    <span className="jr-link text-primary disable-link">
                      (080) 123 524
                    </span>
                  </div>
                </div>
              </div>

              <div className="iconsContact">
                <i className="zmdi zmdi-email zmdi-hc-fw" />
                <div className="contact-body">
                  <h6 className="text-uppercase">E-mail</h6>
                  <div>
                    <span className="text-primary jr-link">
                      info@Syneins.com
                    </span>
                  </div>
                  <div className="icons-wrapper">
                    <a href="https://www.facebook.com/Meta" target="_blank">
                      <span
                        className="icon facebook-icon jr-link"
                        style={{ borderRadius:"30%", textAlign: "center" }}
                      >
                        <i
                          className="zmdi zmdi-facebook"
                          style={{ paddingLeft: "30px" }}
                        />
                      </span>
                    </a>
                    <span
                      className="icon twitter-icon jr-link"
                      style={{ borderRadius: "30%", textAlign: "center" }}
                    >
                      <i
                        className="zmdi zmdi-twitter"
                        style={{ paddingLeft: "30px" }}
                      />
                    </span>

                    <span
                      className="icon google-icon jr-link"
                      style={{ borderRadius: "30%", textAlign: "center" }}
                    >
                      <i
                        className="zmdi zmdi-google-plus"
                        style={{ paddingLeft: "30px" }}
                      />
                    </span>

                    <span
                      className="icon linkedin-icon jr-link"
                      style={{ borderRadius: "30%", textAlign: "center" }}
                    >
                      <i
                        className="zmdi zmdi-linkedin"
                        style={{ paddingLeft: "30px" }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-md-2">
        <div
          classname=" mt-2"
          style={{
            marginBottom: "30px"
          }}
        >
          <div
            className="  py-4"
            style={{textAlign:"center", alignItems: "center" }}
          >
            <img src={gmail} style={{ borderRadius: "20px" }} width={150}></img>
          </div>
          <div
            style={{alignItems: "center"}}
          >
            <Contact />

             <div className=" col-md-2 py-4 mt-4 mr-4">
              <img
                src={playstore}
                style={{ borderRadius: "50px" }}
                width={150}
              ></img>
            </div>
            <div className="col-md-2 pt-1">
              <img
                src={appstore}
                style={{ borderRadius: "50px" }}
                width={150}
              ></img>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="row">
      <div
        classname="col-md-12 ml-4"
        style={{
          paddingTop: "30px",
          marginBottom: "30px",
          paddingLeft: "30px",
          paddingRight: "30px",
          width:"100%"
        }}
      >
        <ContactMap />
      </div>
    </div>
    </div>
  );
}
