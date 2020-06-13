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
  Spinner,
} from "reactstrap";
import Articulos from "./index.js";
import Request from "../../service/Request";
import LandingPageHeader from "../../components/Headers/LandingPageHeader";

const Noticia = (props) => {
  const [categoriasArticulo, setCategoriasArticulo] = useState([]);
  const [categoriasNoticia, setCategoriasNoticia] = useState([]);
  const [loading, setLoading] = useState(true);
  //console.log(props);
  useEffect(() => {
    let mounted = true;
    const req = new Request();
    req
      .listGET("/api/categorias?tipo=articulo")
      .then((res) => {
        //console.log(res)
        if (mounted && res.code===200) {
          setCategoriasArticulo(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    req
      .listGET("/api/categorias?tipo=noticia")
      .then((res) => {
        if (mounted && res.code===200) {
          //console.log(res)
          setCategoriasNoticia(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return () => (mounted = false);
  }, []);

  const NombreCategoria = (url) => {
    for (let index = 0; index < categoriasNoticia.length; index++) {
      const categoria = categoriasNoticia[index];
      if (url === categoria.NbCategoriaHeader) {
        return categoria.NbCategoria;
      }
    }

    for (let index = 0; index < categoriasArticulo.length; index++) {
      const categoria = categoriasArticulo[index];
      if (url === categoria.NbCategoriaHeader) {
        return categoria.NbCategoria;
      }
    }
  };

  return (
    <Fragment>
      <div className="wrapper">
        <LandingPageHeader screen={"Noticias"} />
        <div className="section section-about-us">
          <Row>
            <Col md="3" className="ml-4">
              <h3 className="text-primary title">Categorías</h3>
              <Card>
                <CardBody>
                  {loading ? (
                    <Spinner />
                  ) : (
                    <ListGroup>
                      <h5 className="ml-1">Noticias</h5>
                      {categoriasNoticia.map((u, i) => {
                        return (
                          <ListGroupItem
                            key={i}
                            tag="button"
                            action
                            onClick={() => {
                              props.history.push(
                                "/noticias/" + u.NbCategoriaHeader
                              );
                            }}
                            active={
                              u.NbCategoriaHeader ===
                              props.match.params.categoria
                                ? true
                                : false
                            }
                            color={
                              u.NbCategoriaHeader ===
                              props.match.params.categoria
                                ? "success"
                                : ""
                            }
                          >
                            {u.NbCategoria}
                          </ListGroupItem>
                        );
                      })}
                      <h5 className="ml-1 mt-4">Artículo</h5>
                      {categoriasArticulo.map((u, i) => {
                        return (
                          <ListGroupItem
                            key={i}
                            tag="button"
                            action
                            onClick={() => {
                              props.history.push(
                                "/noticias/" + u.NbCategoriaHeader
                              );
                            }}
                            active={
                              u.NbCategoriaHeader ===
                              props.match.params.categoria
                                ? true
                                : false
                            }
                            color={
                              u.NbCategoriaHeader ===
                              props.match.params.categoria
                                ? "success"
                                : ""
                            }
                          >
                            {u.NbCategoria}
                          </ListGroupItem>
                        );
                      })}
                    </ListGroup>
                  )}
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <h3 className="text-primary title">
                {NombreCategoria(props.match.params.categoria)}
              </h3>
              <Articulos history={props.history} match={props.match}/>
            </Col>
            <Col className="mr-4">
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
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

export default Noticia;
