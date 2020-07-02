import React, { useState, useEffect } from "react";
import Request from "../../service/Request";
import Spinner from "../Spinner/Spinner";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";
import * as Swal from "sweetalert2";

function LoginPage(props) {
  const [firstFocus, setFirstFocus] = useState(false);
  const [lastFocus, setLastFocus] = useState(false);
  const [vlUser, setVlUser] = useState("");
  const [vlPass, setVlPass] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.classList.add("login-page");

    return function cleanup() {
      document.body.classList.remove("login-page");
    };
  });

  const handleUsuario = () => {
    const req = new Request();
    setLoading(true);
    req
      .listPOST("/api/usuarios", { user: vlUser, pass: vlPass })
      .then((res) => {
        console.log(res);
        if (res.code === 200) {
          localStorage.setItem("validateUser", vlUser);
          props.history.push("/admin");
        } else if (res.code === 400) {
          setLoading(false);
          alertError("Error", res.msj);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        alertError("Error", err);
      });
  };

  const alertError = (title, msj) => {
    Swal.fire({
      icon: "error",
      title: title,
      text: msj,
    });
  };

  return (
    <>
      {loading ? (
        <Spinner height={window.innerHeight} />
      ) : (
        <div className="page-header clear-filter" filter-color="blue">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" + require("assets/img/portada_opt.jpg") + ")",
            }}
          ></div>
          <div className="content">
            <Container>
              <Col className="ml-auto mr-auto" md="4">
                <Card className="card-login card-plain">
                  <Form action="" className="form" method="">
                    <CardHeader className="text-center">
                      <div className="logo-container">
                        <img
                          alt="..."
                          src={require("assets/img/Logo1.png")}
                        ></img>
                      </div>
                      <h6>CEPV - ADMIN</h6>
                    </CardHeader>
                    <CardBody>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (firstFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons users_circle-08"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Usuario"
                          type="text"
                          onFocus={() => setFirstFocus(true)}
                          onBlur={() => setFirstFocus(false)}
                          onChange={(e) => {
                            setVlUser(e.target.value);
                          }}
                          value={vlUser}
                        ></Input>
                      </InputGroup>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (lastFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons text_caps-small"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Contraseña"
                          type="password"
                          onFocus={() => setLastFocus(true)}
                          onBlur={() => setLastFocus(false)}
                          onChange={(e) => {
                            setVlPass(e.target.value);
                          }}
                          value={vlPass}
                        ></Input>
                      </InputGroup>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        block
                        className="btn-round"
                        color="primary"
                        onClick={() => {
                          handleUsuario();
                        }}
                        size="lg"
                      >
                        Iniciar sesión
                      </Button>
                    </CardFooter>
                  </Form>
                </Card>
              </Col>
            </Container>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginPage;
