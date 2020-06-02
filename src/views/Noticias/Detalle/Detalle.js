import React from "react";

// reactstrap components
import { Button, Container, Row, Col, Card, CardImg, CardBody, CardTitle } from "reactstrap";

// core components

function Detalle(props) {
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" +
              require("../../../assets/img/noticias/ejemplo.jpg") +
              ")",
          }}
        ></div>
        <div className="content-center">
          <Container>
            <h2 className="title">
              Médicos de Nicaragua en lucha permanente contra la pandemia de la
              Covid-19
            </h2>
            <div className="content-end brand">
              <img
                alt="..."
                className="n-logo"
                src={require("../../../assets/img/Logo1.png")}
                width="64px"
                height="64px"
              ></img>
            </div>
            <div className="text-center">
              <p>fb.com/planetaverde.edu.ni</p>
              <Button
                className="btn-icon btn-round"
                color="info"
                href="https://www.fb.com/planetaverde.edu.ni/"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://www.fb.com/planetaverde.edu.ni");
                }}
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
            </div>
          </Container>
        </div>
      </div>
      <Container>
        <Button
          className=" mt-4 mb-4"
          color="primary"
          onClick={() => {
            props.history.goBack();
          }}
        >
          Volver al Menú
        </Button>
        <Row>
          <Col className="mb-4 d-flex flex-wrap justify-content-between">
            <h6 className="mt-2">
              Lunes 1 de Junio 2020 | Noticias | Covid 19{" "}
            </h6>{" "}
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
          <Col>
            <p className="text-justify">
              <strong>
                La plataforma digital Juventud Presidente compartió con los
                usuarios de redes sociales un reportaje que resalta la lucha
                permanente de Nicaragua contra la pandemia de la Covid-19 y todo
                el trabajo que realiza el personal de salud en la atención
                solidaria a pacientes afectados por esta enfermedad. En el
                reporte que se titula “Médicos en Nicaragua: Ejemplo de Amor por
                la Vida” el doctor Erick Uriarte, cuenta su experiencia de cómo
                ha sido el cuido responsable y solidario a pacientes con
                Coronavirus en el Hospital Dr. Fernando Vélez Paiz, uno de los
                centros hospitalarios más modernos de Centroamérica.
              </strong>
            </p>
            <p className="text-justify">
              <strong>
                “Uno piensa más en su mamá, en su esposa, en sus hijos, uno ve
                el mundo diferente y me di cuenta que mis pacientes no solo
                requieren que yo les ponga la inyección, que yo le ponga el
                suero sino que también el paciente que lo tengo allí requiere
                apoyo de su familia, de conversación con alguien. Los he visto
                entrar caminando, los he visto muy mal, a uno que otro por
                desgracia los he visto partir pero a muchos los he visto irse a
                su casa con su familia, abrazados, llorando, alegres, es una
                sensación muy bonita saber que le estoy dando de alta a alguien
                que estuvo bien grave, enfermo, con una condición de alta tasa
                de mortalidad ver salir todos esos pacientes”, afirma Uriarte a
                Juventud Presidente.
              </strong>
            </p>
            <p className="text-justify">
              <strong>
                “Aquí en nuestra Nicaragua, quien nos está sacando adelante es
                la gloria de Dios, es el Señor quien nos está favoreciendo para
                poder hacerle frente a esta enfermedad mundial. Yo lo estoy
                viendo lo sé, que es momento de mantenerse firme de mantener el
                escudo en alto y resistir, aguantar, aguantar”, dijo con mucha
                convicción.
              </strong>
            </p>
          </Col>
        </Row>
        <hr></hr>
        <h3>Mas noticias</h3>
        <Row>
          <Col md="3" className="d-flex flex-wrap">
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
          <Col md="3" className="d-flex flex-wrap">
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
          <Col md="3" className="d-flex flex-wrap">
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
          <Col md="3" className="d-flex flex-wrap">
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
      </Container>
    </>
  );
}

export default Detalle;
