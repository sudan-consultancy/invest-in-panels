import React, { useEffect, useState } from "react";
import { api } from "../../api";
import Modal from "react-modal";
import HeaderLanding from "../vr-landing/Header";

const Container = {
  backgroundColor: "lightgray",
};

const DashboardCard = (props) => {
  let [count, setCount] = useState(0);
  let [popupflag, setpopup] = useState(false);
  let [kyc, setkyc] = useState(true);

  function popup() {
    setpopup(!popupflag);
  }

  useEffect(() => {
    api
      .get("auth")
      .then((res) => {
        console.log(res.data?.data);
        setkyc(res.data?.data?.hasCompletedProfile);
      })
      .catch((err) => {});
  }, []);

  return (
    <>
    <HeaderLanding onDashboard />
    <div className="container" style={{ paddingTop: "10em" }}>
      <div className="container py-3 rounded" style={Container}>
        <div className="row align-items-center">
          <img
            src="..."
            alt="panel image comes here"
            className="col-12 col-sm-4 col-lg-3"
            height="300px"
          />
          <div className="col-12 col-sm-6">
            <h4>Panel</h4>
            <span className="text-muted">Count: {count}</span>
          </div>
          <div className="d-flex align-items-center col-12 col-sm-4 col-lg-2">
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
      </div>
      <div className="d-flex align-items-center float-right mt-3">
        <span className="text-danger mr-3">
          Please complete your KYC first.{" "}
          <a href="/kyc" className="text-info">
            Complete here
          </a>
        </span>
        <button className="theme-btn-one" disabled={!kyc} onClick={popup}>
          Buy
        </button>
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
                <th colSpan={2}>Bank Details:</th>
              </tr>
              <tr>
                <th>Account name:</th>
                <td>Alex Bob</td>
              </tr>
              <tr>
                <th>Mobile number:</th>
                <td>987654321</td>
              </tr>
              <tr>
                <th>IFSC code:</th>
                <td>456543456789</td>
              </tr>
              <tr>
                <th>Type of account:</th>
                <td>Saving</td>
              </tr>
              <tr>
                <th>MICR code of bank:</th>
                <td>5433456644</td>
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
