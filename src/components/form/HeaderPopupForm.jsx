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
import { AnchorLink } from "../vr-landing/Header";

const HeaderPopupForm = (props) => {
  const history = useHistory();
  const [otperror, setotperror] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [otp, setotp] = useState(false);
  const [regerror, setregerror] = useState(false);
  const [regstatus, setregstatus] = useState(false);

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
  async function onSubmit(data, e) {
    // display form data on success
    setotperror(false);
    setregstatus(true);
    setLoading(true);
    setemail(data.email);
    setregpassword(data.password);
    let thisdata = { ...data, state_code: parseInt(data.state_code) };
    api
      .post("auth/register", thisdata)
      .then((res) => {
        setLoading(false);
        setError(false);
        setUserId(res.data?.data?.id);
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

  function submitotp(e) {
    setLoading(true);
    let sendotp = [otpval[0], otpval[1], otpval[2], otpval[3]]
      .toString()
      .replaceAll(",", "");
    if (sendotp.length == 4) {
      api
        .post("auth/verify-otp", { id: userId, otp: parseInt(sendotp) })
        .then((res) => {
          setotperror(null);
          let changeotpflag = {};
          try {
            changeotpflag = JSON.parse(Cookie.get("vf_user"));
            Cookie.set(
              "vf_user",
              JSON.stringify({ ...changeotpflag, isOtpVerified: true })
            );
            api
              .post("auth/login", { email: email, password: regpassword })
              .then((res) => {
                setLoading(false);
                history.push("/kyc");
              })
              .catch((err) => {
                setLoading(false);
                setError(err?.response?.data?.error || "Error logging in");
              });
          } catch {
            // do nothing
            setotperror(
              "Error setting cookies. Close this to login"
            );
          }
        })
        .catch((err) => {
          setLoading(false);
          setotperror(
            err?.response?.data?.error || "Error validating OTP. Retry"
          );
        });
    } else {
      setotperror(null);
    }
  }
  function updateOtp(e) {
    let thisotpval = otpval;
    thisotpval = { ...thisotpval, [e.target.id]: e.target.value };
    setotpval(thisotpval);
    if (e.target.id < 3) {
      document.getElementById(`${String(parseInt(e.target.id) + 1)}`).value =
        "";
      document.getElementById(`${String(parseInt(e.target.id) + 1)}`).focus();
    }
  }

  const closeOtpModal = () => {
    setotp(null);
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
  };
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
              disabled={loading}
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

          <div className="col-12">
            <div className="input-group-meta form-group mb-20">
              <label>State</label>
              <select
                className={`form-control ${
                  errors.state_code ? "is-invalid" : ""
                }`}
                id="state_code"
                name="state_code"
                style={{
                  width: "100%",
                  height: "60px",
                  border: "2px solid #000",
                  borderRadius: " 6px",
                  padding: "0 20px",
                  color: "#000",
                  fontSize: "17px",
                  background: "transparent",
                }}
                {...register("state_code")}
              >
                <option disabled>Select State</option>
                <option value="35">Andaman and Nicobar</option>
                <option value="37">Andhra Pradesh</option>
                <option value="12">Arunachal Pradesh</option>
                <option value="18">Assam</option>
                <option value="10">Bihar</option>
                <option value="4">Chandigarh</option>
                <option value="22">Chhattisgarh</option>
                <option value="26">Dadar and Nagar Haveli</option>
                <option value="25">Daman and Diu</option>
                <option value="7">Delhi</option>
                <option value="30">Goa</option>
                <option value="24">Gujarat</option>
                <option value="6">Haryana</option>
                <option value="2">Himachal Pradesh</option>
                <option value="1">Jammu and Kashmir</option>
                <option value="20">Jharkhand</option>
                <option value="29">Karnataka</option>
                <option value="32">Kerala</option>
                <option value="38">Ladakh</option>
                <option value="31">Lakshadweep</option>
                <option value="23">Madhya Pradesh</option>
                <option value="27">Maharashtra</option>
                <option value="14">Manipur</option>
                <option value="17">Meghalaya</option>
                <option value="15">Mizoram</option>
                <option value="13">Nagaland</option>
                <option value="21">Orissa</option>
                <option value="99">Other Country</option>
                <option value="97">Other Territory</option>
                <option value="34">Puducherry</option>
                <option value="3">Punjab</option>
                <option value="8">Rajasthan</option>
                <option value="11">Sikkim</option>
                <option value="33">Tamil Nadu</option>
                <option value="36">Telangana</option>
                <option value="16">Tripura</option>
                <option value="9">Uttar Pradesh</option>
                <option value="5">Uttarakhand</option>
                <option value="19">West Bengal</option>
              </select>
              {errors.state_code && (
                <div className="invalid-feedback">
                  {errors.state_code?.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta form-group mb-20">
              <label>Referral Code</label>
              <input
                placeholder="Referral Code"
                name="referral_code_from"
                type="text"
                {...register("referral_code_from")}
                className={` ${errors.referral_code_from ? "is-invalid" : ""}`}
              />
              {errors.referral_code_from && (
                <div className="invalid-feedback">
                  {errors.referral_code_from?.message}
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
              <a onClick={props.toggleLogin} style={AnchorLink}>
                Login
              </a>
            </p>
          </div>

          {/* End .col */}
        </div>
      </form>
    </>
  );
};

export default HeaderPopupForm;
