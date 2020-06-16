import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function LandingPageHeader() {
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("../../assets/img/portada_opt.jpg") + ")",
          }}
        ></div>
        <div className="content-center">
          <Container>
            <h2 className="title">Administrador CEPV</h2>

            <div className="content-end brand">
              <img
                alt="..."
                className="n-logo"
                src={require("../../assets/img/Logo1.png")}
                width="64px"
                height="64px"
              ></img>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
