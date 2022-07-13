import React, { useEffect, useState } from "react";
import { api } from "../../api";
import Modal from "react-modal";
import HeaderLanding from "../vr-landing/Header";

const Container = {
  backgroundColor: "lightgray",
};

const DashboardCard = (props) => {
  let [count, setCount] = useState(1);
  let [popupflag, setpopup] = useState(false);
  let [kyc, setkyc] = useState(true);

  function popup() {
    setpopup(!popupflag);
  }

  useEffect(() => {
    api
      .get("auth")
      .then((res) => {
        setkyc(res.data?.data?.hasCompletedProfile);
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      <HeaderLanding onDashboard />
      <div className="container" style={{ Container, paddingTop: "10em" }}>
        <div className={`row`}>
          <div
            className="card"
            style={{ overflow: "hidden", width: "25rem", height: "30rem" }}
          >
            <img
              style={{ height: "50%" }}
              className="card-img-top"
              alt="Solar panels"
              src="https://images.unsplash.com/photo-1625301840055-7c1b7198cfc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80`"
            />
            <div className="card-body">
              <h5 className="card-title">Panels</h5>
              <p className="card-text">Unit price: INR 27,000</p>
              <div className="d-flex col-6 float-right card-text">
                <button
                  onClick={() => {
                    count > 0 && setCount(count - 1);
                  }}
                  className="btn btn-danger border border-2 border-danger"
                >
                  &minus;
                </button>
                <input
                  className="form-control"
                  type="number"
                  value={count}
                  min="1"
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
            <div className="row card-footer">
              {!kyc && (
                <div className="d-flex col-8 align-items-center mt-1">
                  <span className="text-danger mr-3">
                    Please complete your KYC first.{" "}
                    <a href="/kyc" className="text-info">
                      Complete here
                    </a>
                  </span>
                </div>
              )}
              <button
                className="theme-btn-one float-right col-4"
                disabled={!kyc}
                onClick={popup}
              >
                Buy
              </button>
            </div>
          </div>

          {/* <div
            style={{ backgroundColor: "lightgray", borderRadius: "1rem" }}
            className="col-4 align-items-center"
          >
            ``
            <img
              src="..."
              alt="panel image comes here"
              className=" card col-12"
              height="300px"
            />
            <div className="col-12 p-2 text-center">
              <h4>Panel</h4>
              <div className="text-muted">Count: {count}</div>
              <div className="text-muted">Count: {count}</div>
              <div className="text-muted">Count: {count}</div>
            </div>
            <div className=" d-flex float-right col-6 p-3">
              <button
                onClick={() => {
                  count > 0 && setCount(count - 1);
                }}
                className="btn btn-danger border border-2 border-danger"
              >
                &minus;
              </button>
              <input
                className="form-control"
                type="number"
                value={count}
                min="0"
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
          <div className={`col-12 text-center`}>
            <button className="theme-btn-one " disabled={!kyc} onClick={popup}>
              Buy
            </button>
          </div> */}
        </div>

        <Modal
          isOpen={popupflag}
          onRequestClose={popup}
          contentLabel="Bank details"
          className="custom-modal modal-contact-popup-one"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <main className="main-body box_inner modal-content clearfix">
            <button className="close" onClick={popup}>
              <img src="images/icon/close.svg" alt="close" />
            </button>
            <table className="table table-responsive mt-5">
              <tbody>
                <tr>
                  <th>Count:</th>
                  <td>{count}</td>
                </tr>
                <tr>
                  <th>Cost:</th>
                  <td>{count * 27000}</td>
                </tr>
                <tr>
                  <th colSpan={2}>Bank Details</th>
                </tr>
                <tr>
                  <th>Account name:</th>
                  <td>Vefes AI Pvt. Ltd.</td>
                </tr>
                <tr>
                  <th>Account number:</th>
                  <td>50200052684060</td>
                </tr>
                <tr>
                  <th>IFSC code:</th>
                  <td>HDFC0000998</td>
                </tr>
              </tbody>
            </table>
          </main>
        </Modal>
      </div>
    </>
  );
};

export default DashboardCard;
