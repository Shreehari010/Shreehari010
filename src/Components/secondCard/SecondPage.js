import React from "react";
import { Container } from "react-bootstrap";
//import "../../Styles/ImageResponsive.css"
import image1 from "../../assets/images/mobileimage.png"


export default function SecondPage() {
  return (
    <Container>
        <hr></hr>
      <div className="col-md-12 " style={{alignItems:"center",  textAlign:"center",}}>
                  simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and scrambled
                   it to make a type specimen book. It has survived not only five centu
                            ries.
           
          <div>
              <img className="responsive-image__image" src={image1} style={{ borderRadius:"50px",
  width:250 }} ></img>
  </div>
         
            <div >
            Let’s bring back the intimacy of spoken word and the power of voice.
                                Let’s Hoote and be heard!
            </div>
            </div>
    </Container>
  );
}
