import React, { Fragment, useState, useEffect } from "react";
import { Row, Col, Card } from "reactstrap";
import Request from "../../../service/Request";
import Spinner from "../../../components/Spinner/Spinner";

const BottomSection = (props) => {
  const [loading, setLoading] = useState(true);
  const [dataNews, setDataNews] = useState([]);
  useEffect(() => {
    let mounted = true;
    if (props.categoria !== "") {
      const req = new Request();
      req
        .listGET(
          "/api/noticias/" +
            props.categoria +
            "?seccion=4&&idnoticia=" +
            props.IdNoticiaHeader
        )
        .then((res) => {
          if (mounted && res.code === 200) {
            //console.log(props.categoria);
            setDataNews(res.data);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return () => (mounted = false);
  }, [props.categoria, props.IdNoticiaHeader]);
  return (
    <Fragment>
      <h3 className="text-primary title">Puede interesarle</h3>
      <hr></hr>
      <Row>
        {!loading ? (
          dataNews.length > 0 ? (
            dataNews.map((u, i) => {
              return (
                <Col sm="6" xl="3" key={i}>
                  <Card>
                    <img width="100%" height="150px" src={u.VlImage} alt="" />
                    <hr></hr>
                    <h6 className="mb-3 text-center">
                      <a
                        href=" "
                        onClick={(e) => {
                          e.preventDefault();
                          props.history.push(
                            "/noticias/" +
                              props.categoria +
                              "/" +
                              u.IdNoticiaHeader
                          );
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
            <h6 className="text-center">NO HAY DATOS</h6>
          )
        ) : (
          <Spinner height={"100px"} />
        )}
      </Row>
    </Fragment>
  );
};

export default BottomSection;
