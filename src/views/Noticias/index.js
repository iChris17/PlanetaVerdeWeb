import React, { Fragment, useState, useEffect } from "react";
// reactstrap components
import { Spinner } from "reactstrap";
import Request from "../../service/Request";
import Pagination from "./Pagination";

const Noticia = (props) => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    const req = new Request();
    if (mounted) {
      setLoading(true);
    }
    if (props.busqueda !== null) {
      setNoticias(props.busqueda);
      setLoading(false);
    } else {
      req
        .listPOST("/api/noticias/", {
          ini: 0,
          cant: 100,
          cat: props.match.params.categoria,
        })
        .then((res) => {
          if (mounted && res.code === 200) {
            console.log(res);
            setNoticias(res.data);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return () => (mounted = false);
  }, [props.match.params.categoria, props.busqueda]);



  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {noticias.length === 0 ? (
            <h3 className="text-center">No hay datos para mostrar</h3>
          ) : (
            <Fragment>
              <Pagination data={noticias} history={props.history}/>
            </Fragment>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Noticia;
