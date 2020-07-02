import React from "react";
import { Link } from "react-router-dom";

import { Button } from "reactstrap";

const Page404 = () => (
  <div className="text-center" style={{height:window.innerHeight}}>
    <h1 className="display-1 font-weight-bold">404</h1>
    <p className="h1">Pagina no encontrada</p>
    <p className="h2 font-weight-normal mt-3 mb-4">
      La pagina que estas buscando no existe o ha sido removida
    </p>
    <Link to="/inicio">
      <Button color="primary" size="lg">
        Regresar a inicio
      </Button>
    </Link>
  </div>
);

export default Page404;
