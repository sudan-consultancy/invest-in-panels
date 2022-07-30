import React, { useEffect, useState } from "react";
import { api } from "../../api";
import Modal from "react-modal";
import HeaderLanding from "../vr-landing/Header";
import Cookie from "js-cookie";
import dstyle from "./dashboardcard.module.css";
import { useCallback } from "react";

import { Link, useHistory } from "react-router-dom";
import FooterFive from "../footer/FooterFive";
const Container = {
  backgroundColor: "lightgray",
};

const DashboardCard = (props) => {
  const history = useHistory();
  let [count, setCount] = useState(1);
  let [popupflag, setpopup] = useState(false);
  let [kyc, setkyc] = useState(false);
  let [user, setUser] = useState({});
  let [discount, setdiscount] = useState(0);
  let [price, setprice] = useState(27000);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  function calcdiscount(actual_price, discount_of) {
    if (discount_of == 0) return actual_price;
    else return actual_price - (discount_of / 100) * actual_price;
  }

  // function popup() {
  //   if (kyc && user?.isOtpVerified) {
  //     setpopup(!popupflag);
  //   }
  // }
  useEffect(() => {
    if (count >= 4 && count <= 10) {
      setdiscount(1);
    } else if (count >= 11 && count <= 20) {
      setdiscount(3);
    } else if (count > 20) {
      setdiscount(5);
    } else {
      setdiscount(0);
    }
  }, [count]);

  const closeSuccessModal = () => setShowSuccessModal(false);

  const handlePayment = useCallback(async () => {
    history.push(
      `${process.env.REACT_APP_VEFES_IN_URL}/dashboard/${user?.token}`
    );
  }, []);

  useEffect(() => {
    try {
      let user = JSON.parse(Cookie.get("vf_user"));
      setUser(user);
      setkyc(user?.hasCompletedProfile || false);
    } catch {}
  }, [user?.id, user?.credit_points]);

  return (
    <>
      <HeaderLanding onDashboard />

      <div className={`container`} style={{ Container, paddingTop: "10em" }}>
        <div className="title-style-six mb-3">
          <h2>
            Purchase <span>Panels</span>
          </h2>
        </div>
        <div className="card text-center">
          <div className="card-body row">
            <div className={`col-md-3 col-sm-12`}>
              <div className={`align-items-center`}>
                <img
                  style={{ height: "50%" }}
                  className="card-img-top"
                  alt="Solar panels"
                  src="https://images.unsplash.com/photo-1625301840055-7c1b7198cfc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80`"
                />
              </div>
            </div>
            <div
              className={`col-md-6 col-sm-12 d-flex align-items-start flex-column`}
              style={{ margin: "auto" }}
            >
              <h5 className="card-title mt-20 ">Panels</h5>
              <p className="card-text">
                <span>Unit price: </span>
                <span className={discount > 0 ? dstyle.cut : ""}>
                  INR {price}
                </span>{" "}
                <span
                  className={discount > 0 ? dstyle.showprice : dstyle.hideprice}
                >
                  INR {calcdiscount(price, discount)}{" "}
                  <strong> ({discount}% discount)</strong>
                </span>
              </p>

              <p className="card-text">Project Capacity: 25MW</p>
              <p className="card-text">Assets Type: Solar Panel</p>
              <p className="card-text">Life of Asset:25 Years</p>
              <p className="card-text">
                Expected Earnings: 3.80 Per Unit generated
              </p>
              <p className="card-text">
                Your Cost: INR {count * calcdiscount(price, discount)}
              </p>
              <div
                style={{ margin: "auto" }}
                className={`col-md-3 col-12 align-items-center align-items-md-end`}
              >
                {" "}
              </div>
            </div>
            <div
              style={{ margin: "auto" }}
              className=" col-md-3 col-sm-12 d-flex align-items-center"
            >
              <button
                onClick={() => {
                  count > 1 && setCount(count - 1);
                }}
                className="btn btn-danger border border-2 border-danger"
              >
                &minus;
              </button>
              <input
                className="form-control"
                type="number"
                value={count}
                min={1}
                required
                onChange={(e) => setCount(e.target.value)}
              />
              <button
                onClick={() => {
                  setCount(count + 1);
                }}
                className="btn btn-success border border-2 border-success"
              >
                +
              </button>
            </div>
          </div>
          <div className=" card-footer  text-muted">
            <div className="row">
              <div className="col-md-8">
                {!kyc && (
                  <div className="d-flex   align-items-center">
                    <span className="text-danger">
                      Please complete your KYC first.{" "}
                      <a href="/kyc" className="text-info">
                        Complete here
                      </a>
                    </span>
                  </div>
                )}
                {!user?.isOtpVerified && (
                  <div className="d-flex align-items-center">
                    <span className="text-danger">
                      Verify your number first.{" "}
                    </span>
                  </div>
                )}
              </div>
              {user?.id ? (
                <a
                  href={`${process.env.REACT_APP_VEFES_IN_URL}/dashboard/${user?.token}`}
                  target="_blank"
                  className="ml-auto"
                >
                  <button
                    id="rzp-button1"
                    // onClick={popup}
                    disabled={!(kyc && user?.isOtpVerified)}
                    className="theme-btn-one"
                  >
                    Buy
                  </button>
                </a>
              ) : (
                <span className="text-danger">
                  You're not logged in.
                  <a
                    href={`${process.env.REACT_APP_VEFES_AI_URL}`}
                    className="text-info"
                  >
                    Click here
                  </a>{" "}
                  to login
                </span>
              )}
            </div>
          </div>
          {/* <Modal
            isOpen={showSuccessModal}
            onRequestClose={closeSuccessModal}
            className="custom-modal modal-contact-popup-one"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <main className="main-body box_inner modal-content clearfix p-5">
              <button className="close" onClick={closeSuccessModal}>
                <img src="images/icon/close.svg" alt="close" />
              </button>
              <p>
                Congrates you've successfully purchased our panels. <br />
                An advanced receipt will be sent to you on your registered email
                ID.
              </p>
            </main>
          </Modal> */}
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
          &nbsp;&nbsp;
          <Link
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
            Cancellation &amp; Refund Policy
          </Link>
          &nbsp;|&nbsp;
          <Link
            to="/concelation-policy"
            target="_blank"
            style={{ fontWeight: "bold" }}
          >
            Shipping Policy
          </Link>
          <br></br> Copyright @{new Date().getFullYear()}{" "}
          <a href="#" target="_blank" rel="noreferrer">
            Vefes AI.
          </a>{" "}
          &nbsp;|&nbsp; CID No. :U72200MH2021PTC362001 &nbsp;|&nbsp; GST
          No.:27AAHCV6353M1ZP
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
    </>
  );
};

export default DashboardCard;
