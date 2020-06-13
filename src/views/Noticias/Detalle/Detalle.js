import React, { useState, useEffect, Fragment } from "react";
import Fecha from "./Fecha";
// reactstrap components
import { Button, Row, Col } from "reactstrap";
import Spinner from "../../../components/Spinner/Spinner";
import Request from "../../../service/Request";
import ShareButtons from "./ShareButtons";
import BottomSection from "./BottomSection";
import SideNews from "./SideNews";

// core components

function Detalle(props) {
  const [vlImage, setVlImage] = useState("");
  const [txNoticia, setTxNoticia] = useState(null);
  const [title, setTitle] = useState("");
  const [loading, setloading] = useState(false);
  const [subtitle, setSubtitle] = useState("");
  const [categoriaheader, setCatHeader] = useState("");

  useEffect(() => {
    let mounted = true;
    const req = new Request();
    setloading(true);
    req
      .listGET("/api/noticiadetalles/" + props.match.params.id)
      .then((res) => {
        //console.log(res);
        if (mounted && res.code === 200) {
          setTxNoticia(res.data.TxNoticia);
          setVlImage(res.data.IdNoticiaHeaderNavigation.VlImage);
          setTitle(res.data.IdNoticiaHeaderNavigation.NbNoticia);
          document.title =
            "CEPV | " + res.data.IdNoticiaHeaderNavigation.NbNoticia;
          getcategoria(res.data.IdNoticiaHeader, res.data.FhRegistro);
          setloading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return () => (mounted = false);
  }, [props.match.params.id]);

  const getcategoria = (nbNoticia, fecha) => {
    const f = new Fecha(fecha);
    const req = new Request();
    req
      .listGET("/api/categorias/" + nbNoticia)
      .then((res) => {
        //console.log(res);
        if (res.code === 200) {
          setSubtitle(
            f.getFecha() +
              " | " +
              res.data[0].TpCategoria +
              " | " +
              res.data[0].NbCategoria
          );
          setCatHeader(res.data[0].NbCategoriaHeader);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div style={{ marginLeft: "3.5rem", marginRight: "3.5rem" }}>
        {loading ? (
          <Spinner height={"500px"} />
        ) : (
          <Row>
            <Col md="9">
              <Fragment>
                <h2 className="title text-center">{title}</h2>
                <hr></hr>
                <h6 className="mt-2 mb-2">{subtitle}</h6>
                <img alt="" src={vlImage} width="100%" height="25%" />
                <Button
                  className="mt-4 mb-2"
                  color="primary"
                  onClick={() => {
                    props.history.push("/noticias/recientes-noticias");
                    document.title = "Centro Educativo Planeta Verde";
                  }}
                >
                  Volver al Menú
                </Button>
                <ShareButtons title={title} />
                <Row>
                  <Col dangerouslySetInnerHTML={{ __html: txNoticia }}></Col>
                </Row>
                <ShareButtons title={title} />
                <BottomSection
                  categoria={categoriaheader}
                  history={props.history}
                />
              </Fragment>
            </Col>
            <SideNews history={props.history} />
          </Row>
        )}
      </div>
    </>
  );
}

export default Detalle;
