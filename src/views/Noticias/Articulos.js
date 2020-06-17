import React, { Fragment } from "react";
import { Card, CardBody, Row, Col, Button } from "reactstrap";
import Request from "../../service/Request";

const Articulos = (props) => {
  const getcategoria = async (nbNoticia) => {
    const req = new Request();
    let nbCategoriaHeader = "";
    await req
      .listGET("/api/categorias/" + nbNoticia)
      .then((res) => {
        //console.log(res);
        if (res.code === 200) {
          nbCategoriaHeader = res.data[0].NbCategoriaHeader;
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return nbCategoriaHeader;
  };
  return (
    <Fragment>
      {props.data.map((u, i) => {
        return (
          <Card key={i}>
            <CardBody>
              <h3 className="text-left">{u.NbNoticia}</h3>
              <hr></hr>
              <Row>
                <Col md="4">
                  <img alt="" src={u.VlImage} height="auto" width="100%" />
                </Col>
                <Col md="8">
                  <p className="text-justify ">
                    <strong>{u.DeNoticia}</strong>
                  </p>
                </Col>
              </Row>
              <hr></hr>
              <div className="d-flex flex-wrap justify-content-center">
                <Button
                  color="primary"
                  size="lg"
                  onClick={() => {
                    getcategoria(u.IdNoticiaHeader).then((res) => {
                      props.history.push(
                        "/noticias/" + res + "/" + u.IdNoticiaHeader
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
      })}{" "}
    </Fragment>
  );
};

export default Articulos;
