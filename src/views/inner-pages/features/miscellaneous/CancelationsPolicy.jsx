import React from "react";
import { Helmet } from "react-helmet";
import FooterFive from "../../../../components/footer/FooterFive";
import HeaderLanding from "../../../../components/vr-landing/Header";
import { Link } from "react-router-dom";
import Footer from "../../../../components/footer/Footer";

const CancelationsPolicy = () => {
  return (
    <div className="doc-container main-page-wrapper">
      <Helmet>
        <title>Privacy Policy || Vefes AI</title>
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
                  <h2 className="font-gilroy-bold">
                    Vefes Cancellation & Refund Policy
                  </h2>
                  <br />
                  <p>
                    In case you wish to cancel the order, please send us an
                    email with your order number and Invoice Copy to
                    support@vefes.in within 12 hours from the time your order is
                    placed. Any requests for cancellation beyond 12 hours of
                    order placed will not be processed.
                  </p>
                  <p>
                    Once your cancellation request is processed, your order
                    amount will be reversed to the source of the payment.
                  </p>
                </div>
                <div id="opt2">
                  <h2 className="font-gilroy-bold">Vefes Shipping Policy</h2>
                  <br />

                  <p>
                    Assets once purchased, as per the terms of our contract,
                    will directly be installed at our Solar Power Park. You will
                    receive a copy of your invoice from us over email.
                  </p>
                </div>
              </div>
              {/*  /.tab-content */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      {/* /.theme-footer-one */}
    </div>
  );
};

export default CancelationsPolicy;
