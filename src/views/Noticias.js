import React from "react";

// reactstrap components
//import { Row, Col, Container } from "reactstrap";

// core components
import LandingPageHeader from "../components/Headers/LandingPageHeader.js";
import Noticia from "./Noticias/Noticias.js";

const Noticias = () => {
  return (
    <>
      <div className="wrapper">
        <LandingPageHeader screen={"Noticias"} />
      </div>
      <div className="section section-about-us">
          <Noticia/>
      </div>
    </>
  );
};

export default Noticias;
