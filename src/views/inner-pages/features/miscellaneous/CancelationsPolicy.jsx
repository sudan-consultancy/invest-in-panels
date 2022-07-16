import React from "react";
import { Helmet } from "react-helmet";
import FooterFive from "../../../../components/footer/FooterFive";
import HeaderLanding from "../../../../components/vr-landing/Header";
import { Link } from "react-router-dom";

const CancelationsPolicy = () => {
  return (
    <div className="doc-container main-page-wrapper">
      <Helmet>
        <title>
         Privacy Policy || Vefes AI
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLanding />
      {/* End Header */}

      {/* =====================================================
				Terms and Condition
			===================================================== */}

      <div className="terms_and_policy">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ">
              {/* Tab panes */}
              <div className="tab-content">
                <div id="opt1">
                  <h2 className="font-gilroy-bold">Vefes Cancellation & Refund Policy</h2>
                  <br />
                  <p>
                  In case you wish to cancel the order, please send us an email with your order 
                  number and Invoice Copy to support@vefes.in within 12 hours from the time your
                 order is placed. Any requests for cancellation beyond 12 hours of order placed will not be processed.
                  </p>
                  <p>Once your cancellation request is processed, your order amount will be reversed to the source of the payment.</p>
                  
                </div>
                <div id="opt2">
                  <h2 className="font-gilroy-bold">Vefes Shipping Policy</h2>
                  <br />
                  
                  <p>Assets once purchased, as per the terms of our contract, will directly be
                   installed at our Solar Power Park. You will receive a copy of your invoice from us over email.</p>
                  
                </div>

             
              </div>
              {/*  /.tab-content */}
            </div>
          </div>
        </div>
      </div>

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
               Concelation Policy 
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
      {/* /.theme-footer-one */}
    </div>
  );
};

export default CancelationsPolicy;
