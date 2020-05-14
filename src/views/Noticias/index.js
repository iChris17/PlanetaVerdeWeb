import React, { useState, Fragment } from "react";
import ShowMoreText from "react-show-more-text";
// reactstrap components
import { Row, Col } from "reactstrap";

import NoticiasFotos from "./NoticiasFotos";

import Logo from "../../assets/img/noticias/inauguracion1_opt.jpg";
import Logo1 from "../../assets/img/noticias/inauguracion2_opt.jpg";
import Logo2 from "../../assets/img/noticias/inauguracion3_opt.jpg";
import Logo3 from "../../assets/img/noticias/inauguracion4_opt.jpg";

import Mano1 from "../../assets/img/noticias/manos1.JPG";
import Mano2 from "../../assets/img/noticias/manos2.JPG";
import Mano3 from "../../assets/img/noticias/manos3.JPG";
import Mano4 from "../../assets/img/noticias/manos4.JPG";

import Capacitacion1 from "../../assets/img/noticias/capacitacion1_opt.jpg";
import Capacitacion2 from "../../assets/img/noticias/capacitacion2_opt.jpg";
import Capacitacion3 from "../../assets/img/noticias/capacitacion3_opt.jpg";
import Capacitacion4 from "../../assets/img/noticias/capacitacion4_opt.jpg";
import Capacitacion5 from "../../assets/img/noticias/capacitacion5_opt.jpg";

import Certificacion1 from "../../assets/img/noticias/microsoft1.png";
import Certificacion2 from "../../assets/img/noticias/microsoft2.jpg";
import Certificacion3 from "../../assets/img/noticias/microsoft3.jpg";
import Certificacion4 from "../../assets/img/noticias/microsoft5.png";

import Covid1 from "../../assets/img/noticias/covid3.png";
import Covid2 from "../../assets/img/noticias/covid2.jpg";

import Lavamano1 from "../../assets/img/noticias/lavamano1.jpeg";
import Lavamano2 from "../../assets/img/noticias/lavamano2.jpeg";

const items = [
  {
    src: Logo,
    altText: "Slide 1",
    caption: "",
    key: '1'
  },
  {
    src: Logo1,
    altText: "Slide 2",
    caption: "",
    key: '2'
  },
  {
    src: Logo2,
    altText: "Slide 3",
    caption: "",
    key: '3'
  },
  {
    src: Logo3,
    altText: "Slide 4",
    caption: "",
    key: '4'
  },
];

const itemsMano = [
  {
    src: Mano1,
    altText: "Slide 1",
    caption: "",
    key: '1'
  },
  {
    src: Mano2,
    altText: "Slide 2",
    caption: "",
    key: '2'
  },
  {
    src: Mano3,
    altText: "Slide 3",
    caption: "",
    key: '3'
  },
  {
    src: Mano4,
    altText: "Slide 4",
    caption: "",
    key: '4'
  },
];

const itemsCapacitacion = [
  {
    src: Capacitacion1,
    altText: "Slide 1",
    caption: "",
    key: '1'
  },
  {
    src: Capacitacion2,
    altText: "Slide 2",
    caption: "",
    key: '2'
  },
  {
    src: Capacitacion3,
    altText: "Slide 3",
    caption: "",
    key: '3'
  },
  {
    src: Capacitacion4,
    altText: "Slide 4",
    caption: "",
    key: '4'
  },
  {
    src: Capacitacion5,
    altText: "Slide 4",
    caption: "",
    key: '5'
  },
];

const itemsCertificacion = [
  {
    src: Certificacion1,
    altText: "Slide 1",
    caption: "",
    key: '1'
  },
  {
    src: Certificacion2,
    altText: "Slide 2",
    caption: "",
    key: '2'
  },
  {
    src: Certificacion3,
    altText: "Slide 3",
    caption: "",
    key: '3'
  },
  {
    src: Certificacion4,
    altText: "Slide 4",
    caption: "",
    key: '4'
  },
];

const itemsCovid = [
  {
    src: Covid1,
    altText: "Slide 1",
    caption: "",
    key: '1'
  },
  {
    src: Covid2,
    altText: "Slide 2",
    caption: "",
    key: '2'
  },
];

const itemsLava = [
  {
    src: Lavamano1,
    altText: "Slide 1",
    caption: "",
    key: '1'
  },
  {
    src: Lavamano2,
    altText: "Slide 2",
    caption: "",
    key: '2'
  },
];

