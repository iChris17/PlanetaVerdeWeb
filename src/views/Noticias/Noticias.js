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
  Label,
} from "reactstrap";
import Articulos from "./index.js";
import Request from "../../service/Request";
import LandingPageHeader from "../../components/Headers/LandingPageHeader";
import Page500 from "../../components/500/Page500";

const Noticia = (props) => {
  const [categoriasArticulo, setCategoriasArticulo] = useState([]);
  const [categoriasNoticia, setCategoriasNoticia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [indSearch, setIndSearch] = useState(false);
  const [vlBusqueda, setVlBusqueda] = useState("");
  const [dataBusqueda, setDataBusqueda] = useState(null);
  const [error500, setError500] = useState(false);
  //console.log(props);
  useEffect(() => {
    let mounted = true;
    const req = new Request();
    req
      .listGET("/api/categorias?tipo=articulo")
      .then((res) => {
        //console.log(res)
        if (mounted && res.code === 200) {
          setCategoriasArticulo(res.data);
        } else if (res.code === 500) {
          setError500(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setError500(true);
      });

    req
      .listGET("/api/categorias?tipo=noticia")
      .then((res) => {
        if (mounted && res.code === 200) {
          //console.log(res)
          setCategoriasNoticia(res.data);
          setLoading(false);
        } else if (res.code === 500) {
          setError500(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setError500(true);
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

  const buscarNoticia = () => {
    const req = new Request();
    req
      .listGET("/api/noticias/buscar/" + vlBusqueda)
      .then((res) => {
        console.log(res);
        if (res.code === 200) {
          setIndSearch(true);
          setDataBusqueda(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        setError500(true);
      });
  };

  return (
    <Fragment>
      {error500 ? (
        <Page500 />
      ) : (
        <div className="wrapper">
          <LandingPageHeader screen={"Noticias"} />
          <div className="section section-about-us mr-4 ml-4">
            <Row>
              <Col lg="3" className="">
                <h3 className="text-primary title">Categorías</h3>
                <Card>
                  <CardBody>
                    {loading ? (
                      <Spinner />
                    ) : (
                      <ListGroup>
                        <Label className="ml-1 h5 text-primary"><strong>Noticias</strong></Label>
                        {categoriasNoticia.map((u, i) => {
                          return (
                            <ListGroupItem
                              key={i}
                              tag="button"
                              action
                              onClick={() => {
                                setIndSearch(false);
                                setVlBusqueda("");
                                setDataBusqueda(null);
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
                        <Label className="ml-1 mt-4 h5 text-primary"><strong>Artículo</strong></Label>
                        {categoriasArticulo.map((u, i) => {
                          return (
                            <ListGroupItem
                              key={i}
                              tag="button"
                              action
                              onClick={() => {
                                setIndSearch(false);
                                setVlBusqueda("");
                                setDataBusqueda(null);
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
              <Col lg="6">
                <h3 className="text-primary title">
                  {!indSearch
                    ? NombreCategoria(props.match.params.categoria)
                    : "Resultados de Busqueda"}
                </h3>
                <Articulos
                  history={props.history}
                  match={props.match}
                  busqueda={dataBusqueda}
                />
              </Col>
              <Col lg="3"className="">
                <h3 className="text-primary title">Buscar</h3>
                <Card>
                  <CardBody>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <Button
                          color="primary"
                          onClick={() => {
                            buscarNoticia();
                          }}
                          className=""
                          style={{height:"100%"}}
                        >
                          <i className="fas fa-search"></i>
                        </Button>
                      </InputGroupAddon>
                      <Input
                        placeholder="Buscar"
                        value={vlBusqueda}
                        onChange={(e) => {
                          setVlBusqueda(e.target.value);
                        }}
                      />
                    </InputGroup>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Noticia;
