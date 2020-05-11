import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader(props) {

  return (
    <>
      <div className="page-header">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("../../assets/img/portada_opt.jpg") + ")",
          }}
        ></div>
        <div className="content-center">
          <Container>
            {props.screen === "Inicio" ? (
              <h2 className="title">Centro Educativo Planeta Verde</h2>
            ) : (
              <h2 className="title">{props.screen}</h2>
            )}
            <h4 className="subtitle">
              <i>"La naturaleza es una inspiración para una buena educación"</i>
            </h4>
            <div className="content-end brand">
              <img
                alt="..."
                className="n-logo"
                src={require("../../assets/img/Logo1.png")}
                width="64px"
                height="64px"
              ></img>
            </div>
            <div className="text-center">
              <p>fb.com/planetaverde.edu.ni</p>
              <Button
                className="btn-icon btn-round"
                color="info"
                href="https://www.fb.com/planetaverde.edu.ni/"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://www.fb.com/planetaverde.edu.ni");
                }}
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
