import axios from "axios";
import store from "../store";

export const HTTP = axios.create({
  baseURL: `https://c5jis.sse.codesandbox.io/`,
  // baseURL: `https://fakestoreapi.com/`,
  // baseURL: `http://localhost:3000/`,
  // headers: {
  //   Authorization: 'Bearer {token}'
  // }
});
// HTTP.defaults.showLoader = true;
HTTP.interceptors.request.use(
  function (config) {
    // if (config.showLoader) {
    store.dispatch("loader/pending");

    // }
    return config;
  },
  function (error) {
    if (error.config.showLoader) {
      store.dispatch("loader/done");
    }
    return Promise.reject(error);
  }
);
HTTP.interceptors.response.use(
  function (response) {
    // if (response.config.showLoader) {
    store.dispatch("loader/done");
    // }

    return response;
  },
  function (error) {
    if (error.config.showLoader) {
      store.dispatch("loader/done");
    }
    return Promise.reject(error);
  }
);
