import React from "react";
import FooterFive from "../components/footer/FooterFive";
import HeaderLanding from "../components/vr-landing/Header";

import { Link } from "react-router-dom";

const LivaniaIndex = (props) => {
  return (
    <div className="main-page-wrapper p0 font-gordita">
      <HeaderLanding />
      <div className="fancy-hero-two mt-200">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-lg-11 col-md-10 m-auto">
                <h1 className="heading">
                  India's first AI empowered power plant
                </h1>
                {/* <p className="sub-heading">
                  deski helps teams of all sizes get better at delivering
                  effortless customer service experiences.
                </p> */}
              </div>
            </div>
          </div>
          {/* End .container */}
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-hero-two */}

      {/* =============================================
				Fancy Text block Nine
			==============================================  */}
      <div className="fancy-text-block-nine mt-130 md-mt-80">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="container">
          <div className="title-style-two text-center mb-35 md-mb-10">
            <div className="row">
              <div className="col-lg-10 m-auto">
                <h2>Project Livania</h2>
              </div>
            </div>
          </div>
          {/* End title-style-two */}

          <div className="row">
            <div className="col-xl-10 m-auto">
              <p
                className="text-meta"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                Vefes has partnered with Namitech a solar power generation
                company, to build Livania a first of its kind A.I Ecosystem
                empowered solar power plant, rated for 25 MW DC capacity and
                spans over 100 acres of land in Mohol village at Solapur,
                Maharashtra.
              </p>
              <p
                className="text-meta"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                Solapur is one of the hotbeds for highest irradiation in India
                with irradiation levels of 1,625 units per KW, 30% more than
                what you get at Metro cities.
              </p>
              <p
                className="text-meta"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                Generation is backed by high grade, long term PPAs with diverse
                client base among industries, hospitals, malls, ports, and many
                more, thus ensuring higest returs with minimum risk for panel
                owners.
              </p>
              <p
                className="text-meta"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                PPAs are signed as the infrastructure setup grows.
              </p>
            </div>
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* /.fancy-text-block-nine */}
      <div className="container">
        <div className="row mt-200 ">
          <div
            className="col-lg-6 order-lg-last"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <div className="text-wrapper pl-3">
              <div className="title-style-three mb-35 md-mb-20">
                <h2>About our technology </h2>
              </div>
              {/*  /.title-style-two */}
              <p>
                Livani is power by our AI based ecosystem (patent appl. no.
                202121052318). This ecosystem helps with smart monitoring and
                transmission of energy, largely based on consumption patterns.
              </p>
              <p className="mt-30">
                The consumers need not worry about deficiency of power.
                Producers need not worry about unused surplus power generated.
                Thus helping us to align the incentives of all towards
                delivering maximum functionality at minimum input.
              </p>
            </div>
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="img-gallery">
              <img
                src="images/media/img_38.png"
                alt="media"
                data-aos="fade-right"
                data-aos-duration="1200"
              />
              {/* <img
                src="images/media/img_36.png"
                alt="media"
                className="overlay-img"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="100"
              /> */}

              <video id="background-video" loop autoplay>
                  <source src="images/media/vfes.mp4" type="video/mp4"/>
                  <source src="images/media/vfes.mp4" type="video/ogg"/>
                  Your browser does not support the video tag.
              </video>

              {/* <video src="https://drive.google.com/file/d/1rmrlFu_Aq05wNbWR3_zOW0XGRIqxk8Dv/view" autoPlay="true" /> */}
              <img
                src="images/shape/49.svg"
                alt="shape"
                className="shapes shape-one"
              />
              <img
                src="images/shape/54.svg"
                alt="shape"
                className="shapes shape-three"
              />
            </div>
            {/* /.img-gallery */}
          </div>
        </div>
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
          &nbsp;&nbsp;<Link
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
<br></br>

{" "}
          Copyright @{new Date().getFullYear()}{" "}
          <a href="#" target="_blank" rel="noreferrer">
          Vefes Engineering Pvt. Ltd.
          </a>{" "}
          &nbsp;|&nbsp; CID No. :U40100MH2020PTC347160 &nbsp;|&nbsp; GST No.:27AAHCV6353M1ZP
          
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

export default LivaniaIndex;
