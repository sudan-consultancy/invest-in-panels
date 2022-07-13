import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import poupstyle from "./poup.module.css";
import Cookie from "js-cookie";
import { useHistory } from "react-router-dom";
import { api } from "../../api";
import HeaderLanding from "../vr-landing/Header";
import { Redirect } from "react-router-dom";
import axios from "axios";

const PopupKyc = (props) => {
  // for password show hide
  // const [passwordShown, setPasswordShown] = useState(false);

  // const togglePasswordVisiblity = () => {
  //   setPasswordShown(passwordShown ? false : true);
  // };
  const history = useHistory();
  const [tab, setTab] = useState("profile");
  let [user, setUser] = useState({});
  // let [username, setname] = useState(null);
  // let [email, setemail] = useState(null);
  // let [phonenumber, setphonenumber] = useState(null);
  let [kycpass, setkycpass] = useState(null);
  let [adharfront, setadharfront] = useState(null);
  let [adharback, setadharback] = useState(null);
  let [pan, setpan] = useState(null);
  const [hasCompletedProfile, setHasCompleteProfile] = useState(false);

  // for validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("name is required"),
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
      if (user?.hasCompletedProfile) {
        setHasCompleteProfile(true);
      }
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

  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
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

  const checkLeegalityStatus = () => {
    axios
      .get(
        `https://sandbox.leegality.com/api/v3.0/sign/request?documentId=${user?.documentId}`,
        { headers: { "X-Auth-Token": process.env.REACT_APP_LEEGALITY_API } }
      )
      .then((res) => {
        setHasCompleteProfile(!res.data?.data?.requests[0]?.active);
        let thisuser = user;
        thisuser = {
          ...thisuser,
          hasCompletedProfile: !res.data?.data?.requests[0]?.active,
        };
        Cookie.set("vf_user", JSON.stringify(thisuser));
        setUser(thisuser);
        if (!res.data?.data?.requests[0]?.active) {
          api.put("auth", {
            hasCompletedProfile: true,
          });
        }
      })
      .catch((err) => {});
  };

  return (
    <>
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
          <div
            className="container"
            style={{
              textAlign: "center",
              maxWidth: "70%",
              paddingBottom: "0px",
            }}
          >
            <div className="row">
              <div className={`col-12 col-md-1`}></div>
              <div
                className={`col-12 col-md-2`}
                style={{
                  border: "1px solid #ccc",
                  backgroundColor: "#eee",
                  width: "30%",
                  minHeight: "700px",
                  borderRight: "none",
                  borderRadius: "10px 0 0 10px",
                }}
              >
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
              <div
                className={`col-12 col-md-8`}
                style={{
                  padding: "1em",
                  border: "1px solid #ccc",
                  width: "70%",
                  minHeight: "700px",
                  borderRadius: "0 10px 10px 0",
                }}
              >
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
                    <div className={`row ${poupstyle.cont}`}>
                      <div className="col-12" style={{ textAlign: "center" }}>
                        Hello {user?.name}, as per regulatory requirements we
                        need to verify your identity.
                      </div>
                    </div>
                    <div
                      className={`p-5 flex-wrap ${poupstyle.cont}`}
                      style={{
                        backgroundColor: "white",
                        boxShadow: "0 0px 10px rgb(196 195 196)",
                        border: "2px solid var(--blue-dark)",
                        width: "570px",
                        marginLeft: "auto!important",
                        marginRight: "auto!important",
                      }}
                    >
                      {hasCompletedProfile ? (
                        <p className="text-success">
                          Congrats! KYC already done
                        </p>
                      ) : (
                        <>
                          <p>Complete your KYC with Leegality</p>
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
                </div>
                <form
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
                        <div className="input-group-meta mb-25">
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
              </div>
              {/* <div className={`col-12 col-md-1`}></div> */}
            </div>
          </div>
          {/* <div className={`col-12 col-md-3`}>
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
            <div className={`row flex-wrap ${poupstyle.cont} `}>
              <div className="col-12 col-md-6 col-lg-4">
                Upload PAN front
                <label
                  htmlFor="pan"
                  name="pan_card"
                  className={`w-100 ${poupstyle.upload} ${pan && poupstyle.upactive}`}
                >
                  {pan ? pan.name : "Upload"}
                </label>
                <input
                  id="pan"
                  type="file"
                  className="d-none"
                  onChange={(event) => {
                    setpan(event.target.files[0]);
                  }}
                />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                Upload Aadhaar front
                <label
                  htmlFor="ad_front"
                  name="aadhar_card_front"
                  className={`w-100 ${poupstyle.upload} ${adharfront && poupstyle.upactive}`}
                >
                  {adharfront ? adharfront.name : "Upload"}{" "}
                </label>
                <input
                  id="ad_front"
                  type="file"
                  className="d-none"
                  onChange={(event) => {
                    setadharfront(event.target.files[0]);
                  }}
                />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                Upload Aadhaar back
                <label
                  htmlFor="ad_back"
                  name="aadhar_card_back"
                  className={`w-100 ${poupstyle.upload} ${adharback && poupstyle.upactive}`}
                >
                  {adharback ? adharback.name : "Upload"}{" "}
                </label>
                <input
                  id="ad_back"
                  type="file"
                  className="d-none"
                  onChange={(event) => setadharback(event.target.files[0])}
                />
              </div>
            </div>
            <div className={`row ${poupstyle.cont} `}>
              <div className="col-12">
                <button className="theme-btn-one mt-50 mb-50" type="submit">
                  Upload
                </button>
              </div>
            </div>
          </div>
        </form>
        <form
          onSubmit={senddata}
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
                    
                    defaultValue={user?.name}
                    required
                    {...register("name")}
                    className={`${errors.name ? "is-invalid" : ""}`}/>
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
                    {...register("email")}
                    className={`${errors.email ? "is-invalid" : ""}`}/>
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
                    defaultValue={user?.phone_number}
                    required

                    {...register("phone_number")}
                    className={`${errors.phonenumber ? "is-invalid" : ""}`}/>
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
        </form> */}
        </div>
      </div>
    </>
  );
};

export default PopupKyc;
