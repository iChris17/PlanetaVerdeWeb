import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss";
import "./assets/demo/demo.css";
import "./assets/demo/nucleo-icons-page-styles.css";
//import "./assets/css/typography.css";

//import PrivateRoutes from "./routes/PrivateRoutes";
import Login from "./components/Login/Login";
import LandingPage from "./views/LandingPage.js";
import Nosotros from "./views/Nosotros.js";
import Contacto from "./views/Contacto.js";
import Noticias from "./views/Noticias/Noticias.js";
import Navbar from "./components/Navbars/Navbar";
import Footer from "./components/Footers/DefaultFooter";
import DetalleNoticia from "./views/Noticias/Detalle/Detalle";
import Admin from "./views/Admin/Admin";
import HelmetData from "./components/Helmet/Helmet";

//import Prematricula from "./views/MenusEspeciales/Prematricula";
import Horario from "./views/MenusEspeciales/Horario"

export const history = createBrowserHistory();

history.listen((location, action) => {
  if (action === "PUSH" && !location.pathname.includes("noticias")) {
    window.scrollTo(0, 0);
  }
});

/*history.listen((location, action) => {
  if (action === "PUSH") {
    window.scrollTo(0, 0);
  }
});*/

ReactDOM.render(
  <Router history={history}>
    <HelmetData location={history.location} />
    <Switch>
      <Route
        exact
        path="/login"
        render={(props) => (
          <Fragment>
            <Login {...props} />
          </Fragment>
        )}
      />
      <Route
        exact
        path="/horario-2021"
        render={(props) => (
          <Fragment>
            <Navbar {...props} />
            <Horario {...props} />
            <Footer />
          </Fragment>
        )}
      />
      <Route
        exact
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
        exact
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
        exact
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
        exact
        path="/noticias/:categoria"
        render={(props) => (
          <React.Fragment>
            <Navbar {...props} />
            <Noticias {...props} />
            <Footer />
          </React.Fragment>
        )}
      />
      <Route
        exact
        path="/noticias/:categoria/:id"
        render={(props) => (
          <React.Fragment>
            <Navbar {...props} />
            <DetalleNoticia {...props} />
            <Footer />
          </React.Fragment>
        )}
      />
      <Route exact path="/noticias">
        <Redirect to="/noticias/recientes-noticias" />
      </Route>
      <Route
        exact
        path="/admin"
        render={(props) => (
          <React.Fragment>
            <Admin {...props} />
          </React.Fragment>
        )}
      />
      <Route path="/">
        <Redirect to="/inicio" />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
