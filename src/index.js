import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss";
import "./assets/demo/demo.css";
import "./assets/demo/nucleo-icons-page-styles.css";

import LandingPage from "./views/LandingPage.js";
import Login from "./components/Login/LoginPage";
import PrivateRoutes from "./routes/PrivateRoutes";

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
        exact
        path="/"
        render={(props) => (
          <Fragment>
            <Login {...props} />
          </Fragment>
        )}
      />
    </Switch>
    <PrivateRoutes
      exact
      path="/admin"
      auth={localStorage.getItem("validateUser") !== null ? true : false}
      component={LandingPage}
    />
  </Router>,
  document.getElementById("root")
);
