import React, { useState } from "react";
import { Link } from "react-router-dom";
import FooterFive from "../components/footer/FooterFive";
import FeatureCounter from "../components/vr-landing/FeatureCounter";
import HeaderLanding from "../components/vr-landing/Header";
import FancyFeatureTen from "../components/features/FancyFeatureTen";
import HeroBanner from "../components/vr-landing/HeroBanner";
import FaqFour from "../components/faq/FaqFour";
import FeatureNine from "../components/features/FeatureNine";
import FancyTextBlock21 from "../components/fancy-text-block/FancyTextBlock21";
import CounterTwo from "../components/counter/CounterTwo";
import FancyFeatureTewentySeven from "../components/features/FancyFeatureTewentySeven";
import { TableOne, TableTwo } from "../components/table/TableOne";

const AppIndex = (props) => {
  return (
    <div className="main-page-wrapper p0 font-gordita">
      <HeaderLanding />
      {/* End .Header */}

      {/* <!-- 
			=============================================
				Theme Hero Banner
			============================================== 
			--> */}
      <div className="hero-banner-fourteen lg-container" id="home">
        <div className="container">
          <HeroBanner />
          <div className="screen-holder">
            <img
              style={{ "margin-top": "9rem" }}
              src="images/banner.png"
              alt=""
              className="img-meta"
            />
            {/* <img
              src="images/assets/ils-03.png"
              alt="illustration"
              className="shapes vr-image"
              data-aos="fade-up"
            /> */}
            {/* <img
              src="images/shape/242.svg"
              alt="illustration"
              className="shapes shape-one"
              data-aos="fade-right"
            />
            <img
              src="images/shape/242.svg"
              alt="illustration"
              className="shapes shape-two"
              width="45"
              data-aos="fade-up"
            />
            <img
              src="images/shape/242.svg"
              alt="illustration"
              className="shapes shape-three"
              width="75"
              data-aos="fade-down"
            /> */}
          </div>
          {/* <!-- /.screen-holder --> */}
        </div>
      </div>

      <div className="fancy-feature-thirtyEight lg-container mt-75 pb-150 md-pb-80">
        <div className="container">
          <div className="top-border pt-70 md-pt-30">
            <div className="row justify-content-center">
              <FeatureCounter />
            </div>
          </div>
          {/* <!-- /.top-border --> */}
        </div>
        {/* <!-- /.container --> */}
      </div>

      <div className="fancy-feature-ten pt-100 md-pt-70" id="about">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div
                className="col-md-6"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="title-style-six">
                  <h2>
                    Why <span>Own</span>?
                  </h2>
                </div>
                {/* /.title-style-six */}
              </div>
              {/* End .col */}

              <div
                className="col-lg-5 col-md-6"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <p className="sub-text pt-30 pb-30">
                  Democratising ownership of renewable assets
                </p>
              </div>
              {/* End .col */}
            </div>
            <FancyFeatureTen />
            {/* End Fancy Feature Ten */}
          </div>
          <img
            src="images/shape/137.svg"
            alt="shape"
            className="shapes shape-one"
          />
        </div>
        {/* /.bg-wrapper */}
      </div>

      <div className="fancy-feature-nine">
        <img
          src="images/shape/107.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/108.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <img
          src="images/shape/109.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <img
          src="images/shape/110.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <img
          src="images/shape/111.svg"
          alt="shape"
          className="shapes shape-five"
        />
        <img
          src="images/shape/112.svg"
          alt="shape"
          className="shapes shape-six"
        />

        <div className="container" id="why-invest">
          <div className="title-style-five text-center mb-60 md-mb-30">
            <h6>GET STARTED IN NO TIME</h6>
            <h2>
              <span>5 simple &amp; easy steps to launch.</span>
            </h2>
          </div>
          {/* End title */}

          <FeatureNine />
        </div>
      </div>

      <div
        className="pricing-section-nine lg-container pt-150 md-pt-110"
        id="pricing"
      >
        <div className="container">
          <div
            className="title-style-eleven text-center mb-40 md-mb-20"
            data-aos="fade-up"
          >
            <div className="upper-title">Payback Calculator</div>
            <h2>Payback on purchase of your panels</h2>
          </div>

          <div className="row justify-content-center">
            <TableOne></TableOne>
          </div>
        </div>
      </div>

      <div className="fancy-text-block-twentyOne pt-170 md-pt-100" id="about">
        <div className="container">
          <FancyTextBlock21 />
        </div>
      </div>
      <div className="counter-style-two pt-150 md-pt-60">
        <div className="border-bottom">
          <div className="container">
            <CounterTwo />
          </div>
        </div>
      </div>

      <div className="faq-section-four mt-170">
        <img
          src="images/shape/120.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/121.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <div className="container" id="faq's">
          <div
            className="text-center mt-60 md-mt-50"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h3 className="font-rubik pb-30">Need more details?</h3>
            <Link className="theme-btn-five" to="/contact">
              Contact us
            </Link>
          </div>
        </div>
        {/* /.container */}
      </div>

      {/* =====================================================
            Footer Style Seven
        ===================================================== */}
      <footer className="theme-footer-five mt-130 md-mt-100">
        <div className="inner-container">
          <div className="container">
            <FooterFive />
          </div>
        </div>
        {/* /.inner-container */}
        <p className="copyright">
          {/* {" "}
          Copyright @{new Date().getFullYear()}{" "}
          <a href="#" target="_blank" rel="noreferrer">
            Vefes
          </a>{" "}
          AI.  */}
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
            Cancellation & Refund Policy
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
          {/* <a href="#" target="_blank" rel="noreferrer">
              Vefes Engineering Pvt. Ltd. &nbsp;|&nbsp; CID No. :U40100MH2020PTC347160 &nbsp;|&nbsp; GST No.:27AAHCV6353M1ZP
          </a>{" "} */}
        </p>
        {/* <p className="copyright">
          {" "}
          
          <a href="#" target="_blank" rel="noreferrer">
            Vefes Engineering
          </a>{" "}
          Pvt. Ltd.
        </p> */}
      </footer>
    </div>
  );
};

export default AppIndex;
