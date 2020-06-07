import React, { Fragment } from "react";
import {
  Col,
  Card,
  CardBody,
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
} from "reactstrap";

const SideNews = () => {
  return (
    <Fragment>
      <Col md="3">
        <h3 className="text-primary title">Buscar</h3>
        <Card>
          <CardBody>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <Button color="primary">
                  <i className="fas fa-search"></i>
                </Button>
              </InputGroupAddon>
              <Input placeholder="Buscar" />
            </InputGroup>
          </CardBody>
        </Card>
        <h3 className="text-primary title">Recientes</h3>
        <hr></hr>

        <Card>
          <img
            width="100%"
            src={require("../../../assets/img/noticias/capacitacion1_opt.jpg")}
            alt=""
          />
          <hr></hr>
          <h6 className=" ml-2 mr-2 mb-3 text-center">
            <a href="/">
              Médicos de Nicaragua en lucha permanente contra la pandemia de la
              Covid-19
            </a>
          </h6>
        </Card>

        <Card>
          <img
            width="100%"
            src={require("../../../assets/img/noticias/covid1.jpg")}
            alt=""
          />
          <hr></hr>
          <h6 className=" ml-2 mr-2 mb-3 text-center">
            <a href="/">
              Médicos de Nicaragua en lucha permanente contra la pandemia de la
              Covid-19
            </a>
          </h6>
        </Card>

        <Card>
          <img
            width="100%"
            src={require("../../../assets/img/noticias/microsoft1.png")}
            alt=""
          />
          <hr></hr>
          <h6 className=" ml-2 mr-2 mb-3 text-center">
            <a href="/">
              Médicos de Nicaragua en lucha permanente contra la pandemia de la
              Covid-19
            </a>
          </h6>
        </Card>
      </Col>
    </Fragment>
  );
};

export default SideNews;
