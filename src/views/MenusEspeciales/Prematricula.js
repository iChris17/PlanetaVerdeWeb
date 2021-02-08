import React from "react";
import { Col, Container, Row } from "reactstrap";

import LandingPageHeader from "../../components/Headers/LandingPageHeader.js";

const Prematricula = (props) => {
  return (
    <>
      <div className="wrapper">
        <LandingPageHeader screen={"Matrícula 2021"} />
        <Container>
          <div className="section-story-overview">
            <Row>
              <Col>
                <h2 className="title">
                  Educación de calidad con enfoque en Medio Ambiente y
                  tecnología
                </h2>
                <img src={require("../../assets/img/Prematricula/Diapositiva3.JPG")} alt="imagen1" width="100%"></img>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2 className="title">
                  Aranceles 2021
                </h2>
                <img src={require("../../assets/img/Prematricula/Diapositiva2.JPG")} alt="imagen1" width="100%"></img>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2 className="title">
                  Contáctenos
                </h2>
                <img src={require("../../assets/img/Prematricula/Diapositiva1.JPG")} alt="imagen1" width="100%"></img>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Prematricula;
