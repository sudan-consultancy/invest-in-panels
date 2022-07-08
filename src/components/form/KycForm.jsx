import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const KycForm = () => {
  
  

  // for validation
  const validationSchema = Yup.object().shape({});

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
              <label>Upload PAN Front Side</label>
              <input
                type="file"
                name="name"/>
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta mb-50">
              <label>Upload Aadhaar Front Side</label>
              <input
                type="file"
                name="name"/>
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta mb-50">
              <label>Upload Aadhaar Back Side</label>
              <input
                type="file"
                name="name"/>
            </div>
          </div>
         
      
          <div className="col-12">
            <button type="submit" className="theme-btn-one mt-30 mb-50">
              Continue 
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>
    </>
  );
};

export default KycForm;
