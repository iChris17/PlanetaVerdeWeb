import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import LandingPageHeader from "../components/Headers/LandingPageHeader.js";
import Plataformas from "./Virtual.js";

function LandingPage() {
  return (
    <>
      <div className="wrapper">
        <LandingPageHeader screen={"Inicio"} />

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
                      "url(" +
                      require("../assets/img/colegio2_opt.jpg") +
                      ")",
                  }}
                ></div>
              </Col>
              <Col lg="4">
                <div
                  className="image-container mb-4 img-fluid"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("../assets/img/colegio4_opt.jpg") +
                      ")",
                  }}
                ></div>
              </Col>
              <Col lg="4">
                <div
                  className="image-container mb-4 img-fluid"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("../assets/img/colegio6_opt.jpg") +
                      ")",
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
                      "url(" +
                      require("../assets/img/colegio3_opt.jpg") +
                      ")",
                  }}
                ></div>
              </Col>
              <Col lg="4">
                <div
                  className="image-container mb-4 img-fluid"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("../assets/img/colegio5_opt.jpg") +
                      ")",
                  }}
                ></div>
              </Col>
              <Col lg="4">
                <div
                  className="image-container mb-4 img-fluid"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("../assets/img/colegio8_opt.jpg") +
                      ")",
                  }}
                ></div>
              </Col>
            </Row>
            <Row>
              <Col className="text-left" md="12">
                <p className=" text-justify mt-5 mb-5 text-black">
                  <strong>
                    En el Centro Educativo Planeta Verde estamos comprometidos
                    con el bienestar de nuestros estudiantes, es por ello que
                    contamos con instalaciones totalmente nuevas, diseñadas para
                    garantizar la ventilación e iluminación adecuada en cada
                    ambiente. Contamos con aulas con capacidad de 30
                    estudiantes, pasillos amplios, baños espaciosos y puntos de
                    reunión que nos garantizan la seguridad y el bienestar de
                    cada uno de nuestros estudiantes, así como acceso a internet
                    en todo el colegio.<br></br>
                    <br></br> En tecnología, contamos con recursos audiovisuales
                    en nuestras aulas, un laboratorio de informática completo y
                    también aulas abiertas con recursos que serán de provecho
                    para nuestra comunidad educativa.
                  </strong>
                </p>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <Row>
              <Col className="ml-auto mr-auto text-left">
                <h2 className="title">Plataforma Virtual</h2>
              </Col>
            </Row>
            <Plataformas />
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
                  <strong> Vespertino: 1:00 pm - 5:10 pm</strong>
                </p>
                <h4 className="text-justify text-black">Secundaria</h4>
                <p className="text-justify text-black">
                  <strong>Matutino: 07:00 am - 12:00 pm</strong>
                </p>
                <h4 className="text-justify text-black">Oficina</h4>
                <p className="text-justify text-black">
                  <strong>Horario: 07:00 am - 05:30 pm</strong>
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPage;
