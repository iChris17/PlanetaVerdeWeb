import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import LandingPageHeader from "components/Headers/LandingPageHeader.js";

import Mapa from "../../components/Mapa/index";

const Contacto = (props) => {

  return (
    <>
      <div className="wrapper">
        <LandingPageHeader screen={"Contacto"}/>
        <Container>
          <div className="separator separator-primary"></div>
          <div className="section-story-overview">
            <Row>
              <Col className=" text-left">
                <h2 className="title">Contacto</h2>
              </Col>
            </Row>
            <Row>
              <Col md="8">
              <div  style={{height:"400px"}}><Mapa/></div>
                
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contacto;
