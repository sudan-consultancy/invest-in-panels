import React from "react";

import FooterFive from "../components/footer/FooterFive";
import ContactAddressTwo from "../components/contact/address/ContactAddressTwo";
import HeaderLanding from "../components/vr-landing/Header";
import ContactForm from "../components/contact/form/ContactForm";

const ContactIndex = (props) => {
  return (
    <div className="main-page-wrapper p0 font-gordita">
      <HeaderLanding />
      {/* End .Header */}

      {/* <!-- 
			=============================================
				Theme Hero Banner
			============================================== 
			--> */}

      <div className="fancy-hero-one lg-container" style = {{marginTop: "100px"}}>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-11 m-auto">
              <div className="page-title">Contact us</div>
              <h2 className="font-rubik">
                Feel free to contact us or just say hi!
              </h2>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="bubble-five"></div>
        <div className="bubble-six"></div>
      </div>
      {/* /.fancy-hero-one */}

      {/* 	=============================================
				Contact Us Light
			==============================================  */}
      <div className="contact-us-light pt-140 pb-200 md-pt-90 md-pb-80">
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="container">
          <ContactAddressTwo />
          <div className="form-style-light">
            <ContactForm />
          </div>
        </div>
      </div>
      {/* /.contact-us-light */}

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
          {" "}
          Copyright @{new Date().getFullYear()}{" "}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Vefes
          </a>{" "}
          AI.
        </p>
      </footer>
    </div>
  );
};

export default ContactIndex;
