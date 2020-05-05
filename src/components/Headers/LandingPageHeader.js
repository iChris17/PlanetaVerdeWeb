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
      <div className="page-header">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../assets/img/portada_opt.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            {props.screen === "Inicio" ? (
              <h2 className="title">Centro Educativo Planeta Verde</h2>
            ) : (
              <h2 className="title">{props.screen}</h2>
            )}
            {props.screen === "Inicio" ? (
              <h4 className="subtitle">
                La naturaleza es una inspiración para una buena educación
              </h4>
            ) : null}
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
