import React from "react";
import "../../Styles/HeaderComponent.css";

const HeaderComponent = ({ heading, headerOutside }) => {

 

  return (
    <div className="ml-2 main-Container">
      {!headerOutside && (
          <h4
            // className={`${styleName}`}
            className="HeaderIcon"
            style={{
      fontFamily: '"Times New Roman",Georgia,Serif',         
            }}

          >
            {heading}
          </h4>
      )}
    </div>
  );
};
export default HeaderComponent;

HeaderComponent.defaultProps = {
  cardStyle: "",
  headingStyle: "",
  childrenStyle: "",
  styleName: "",
  heading: "home",
};
