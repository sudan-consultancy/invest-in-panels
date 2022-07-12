import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import poupstyle from "./poup.module.css";
import Cookie from "js-cookie";
import { useHistory } from "react-router-dom";
import { api } from "../../api";
import HeaderLanding from "../vr-landing/Header";

const PopupKyc = (props) => {
  // for password show hide
  // const [passwordShown, setPasswordShown] = useState(false);

  // const togglePasswordVisiblity = () => {
  //   setPasswordShown(passwordShown ? false : true);
  // };
  const history = useHistory();
  const [tab, setTab] = useState("profile");
  const [user, setUser] = useState({});
  // for validation
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Entered value does not match email format"),
    password: Yup.string().required("Password is required"),
    phone_number: Yup.string().required(" Phone Number is required"),
  });

  useEffect(() => {
    try {
      let user = JSON.parse(Cookie.get("vf_user"));
      setUser(user);
    } catch {}
  }, [user?.id]);

  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  // const hiddenFileInput = React.useRef(null);

  function changeTab(to) {
    setTab(to);
  }
  function onSubmit(data, e) {
    // display form data on success
    console.log("Message submited: " + JSON.stringify(data));
    e.target.reset();
  }

  function onKYC(e) {
    e.preventDefault();
  }

  const [file, setFile] = useState();
  function handleChange(e){
    console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <HeaderLanding />
      <div
        className="row"
        style={{ paddingTop: "10rem", gap: "1em", overfloy: "hidden" }}
      >
        <div className={`col-12 col-md-3`} >
          <div
            className={`row pl-5 ${poupstyle.tabs_opt} ${
              tab === "profile" ? poupstyle.active : ""
            }`}
            onClick={() => {
              changeTab("profile");
            }}
          >
            <h4>Profile</h4>
          </div>
          <div
            className={`row pl-5 ${poupstyle.tabs_opt} ${
              tab === "kyc" ? poupstyle.active : ""
            }`}
            onClick={() => changeTab("kyc")}
          >
            <h4>KYC</h4>
          </div>
        </div>
        <form
          onSubmit={onKYC}
          className={`user-data-form col-12 col-md-8 ${poupstyle.main_form} ${
            tab === "kyc" ? "" : "d-none"
          }`}
        >
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
                Hello {user?.name}, as per regulatory requirements we need to
                verify your PAN and Aadhaar Cards.
              </div>
            </div>
            <div className={`row flex-wrap ${poupstyle.cont}`}>
              <div className="col-12 col-md-6 col-lg-4">
                Upload PAN front
                <label
                  htmlFor="pan"
                  name="pan_card"
                  className={`w-100 ${poupstyle.upload}`}
                >
                  Upload
                </label>
                <input id="pan" type="file" className="d-none" onChange={handleChange} />
                <img src={file} />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                Upload Aadhaar front
                <label
                  htmlFor="ad_front"
                  name="aadhar_card_front"
                  className={`w-100 ${poupstyle.upload}`}
                >
                  Upload
                </label>
                <input id="ad_front" type="file" className="d-none" onChange={handleChange}/>
                <img src={file} />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                Upload Aadhaar back
                <label
                  htmlFor="ad_back"
                  name="aadhar_card_back"
                  className={`w-100 ${poupstyle.upload}`}
                >
                  Upload
                </label>
                <input id="ad_back" type="file" className="d-none" onChange={handleChange}/>
                <img src={file} />
              </div>
            </div>
            <div className={`row ${poupstyle.cont}`}>
              <div className="col-12">
                <button className="theme-btn-one mt-50 mb-50" type="submit">
                  Upload
                </button>
              </div>
            </div>
          </div>
        </form>
        
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`user-data-form col-12 col-md-8 ${poupstyle.main_form} ${
            tab === "profile" ? "" : "d-none"
          }`}
        >
          <div
            id="kyc"
            className={`col-9 justify-content-center text-center ${
              poupstyle.tabcontent
            } ${poupstyle.contact_form} ${
              setTab === "profile" ? " active_tab" : ""
            }`}
          >
            <div className="row">
              <div className="col-12">
                <div className="input-group-meta mb-25">
                  <input
                    placeholder="Name"
                    name="name"
                    type="text"
                    value={user?.name}
                    required
                    {...register("name")}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">
                      {errors.name?.message}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="input-group-meta mb-25">
                  <input
                    placeholder="Enter Your Email"
                    name="email"
                    type="email"
                    value={user?.email}
                    required
                    {...register("email")}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email?.message}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="input-group-meta mb-25">
                  <input
                    placeholder="Phone number"
                    name="phone_number"
                    type="number"
                    required
                    value={user?.phone_number}
                    {...register("phone_number")}
                  />
                  {errors.phone_number && (
                    <div className="invalid-feedback">
                      {errors.phone_number?.message}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button className="theme-btn-one mt-50 mb-50" type="submit">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PopupKyc;
