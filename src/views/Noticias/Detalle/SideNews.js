import React, { Fragment, useState, useEffect } from "react";
import { Col, Card, Row } from "reactstrap";
import Request from "../../../service/Request";
import Spinner from "../../../components/Spinner/Spinner";

const SideNews = (props) => {
  const [dataNews, setDataNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const req = new Request();

    req
      .listGET("/api/noticias/recientes-noticias?seccion=4")
      .then((res) => {
        //console.log(res);
        if (mounted && res.code === 200) {
          setDataNews(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return () => (mounted = false);
  }, []);

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
      <h3 className="text-primary title">Recientes</h3>
      <hr></hr>
      <Row>
        {!loading ? (
          dataNews.map((u, i) => {
            return (
              <Col sm="6" xl="12" key={i}>
                <Card>
                  <img width="100%" height="150px" src={u.VlImage} alt="" />
                  <hr></hr>
                  <h6 className="  mb-3 text-center">
                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        getcategoria(u.IdNoticiaHeader).then((res) => {
                          props.history.push(
                            "/noticias/" + res + "/" + u.IdNoticiaHeader
                          );
                        });
                      }}
                    >
                      {u.NbNoticia}
                    </a>
                  </h6>
                </Card>
              </Col>
            );
          })
        ) : (
          <Spinner height={"100px"} />
        )}
      </Row>
    </Fragment>
  );
};

export default SideNews;
