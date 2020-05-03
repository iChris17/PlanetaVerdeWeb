import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader(props) {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/portada.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center mt-2">
          <Container>
            {props.screen === "Inicio" ? (
              <h1 className="title">Centro Educativo Planeta Verde</h1>
            ) : (
              <h1 className="title">{props.screen}</h1>
            )}
            {props.screen === "Inicio" ? (
              <h3 className="subtitle">
                La naturaleza es una inspiración para una buena educación
              </h3>
            ) : null}
            <div className="content-end brand">
              <img
                alt="..."
                className="n-logo"
                src={require("assets/img/Logo1.png")}
              ></img>
            </div>
            <div className="text-center">
              <p> facebook.com/eduplanetaverde</p>
              <Button
                className="btn-icon btn-round"
                color="info"
                href="https://www.facebook.com/eduplanetaverde/"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://www.facebook.com/eduplanetaverde/");
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
