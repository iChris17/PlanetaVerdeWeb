import React from "react";

// core components
import LandingPageHeader from "../../components/Headers/LandingPageHeader.js";
import NavbarAdmin from "../../components/Navbars/NavbarAdmin";
import Footer from "../../components/Footers/DefaultFooter";

function LandingPage(props) {
  return (
    <>
      <NavbarAdmin {...props} />
      <div className="wrapper">
        <LandingPageHeader screen={"Inicio"} />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
