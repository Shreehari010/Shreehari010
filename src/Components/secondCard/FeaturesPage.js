import React from "react";
import FeatureList from "./Card/FeatureList";

export default function FeaturesPage() {
  return (
    <>
      <hr></hr>
    
        <div
          className="col-md-12"
          style={{
            alignItems: "center",
            fontFamily: "'Times New Roman', Times, serif",
            textAlign: "center",
            fontSize: "30px",
            color: "#15405E",
            textShadow: " -1px 1px 10px rgba(0, 0, 0, 3.5)",
          }}
        >
          <h7> WHY SYNEINS IS THE FUTURE!</h7>
        </div>
        <div
          className="col-md-12 col-sm-12"
          style={{
            fontFamily: "'Times New Roman', Times, serif",
            color: "#15405E",
            textShadow: " -1px 1px 10px rgba(0, 0, 0, 0.5)",
            textAlign: "center",
          }}
        >
          Encourages authentic & unforced conversations expressive social
          content that brings back emotion that touches your heart.
          <div>
          <FeatureList />
          </div>
        </div>
     
    </>
  );
}
