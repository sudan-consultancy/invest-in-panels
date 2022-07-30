import React from "react";
import { Link } from "react-router-dom";
import FooterFive from "../components/footer/FooterFive";
import ContactAddressTwo from "../components/contact/address/ContactAddressTwo";
import HeaderLanding from "../components/vr-landing/Header";
import ContactForm from "../components/contact/form/ContactForm";
import Footer from "../components/footer/Footer";

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

      <div
        className="fancy-hero-one lg-container"
        style={{ marginTop: "100px" }}
      >
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
      <Footer />
    </div>
  );
};

export default ContactIndex;
