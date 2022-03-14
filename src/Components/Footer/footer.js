import React from 'react';
import "../../Styles/footer.css"

const footer = () => {
    return (
      <div className="col-md-12 " style={{ display:"flex",
        paddingTop: "20px",
        paddingBottom: "20px",
        alignItems:"center",
      textAlign:"center",
        boxShadow:"(0 0px 5px 0 rgba(black, 0.26))",
      backgroundColor: "#0a0a0a",
      color:"gray"}}>
   
      Copyright for SYNEINS ENTERPRISE SYSTEMS PRIVATE LIMITED &copy; 2021
      </div>
    
    );
  }
;

export default footer;