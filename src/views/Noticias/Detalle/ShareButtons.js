import React from "react";
import {
  FacebookShareButton,
  //FacebookMessengerShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";
import { Row, Col } from "reactstrap";
const ShareButtons = (props) => {
  return (
    <Row>
      <Col className="mb-4 d-flex flex-wrap justify-content-center">
        <h6>
          Comparte esta noticia:
          <FacebookShareButton
            className="ml-2"
            url={window.location.href}
            quote={props.title}
          >
            <FacebookIcon
              size={35}
              round
              bgStyle={{ backgroundColor: "blue" }}
            />
          </FacebookShareButton>
          <WhatsappShareButton
            className="ml-2"
            url={window.location.href}
            title={props.title}
          >
            <WhatsappIcon
              size={35}
              round
              bgStyle={{ backgroundColor: "green" }}
            />
          </WhatsappShareButton>
          <TwitterShareButton
            className="ml-2"
            url={window.location.href}
            title={props.title}
          >
            <TwitterIcon
              size={35}
              round
              bgStyle={{ backgroundColor: "skyblue" }}
            />
          </TwitterShareButton>
        </h6>
      </Col>
    </Row>
  );
};

export default ShareButtons;
