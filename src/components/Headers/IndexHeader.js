/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
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
      <div className="page-header clear-filter" filter-color={"blue"}>
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/portada.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/Logo1.png")}
            ></img>
            <h1 className="h1-seo">Centro Educativo Planeta Verde</h1>
            <h3>Iglesia Santa Ana 200 mts al sur, 100 mts al este.</h3>
          </div>
          <h6 className="category category-absolute">
          facebook.com/eduplanetaverde{" "}
            <a href="https://www.facebook.com/eduplanetaverde/" target="_blank">
              <img
                alt="..."
                className="invision-logo"
                height="40"
                width="40"
                src={require("assets/img/fb_logo.svg")}
              ></img>
            </a>
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
