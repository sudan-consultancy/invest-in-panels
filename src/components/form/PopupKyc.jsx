import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import poupstyle from "./poup.module.css";
import "./dash.css";
import Cookie from "js-cookie";
import { useHistory } from "react-router-dom";
import { api } from "../../api";
import HeaderLanding from "../vr-landing/Header";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";
import stylepop from "./otpopup.module.css";

const PopupKyc = (props) => {
  // for password show hide
  // const [passwordShown, setPasswordShown] = useState(false);

  // const togglePasswordVisiblity = () => {
  //   setPasswordShown(passwordShown ? false : true);
  // };
  const history = useHistory();
  const [tab, setTab] = useState("profile");
  let [user, setUser] = useState({});
  const [otperror, setotperror] = useState(null);
  const [otp, setotp] = useState(null);

  // let [username, setname] = useState(null);
  // let [email, setemail] = useState(null);
  // let [phonenumber, setphonenumber] = useState(null);
  let [kycpass, setkycpass] = useState(null);
  let [credential, setcredential] = useState({ op: "", np: "", cp: "" });
  let [adharfront, setadharfront] = useState(null);
  let [adharback, setadharback] = useState(null);
  let [pan, setpan] = useState(null);
  const [otpval, setotpval] = useState({});
  let [newpwerror, setnewpwerror] = useState(null);
  let [checkpw, setcheckpw] = useState({});
  const [hasCompletedProfile, setHasCompleteProfile] = useState(false);
  const [matchpw, setmatchpw] = useState(true);
  // for validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Entered value does not match email format"),
    password: Yup.string(),
    phone_number: Yup.string().required(" Phone Number is required"),
  });
  const validationSchema2 = Yup.object().shape({
    oldPassword: Yup.string().required("please enter old password"),
    newPassword: Yup.string()
      .min(6)
      .when("oldPassword", (oldPassword, field) =>
        oldPassword ? field.required() : field
      ),
    confirmPassword: Yup.string().when(" ", (newPassword, field) =>
      newPassword ? field.required().oneOf([Yup.ref("newPassword")]) : field
    ),
  });
  useEffect(() => {
    try {
      
      let user = JSON.parse(Cookie.get("vf_user"));
      setUser(user);
      if (user?.hasCompletedProfile) {
        setHasCompleteProfile(true);
      } else {
        checkLeegalityStatus();
      }
    } catch {}
  }, [user?.id]);

  const formOptions = { resolver: yupResolver(validationSchema) };
  const formvalidateoption = { resolver: yupResolver(validationSchema2) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: formState2,
  } = useForm(formvalidateoption);

  const { errors } = formState;
  const { errors2 } = formState2;

  // const hiddenFileInput = React.useRef(null);
  function resendotp() {}
  function submitotp(e) {
    setotploading(true);
    let sendotp = [otpval[0], otpval[1], otpval[2], otpval[3]]
      .toString()
      .replaceAll(",", "");
    if (sendotp.length == 4) {
      api
        .post("auth/verify-otp", { id: user?.id, otp: parseInt(sendotp) })
        .then((res) => {
          console.log(res);
          setotploading(false);
          setotperror(null);
          let changeotpflag= JSON.parse(Cookie.get('vf_user'));
          Cookie.set('vf_user',JSON.stringify({...changeotpflag,isOtpVerified:true}));
          console.log(JSON.stringify({...changeotpflag,isOtpVerified:true}));
          setUser({...changeotpflag,isOtpVerified:true});
          setotp(false);
        })
        .catch((err) => {
          setotploading(false);
          console.log(err);
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
  function changeTab(to) {
    setTab(to);
  }
  function senddata(e) {
    e.preventDefault();
    // display form data on success
    const profileform = new FormData();
    console.log(user);
    // profileform.append("name", username);
    // profileform.append("email", email);
    // profileform.append("phone_number", phonenumber);
    // for (const value of profileform.values()) {
    //   console.log(value);
    // }
  }
  const closeOtpModal = () => {
    setotp(null);
    setotperror(null);
  };
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const verifycredform = (e) => {
    e.preventDefault();
    if (matchpw) {
      let data = {
        id: user?.id,
        oldPassword: checkpw?.op,
        newPassword: checkpw?.np,
      };
      api
        .post("auth/reset-password", data)
        .then((res) => {
          console.log(res);
          setnewpwerror(null);
          setcheckpw({np:'',op:'',cp:''});
        })
        .catch((err) => {
          console.log(err);
          setnewpwerror(err?.response?.data?.message);
        });
      console.log(data);
    }
  };
  function sendotp(e) {
    e.preventDefault();
    api.get('auth/resend-otp',null,{headers:{Authorization:user?.token}}).then(res=>console.log(res)).catch(err=>console.log(err));
    setotp(true);
  }
  const [updating, setUpdating] = useState(false);
  const [uError, setuError] = useState(null);
  const [uSuccess, setuSuccess] = useState(false);

  const onSubmit = (data, e) => {
    e.preventDefault();
    setUpdating(true);
    api
      .put("auth", { data })
      .then((res) => {
        setUpdating(false);
        setuSuccess(true);
        setuError(null);
        setTimeout(() => {
          setuSuccess(false);
        }, 2000);
      })
      .catch((err) => {
        setUpdating(false);
        setuSuccess(false);
        setuError(err?.response?.data?.error || "Error updating user");
      });
  };
  const [otploading, setotploading] = useState(false);

  const [kycLoading, setKycLoading] = useState(false);
  const [signUrl, setSignUrl] = useState("");
  const [kycError, setKycError] = useState(null);

  const leegalityKyc = () => {
    setKycLoading(true);
    axios
      .post(
        "https://sandbox.leegality.com/api/v3.0/sign/request",
        {
          profileId: "zXkouzU",
          file: {
            name: "",
            fields: [
              {
                id: "1657531829765",
                name: "name",
                type: "text",
                value: user?.name,
                required: false,
              },
            ],
          },
          invitees: [
            {
              name: user?.name,
              email: user?.email,
              phone: user?.phone_number,
            },
          ],
          irn: "",
        },
        { headers: { "X-Auth-Token": process.env.REACT_APP_LEEGALITY_API } }
      )
      .then((res) => {
        setKycLoading(false);
        setKycError(null);
        let thisuser = user;
        thisuser = {
          ...thisuser,
          document_id: res.data?.data?.documentId,
          sign_url: res.data.data?.invitees[0]?.signUrl,
        };
        setUser(thisuser);
        Cookie.set("vf_user", JSON.stringify(thisuser));
        api.put("auth", {
          document_id: res.data?.data?.documentId,
          sign_url: res.data.data?.invitees[0]?.signUrl,
        });
        setSignUrl(res.data.data?.invitees[0]?.signUrl);
      })
      .catch((err) => {
        setKycLoading(false);
        setKycError(err?.response?.data?.message || "Error");
      });
  };
  const verifypassword = (e) => {
    console.log(e.value());
  };
  const checkLeegalityStatus = () => {
    axios
      .get(
        `https://sandbox.leegality.com/api/v3.0/sign/request?documentId=${user?.document_id}`,
        { headers: { "X-Auth-Token": process.env.REACT_APP_LEEGALITY_API } }
      )
      .then((res) => {
        setHasCompleteProfile(res.data?.data?.requests[0]?.signed);
        let thisuser = user;
        thisuser = {
          ...thisuser,
          hasCompletedProfile: res.data?.data?.requests[0]?.signed,
        };
        Cookie.set("vf_user", JSON.stringify(thisuser));
        setUser(thisuser);
        if (res.data?.data?.requests[0]?.signed) {
          api.put("auth", {
            hasCompletedProfile: true,
          });
        }
      })
      .catch((err) => {});
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
      {kycpass && <Redirect to="/dashboard" />}
      <HeaderLanding />
      <div
        className="section-profile"
        style={{ height: "auto", padding: "3em 0px 100px 0px" }}
      >
        <div
          className="row"
          style={{ paddingTop: "10rem", gap: "1em", overfloy: "hidden" }}
        >
          <div className="container">
            <div className="flex-div">
              <div className="profile-vertical tab">
                <button
                  id="profileTabBtn"
                  className={`tablinks ${tab === "profile" ? "active" : ""}`}
                  onClick={() => {
                    changeTab("profile");
                  }}
                >
                  <i class="fa fa-user-circle-o icon-class"></i>
                  <label class="label-class">Profile</label>
                </button>
                <button
                  id="profileTabBtn"
                  className={` tablinks ${tab === "kyc" ? "active" : ""}`}
                  onClick={() => changeTab("kyc")}
                >
                  <i class="fa fa-address-card icon-class"></i>
                  <label class="label-class">Onboarding</label>
                </button>
                <button
                  id="profileTabBtn"
                  className={` tablinks ${
                    tab === "credentials" ? "active" : ""
                  }`}
                  onClick={() => changeTab("credentials")}
                >
                  <i class="fa fa-lock icon-class"></i>
                  <label class="label-class">Credentials</label>
                </button>
              </div>
              <div id="profileTab" class="tabcontent">
                <div
                  className={`user-data-form col-12 col-md-12 ${
                    poupstyle.main_form
                  } ${tab === "kyc" ? "" : "d-none"}`}
                >
                  <div
                    className={`col-12 justufy-content-center text-center ${
                      poupstyle.tabcontent
                    } ${setTab === "kyc" ? " active_tab" : ""}`}
                  >
                    <div className={`row ${poupstyle.cont}`}>
                      <div className="col-12" style={{ textAlign: "center" }}>
                        KYC
                      </div>
                    </div>
                  </div>
                  <div className={`row ${poupstyle.cont}`}>
                    <div className="col-12" style={{ textAlign: "center" }}>
                      {" "}
                      Hello {user?.name}, as per regulatory requirements we need
                      to verify your identity.
                    </div>
                  </div>
                  <div className="p-5 flex-wrap upload-doc">
                    {hasCompletedProfile ? (
                      <p className="text-success">Congrats! KYC already done</p>
                    ) : (
                      <>
                        <p>On board with Leegality</p>
                        {signUrl ? (
                          <>
                            <br />
                            <p>
                              KYC initiated.{" "}
                              <a
                                href={signUrl}
                                target="_blank"
                                style={{ textDecoration: "underline" }}
                              >
                                Click here
                              </a>{" "}
                              to complete it.
                            </p>
                            <button
                              onClick={checkLeegalityStatus}
                              className="theme-btn-one mb-50"
                            >
                              Check KYC status
                            </button>
                          </>
                        ) : (
                          <button
                            className="theme-btn-one mb-50"
                            type="submit"
                            style={{
                              backgroundColor: "var(--blue-dark)",
                              color: "white",
                              webkitAppearance: " none",
                              opacity: " 1",
                            }}
                            disabled={kycLoading}
                            onClick={leegalityKyc}
                          >
                            {kycLoading ? "Loading..." : "Initiate KYC"}
                          </button>
                        )}
                        <p className="text-danger">{kycError}</p>
                      </>
                    )}
                  </div>
                </div>
                <form
                  key={1}
                  onSubmit={handleSubmit(onSubmit)}
                  className={`user-data-form col-12 col-md-12 ${
                    poupstyle.main_form
                  } ${tab === "profile" ? "" : "d-none"}`}
                >
                  <div
                    id="kyc"
                    className={`col-12 justify-content-center text-center ${
                      poupstyle.tabcontent
                    } ${poupstyle.contact_form} ${
                      setTab === "profile" ? " active_tab" : ""
                    }`}
                  >
                    {uSuccess && (
                      <p className="text-success">User updated successfully</p>
                    )}
                    {uError !== null && <p className="text-danger">{uError}</p>}
                    <div className="row">
                      <div className="col-12">
                        <div className="input-group-meta mb-25">
                          <input
                            placeholder="Name"
                            name="name"
                            type="text"
                            defaultValue={user?.name}
                            required
                            disabled={true}
                            {...register("name")}
                            className={`${errors.name ? "is-invalid" : ""}`}
                            style={{
                              padding: "20px 20px",
                              marginTop: "8px",
                              marginBottom: "15px",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                              boxSizing: " border-box",
                              fontSize: "0.9em",
                            }}
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
                            defaultValue={user?.email}
                            required
                            disabled={true}
                            {...register("email")}
                            className={`${errors.email ? "is-invalid" : ""}`}
                            style={{
                              padding: "20px 20px",
                              marginTop: "8px",
                              marginBottom: "15px",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                              boxSizing: " border-box",
                              fontSize: "0.9em",
                            }}
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
                        <div className="input-group-meta">
                          <input
                            placeholder="Phone number"
                            name="phone_number"
                            type="text"
                            required
                            disabled={true}
                            defaultValue={user?.phone_number}
                            {...register("phone_number")}
                            className={`${
                              errors.phonenumber ? "is-invalid" : ""
                            }`}
                            style={{
                              padding: "20px 20px",
                              marginTop: "8px",
                              marginBottom: "15px",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                              boxSizing: " border-box",
                              fontSize: "0.9em",
                            }}
                          />
                          {errors.phone_number && (
                            <div className="invalid-feedback">
                              {errors.phone_number?.message}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    {!user.isOtpVerified && (
                      <div className="row">
                        <div
                          className={`${poupstyle.verifynumber}  offset-8 col-4 `}
                        >
                          <a onClick={sendotp}>Verify Number</a>
                        </div>{" "}
                      </div>
                    )}
                    <div className="row">
                      <div className="col-12 mt-25 mb-25">
                        <div className="input-group-meta ">
                          <textarea
                            placeholder="Address"
                            name="address"
                            type="text"
                            required
                            disabled={true}
                            defaultValue={user?.address}
                            {...register("address")}
                            className={`${
                              errors.phonenumber ? "is-invalid" : ""
                            }`}
                            style={{
                              width: "100%",
                              height: " 100%",
                              height: "5rem",
                              borderRadius: "5px",
                              fontSize: "16px",
                              color: "var(--heading)",
                              border: "solid 1px #d6d6d6",
                              resize: "none",
                              padding: "20px",
                            }}
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
                        <button
                          className="theme-btn-one mt-50 mb-50"
                          type="submit"
                          style={{
                            backgroundColor: "var(--blue-dark)",
                            color: "white",
                            webkitAppearance: " none",
                            opacity: " 1",
                          }}
                          disabled={updating}
                        >
                          {updating ? "Saving" : "Save"}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <form
                  key={2}
                  className={`user-data-form col-12 col-md-12 ${
                    poupstyle.main_form
                  } ${tab === "credentials" ? "" : "d-none"}`}
                >
                  <div
                    id="kyc"
                    className={`col-12 justify-content-center text-center ${
                      poupstyle.tabcontent
                    } ${poupstyle.contact_form} ${
                      setTab === "credentials" ? " active_tab" : ""
                    }`}
                  >
                    <div className="row">
                      <div className="col-12">
                        <div className="input-group-meta mb-25">
                          <input
                            placeholder="Old Password"
                            name="oldPassword"
                            type="password"
                            required
                            onChange={(e) => {
                              setcheckpw({ ...checkpw, op: e.target.value });
                            }}
                            className={``}
                            value={checkpw?.op}

                            style={{
                              padding: "20px 20px",
                              marginTop: "8px",
                              marginBottom: "15px",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                              boxSizing: " border-box",
                              fontSize: "0.9em",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="input-group-meta mb-25">
                          <input
                            placeholder="New Password"
                            name="newPassword"
                            type="password"
                            value={checkpw?.np}
                            required
                            onChange={(e) =>
                              setcheckpw({ ...checkpw, np: e.target.value })
                            }
                            className={``}
                            style={{
                              padding: "20px 20px",
                              marginTop: "8px",
                              marginBottom: "15px",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                              boxSizing: " border-box",
                              fontSize: "0.9em",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="input-group-meta mb-25">
                          <input
                            placeholder="Retype New Password"
                            name="retypeNewPassword"
                            style={
                              matchpw
                                ? {
                                    padding: "20px 20px",
                                    marginTop: "8px",
                                    marginBottom: "15px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    boxSizing: " border-box",
                                    fontSize: "0.9em",
                                  }
                                : {
                                    padding: "20px 20px",
                                    marginTop: "8px",
                                    marginBottom: "15px",
                                    border: "1px solid red",
                                    borderRadius: "4px",
                                    boxSizing: " border-box",
                                    fontSize: "0.9em",
                                  }
                            }
                            type="password"
                            value={checkpw?.cp}

                            required
                            onChange={(e) => {
                              setcheckpw({ ...checkpw, cp: e.target.value });
                              setmatchpw(checkpw.np == e.target.value);
                              console.log(checkpw.np == e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    {newpwerror !== null && (
                      <div style={{ color: "red" }} className="col-12">
                        {newpwerror}
                      </div>
                    )}
                    <div className="row">
                      <div className="col-12">
                        <button
                          className="theme-btn-one mt-50 mb-50"
                          onClick={verifycredform}
                          style={{
                            backgroundColor: "var(--blue-dark)",
                            color: "white",
                            webkitAppearance: " none",
                            opacity: " 1",
                          }}
                          disabled={updating}
                        >
                          {updating ? "Saving" : "Save"}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupKyc;
