import React from "react";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";

export const Logout = () => {
  Cookies.remove("vf_user");
  return <Redirect to="/" />;
};
