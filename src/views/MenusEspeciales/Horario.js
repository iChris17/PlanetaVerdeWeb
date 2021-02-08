import React from "react";
import { Col, Container, Row } from "reactstrap";

import LandingPageHeader from "../../components/Headers/LandingPageHeader.js";

const Horario = (props) => {
  return (
    <>
      <div className="wrapper">
        <LandingPageHeader screen={"Horario 2021"} />
        <Container>
          <div className="section-story-overview">
              <Row>
                  <Col></Col>
              </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Horario;
