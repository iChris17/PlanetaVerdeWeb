import React from "react";
import { Link } from "react-router-dom";

import { Button } from "reactstrap";

const Page500 = () => (
  <div className="text-center" style={{ height: window.innerHeight }}>
    <h1 className="display-1 font-weight-bold">500</h1>
    <p className="h1">Error interno del servidor.</p>
    <p className="h2 font-weight-normal mt-3 mb-4">
      El servidor se encuentra temporalmente fuera de servicio. Intentalo mas
      tarde.
    </p>
    <Link to="/inicio">
      <Button color="primary" size="lg">
        Regresar a Inicio
      </Button>
    </Link>
  </div>
);

export default Page500;
