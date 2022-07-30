import React from "react";
import FooterFive from "../components/footer/FooterFive";
import HeaderLanding from "../components/vr-landing/Header";
import FancyVideoOne from "../components/video/FancyVideoOne";
import AboutTabs from "../components/block-slider/AboutTabs";
import CounterThree from "../components/counter/CounterThree";
import TeamFive from "../components/team/TeamFive";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";

const AboutIndex = (props) => {
  return (
    <div className="main-page-wrapper p0 font-gordita">
      <HeaderLanding />
      {/* End .Header */}

      {/* <!-- 
			=============================================
				Theme Hero Banner
			============================================== 
			--> */}

      <div className="fancy-text-block-twenty">
        <img
          src="images/shape/124.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/125.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <div className="container">
          <h1 className="title font-slab">About us</h1>
          <div className="fancy-video-box-one mb-130 md-mb-70">
            <FancyVideoOne />
          </div>
          {/* /.fancy-video-box-one */}

          <div className="row">
            <div
              className="col-lg-5"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="client-info font-rubik">
                {/* Over <span>150,000+ client</span> */}
              </div>
              <div className="title-style-five">
                <h2>
                  <span>Ecosystem</span>
                  <br /> of panel owners, power consumers, power producers.
                </h2>
              </div>
            </div>
            <div
              className="col-lg-6 ml-auto"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <AboutTabs />
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-text-block-twenty */}

      {/* =====================================================
				Counter With Icon One
			===================================================== */}
      {/* <div className="counter-with-icon-one">
        <div className="container">
          <div className="border-top pt-50 md-pt-10">
            <CounterThree />
          </div>
        </div>
      </div> */}
      {/* /.counter-with-icon-one */}

      {/* =============================================
				Team Section
			==============================================  */}
      <div className="team-section-four mt-250 md-mt-150">
        <img
          src="images/shape/129.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/130.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <div className="container">
          <div className="title-style-five text-center mb-90 md-mb-60">
            <h6>Our Team</h6>
            <h2>The team behind Vefes </h2>
          </div>

          <div className="team-wrapper">
            <div className="row">
              <TeamFive />
            </div>
            <img
              src="images/shape/126.svg"
              alt="shape"
              className="shapes shape-one"
            />
          </div>
          {/*  /.team-wrapper */}
        </div>
      </div>
      {/* /.team-section-four */}

      {/* =====================================================
            Footer Style Seven
        ===================================================== */}
      <Footer />
    </div>
  );
};

export default AboutIndex;
