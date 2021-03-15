import React from "react";

// reactstrap components
import { Container, Row, Col, Label } from "reactstrap";

// core components
import LandingPageHeader from "../components/Headers/LandingPageHeader.js";

function LandingPage() {
  return (
    <>
      <div className="wrapper">
        <LandingPageHeader screen={"Cultura"} />

        <Container>
          <div className="section-story-overview">
            <Row>
              <Col>
                <h2 className="title">Folklore</h2>
                <Label className="text-black text-justify mb-2">
                  Es necesario este tipo de prácticas porque permiten la mejora
                  de calidad de la enseñanza en general y de la música en
                  particular. La recuperación del folklore depende de todos y
                  cada uno de los miembros de este centro, apostando por la
                  medida de la actualización de estas piezas a los cambios
                  sociales del momento y a su posible difusión a través de las
                  redes sociales. En CEPV nos importa cultivar las costumbres
                  nacionales y fomentar la cultura nicaraguense. El centro
                  brinda clases de folklore totalmente gratuitas para todos los
                  estudiantes activos del CEPV Verde los sábados de 1:00 a 2:30
                  pm. Los mejores estudiantes formarán parte del grupo oficial
                  de baile del centro.
                </Label>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <img
                  alt=" "
                  src={require("../assets/img/folk2.jpg")}
                  className="mt-2"
                ></img>
              </Col>
              <Col md={6}>
                <img
                  alt=" "
                  src={require("../assets/img/folk1.jpg")}
                  className="mt-2"
                ></img>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2 className="title">Zumba</h2>
                <Label className="text-black text-justify mb-2">
                  Zumba es una disciplina de baile muy divertida, que pueden
                  practicar tanto hombres como mujeres. Incrementa tu energía,
                  mejora la coordinación y la condición física, da bienestar al
                  cuerpo, reduce la grasa de más, el estrés y aumenta la
                  autoestima. Bailar tiene un efecto positivo sobre los sistemas
                  nervioso y cardiovascular; también, actúa como un poderoso
                  antidepresivo. En el CEPV brindamos sesiones de zumba
                  gratuitas para los estudiantes de secundaría todos los
                  miércoles, con un instructor profesional que les enseña sus
                  mejores rutina. Los mejores formarán parte del grupo de
                  zumbatón del centro.
                </Label>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <img
                  alt=" "
                  src={require("../assets/img/zumba1.JPG")}
                  className="mt-2"
                ></img>
              </Col>
              <Col md={6}>
                <img
                  alt=" "
                  src={require("../assets/img/zumba2.jpg")}
                  className="mt-2"
                ></img>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPage;
