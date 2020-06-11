import React, { Fragment, useState, useEffect } from "react";
// reactstrap components
import { Row, Col, Card, CardBody, Button, Spinner } from "reactstrap";
import Request from "../../service/Request";
import Pagination from "./Pagination";

const Noticia = (props) => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    const req = new Request();
    if (mounted) {
      setLoading(true);
    }
    req
      .listGET("/api/noticias/" + props.match.params.categoria)
      .then((res) => {
        if (mounted) {
          //console.log(res);
          setNoticias(res);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return () => (mounted = false);
  }, [props.match.params.categoria]);

  const getcategoria = async (nbNoticia) => {
    const req = new Request();
    let nbCategoriaHeader = "";
    await req
      .listGET("/api/categorias/" + nbNoticia)
      .then((res) => {
        //console.log(res);
        nbCategoriaHeader = res[0].nbCategoriaHeader;
      })
      .catch((err) => {
        console.log(err);
      });

    return nbCategoriaHeader;
  };

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {noticias.length === 0 ? (
            <h3 className="text-center">No hay datos para mostrar</h3>
          ) : (
            <Fragment>
              {noticias.map((u, i) => {
                return (
                  <Card key={i}>
                    <CardBody>
                      <h3 className="text-left">{u.nbNoticia}</h3>
                      <hr></hr>
                      <Row>
                        <Col md="4">
                          <img
                            alt=""
                            src={u.vlImage}
                            height="auto"
                            width="100%"
                          />
                        </Col>
                        <Col md="8">
                          <p className="text-justify ">
                            <strong>{u.deNoticia}</strong>
                          </p>
                        </Col>
                      </Row>
                      <hr></hr>
                      <div className="d-flex flex-wrap justify-content-center">
                        <Button
                          color="primary"
                          size="lg"
                          onClick={() => {
                            getcategoria(u.idNoticiaHeader).then((res) => {
                              props.history.push(
                                "/noticias/" + res + "/" + u.idNoticiaHeader
                              );
                            });
                          }}
                        >
                          Continuar leyendo
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                );
              })}
              <Pagination />
            </Fragment>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Noticia;
