/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()},{" "}
            <a
              href="https://www.facebook.com/eduplanetaverde/"
              target="_blank"
              className="text-success"
            >
              CENTRO EDUCATIVO PLANETA VERDE
            </a>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