const Noticia = () => {
  const [expanded, setExpanded] = useState(false);

  const executeOnClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Fragment>
      <h3 className="text-left`">Instalación de moderno lavamanos (NoTouch)</h3>
      <Row>
        <Col md="4" className="mb-4">
          <NoticiasFotos items={itemsLava} />
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
              Hemos instalado los lavamanos “Sin Tocar”, los cuales ha sido
              desarrollados en el Centro Educativo Planeta Verde como parte de
              las medidas de prevención de enfermedades. Con este diseño de
              lavamanos, se minimiza las superficies de contactos de los
              estudiantes, haciéndolos una opción mas higiénica en este periodo
              de prevención.
            </div>
          </ShowMoreText>
        </Col>
      </Row>
      <br></br>
      <hr></hr>
      <h3 className="text-left`">
        El centro adopta medidas en la prevención contra el Covid 19
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
              Ante la situación actual del COVID-19 y atendiendo las necesidades
              que presentan las instituciones educativas, El Centro Educativo
              Planeta Verde suma esfuerzos para garantizar las medidas de
              prevención de enfermedades para toda su comunidad educativa. Para
              ello se ha establecido modalidad semipresencial, áreas de clases
              abiertas y con las respectivas medidas de distanciamiento, puntos
              de lavado de manos e instalación de lavamanos “Sin Tocar”, tiempo
              reducido y productos antisépticos al alcance.
            </div>
          </ShowMoreText>
        </Col>
      </Row>
      <br></br>
      <hr></hr>
      <h3 className="text-left`">
        Capacitación a maestros y estudiantes de Office 365 y Teams
      </h3>
      <Row>
        <Col md="4" className="mb-4">
          <NoticiasFotos items={itemsCapacitacion} />
        </Col>
        <Col md="8">
          <ShowMoreText
            lines={10}
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
              capacitaciones en áreas educativas, tecnología y herramientas de
              actualidad.
            </div>
          </ShowMoreText>
        </Col>
      </Row>
      <br></br>
      <hr></hr>
      <h3 className="text-left`">
        Certificación del centro por parte de Microsoft Education
      </h3>
      <Row>
        <Col md="4" className="mb-4">
          <NoticiasFotos items={itemsCertificacion} />
        </Col>
        <Col md="8">
          <ShowMoreText
            lines={10}
            more="Mostrar más"
            less="Mostrar menos"
            anchorClass="text-justify"
            onClick={executeOnClick}
            expanded={expanded}
            width={0}
          >
            <div className="text-justify text-black">
              El Centro Educativo Planeta Verde ha sido certificado por
              Microsoft como una institución educativa, lo que permite que
              nuestros estudiantes sean beneficiarios de las herramientas
              tecnológicas más avanzadas. El mundo cambia a más velocidad que
              nunca, y con él las aptitudes que los estudiantes necesitarán para
              estar preparados para la vida real después de graduarse. Con
              tecnología que transforma el tiempo que se pasa en el aula, los
              educadores pueden centrarse en ofrecer una experiencia
              personalizada que contribuya a unos mejores resultados de
              aprendizaje.<br></br>
              <br></br>Adopción de un aula virtual: La creación de un aula en
              línea es un paso esencial para la adopción de un entorno de
              aprendizaje remoto. Microsoft Teams para Educación es una
              plataforma para centros escolares y universidades y proporciona un
              aula en línea que permite a estudiantes y profesores encontrar
              nuevas formas de continuar centrados en el aprendizaje.
            </div>
          </ShowMoreText>
        </Col>
      </Row>
      <br></br>
      <hr></hr>
      <h3 className="text-left`">Actividad de pintura de manos en las aulas</h3>
      <Row className="">
        <Col md="4" className="mb-4">
          <NoticiasFotos items={itemsMano} />
        </Col>
        <Col md="8">
          <ShowMoreText
            lines={10}
            more="Mostrar más"
            less="Mostrar menos"
            anchorClass="text-justify"
            onClick={executeOnClick}
            expanded={expanded}
            width={0}
          >
            <div className="text-justify text-black">
              “Las Manos” es una de las primeras actividades del año, los
              estudiantes fundadores dejaron su marca impregnando sus manos en
              las paredes de sus respectivas aulas. Esta actividad es un símbolo
              de pertenencia de la generación fundadora de Centro Educativo
              Planeta Verde, quedara para los años futuros y también para las
              futuras generaciones de estudiantes.
            </div>
          </ShowMoreText>
        </Col>
      </Row>
      <br></br>
      <hr></hr>
      <h3 className="text-left`">
        Inauguración del Centro Educativo Planeta Verde
      </h3>
      <Row>
        <Col md="4" className="mb-4">
          <NoticiasFotos items={items} />
        </Col>
        <Col md="8">
          <ShowMoreText
            lines={10}
            more="Mostrar más"
            less="Mostrar menos"
            anchorClass="text-justify"
            onClick={executeOnClick}
            expanded={expanded}
            width={0}
          >
            <div className="text-justify text-black">
              Las evidencias del daño ambiental y del cambio climático son
              medibles científicamente en todas las partes del planeta. Afectan
              tanto a las personas como al medio ambiente, lo que provocará
              cambios drásticos y repercusiones irreversibles. La educación
              ambiental aumenta la concienciación y el conocimiento de los
              ciudadanos sobre temáticas o problemas ambientales. Al hacerlo, le
              brinda al público las herramientas necesarias para tomar
              decisiones informadas y medidas responsables. En este contexto, se
              fundó el Centro Educativo Planeta Verde, un proyecto basado
              principalmente en 3 pilares: “La educación de alta calidad”, “La
              concientización, cuido y preservación del medio ambiente” y “la
              tecnología educativa y medio ambiental”. Su construcción inició en
              2019, terminando su proceso de formalización ante las autoridades
              correspondientes a finales del mismo año. El 3 de febrero de 2020
              inicia su primer Curso Escolar con estudiantes de la cuidad de
              Managua.
            </div>
          </ShowMoreText>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Noticia;
