import React from "react";
import { Col, Container, Label, Row } from "reactstrap";

//import LandingPageHeader from "../../components/Headers/LandingPageHeader.js";

const Horario = (props) => {
  return (
    <>
      <div className="wrapper">
        <Container>
          <div className="section-story-overview">
            <Row>
              <Col>
                <Label className="text-primary title text-center" tag="h3">
                  Les presentamos el comunicado oficial del centro sobre las
                  modalidades híbridas que se impartirán este año.
                </Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <img src={require("./horario.jpeg")} alt="" width="100%"></img>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Horario;
