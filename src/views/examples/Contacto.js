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
        <LandingPageHeader screen={"Contacto"} />
        <Container>
          <div className="separator separator-primary"></div>
          <div className="section-story-overview">
            <Row>
              <Col className=" text-left">
                <h2 className="title">Contacto</h2>
              </Col>
            </Row>
            <Row>
              <Col md="4">

                <p>
                  <i class="fas fa-mobile-alt"> (505) 8778-7321</i>
                </p>

                <p>
                  {" "}
                  <i class="fas fa-envelope">
                    <a
                      href="mailto:info@planetaverde.edu.ni"
                      className="text-black"
                    >
                      info@planetaverde.edu.ni
                    </a>
                  </i>
                </p>

                <p>
                  <i class="fas fa-map-marker-alt">
                    {" "}
                    Barrio Santa Ana, del arbolito 1c oeste, 2 1/2c sur.
                    Managua, Nicaragua.
                  </i>
                </p>
              </Col>
              <Col md="8">
                <div style={{ height: "400px" }}>
                  <Mapa />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contacto;
