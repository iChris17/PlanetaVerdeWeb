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

function ExamplesNavbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className={"sticky-top"} color="light" light expand="lg">
        <Container>
          <div
            className="navbar-brand"
            onClick={() => {
              props.history.push("/inicio");
            }}
          >
            <img src={Logo} height="50px" width="200px" alt="Logo" />
          </div>
          <NavbarToggler onClick={toggle} className="" />
          <Collapse className="justify-content-end" isOpen={isOpen} navbar>
            <Nav navbar fill>
              <NavItem>
                <NavLink to="/login" tag={Link}>
                  <h5
                    className="text-black"
                    onClick={() => {
                      localStorage.removeItem("validateUser");
                    }}
                  >
                    <strong>Cerrar sesión</strong>
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
