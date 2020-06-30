import React, { Fragment } from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import { withRouter } from "react-router-dom";

const CardVista = ({ titulo, path, children, history }) => {
  return (
    <Card>
      {titulo !== undefined && path !== undefined ? (
        <CardHeader>
          <CardTitle className="mb-0" >
            <div className="d-flex flex-row ">
              <Fragment>
                <h2 className="text-center mb-0">{titulo}</h2>
              </Fragment>
            </div>
          </CardTitle>
        </CardHeader>
      ) : null}
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default withRouter(CardVista);
