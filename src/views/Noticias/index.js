import React, { Fragment, useState, useEffect } from "react";
// reactstrap components
import { Row, Col, Card, CardBody, Button, Spinner } from "reactstrap";
import Request from "../../service/Request";
import Pagination from "./Pagination";

const Noticia = (props) => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(props);
  useEffect(() => {
    let mounted = true;
    const req = new Request();
    if (mounted) {
      setLoading(true);
    }
    req
      .listGET("/api/noticias/" + props.match.params.categoria)
      .then((res) => {
        if (mounted) {
          setNoticias(res);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return () => (mounted = false);
  }, [props.match.params.categoria]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {noticias.map((u, i) => {
            return (
              <Card key={i}>
                <CardBody>
                  <h3 className="text-center`">{u.nbNoticia}</h3>
                  <hr></hr>
                  <Row>
                    <Col md="4">
                      <img alt="" src={u.vlImage} height="100%" width="100%" />
                    </Col>
                    <Col md="8">
                      <p className="text-justify text-primary">
                        <strong>{u.deNoticia}</strong>
                      </p>
                    </Col>
                  </Row>
                  <hr></hr>
                  <div className="d-flex flex-wrap justify-content-center">
                    <Button
                      color="primary"
                      size="lg"
                      onClick={() => {
                        props.history.push(props.match.url + u.idNoticiaHeader);
                      }}
                    >
                      Leer más
                    </Button>
                  </div>
                </CardBody>
              </Card>
            );
          })}
          <Pagination/>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Noticia;
