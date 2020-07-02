import React, { useState, useEffect, Fragment } from "react";
// core components
import NavbarAdmin from "../../components/Navbars/NavbarAdmin";
import Footer from "../../components/Footers/DefaultFooter";
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import AdminNoticias from "./AdminNoticias/AdminNoticias";

const LandingPage = (props) => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(1);

  let Tabs = [
    { orderTab: 1, valorTab: "Noticias", vlComponente: "AdminNoticias" },
  ];

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    if (localStorage.getItem("validateUser") !== null) {
      setAuth(true);
      setLoading(false);
    } else {
      setAuth(false);
      setLoading(false);
    }
  }, []);

  const TabComponent = (name) => {
    switch (name) {
      case "AdminNoticias":
        return (
          <Col>
            <AdminNoticias />
          </Col>
        );

      default:
        return <div>No encontrado</div>;
    }
  };

  return (
    <>
      {loading ? null : auth ? (
        <Fragment>
          <NavbarAdmin {...props} />
          <div className="wrapper">
            <Container>
              <h2 className="title text-center mt-2">
                Bienvenido al Administrador CEPV
              </h2>
              <hr></hr>
              <Nav tabs>
                {Tabs.map((u, i) => {
                  return (
                    <NavItem key={i}>
                      <NavLink
                        className={classnames({ active: u.orderTab === 1 })}
                        onClick={() => {
                          toggle(u.orderTab);
                        }}
                        style={{ userSelect: "none" }}
                      >
                        {u.valorTab}
                      </NavLink>
                    </NavItem>
                  );
                })}
              </Nav>
              <TabContent activeTab={activeTab}>
                {Tabs.map((u, i) => {
                  return (
                    <TabPane key={i} tabId={u.orderTab}>
                      <Row className="py-4">{TabComponent(u.vlComponente)}</Row>
                    </TabPane>
                  );
                })}
              </TabContent>
            </Container>
          </div>
          <Footer />
        </Fragment>
      ) : (
        props.history.push("/login")
      )}
    </>
  );
};

export default LandingPage;
