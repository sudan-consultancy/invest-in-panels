import React from "react";
import { Link } from "react-router-dom";

const socialContent = [
  {
    icon: "fa-facebook",
    link: "https://www.facebook.com/Vefes-106846398429283",
  },
  {
    icon: "fa-instagram",
    link: "https://www.instagram.com/vefes.ai/",
  },
  {
    icon: "fa-linkedin",
    link: "https://www.linkedin.com/company/vefes-engineering/",
  },
];

const FooterFive = () => {
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-4">
        <div className="logo">
          <Link to = "/">
            <img src="images/logo/vefesblacklogo.png" alt="brand" />
          </Link>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4">
        <div className="title">Find us on Social Media</div>
        <ul className="d-flex justify-content-center social-icon">
          {socialContent.map((val, i) => (
            <li key={i}>
              <a href={val.link} target="_blank" rel="noreferrer">
                <i className={`fa ${val.icon}`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* End .col */}

      <div className="col-lg-4">
        <div className="title">We’re always happy to help.</div>
        <div className="text-center">
          <a href="mailto:support@vefes.ai" className="email">
            support@vefes.ai
          </a>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default FooterFive;
