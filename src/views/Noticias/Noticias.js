import React, { Fragment, useEffect, useState } from "react";
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
import Request from "../../service/Request";

const Noticia = () => {
  const [dataCategorias, setDatacategorias] = useState([]);

  useEffect(() => {
    let mounted = true;
    const req = new Request();

    req
      .listGET("/api/categorias")
      .then((res) => {
        if (mounted) {
          setDatacategorias(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return () => (mounted = false);
  }, []);

  return (
    <Fragment>
      <Row>
        <Col md="3" className="ml-4">
          <h3>Categorías</h3>
          <Card>
            <CardBody>
              <ListGroup>
                {dataCategorias.map((u, i) => {
                  return (
                    <ListGroupItem key={i} tag="button" action>
                      {u.nbCategoria}
                    </ListGroupItem>
                  );
                })}
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
                  <Button color="primary">
                    <i className="fas fa-search"></i>
                  </Button>
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
