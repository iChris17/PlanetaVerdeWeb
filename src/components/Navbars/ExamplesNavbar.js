import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  NavbarToggler,
  Row,
  Col,
  Label,
} from "reactstrap";
import Logo from "../../assets/img/logotipogenerico.png";

function ExamplesNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [typeNavbar, setTypeNavbar] = React.useState("sticky-top");

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const updateTypeNavbar = () => {
      if (
        document.documentElement.scrollTop > 700 ||
        document.body.scrollTop > 700
      ) {
        setTypeNavbar("fixed-top");
      } else if (
        document.documentElement.scrollTop < 701 ||
        document.body.scrollTop < 701
      ) {
        setTypeNavbar("sticky-top");
      }
    };
    window.addEventListener("scroll", updateTypeNavbar);
    return function cleanup() {
      window.removeEventListener("scroll", updateTypeNavbar);
    };
  });

  return (
    <div>
      <div className="bg-primary">
        <Container>
          <Row>
            <Col lg="10">
              <Label className="text-white mt-2 mr-4">
                <i class="fas fa-mobile-alt"> 8778-7321</i>
              </Label>

              <Label className="text-white mt-2 mr-4">
                <i class="fas fa-map-marker-alt">
                  {" "}
                  Barrio Santa Ana, del arbolito 1c oeste, 2 1/2c sur.
                </i>
              </Label>

              <Label className="text-white mt-2 mr-4">
                <i class="fas fa-envelope">
                  <a
                    href="mailto:info@planetaverde.edu.ni"
                    className="text-white"
                  >
                    {" "}
                    info@planetaverde.edu.ni
                  </a>
                </i>
              </Label>
            </Col>
            <Col lg="2">
              <Label className="text-white mt-2">
                <i class="fab fa-facebook-square">
                  <a
                    href="https://www.fb.com/planetaverde.edu.ni/"
                    className="text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://www.fb.com/planetaverde.edu.ni");
                    }}
                  >
                    {" "}
                    Síguenos en Facebook
                  </a>
                </i>
              </Label>
            </Col>
          </Row>
        </Container>
      </div>
      <Navbar className={typeNavbar} color="light" light expand="lg">
        <Container>
          <div className="navbar-brand">
            <img src={Logo} height="50px" width="200px" alt="Logo" />
          </div>
          <NavbarToggler onClick={toggle} className="border-0" />
          <Collapse className="justify-content-end" isOpen={isOpen} navbar>
            <Nav navbar fill>
              <NavItem>
                <NavLink to="/inicio" tag={Link}>
                  <h5
                    className="text-black"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <strong>Inicio</strong>
                  </h5>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/nosotros" tag={Link}>
                  <h5
                    className="text-black"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <strong>Nosotros</strong>
                  </h5>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/noticias" tag={Link}>
                  <h5
                    className="text-black"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <strong>Noticias</strong>
                  </h5>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contacto" tag={Link}>
                  <h5
                    className="text-black"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <strong>Contacto</strong>
                  </h5>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default ExamplesNavbar;
