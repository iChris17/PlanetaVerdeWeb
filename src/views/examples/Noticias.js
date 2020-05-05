import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import LandingPageHeader from "../../components/Headers/LandingPageHeader.js";
import Noticia from "./Noticias/index.js";

const Noticias = () => {
  return (
    <>
      <div className="wrapper">
        <LandingPageHeader screen={"Noticias"} />
      </div>
      <div className="section section-about-us">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-left">
              <h2 className="title">Novedades</h2>
            </Col>
          </Row>
          <Noticia />
        </Container>
      </div>
    </>
  );
};

export default Noticias;
