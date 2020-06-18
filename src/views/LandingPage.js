import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components
import LandingPageHeader from "../components/Headers/LandingPageHeader.js";
import ExamplesNavbar from "components/Navbars/Navbar.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function LandingPage(props) {
  return (
    <>
      <ExamplesNavbar {...props} />
      <div className="wrapper">
        <LandingPageHeader />
        <Container>
          <div className="section-story-overview"></div>
        </Container>
      </div>
      <DefaultFooter />
    </>
  );
}

export default LandingPage;
