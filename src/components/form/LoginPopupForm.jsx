import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const LoginPopupForm = (props) => {
  // for password show hide
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  // for validation
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Entered value does not match email format"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data, e) {
    // display form data on success
    console.log("Message submited: ", data);
    // e.target.reset();
  }

  return (
    <>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="messages"></div>
        <div className="row controls">
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
              <label>Password*</label>
              <input
                placeholder="Enter Password"
                name="password"
                type={passwordShown ? "text" : "password"}
                {...register("password")}
                className={` ${errors.password ? "is-invalid" : ""}`}
              />
              {errors.password && (
                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button className="theme-btn-seven w-100">Login</button>
          </div>
          <div className="col-12">
            <p>
              Don't have an Account? &nbsp;
              <a onClick={props.toggleLogin}>Register</a>
            </p>
          </div>
          {/* End .col */}
        </div>
      </form>
    </>
  );
};

export default LoginPopupForm;
