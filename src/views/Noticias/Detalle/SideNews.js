import React, { Fragment, useState, useEffect } from "react";
import {
  Col,
  Card,
  CardBody,
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
} from "reactstrap";
import Request from "../../../service/Request";
import Spinner from "../../../components/Spinner/Spinner";

const SideNews = (props) => {
  const [dataNews, setDataNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const req = new Request();

    req
      .listGET("/api/noticias/recientes-noti?seccion=3")
      .then((res) => {
        //console.log(res);
        if (mounted) {
          setDataNews(res);
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
        nbCategoriaHeader = res[0].nbCategoriaHeader;
      })
      .catch((err) => {
        console.log(err);
      });

    return nbCategoriaHeader;
  };

  return (
    <Fragment>
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

        {!loading ? (
          dataNews.map((u, i) => {
            return (
              <Card key={i}>
                <img width="100%" src={u.vlImage} alt="" />
                <hr></hr>
                <h6 className=" ml-2 mr-2 mb-3 text-center">
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      getcategoria(u.idNoticiaHeader).then((res) => {
                        props.history.push(
                          "/noticias/" + res + "/" + u.idNoticiaHeader
                        );
                      });
                    }}
                  >
                    {u.nbNoticia}
                  </a>
                </h6>
              </Card>
            );
          })
        ) : (
          <Spinner height={"100px"} />
        )}
      </Col>
    </Fragment>
  );
};

export default SideNews;
