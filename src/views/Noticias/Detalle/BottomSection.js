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
        .listGET("/api/noticias/" + props.categoria + "?seccion=4")
        .then((res) => {
          if (mounted) {
            //console.log(props.categoria);
            setDataNews(res);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return () => (mounted = false);
  }, [props.categoria]);
  return (
    <Fragment>
      <h3 className="text-primary title">Puede interesarle</h3>
      <hr></hr>
      <Row>
        {!loading ? (
          dataNews.map((u, i) => {
            return (
              <Col md="3" key={i}>
                <Card>
                  <img width="100%" height="150px" src={u.vlImage} alt="" />
                  <hr></hr>
                  <h6 className=" ml-2 mr-2 mb-3 text-center">
                    <a
                      href=" "
                      onClick={(e) => {
                        e.preventDefault();
                        props.history.push(
                          "/noticias/" +
                            props.categoria +
                            "/" +
                            u.idNoticiaHeader
                        );
                      }}
                    >
                      {u.nbNoticia}
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

export default BottomSection;
