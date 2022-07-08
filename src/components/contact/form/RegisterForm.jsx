import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const RegisterForm = () => {
  // for password show hide
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  // for Re password show hide
  const [rePasswordShown, setRePasswordShown] = useState(false);
  const toggleRePasswordVisiblity = () => {
    setRePasswordShown(rePasswordShown ? false : true);
  };

  // for validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    mnumber: Yup.string().required("Mobile Number is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Entered value does not match email format"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    acceptTerms: Yup.bool().oneOf(
      [true],
      "Accept Terms and Conditions is required"
    ),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data, e) {
    // display form data on success
    console.log("Message submited: " + JSON.stringify(data));
    e.target.reset();
  }

  return (
    <>
      <form className="user-data-form " onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12">
            <div className="input-group-meta mb-50">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter Full Name"
                name="name"
                {...register("name")}
                className={` ${errors.name ? "is-invalid" : ""}`}
              />

              {errors.name && (
                <div className="invalid-feedback">{errors.name?.message}</div>
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta mb-50">
              <label>Email</label>
              <input
                placeholder="Enter Your Email"
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
            <div className="input-group-meta mb-50">
              <label>Mobile Number</label>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                name="mnumber"
                {...register("mnumber")}
                className={` ${errors.mnumber ? "is-invalid" : ""}`}
              />

              {errors.mnumber && (
                <div className="invalid-feedback">{errors.mnumber?.message}</div>
              )}
            </div>
          </div>

      
          <div className="col-12">
            <button type="submit" className="theme-btn-one mt-30 mb-50">
              Save 
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
