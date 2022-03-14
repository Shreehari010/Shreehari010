import React from "react";
import image1 from "../../assets/images/background1.jpg";

export default function FifthCard() {
  return (
    <>
      <hr></hr>
      <div
        className="col-md-12"
        style={{
          width: "100%",
          height: "auto",
         backgroundImage: `url(${image1})`,
       backgroundColor:"#17A589",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        
        <div
          style={{
              paddingTop:"100px",
           alignItems:"center",
            fontFamily: "'Times New Roman', Times, serif",
            fontWeight: "bolder",
            fontSize: "50px",
            color: "#D68910",
            textAlign:"center",
            textShadow: " -1px 1px 10px rgba(0, 0, 0, 0.75)",
          }}
        >
        Encourages authentic & unforced conversations expressive social content that
         brings back emotion that touches your heart.
        </div>
      </div>
    </>
  );
}
