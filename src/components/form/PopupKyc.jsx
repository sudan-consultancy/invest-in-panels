import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import poupstyle from "./poup.module.css";
const PopupKyc = (props) => {
  // for password show hide
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const [tab, setTab] = useState("profile");
  // for validation
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Entered value does not match email format"),
    password: Yup.string().required("Password is required"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  const hiddenFileInput = React.useRef(null);
  function changeTab(to) {
    console.log(to);
    setTab(to);
  }
  function onSubmit(data, e) {
    // display form data on success
    console.log("Message submited: " + JSON.stringify(data));
    e.target.reset();
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`user-data-form ${poupstyle.main_form}`}
      >
        <div className="row">
          <div className={`col-3 ${poupstyle.tabs}`}>
            <div
              className={`row ${poupstyle.tabs_opt} ${
                tab === "profile" ? poupstyle.active : ""
              }`}
              onClick={() => {
                changeTab("profile");
              }}
            >
              <h4>Profile</h4>
            </div>
            <div
              className={`row ${poupstyle.tabs_opt} ${
                tab === "kyc" ? poupstyle.active : ""
              }`}
              onClick={() => changeTab("kyc")}
            >
              <h4>KYC</h4>
            </div>
          </div>
          {tab == "kyc" && (
            <div
              className={`col-9 justufy-content-center text-center ${
                poupstyle.tabcontent
              } ${setTab === "kyc" ? " active_tab" : ""}`}
            >
              <div className={`row ${poupstyle.cont}`}>
                <div className="col-12" style={{ textAlign: "center" }}>
                  KYC
                </div>
              </div>
              <div className={`row ${poupstyle.cont}`}>
                <div className="col-12" style={{ textAlign: "center" }}>
                  Hello {props.username}, as per regulatory requirements we need
                  to verify your PAN and Aadhaar Cards.
                </div>
              </div>
              <div className={`row ${poupstyle.cont}`}>
                <div className="col-4">
                  <label>PAN upload</label>
                  <div className={`${poupstyle.upload}`}>upload</div>
                </div>
                <div className="col-4">
                  <label>Aadhar front upload</label>
                  <div className={`${poupstyle.upload}`}>upload </div>
                </div>
                <div className="col-4">
                  <label>Aadhar back upload</label>
                  <div className={`${poupstyle.upload}`}>upload </div>
                </div>
              </div>
              <div className={`row ${poupstyle.cont}`}>
                <div className="col-12">
                  <button className="theme-btn-one mt-50 mb-50">Upload</button>
                </div>
              </div>
            </div>
          )}
          {tab == "profile" && (
            <div
              id="kyc"
              className={`col-9 justufy-content-center text-center ${
                poupstyle.tabcontent
              } ${poupstyle.contact_form} ${
                setTab === "profile" ? " active_tab" : ""
              }`}
            >
              <div className="row">
                <div className="col-6">
                  <div className="input-group-meta mb-25">
                    <input
                      placeholder="First namee"
                      name="fname"
                      type="text"
                      value={props.fname}
                      className={` ${errors.email ? "is-invalid" : ""}`}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="input-group-meta mb-25">
                    <input
                      placeholder="Last Name"
                      name="lname"
                      type="text"
                      value={props.fname}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="input-group-meta mb-25">
                    <input
                      placeholder="Enter Your Email"
                      name="email"
                      type="text"
                      value={props.fname}

                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="input-group-meta mb-25">
                    <input
                      placeholder="Mobile No."
                      name="mobile no"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button className="theme-btn-one mt-50 mb-50">Login</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default PopupKyc;
