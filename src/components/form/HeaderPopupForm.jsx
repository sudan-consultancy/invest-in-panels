import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { api } from "../../api";
import { Link } from "react-router-dom";

import Modal from "react-modal";
import stylepop from "./otpopup.module.css";
import Cookie from "js-cookie";
import { useHistory } from "react-router-dom";

const HeaderPopupForm = (props) => {
  const history = useHistory();
  const [otperror, setotperror] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [otp, setotp] = useState(false);
  const [regerror, setregerror] = useState(false);
  const[regstatus,setregstatus]= useState(false);

  // for validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    phone_number: Yup.string().required(" Phone Number is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Entered value does not match email format"),
    password: Yup.string().required("Password is required"),
  });

  // const [passwordShown, setPasswordShown] = useState(false);
  // const togglePasswordVisiblity = () => {
  //   setPasswordShown(passwordShown ? false : true);
  // };

  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  
  const [otpval, setotpval] = useState({});
  const [email, setemail] = useState("");
  const [regpassword, setregpassword] = useState("");
  const [userId, setUserId] = useState(null);
  function onSubmit(data, e) {
    // display form data on success
    // console.log("Message submited: ", data);
    setotperror(false);
    setregstatus(true);
    setLoading(true);
    setemail(data.email);
    setregpassword(data.password);
    api
      .post("auth/register", data)
      .then((res) => {
        setLoading(false);
        setError(false);
        setUserId(res.data?.data?.id);
        console.log(res);
        if (res.status > 200 || res.status < 300) {
          setregerror(false);
          setotp(true);
        } else {
          setregerror(true);
        }
        // props.toggleLogin();
      })
      .catch((err) => {
        setLoading(false);
          setError(err?.response?.data?.message || "error creating user");
      });
    // e.target.reset();
  }
  function resendotp(){

  }
  function submitotp(e) {
    let sendotp = [otpval[0], otpval[1], otpval[2], otpval[3]]
      .toString()
      .replaceAll(",", "");
    if (sendotp.length == 4) {
      api
        .post("auth/verify-otp", { id: userId, otp: parseInt(sendotp) })
        .then((res) => {
          setotperror(null);
          api
            .post("auth/login", { email: email, password: regpassword })
            .then((res) => {
              setLoading(false);
              Cookie.set("vf_user", JSON.stringify(res.data.data));
              history.push("/kyc");
            })
            .catch((err) => {
              setLoading(false);
              setError(err?.response?.data?.error || "Error logging in");
            });
        })
        .catch((err) => {
          setotperror(
            err?.response?.data?.error || "Error validating otp. Retry"
          );
        });
    } else {
      setotperror(null);
    }
  }
  function updateOtp(e) {
    setotpval({ ...otpval, [e.target.id]: e.target.value });
    document.getElementById(`${String(parseInt(e.target.id) + 1)}`).value = "";
    document.getElementById(`${String(parseInt(e.target.id) + 1)}`).focus();
  }

  const closeOtpModal = () =>{ setotp(null);
    api
            .post("auth/login", { email: email, password: regpassword })
            .then((res) => {
              setLoading(false);
              Cookie.set("vf_user", JSON.stringify(res.data.data));
              history.push("/kyc");
            })
            .catch((err) => {
              setLoading(false);
              setError(err?.response?.data?.error || "Error logging in");
            });
  }
  return (
    
    <>
      <Modal
        isOpen={otp}
        onRequestClose={closeOtpModal}
        contentLabel="OTP form"
        className="custom-modal modal-contact-popup-one text-center"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
        style={{ width: "10%" }}
      >
        {" "}
        <main className={`${stylepop.popup} row text-center`}>
          <div className="col-12 card-body p-2">
            <h5 className="col-12 card-title p-3">
              Please Verify your phone number with OTP we have sent you on your
              registered number
            </h5>
            <div className={`${stylepop.inputbox}`}>
              <input
                id={0}
                onChange={(event) => updateOtp(event)}
                className={`${stylepop.otpinput}`}
                type="text"
                maxLength="1"
              />
              <input
                id={1}
                onChange={(event) => updateOtp(event)}
                className={`${stylepop.otpinput}`}
                type="text"
                maxLength="1"
              />
              <input
                id={2}
                onChange={(event) => updateOtp(event)}
                className={`${stylepop.otpinput}`}
                type="text"
                maxLength="1"
              />
              <input
                id={3}
                onChange={(event) => updateOtp(event)}
                className={`${stylepop.otpinput}`}
                type="text"
                maxLength="1"
              />
            </div>
            {otperror !== null && (
              <div style={{ color: "red" }} className="col-12">
                {otperror}
              </div>
            )}
            <a
              onClick={submitotp}
              style={{
                borderRadius: "2rem",
                marginBottom: "0.5rem",
                marginTop: "1rem",
                color: "white",
              }}
              className="col-10 btn btn-primary"
            >
              Verify
            </a>
          </div>
          <div className="col-12">
          <a
              onClick={resendotp}
              className={`${stylepop.resendotp} col-10 `}
            >
              Resend OTP
            </a>
          </div>
        </main>
      </Modal>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="messages text-danger text-capitalize">{error}</div>
        <div className="row controls">
          <div className="col-12">
            <div className="input-group-meta form-group mb-20">
              <label>Name*</label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                {...register("name")}
                className={`${errors.name ? "is-invalid" : ""}`}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name?.message}</div>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="input-group-meta form-group mb-20">
              <label>Email*</label>
              <input
                placeholder="Email Address"
                name="email"
                type="text"
                {...register("email")}
                className={` ${errors.email ? "is-invalid" : ""}`}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email?.message}</div>
              )}
            </div>
          </div>

          <div className="col-12">
            <div className="input-group-meta form-group mb-20">
              <label>Phone Number*</label>
              <input
                placeholder="Phone Number"
                name="phone_number"
                type="number"
                {...register("phone_number")}
                className={` ${errors.phone_number ? "is-invalid" : ""}`}
              />
              {errors.email && (
                <div className="invalid-feedback">
                  {errors.phone_number?.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta form-group mb-20">
              <label>Password</label>
              <input
                placeholder="Password"
                name="password"
                type="password"
                {...register("password")}
                className={` ${errors.password ? "is-invalid" : ""}`}
              />
              {errors.email && (
                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
              )}
            </div>
          </div>
          {regerror && (
            <div style={{ color: "red" }} className="col-12">
              Account already exists
            </div>
          )}
          <div className="col-12">
            <p style={{ fontSize: "12px" }}>
              By signing up, you agree to the &nbsp;
              <Link
                to="/terms-conditions"
                target="_blank"
                style={{ fontWeight: "bold" }}
              >
                Terms &amp; Conditions
              </Link>
              &nbsp;and&nbsp;
              <Link
                to="/privacy-policy"
                target="_blank"
                style={{ fontWeight: "bold" }}
              >
                Privacy Policy
              </Link>
              {/* <a href="/../../views/inner-pages/features/miscellaneous/TermsConditions" style={{fontWeight: "bold"}}>Terms & Conditions</a>&nbsp;and&nbsp;
              <a href="/../../views/inner-pages/features/miscellaneous/PrivacyPolicy" style={{fontWeight: "bold"}}>Privacy Policy</a> */}
            </p>
          </div>
          <div className="col-12">
            <button
              className="theme-btn-seven w-100"
              type="submit"
              disabled={loading}
            >
              Register
            </button>
          </div>
          <div className="col-12">
            <p>
              Already have an Account?&nbsp;
              <a onClick={props.toggleLogin}>Login</a>
            </p>
          </div>

          {/* End .col */}
        </div>
      </form>
    </>
  );
};

export default HeaderPopupForm;
