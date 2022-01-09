import React from "react";
import "./footer.css";
import FooterBottom from "./FooterBottom";
import FootNotes from "./FootNotes";

function Footer() {
  return (
    <div className="footer">
      <FootNotes />
      <FooterBottom/>
    </div>
  );
}

export default Footer;
