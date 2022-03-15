import React from "react";
import { Media } from "reactstrap";
import image1 from "../../assets/images/planeImage.jpg";

export default function FouthPage() {
  return (
    <>
      <hr></hr>
      <div
        className="col-md-12"
        style={{
          width: "100%",
          height: "500px",
          backgroundImage: `url(${image1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          textAlign:"center",



          
        }}
      >
       
         <div   style={{
          textAlign:"center",
          fontFamily: "'Times New Roman', Times, serif",
          fontWeight: "bolder",
          fontSize: "90px",
          paddingTop:"90px",
          color: "#b60d5c",
          textShadow: " -1px 1px 10px rgba(0, 0, 0, 0.75)",
          }}
        >
            Syneins

            </div>
        <div
          style={{
            textAlign:"center",
            fontFamily: "'Times New Roman', Times, serif",
            fontWeight: "bolder",
            fontSize: "50px",
            color: "gray",
            textShadow: " -1px 1px 10px rgba(0, 0, 0, 0.75)",
          }}
        >
          We Are Here For Your Growth
        </div>
        </div>
    </>
  );
}
