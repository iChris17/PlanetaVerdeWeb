import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import LandingPageHeader from "../components/Headers/LandingPageHeader.js";
import ImgMision from "../assets/img/imgmision.JPG";
import ImgDesc from "../assets/img/imgpresentacion_opt.jpg";

const Nosotros = (props) => {
  return (
    <>
      <div className="wrapper">
        <LandingPageHeader screen={"Nosotros"} />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="text-left" lg="5">
                <h2 className="title">Misión</h2>
                <p className="text-black text-justify">
                  <strong>
                    Ofrecer a la comunidad una propuesta educativa, integral e
                    inclusiva para todos sus estudiantes en un ambiente seguro y
                    armonioso, fomentando el espíritu de superación, el
                    desarrollo de habilidades y la enseñanza de prácticas para
                    el manejo y preservación de nuestro planeta.
                  </strong>
                </p>
                <h2 className="title">Visión</h2>
                <p className="text-black text-justify">
                  <strong>
                    Ser una Institución Educativa reconocida y valorada por su
                    calidad en la enseñanza, amplia conciencia para la
                    preservación del Medio Ambiente y el fortalecimiento de los
                    valores humanos; que nuestros estudiantes egresados
                    manifiesten sus amplios conocimientos, sean críticos y
                    reflexivos, siendo capaces de encontrar soluciones prácticas
                    dentro de su entorno y la comunidad.
                  </strong>
                </p>
              </Col>
              <Col lg="7">
                <img
                  src={ImgMision}
                  alt="Imagen Mision"
                  height="90%vh"
                  width="100%"
                  className="mt-4 shadow p-2 mb-5 bg-light rounded"
                />
              </Col>
            </Row>
            <Row>
              <Col lg="7">
                <img
                  src={ImgDesc}
                  alt="Imagen Mision"
                  height="90%vh"
                  width="100%"
                  className="mt-4 shadow p-2 mb-5 bg-light rounded"
                />
              </Col>
              <Col className="text-left" lg="5">
                <h2 className="title"> </h2>
                <p className="text-black text-justify">
                  <strong>
                    El Centro Educativo Planeta Verde ha sido creado para
                    entregar a la sociedad individuos con: alto nivel académico,
                    pensamiento crítico, espíritu emprendedor y dominando el
                    idioma Inglés. Inculcando una conciencia ecológica, mediante
                    proyectos ambientales que permitan una participación activa
                    y dinámica de todos los miembros de la comunidad educativa.
                    Practicando como eje transversal valores éticos y morales en
                    sus educandos y educadores. Conscientes del rol mediador que
                    cumplen los docentes en la formación integral de los
                    estudiantes, se prioriza su capacitación constante y
                    continua para lograr una innovación educativa de calidad. El
                    Centro Educativo Planeta Verde y su comunidad, está
                    comprometido para el cumplimiento de este ideario
                  </strong>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Nosotros;
