import React, { Fragment } from "react";
// reactstrap components
import { Row, Col, Card, CardBody, Button } from "reactstrap";
import Covid1 from "../../assets/img/noticias/covid3.png";

const Noticia = () => {
  return (
    <Fragment>
      <Card>
        <CardBody>
          <h3 className="text-center`">
            <a href="/">
              El centro adopta medidas en la prevención contra el COVID – 19
            </a>
          </h3>
          <hr></hr>
          <Row>
            <Col md="4">
              <img alt="" src={Covid1} height="100%" width="100%"/>
            </Col>
            <Col md="8">
              <p className="text-justify text-primary">
                <strong>
                  Ante la situación actual del COVID-19 y atendiendo las
                  necesidades que presentan las instituciones educativas, El
                  Centro Educativo Planeta Verde suma esfuerzos para garantizar
                  las medidas de prevención de enfermedades para toda su
                  comunidad educativa.
                </strong>
              </p>

            </Col>
          </Row>
          <hr></hr>
          <div className="d-flex flex-wrap justify-content-center"><Button color="primary" size="lg">Leer más</Button></div>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default Noticia;
