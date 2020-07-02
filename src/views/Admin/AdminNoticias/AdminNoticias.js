import React, { useState, useEffect, Fragment } from "react";
import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Container,
  Button,
  CardHeader,
} from "reactstrap";
import Request from "../../../service/Request";
import Table from "../../../components/Tables/LayoutTable";
import { Cabecera } from "./CabeceraNoticia";
import * as Swal from "sweetalert2";
import Spinner from "../../../components/Spinner/Spinner";

const AdminNoticias = () => {
  const [idNoticiaHeader, setidNoticiaHeader] = useState("");
  const [nbNoticia, setnbNoticia] = useState("");
  const [deNoticia, setdeNoticia] = useState("");
  const [vlImage, setvlImage] = useState("");
  const [txNoticia, settxNoticia] = useState("");
  const [dataNoticias, setDataNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataCategorias, setDataCategorias] = useState([]);
  const [idCategoria, setIdCategoria] = useState(null);

  useEffect(() => {
    let mounted = true;
    const req = new Request();
    setLoading(true);
    req
      .listGET("/api/noticias")
      .then((res) => {
        if (res.code === 200 && mounted) {
          setDataNoticias(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    req
      .listGET("/api/categorias?tipo=all")
      .then((res) => {
        if (res.code === 200 && mounted) {
          setDataCategorias(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return () => (mounted = false);
  }, []);

  const alertError = (title, msj) => {
    Swal.fire({
      icon: "error",
      title: title,
      text: msj,
    });
  };

  const handleEnviarNoticia = () => {
    const req = new Request();
    const data = {
      idNoticiaHeader: idNoticiaHeader,
      nbNoticia: nbNoticia,
      deNoticia: deNoticia,
      vlImage: vlImage,
      usRegistro: "CACEVEDO",
      txNoticia: txNoticia,
    };

    if (validateData()) {
      req
        .listPOST("/api/NoticiaDetalles", data)
        .then((res) => {
          console.log(res);
          if (res.code === 200) {
            req
              .listPOST("/api/noticiadetalles/categoria", {
                accion: "ADD_DEFAULT",
                idCategoria: idCategoria,
                idNoticiaHeader: idNoticiaHeader,
                usRegistro: "CACEVEDO",
              })
              .then((res) => {
                if (res.code === 200) {
                  Swal.fire({
                    icon: "success",
                    title: "Correcto",
                    text: "Noticia agregada correctamente",
                  });
                  limpiarCampos();
                } else {
                  alertError("Error", res.msj);
                }
              })
              .catch((err) => {});
          } else {
            alertError("Error", res.msj);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alertError("Error", "Rellene todos los campos");
    }
  };

  const limpiarCampos = () => {
    setidNoticiaHeader("");
    setnbNoticia("");
    setdeNoticia("");
    setvlImage("");
    settxNoticia("");
    setIdCategoria(null);
    const req = new Request();
    setLoading(true);
    req
      .listGET("/api/noticias")
      .then((res) => {
        if (res.code === 200) {
          setDataNoticias(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const validateData = () => {
    if (
      idCategoria === null ||
      idNoticiaHeader.trim() === "" ||
      nbNoticia.trim() === "" ||
      deNoticia.trim() === "" ||
      vlImage.trim() === "" ||
      txNoticia.trim() === ""
    ) {
      return false;
    }
    return true;
  };

  const getTable = (value) => {
    if (value.length > 0) {
      return (
        <Table
          title="Listado de Noticias"
          cabecera={Cabecera}
          data={dataNoticias}
          loading={loading}
          isPagination={false}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <>
      {loading ? (
        <Spinner height={"500px"} />
      ) : (
        <Fragment>
          <Card>
            <CardHeader>
              <h3 className="text-center title">Formulario de noticia</h3>
            </CardHeader>
            <CardBody>
              <Container>
                <Form>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Título noticia </Label>
                        <Input
                          type="text"
                          placeholder="Ingresa el título de la noticia"
                          value={nbNoticia}
                          onChange={(e) => {
                            setnbNoticia(e.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Ruta </Label>
                        <Input
                          type="text"
                          placeholder="Ingresa la ruta que se vera en el navegador"
                          value={idNoticiaHeader}
                          onChange={(e) => {
                            setidNoticiaHeader(e.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Descripción </Label>
                        <Input
                          type="textarea"
                          placeholder="Ingresa la descripción de la noticia"
                          value={deNoticia}
                          onChange={(e) => {
                            setdeNoticia(e.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Seleccione la categoria principal</Label>
                        <Input type="select">
                          {dataCategorias.map((u, i) => {
                            return (
                              <option
                                id={u.IdCategoria}
                                key={i}
                                onClick={(e) => {
                                  setIdCategoria(e.target.id);
                                }}
                              >
                                {u.NbCategoria + " | " + u.TpCategoria}
                              </option>
                            );
                          })}
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md={12}>
                      <FormGroup>
                        <Label>Imagen </Label>
                        <Input
                          type="textarea"
                          placeholder="Ingresa el valor de la imagen en base64"
                          value={vlImage}
                          onChange={(e) => {
                            setvlImage(e.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Label>Cuerpo </Label>
                    <Input
                      type="textarea"
                      placeholder="Ingresa el cuerpo de la noticia en código html básico"
                      value={txNoticia}
                      onChange={(e) => {
                        settxNoticia(e.target.value);
                      }}
                    />
                  </FormGroup>
                  <Row form className="d-flex flex-wrap justify-content-center">
                    <Button
                      className="mt-2"
                      color="primary"
                      onClick={(e) => {
                        e.preventDefault();
                        handleEnviarNoticia();
                      }}
                    >
                      Ingresar noticia
                    </Button>
                  </Row>
                </Form>
              </Container>
            </CardBody>
          </Card>
          {getTable(dataNoticias)}
        </Fragment>
      )}
    </>
  );
};

export default AdminNoticias;
