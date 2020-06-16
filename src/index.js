import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss";
import "./assets/demo/demo.css";
import "./assets/demo/nucleo-icons-page-styles.css";

import LandingPage from "./views/LandingPage.js";
import Navbar from "./components/Navbars/Navbar";
import Footer from "./components/Footers/DefaultFooter";

export const history = createBrowserHistory();

history.listen((location, action) => {
  if (action === "PUSH") {
    window.scrollTo(0, 0);
  }
});

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route
        path="/admin"
        render={(props) => (
          <React.Fragment>
            <Navbar {...props} />
            <LandingPage {...props} />
            <Footer />
          </React.Fragment>
        )}
      />
      <Redirect from="/" to="/admin" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
