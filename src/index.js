import React from "react";
import ReactDOM from "react-dom";
import {  Route, Switch, Redirect ,Router} from "react-router-dom";
import createHistory from "history/createBrowserHistory";

// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss";
import "./assets/demo/demo.css";
import "./assets/demo/nucleo-icons-page-styles.css";

import LandingPage from "./views/LandingPage.js";
import Nosotros from "./views/Nosotros.js";
import Contacto from "./views/Contacto.js";
import Noticias from "./views/Noticias.js";
import Navbar from "./components/Navbars/Navbar";
import Footer from "./components/Footers/DefaultFooter";

export const history = createHistory()

history.listen((location, action) => {
  if (action === 'PUSH') {
    window.scrollTo(0, 0);
    }
})

ReactDOM.render(
  <Router history={history}>
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
  </Router>,
  document.getElementById("root")
);
