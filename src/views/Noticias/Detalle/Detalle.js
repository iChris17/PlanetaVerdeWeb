import React, { useState, useEffect, Fragment } from "react";
import Fecha from "./Fecha";
// reactstrap components
import { Button, Row, Col } from "reactstrap";
import Spinner from "../../../components/Spinner/Spinner";
import Request from "../../../service/Request";
import ShareButtons from "./ShareButtons";
import BottomSection from "./BottomSection";
import SideNews from "./SideNews";
import Page400 from "../../../components/404/Page404";
import Page500 from "../../../components/500/Page500";
import HelmetData from "../../../components/Helmet/Helmet";
// core components

function Detalle(props) {
  const [vlImage, setVlImage] = useState("");
  const [deNoticia, setDeNoticia] = useState("");
  const [txNoticia, setTxNoticia] = useState(null);
  const [title, setTitle] = useState("");
  const [loading, setloading] = useState(false);
  const [subtitle, setSubtitle] = useState("");
  const [categoriaheader, setCatHeader] = useState("");
  const [error400, setError400] = useState(false);
  const [error500, setError500] = useState(false);

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
          getcategoria(res.data.IdNoticiaHeader, res.data.FhRegistro);
          setDeNoticia(res.data.IdNoticiaHeaderNavigation.DeNoticia);
          setloading(false);
        } else if (res.code === 400) {
          setError400(true);
        } else {
          setError500(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setError500(true);
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
      {error400 ? <Page400 /> : null}
      {error500 ? <Page500 /> : null}
      <div className="ml-4 mr-4">
        {loading ? (
          <Spinner height={!error400 && !error500 ? "500px" : "0px"} />
        ) : (
          <Row>
            <HelmetData
              title={"CEPV | " + title}
              location={props.location}
              description={deNoticia}
              quote={title}
              image={vlImage}
            ></HelmetData>
            <Col xl="9">
              <Fragment>
                <h2 className="title text-center">
                  <strong>{title}</strong>
                </h2>
                <hr></hr>
                <h6 className="mt-2 mb-2">{subtitle}</h6>
                <img alt="" src={vlImage} width="100%" height="auto" />
                <Button
                  className="mt-4 mb-2"
                  color="primary"
                  onClick={() => {
                    props.history.push("/noticias/recientes-noticias");
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
                  IdNoticiaHeader={props.match.params.id}
                />
              </Fragment>
            </Col>
            <Col xl="3">
              <SideNews
                history={props.history}
                IdNoticiaHeader={props.match.params.id}
              />
            </Col>
          </Row>
        )}
      </div>
    </>
  );
}

export default Detalle;
