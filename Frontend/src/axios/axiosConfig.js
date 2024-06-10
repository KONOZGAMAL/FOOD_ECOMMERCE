import axios from "axios";
// const BASE_URL = "http://localhost:1337/api";
const BASE_URL = `${import.meta.env.VITE_URL_KEY}/api`;

const axiosConfig = axios.create({
  baseURL: BASE_URL,
});

axiosConfig.defaults.headers.common["Content-Type"] = "application/json";
axiosConfig.defaults.headers.common.Accept = "application/json";

export default axiosConfig;
/*
  headers: {
    Authorization: `Bearer ${
      import.meta.env.REACT_APP_API_TOKEN},`, // prpcess in not defined
  },
*/