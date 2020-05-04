import React, { Fragment } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";

import Microsoft from "../../assets/img/microsoft5.png";
import Office from "../../assets/img/microsoft3.jpg";

const Plataformas = (props) => {
  return (
    <Fragment>
      <Row>
        <Col lg="6">
          <Card>
            <CardImg top width="100%" src={Microsoft} alt="Card image cap" />
            <CardBody>
              <CardTitle>
                <strong>Microsoft Education</strong>
              </CardTitle>
              <CardSubtitle className="mb-2">Aula Virtual</CardSubtitle>
              <CardText>
                La creación de un aula en línea es un paso esencial para la
                adopción de un entorno de aprendizaje remoto.
              </CardText>
              <CardText>
                Microsoft Teams para Educación es una plataforma para centros
                escolares y proporciona un aula en línea que permite a
                estudiantes y profesores encontrar nuevas formas de continuar
                centrados en el aprendizaje.
              </CardText>
              <CardText>
                Microsoft Teams es una plataforma unificada de comunicación y
                colaboración que combina chat persistente en el lugar de
                trabajo, reuniones de video, almacenamiento de archivos e
                integración de aplicaciones.
              </CardText>
              <div className="d-flex justify-content-center">
              <Button
                  color="success"
                  size="lg"
                  href="https://teams.microsoft.com/"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://teams.microsoft.com/");
                  }}
                >
                  Ingresa
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <CardImg top width="100%" src={Office} alt="Card image cap" />
            <CardBody>
              <CardTitle>
                <strong>Office 365</strong>
              </CardTitle>
              <CardSubtitle className="mb-2">
                Colaboracion en equipo
              </CardSubtitle>
              <CardText>
                Office 365 es la plataforma de productividad, comunicación y
                colaboración alojada en la nube que agrupa las principales
                herramientas de mayor valor y en su versión más reciente.
                Gracias a la eficacia de estos servicios online.
              </CardText>
              <CardText>
                Es una solución completa que ofrece a los usuarios la capacidad
                de trabajar en cualquier momento y desde cualquier lugar,
                comunicarse por videoconferencia con cualquier persona,
                compartir su trabajo en tiempo real y con total seguridad,
                utilizar el correo electrónico, el calendario y la información
                de los contactos desde prácticamente todo tipo de dispositivos.
              </CardText>
              <div className="d-flex justify-content-center">
                <Button
                  color="success"
                  size="lg"
                  href="https://www.office.com/"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://www.office.com/");
                  }}
                >
                  Ingresa
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Plataformas;
