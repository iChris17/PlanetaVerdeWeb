import React, { useState, useEffect } from "react";

// reactstrap components
import {
  Button,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  InputGroup,
  InputGroupAddon,
  Input,
} from "reactstrap";
import Request from "../../../service/Request";
// core components

function Detalle(props) {
  const [vlImage, setVlImage] = useState("");
  const [txNoticia, setTxNoticia] = useState(null);

  useEffect(() => {
    let mounted = true;
    const req = new Request();
    req
      .listGET("/api/noticiadetalles/" + props.match.params.id)
      .then((res) => {
        //console.log(res);
        if (mounted) {
          setTxNoticia(res.txNoticia);
          setVlImage(res.vlImage);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return () => (mounted = false);
  }, [props.match.params.id]);

  return (
    <>
      <div style={{ marginLeft: "3.5rem", marginRight: "3.5rem" }}>
        <Row>
          <Col md="9">
            <h2 className="title text-center">
              Médicos de Nicaragua en lucha permanente contra la pandemia de la
              Covid-19
            </h2>
            <hr></hr>
            <h6 className="mt-2 mb-2">
              Lunes 1 de Junio 2020 | Noticias | Covid 19
            </h6>
            <img alt="" src={vlImage} width="100%" height="25%" />
            <Button
              className="mt-4 mb-2"
              color="primary"
              onClick={() => {
                props.history.goBack();
              }}
            >
              Volver al Menú
            </Button>
            <Row>
              <Col className="mb-4 d-flex flex-wrap justify-content-center">
                <h6>
                  Comparte esta noticia:
                  <Button
                    className="ml-2 btn-icon btn-round"
                    color="success"
                    href="https://www.fb.com/planetaverde.edu.ni/"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://www.fb.com/planetaverde.edu.ni");
                    }}
                  >
                    <i className="fab fa-whatsapp"></i>
                  </Button>
                  <Button
                    className="ml-2 btn-icon btn-round"
                    color="info"
                    href="https://www.fb.com/planetaverde.edu.ni/"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://www.fb.com/planetaverde.edu.ni");
                    }}
                  >
                    <i className="fab fa-facebook-square"></i>
                  </Button>
                  <Button
                    className=" ml-2 btn-icon btn-round"
                    color="danger"
                    href="https://www.fb.com/planetaverde.edu.ni/"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://www.fb.com/planetaverde.edu.ni");
                    }}
                  >
                    <i className="fab fa-instagram"></i>
                  </Button>
                  <Button
                    className=" ml-2 btn-icon btn-round"
                    color="info"
                    href="https://www.fb.com/planetaverde.edu.ni/"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://www.fb.com/planetaverde.edu.ni");
                    }}
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                </h6>
              </Col>
            </Row>
            <Row>
              <Col dangerouslySetInnerHTML={{ __html: txNoticia }}>
              </Col>
            </Row>
            <Row>
              <Col className=" mt-4 mb-4 d-flex flex-wrap justify-content-center">
                <h6>
                  Comparte esta noticia:
                  <Button
                    className="ml-2 btn-icon btn-round"
                    color="success"
                    href="https://www.fb.com/planetaverde.edu.ni/"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://www.fb.com/planetaverde.edu.ni");
                    }}
                  >
                    <i className="fab fa-whatsapp"></i>
                  </Button>
                  <Button
                    className="ml-2 btn-icon btn-round"
                    color="info"
                    href="https://www.fb.com/planetaverde.edu.ni/"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://www.fb.com/planetaverde.edu.ni");
                    }}
                  >
                    <i className="fab fa-facebook-square"></i>
                  </Button>
                  <Button
                    className=" ml-2 btn-icon btn-round"
                    color="danger"
                    href="https://www.fb.com/planetaverde.edu.ni/"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://www.fb.com/planetaverde.edu.ni");
                    }}
                  >
                    <i className="fab fa-instagram"></i>
                  </Button>
                  <Button
                    className=" ml-2 btn-icon btn-round"
                    color="info"
                    href="https://www.fb.com/planetaverde.edu.ni/"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://www.fb.com/planetaverde.edu.ni");
                    }}
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                </h6>
              </Col>
            </Row>
            <h3 className="text-primary title">Puede interesarle</h3>
            <hr></hr>
            <Row>
              <Col md="3">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={require("../../../assets/img/noticias/ejemplo.jpg")}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Noticia sugerida</CardTitle>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={require("../../../assets/img/noticias/ejemplo.jpg")}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Noticia sugerida</CardTitle>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={require("../../../assets/img/noticias/ejemplo.jpg")}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Noticia sugerida</CardTitle>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
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
              <CardImg
                top
                width="100%"
                src={require("../../../assets/img/noticias/ejemplo.jpg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Noticia sugerida</CardTitle>
              </CardBody>
            </Card>

            <Card>
              <CardImg
                top
                width="100%"
                src={require("../../../assets/img/noticias/ejemplo.jpg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Noticia sugerida</CardTitle>
              </CardBody>
            </Card>

            <Card>
              <CardImg
                top
                width="100%"
                src={require("../../../assets/img/noticias/ejemplo.jpg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Noticia sugerida</CardTitle>
              </CardBody>
            </Card>

            <Card>
              <CardImg
                top
                width="100%"
                src={require("../../../assets/img/noticias/ejemplo.jpg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Noticia sugerida</CardTitle>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Detalle;
