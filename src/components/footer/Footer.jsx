import React from "react";
import { Link } from "react-router-dom";
import FooterFive from "./FooterFive";

const Footer = () => {
  return (
    <footer className="theme-footer-five mt-130 md-mt-100">
      <div className="inner-container">
        <div className="container">
          <FooterFive />
        </div>
      </div>
      <p className="copyright">
        &nbsp;&nbsp;
        <Link
          to="/terms-conditions"
          target="_blank"
          style={{ fontWeight: "bold" }}
        >
          Terms &amp; Conditions
        </Link>
        &nbsp;|&nbsp;
        <Link
          to="/privacy-policy"
          target="_blank"
          style={{ fontWeight: "bold" }}
        >
          Privacy Policy
        </Link>
        &nbsp;|&nbsp;
        <Link
          to="/concelation-policy"
          target="_blank"
          style={{ fontWeight: "bold" }}
        >
          Cancellation &amp; Refund Policy
        </Link>
        &nbsp;|&nbsp;
        <Link
          to="/concelation-policy"
          target="_blank"
          style={{ fontWeight: "bold" }}
        >
          Shipping Policy
        </Link>
        <br></br> Copyright @{new Date().getFullYear()}{" "}
        <a href="#" target="_blank" rel="noreferrer">
          Vefes AI.
        </a>{" "}
        &nbsp;|&nbsp; CID No. :U72200MH2021PTC362001
      </p>
    </footer>
  );
};

export default Footer;
