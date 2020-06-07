import React, { Fragment } from "react";
import { Row, Col, Card } from "reactstrap";

const BottomSection = () => {
  return (
    <Fragment>
      <h3 className="text-primary title">Puede interesarle</h3>
      <hr></hr>
      <Row>
        <Col md="3">
          <Card>
            <img
              width="100%"
              height="150px"
              src={require("../../../assets/img/noticias/capacitacion1_opt.jpg")}
              alt=""
            />
            <hr></hr>
            <h6 className=" ml-2 mr-2 mb-3 text-center">
              <a href="/">
                Médicos de Nicaragua en lucha permanente contra la pandemia de
                la Covid-19
              </a>
            </h6>
          </Card>
        </Col>
        <Col md="3">
          <Card>
            <img
              width="100%"
              height="150px"
              src={require("../../../assets/img/noticias/covid1.jpg")}
              alt=""
            />
            <hr></hr>
            <h6 className=" ml-2 mr-2 mb-3 text-center">
              <a href="/">
                Médicos de Nicaragua en lucha permanente contra la pandemia de
                la Covid-19
              </a>
            </h6>
          </Card>
        </Col>
        <Col md="3">
          <Card>
            <img
              width="100%"
              height="150px"
              src={require("../../../assets/img/noticias/microsoft1.png")}
              alt=""
            />
            <hr></hr>
            <h6 className=" ml-2 mr-2 mb-3 text-center">
              <a href="/">
                Médicos de Nicaragua en lucha permanente contra la pandemia de
                la Covid-19
              </a>
            </h6>
          </Card>
        </Col>
        <Col md="3">
          <Card>
            <img
              width="100%"
              height="150px"
              src={require("../../../assets/img/noticias/microsoft1.png")}
              alt=""
            />
            <hr></hr>
            <h6 className=" ml-2 mr-2 mb-3 text-center">
              <a href="/">
                Médicos de Nicaragua en lucha permanente contra la pandemia de
                la Covid-19
              </a>
            </h6>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default BottomSection;
