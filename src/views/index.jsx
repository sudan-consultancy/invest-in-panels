import React from "react";
import { Link } from "react-router-dom";
import CopyRightThree from "../components/footer/CopyRightThree";
import FooterSeven from "../components/footer/FooterSeven";
import FeatureCounter from "../components/vr-landing/FeatureCounter";
import HeaderLanding from "../components/vr-landing/Header";
import FancyFeatureTen from "../components/features/FancyFeatureTen";
import HeroBanner from "../components/vr-landing/HeroBanner";
import FaqFour from "../components/faq/FaqFour";
import FeatureNine from "../components/features/FeatureNine";

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
            <img src="images/shape/241.svg" alt="" className="img-meta" />
            <img
              src="images/assets/ils-03.png"
              alt="illustration"
              className="shapes vr-image"
              data-aos="fade-up"
            />
            <img
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
            />
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

      <div className="fancy-feature-ten pt-100 md-pt-70" id="features">
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
                    What is <span>Vefes</span>?
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

        <div className="container">
          <div className="title-style-five text-center mb-60 md-mb-30">
            <h6>GET STARTED IN MINUTES</h6>
            <h2>
              <span>5 simple &amp; easy step to launch.</span>
            </h2>
          </div>
          {/* End title */}

          <FeatureNine />
        </div>
      </div>

      <div className="faq-section-four">
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
        <div className="container">
          <div className="title-style-five text-center mb-80 md-mb-60">
            <h6>FAQ</h6>
            <h2>
              <span>Question &amp; Answer</span>
            </h2>
          </div>

          <div className="row">
            <div className="col-xl-9 col-lg-10 m-auto">
              <FaqFour />
            </div>
          </div>
          <div
            className="text-center mt-60 md-mt-50"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h3 className="font-rubik pb-30">Don’t find your answer?</h3>
            <Link className="theme-btn-five" to="/contact-eo">
              Contact us
            </Link>
          </div>
        </div>
        {/* /.container */}
      </div>

      {/* =====================================================
            Footer Style Seven
        ===================================================== */}
      <footer className="theme-footer-seven mt-120 md-mt-100">
        <div className="lg-container">
          <div className="container inner-btn-black">
            <FooterSeven />
          </div>

          <div className="container">
            <div className="bottom-footer">
              <CopyRightThree />
            </div>
          </div>
        </div>
        {/* /.lg-container */}
      </footer>
      {/* /.theme-footer-seven */}
    </div>
  );
};

export default AppIndex;
