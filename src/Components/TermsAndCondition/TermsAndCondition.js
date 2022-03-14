import React from "react";
import { Container } from "react-bootstrap";
import Card from "../../Theme/Component/container";

export default function TermsAndCondition() {
  return (
    <Container>
      <Card
        className="card shadow elevation:5 border-2 py-4 ml-2 mr-3 mb-4 responsive"
        style={{ width: "auto" }}
      >
      
          <div classname="col-md-6">
            <h3
              style={{
                textAlign: "center",
               
                fontSize: "30px",
                fontFamily: "Times New Roman",
                fontWeight: "bolder",
                color: "#85C1E9",
              }}
            >
              <u>TERMS AND CONDITION</u>
            </h3>
          </div>
      
      </Card>
      <Card
        className="card shadow border-0 py-4 ml-2 mr-3"
        style={{ width: "auto", paddingLeft: "50px" }}
      >
        <div className="row">
          <div classname="col-md-6 pt-4">
            <div style={{ fontFamily: "Times New Roman", marginRight: "40px" }}>
              <h5 style={{ fontWeight: "bold" }}>
                <u> Terms and Conditions for Company Name</u>
              </h5>
              <h5 style={{ fontWeight: "bold" }}> Introduction</h5>
              <p>
                These Website Standard Terms and Conditions written on this
                webpage shall manage your use of our website, Webiste Name
                accessible at Website.com. These Terms will be applied fully and
                affect to your use of this Website. By using this Website, you
                agreed to accept all terms and conditions written in here. You
                must not use this Website if you disagree with any of these
                Website Standard Terms and Conditions. Minors or people below 18
                years old are not allowed to use this Website.
              </p>
              <h5 style={{ fontWeight: "bold" }}>
                Intellectual Property Rights
              </h5>
              <p>
                Other than the content you own, under these Terms, Company Name
                and/or its licensors own all the intellectual property rights
                and materials contained in this Website. You are granted limited
                license only for purposes of viewing the material contained on
                this Website.
              </p>
              <h5 style={{ fontWeight: "bold" }}>Restrictions</h5>
              You are specifically restricted from all of the following:
              <ul>
                <li>publishing any Website material in any other media;</li>
                <li>
                  selling, sublicensing and/or otherwise commercializing any
                  Website material;
                </li>
                <li>
                  publicly performing and/or showing any Website material;
                </li>
                <li>
                  using this Website in any way that is or may be damaging to
                  this Website;
                </li>
                <li>
                  using this Website in any way that impacts user access to this
                  Website;
                </li>
                <li>
                  using this Website contrary to applicable laws and
                  regulations, or in any way may cause harm to the Website, or
                  to any person or business entity;
                </li>
                <li>
                  engaging in any data mining, data harvesting, data extracting
                  or any other similar activity in relation to this Website;
                </li>
                <li>
                  using this Website to engage in any advertising or marketing.
                </li>
              </ul>
              Certain areas of this Website are restricted from being access by
              you and Company Name may further restrict access by you to any
              areas of this Website, at any time, in absolute discretion. Any
              user ID and password you may have for this Website are
              confidential and you must maintain confidentiality as well.
              <h5 style={{ fontWeight: "bold" }}>Your Content</h5>
              <p>
                In these Website Standard Terms and Conditions, “Your Content”
                shall mean any audio, video text, images or other material you
                choose to display on this Website. By displaying Your Content,
                you grant Company Name a non-exclusive, worldwide irrevocable,
                sub licensable license to use, reproduce, adapt, publish,
                translate and distribute it in any and all media. Your Content
                must be your own and must not be invading any third-party's
                rights. Company Name reserves the right to remove any of Your
                Content from this Website at any time without notice.
              </p>
              <h5 style={{ fontWeight: "bold" }}> Severability</h5>
               If any provision of these Terms is found to be
              invalid under any applicable law, such provisions shall be deleted
              without affecting the remaining provisions herein. 
              <h5 style={{ fontWeight: "bold" }}>Variation of
              Terms</h5>
            Company Name is permitted to revise these Terms at any time
              as it sees fit, and by using this Website you are expected to
              review these Terms on a regular basis. 
               <h5 style={{ fontWeight: "bold" }}>Assignment </h5>
               The Company Name
              is allowed to assign, transfer, and subcontract its rights and/or
              obligations under these Terms without any notification. However,
              you are not allowed to assign, transfer, or subcontract any of
              your rights and/or obligations under these Terms.
               <h5 style={{ fontWeight: "bold" }}>Entire Agreement</h5> 
              These Terms constitute the entire agreement between Company Name
              and you in relation to your use of this Website, and supersede all
              prior agreements and understandings.  
              <h5 style={{ fontWeight: "bold" }}>Governing Law & Jurisdiction</h5> 
              These Terms will be governed by and interpreted in accordance with
              the laws of the State of Country, and you submit to the
              non-exclusive jurisdiction of the state and federal courts located
              in Country for the resolution of any disputes.
            </div>
          </div>
        </div>
      </Card>
    </Container>
  );
}
