import React, { Fragment } from "react";
import { Card, CardBody, Row, Col, Button, Label } from "reactstrap";
import Request from "../../service/Request";
import Fecha from "./Detalle/Fecha";

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

  const getDate = (fecha) => {
    const f = new Fecha(fecha);
    return f.getFecha();
  };

  return (
    <Fragment>
      {props.data.map((u, i) => {
        return (
          <Card key={i}>
            <CardBody>
              <Label className="text-center">
                {getDate(u.FhRegistro)}
              </Label>

              <Label className="text-left h4">
                <strong>{u.NbNoticia}</strong>
              </Label>
              <hr></hr>
              <Row>
                <Col sm="4">
                  <img
                    className="mb-3"
                    alt=""
                    src={u.VlImage}
                    height="auto"
                    width="100%"
                  />
                </Col>
                <Col sm="8">
                  <Label className="text-justify">{u.DeNoticia}</Label>
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
