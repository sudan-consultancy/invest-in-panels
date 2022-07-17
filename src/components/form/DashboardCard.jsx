import React, { useEffect, useState } from "react";
import { api } from "../../api";
import Modal from "react-modal";
import HeaderLanding from "../vr-landing/Header";
import Cookie from "js-cookie";
import dstyle from "./dashboardcard.module.css";
const Container = {
  backgroundColor: "lightgray",
};

const DashboardCard = (props) => {
  let [count, setCount] = useState(1);
  let [popupflag, setpopup] = useState(false);
  let [kyc, setkyc] = useState(true);
  let user = JSON.parse(Cookie.get("vf_user"));
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
      <div className={`container `} style={{ Container, paddingTop: "10em" }}>
      <div className="card text-center">
  <div className="card-body row">
    <div className={`col-md-3 col-sm-12 `}>
    <div  className={` `}><div className={`align-items-center`}>
                <img
                style={{objectFit:'cover'}}
                  src="https://images.unsplash.com/photo-1625301840055-7c1b7198cfc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80`"
                  alt="panel image comes here"
                  width="100%"
                />
              </div></div>
    </div>
    <div style={{margin:'auto'}} className={`col-md-6 col-sm-12  `}>
    <h5 className="card-title d-flex align-items-start mt-20 ">Panels</h5>
    <p className="card-text  d-flex align-items-start mb-20">Unit price: INR 27,000</p>
    </div>
    <div style={{margin:'auto'}} className={`col-md-3 col-sm-12 align-items-center`}> <div style={{margin:'auto'}} className="d-flex align-items-center">
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
                </div></div>
   
  </div>
  <div className="card-footer text-muted">
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
</div>



        {/* <div
          style={{ }}
          className={`row p-0  ${dstyle.parentcard} `}
        >
         <div width="100" height="100" style={{height:'20rem'}} className={`col-3 pt-0`}><div className={`align-items-center`}>
                {" "}
                <img
                style={{objectFit:'cover'}}
                  src="https://images.unsplash.com/photo-1625301840055-7c1b7198cfc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80`"
                  alt="panel image comes here"
                  width="100%"
                />
              </div></div>
         <div className={`col-9`}><div className={`row`}>
          
            <div className={`row p-0 mb-20  mt-20 ${dstyle.solarcard} `}>
              
              <div className={`col-6 align-items-center`}>
               
                <h5 className="card-title">Panels</h5>
                <p className="card-text">Unit price: INR 27,000</p>
              </div>
              <div className={`col-4 align-item-center`}>
                <div className="d-flex float-right">
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
            </div>
            <div  className={`row ${dstyle.solarcard}`}>
            <div className="col-10  align-items-center">
            <div className={`row  mt-3 ${dstyle.infocard}`}>
             
              <button style={{height:'3rem'}}
                className="offset-8 col-3 theme-btn-one float-right p-0 col-4"
                disabled={!kyc || !user?.isOtpVerified}
                onClick={popup}
              >
                Buy
              </button>
            </div>

            </div
            >
            </div>
           
          </div>
          </div>
         <div className={`col-12 p-0`}> <div className={`row p-0`}> {!kyc && (
                <div className="d-flex offset-3  col-4 align-items-center">
                  <span className="text-danger mr-3">
                    Please complete your KYC first.{" "}
                    <a href="/kyc" className="text-info">
                      Complete here
                    </a>
                  </span>
                </div>
              )}
              {!user?.isOtpVerified && (
                <div className="d-flex col-4 align-items-center">
                  <span className="text-danger mr-3">
                    Verify your number first.{" "}
                  </span>
                </div>
              )}</div></div>           
          
        </div> */}

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
