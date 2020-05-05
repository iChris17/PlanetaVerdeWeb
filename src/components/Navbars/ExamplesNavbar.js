import React, { useState } from "react";
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
} from "reactstrap";
import Logo from "../../assets/img/logotipogenerico.png";

function ExamplesNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className={"fixed-top "} color="light" light expand="lg">
        <Container>
          <div className="navbar-brand">
            <img src={Logo} height="50px"width="200px" alt="Logo" />
          </div>
          <NavbarToggler onClick={toggle} className="border-0"/>
          <Collapse className="justify-content-end" isOpen={isOpen} navbar>
            <Nav fill>
              <NavItem>
                <NavLink to="/inicio" tag={Link}>
                  <h5
                    className="text-black"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Inicio
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
                    Nosotros
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
                    Noticias
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
                    Contacto
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
