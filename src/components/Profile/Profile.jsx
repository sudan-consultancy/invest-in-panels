import React from "react";
import FooterFive from "../footer/FooterFive";
import ProfileForm from "../form/ProfileForm";
import HeaderLanding from "../header/landing/HeaderLanding";
// import RegisterForm from "../../contact/form/RegisterForm";
// import FooterFive from "../../footer/FooterFive";
// import HeaderLanding from "../../vr-landing/Header";

const ProfileIndex = (props) => {
  return (
    <div className="main-page-wrapper p0 font-gordita">
      {/* <HeaderLanding/> */}
      <HeaderLanding/>
      {/* End .Header */}

    
      

      {/* 	=============================================
				Contact Us Light
			==============================================  */}
      <div className="contact-us-light pt-140 pb-200 md-pt-90 md-pb-80">
        <div className="container">
          <div className="form-style-light">
            <ProfileForm/>
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
           <FooterFive/>
            {/* <FooterFive/> */}
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

export default ProfileIndex;
