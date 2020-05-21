import React, { useState, Fragment } from "react";
import ShowMoreText from "react-show-more-text";
// reactstrap components
import { Row, Col, Card, CardBody } from "reactstrap";

import NoticiasFotos from "./NoticiasFotos";

import Capacitacion1 from "../../assets/img/noticias/capacitacion1_opt.jpg";
import Capacitacion2 from "../../assets/img/noticias/capacitacion2_opt.jpg";
import Capacitacion3 from "../../assets/img/noticias/capacitacion3_opt.jpg";
import Capacitacion4 from "../../assets/img/noticias/capacitacion4_opt.jpg";
import Capacitacion5 from "../../assets/img/noticias/capacitacion5_opt.jpg";

import Covid1 from "../../assets/img/noticias/covid3.png";
import Covid2 from "../../assets/img/noticias/covid2.jpg";

const itemsCapacitacion = [
  {
    src: Capacitacion1,
    altText: "Slide 1",
    caption: "",
    key: "1",
  },
  {
    src: Capacitacion2,
    altText: "Slide 2",
    caption: "",
    key: "2",
  },
  {
    src: Capacitacion3,
    altText: "Slide 3",
    caption: "",
    key: "3",
  },
  {
    src: Capacitacion4,
    altText: "Slide 4",
    caption: "",
    key: "4",
  },
  {
    src: Capacitacion5,
    altText: "Slide 4",
    caption: "",
    key: "5",
  },
];

const itemsCovid = [
  {
    src: Covid1,
    altText: "Slide 1",
    caption: "",
    key: "1",
  },
  {
    src: Covid2,
    altText: "Slide 2",
    caption: "",
    key: "2",
  },
];


const Noticia = () => {
  const [expanded, setExpanded] = useState(false);

  const executeOnClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Fragment>
      <Card>
        <CardBody>
          <h3 className="text-left`">
            El centro adopta medidas en la prevención contra el COVID – 19
          </h3>
          <Row>
            <Col md="4" className="mb-4">
              <NoticiasFotos items={itemsCovid} />
            </Col>
            <Col md="8">
              <ShowMoreText
                lines={5}
                more="Mostrar más"
                less="Mostrar menos"
                anchorClass="text-justify"
                onClick={executeOnClick}
                expanded={expanded}
                width={0}
              >
                <div className="text-justify text-black">
                  Ante la situación actual del COVID-19 y atendiendo las
                  necesidades que presentan las instituciones educativas, El
                  Centro Educativo Planeta Verde suma esfuerzos para garantizar
                  las medidas de prevención de enfermedades para toda su
                  comunidad educativa.
                  <br></br>
                  <br></br>
                  Para ello se ha establecido modalidad semipresencial, áreas de
                  clases abiertas y con las respectivas medidas de
                  distanciamiento, puntos de lavado de manos e instalación de
                  lavamanos “Sin Tocar”, tiempo reducido y productos
                  antisépticos al alcance. Hemos habilitado la plataforma para
                  videos conferencias para clases en vivo por parte de nuestros
                  docentes, así como un plan de acción con estrategias para
                  garantizar la continuidad y calidad de las clases. Todo esto
                  autorizado por el Ministerio de Educación (MINED).
                </div>
              </ShowMoreText>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <h3 className="text-left`">
            Capacitación a maestros y estudiantes de Office 365 y Teams
          </h3>
          <Row>
            <Col md="4" className="mb-4">
              <NoticiasFotos items={itemsCapacitacion} />
            </Col>
            <Col md="8">
              <ShowMoreText
                lines={5}
                more="Mostrar más"
                less="Mostrar menos"
                anchorClass="text-justify"
                onClick={executeOnClick}
                expanded={expanded}
                width={0}
              >
                <div className="text-justify text-black">
                  La Educación de calidad se construye con docentes altamente
                  capacitados, por lo que la capacitación constante es prioridad
                  para Centro Educativo Planeta Verde. El cuerpo docente recibe
                  capacitaciones en áreas educativas, tecnología y herramientas
                  de actualidad.
                  <br></br>
                  <br></br>
                  Recientemente, nuestros docentes han sido certificados en
                  plataforma Microsoft Teams para brindar vídeo conferencias,
                  atendiendo de manera virtual a nuestros estudiantes. Estás
                  herramientas nos ubican como una institución educativa pionera
                  en tecnología, para hacer frente al distanciamiento social de
                  una forma efectiva, y garantizando la continuidad de las
                  clases y contenidos con calidad.
                </div>
              </ShowMoreText>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default Noticia;
