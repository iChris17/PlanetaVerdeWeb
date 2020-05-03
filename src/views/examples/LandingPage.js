import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import LandingPageHeader from "components/Headers/LandingPageHeader.js";

function LandingPage() {
  return (
    <>
      <div className="wrapper">
        <LandingPageHeader screen={"Inicio"}/>
        <div className="section section-about-us">
          <Container>
            <div className="section-story-overview">
              <Row>
                <Col className="ml-auto mr-auto text-left">
                  <h2 className="title">Instalaciones</h2>
                </Col>
              </Row>
              <Row>
                <Col lg="4">
                  <div
                    className="image-container img-fluid mb-4"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/colegio2.jpg") + ")",
                    }}
                  ></div>
                </Col>
                <Col lg="4">
                  <div
                    className="image-container mb-4 img-fluid"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/colegio4.jpg") + ")",
                    }}
                  ></div>
                </Col>
                <Col lg="4">
                  <div
                    className="image-container mb-4 img-fluid"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/colegio6.jpg") + ")",
                    }}
                  ></div>
                </Col>
              </Row>
              <Row>
                <Col lg="4">
                  <div
                    className="image-container mb-4 img-fluid"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/colegio3.jpg") + ")",
                    }}
                  ></div>
                </Col>
                <Col lg="4">
                  <div
                    className="image-container mb-4 img-fluid"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/colegio5.jpg") +
                        ")",
                    }}
                  ></div>
                </Col>
                <Col lg="4">
                  <div
                    className="image-container mb-4 img-fluid"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/colegio8.jpg") + ")",
                    }}
                  ></div>
                </Col>
              </Row>
              <Row>
                <Col className="text-left" md="12">
                  <p className=" text-justify mt-5 mb-5 text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet arcu ut justo rutrum porttitor. Quisque non euismod odio, et molestie dui. Pellentesque pharetra ullamcorper tortor, eu varius mauris placerat sed. Ut a tortor eget elit commodo hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse ut tortor elit. Ut vulputate, dui sed ullamcorper feugiat, massa diam vehicula eros, quis pulvinar quam lectus auctor quam. Vestibulum nec lobortis ex, vitae faucibus nunc. Nam in dui ut dui sollicitudin rhoncus id at magna. Nullam quis tempor quam, non porttitor velit. Suspendisse ac purus sit amet mauris sagittis auctor. Nam in dui dolor. Vivamus magna lacus, mattis viverra mauris in, ullamcorper venenatis odio. Pellentesque mollis mi et ipsum consequat hendrerit. 
                  </p>
                </Col>
              </Row>
              <div className="separator separator-primary"></div>
              <Row>
                <Col>
                  <h2 className="title">Modalidades</h2>
                </Col>
              </Row>
              <Row>
                <Col className=" text-left" md="12">
                  <h4 className="text-justify text-black">Primaria</h4>
                  <p className="text-justify text-black">
                    Vespertino: 12:30 pm - 04:30 pm
                  </p>
                  <h4 className="text-justify text-black">Secundaria</h4>
                  <p className="text-justify text-black">
                    Matutino: 07:15 am - 12:00 pm
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
