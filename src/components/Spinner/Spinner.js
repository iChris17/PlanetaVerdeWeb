import React from "react";
import { Spinner, Row, Col, Container } from "reactstrap";

const Loading = () => {
  return (
    <Container
      style={{ height: "500px" }}
      className="d-flex flex-wrap justify-content-center"
    >
      <Row>
        <Col className="align-self-center">
          <Spinner
            style={{ width: "4rem", height: "4rem" }}
            type="grow"
            color="primary"
          />
          <Spinner
            style={{ width: "4rem", height: "4rem" }}
            type="grow"
            color="primary"
          />
          <Spinner
            style={{ width: "4rem", height: "4rem" }}
            type="grow"
            color="primary"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Loading;
