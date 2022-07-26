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
  let [kyc, setkyc] = useState(false);
  let user = JSON.parse(Cookie.get("vf_user"));
  let [discount,setdiscount]=useState(0);
  let [price,setprice]=useState(27000);

  function popup() {
    setpopup(!popupflag);
  }
  function calcdiscount(actual_price,discount_of){
    if (discount_of==0) return actual_price
    else return actual_price - (discount_of/100)*actual_price;
  }
  useEffect(() => {
    api
      .get("auth")
      .then((res) => {
        setkyc(res.data?.data?.hasCompletedProfile);
      })
      .catch((err) => {});
  }, []);

  useEffect(()=>{
    if (count >= 4 && count <= 10 ){
      setdiscount(1);
    }
    else if (count >= 11 && count <= 20 ){
      setdiscount(3);
    }
    else if (count >20 ){
      setdiscount(5);
    }
    else{
      setdiscount(0);
    }
  },[count]);

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
            <div  className={`col-md-6 col-sm-12 d-flex align-items-start flex-column`}
              style={{ margin: "auto" }}
             
            >
              <h5 className="card-title mt-20 ">Panels</h5>
              <p className="card-text"><span>Unit price: </span><span className={discount >0 ? dstyle.cut: ''}>INR {price}</span>   <span className={discount >0 ? dstyle.showprice: dstyle.hideprice}>INR {calcdiscount(price,discount)}  <strong>  ({discount}% discount)</strong></span></p>
              <p className="card-text">Project Capacity: 25MW</p>
              <p className="card-text">Assets Type: Solar Panel</p>
              <p className="card-text">Life of Asset:25 Years</p>
              <p className=" card-text ">Expected Earnings:3.80 Per Unit generated</p>
              <p className="card-text">Your Cost:{count * calcdiscount(price,discount)}</p>
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
               <div onClick={popup} className={`col-md-2 d-flex offset-md-2 col-sm-2 offset-sm-8 col-smx-2 offset-smx-8` }>
            <button  disabled={!kyc || !user?.isOtpVerified} className="theme-btn-one ">Buy</button></div>
            </div>
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
      </div>
    </>
  );
};

export default DashboardCard;
