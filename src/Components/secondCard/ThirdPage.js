import { Divider } from "@material-ui/core";
import React from "react";
import { Container } from "react-bootstrap";
//import { Card } from "react-bootstrap";
import image1 from "../../assets/images/phone12.jpg";
import Card from "../../Theme/Component/container";

export default function ThirdPage() {
  return (
    <Container>
      <hr></hr>
    <div className="row">
      <div className="col-md-8">
        <Card
          className="card shadow border-0 py-4 ml-3 mr-3 mt-4"
          style={{ width: "auto", paddingLeft: "30px",backgroundColor:"lightblue",borderRadius:"10%" }}
        >
          <p style={{ fontWeight: "bolder"}}> What is Lorem Ipsum?</p>
          <br></br>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br></br>Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. <br></br>
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default
          model text, and a search for 'lorem ipsum' will uncover many web sites
          still in their infancy. <br></br>Various versions have evolved over
       
        </Card>
        </div>
        <div className="col-md-4"  style={{ width: "auto", paddingLeft: "20px", alignItems: "center" }}>
 
          <div className="  py-4 mr-5">
            <img
              src={image1}
              style={{ borderRadius: "30px" }}
              width={270}
            ></img>
          </div>
       
        </div>
        </div>
    </Container>
  );
}
