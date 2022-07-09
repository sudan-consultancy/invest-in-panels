import axios from "axios"
import Cookie from "js-cookie"

export const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  timeout: 10000,
})

api.interceptors.request.use((config) => {
  if (!!Cookie.get("vf_user")) {
    let vf_user = JSON.parse(Cookie.get("vf_user"));
    let token = vf_user["token"];
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config
})

api.interceptors.response.use((response) => response, (err) => {
  if (!err.request?.responseURL?.match(/login/) && err?.response?.status === 401) {
    window.location = '/logout';
  } else return Promise.reject(err);
})