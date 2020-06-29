import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoutes = ({ component: Component, ...rest }) => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("validateUser") !== null) {
      setAuth(true);
      setLoading(false);
    }
  }, []);

  return (
    <>
      {!loading ? (
        <Route
          {...rest}
          render={(props) =>
            auth ? <Component {...props} /> : <Redirect to="/login" />
          }
        />
      ) : null}
    </>
  );
};

export default PrivateRoutes;
