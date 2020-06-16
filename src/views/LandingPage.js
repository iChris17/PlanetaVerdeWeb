import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components
import LandingPageHeader from "../components/Headers/LandingPageHeader.js";

function LandingPage() {
  return (
    <>
      <div className="wrapper">
        <LandingPageHeader />
        <Container>
          <div className="section-story-overview"></div>
        </Container>
      </div>
    </>
  );
}

export default LandingPage;
