import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";

import LandingPage from "views/examples/LandingPage.js";
import Nosotros from "views/examples/Nosotros.js";
import Contacto from "views/examples/Contacto.js";
import Noticias from "views/examples/Noticias.js";
import Navbar from "./components/Navbars/ExamplesNavbar";
import Footer from "./components/Footers/DefaultFooter";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route
          path="/inicio"
          render={(props) => (
            <React.Fragment>
              <Navbar {...props} />
              <LandingPage {...props} />
              <Footer />
            </React.Fragment>
          )}
        />
        <Route
          path="/nosotros"
          render={(props) => (
            <React.Fragment>
              <Navbar {...props} />
              <Nosotros {...props} />
              <Footer />
            </React.Fragment>
          )}
        />
        <Route
          path="/contacto"
          render={(props) => (
            <React.Fragment>
              <Navbar {...props} />
              <Contacto {...props} />
              <Footer />
            </React.Fragment>
          )}
        />
        <Route
          path="/noticias"
          render={(props) => (
            <React.Fragment>
              <Navbar {...props} />
              <Noticias {...props} />
              <Footer />
            </React.Fragment>
          )}
        />
        <Redirect from="/" to="/inicio" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
