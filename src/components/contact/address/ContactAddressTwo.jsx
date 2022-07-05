import React from "react";

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

const ContactAddressTwo = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-4 col-sm-6">
        <div className="address-info">
          <div className="icon">
            <img src="images/icon/15.svg" alt="icon" />
          </div>
          <div className="title">Location</div>
          <p className="font-rubik">
            Kailash Business Park, <br /> Vikroli.
          </p>
        </div>
        {/* /.address-info */}
      </div>
      {/* End .col */}

      <div className="col-md-4 col-sm-6">
        <div className="address-info">
          <div className="icon">
            <img src="images/icon/16.svg" alt="icon" />
          </div>
          <div className="title">Contact</div>
          <p className="font-rubik">
            support@vefes.ai <br />
            9987413040
          </p>
        </div>{" "}
        {/* /.address-info */}
      </div>
      {/* End .col */}

      <div className="col-md-4 col-sm-6">
        <div className="address-info">
          <div className="icon">
            <img src="images/icon/17.svg" alt="icon" />
          </div>
          <div className="title">Social Media</div>
          <p className="font-rubik">Follow on social media</p>
          <ul className="d-flex justify-content-center">
            {socialContent.map((val, i) => (
              <li key={i}>
                <a href={val.link} target="_blank" rel="noreferrer">
                  <i className={`fa ${val.icon}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>{" "}
        {/* /.address-info */}
      </div>
      {/* End .col */}
    </div>
  );
};

export default ContactAddressTwo;
