import React, { Fragment } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  ListGroup,
  ListGroupItem,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from "reactstrap";
import Articulos from "./index.js";
import Pagination from "./Pagination";

const Noticia = () => {
  return (
    <Fragment>
      <Row>
        <Col md="3" className="ml-4">
          <Card>
            <CardBody>
              <h5 className="text-center">Categorias</h5>
              <ListGroup>
                <ListGroupItem active tag="button" action color="success">
                  Recientes
                </ListGroupItem>
                <ListGroupItem tag="button" action>
                  Novedades
                </ListGroupItem>
                <ListGroupItem tag="button" action>
                  Covid
                </ListGroupItem>
                <ListGroupItem tag="button" action>
                  Academicas
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <h3>Recientes</h3>
          <Articulos />
          <Pagination />
        </Col>
        <Col className="mr-4">
        <h3>Buscar</h3>
          <Card>
            <CardBody>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                <Button color="primary"><i className="fas fa-search"></i></Button>
                </InputGroupAddon>
                <Input placeholder="Buscar" />
              </InputGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Noticia;
