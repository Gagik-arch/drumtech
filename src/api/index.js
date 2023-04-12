import env from "../env";
import { Storage } from "../resources";
import axios from "axios";

class Api {
  constructor(baseUrl = "", cleanReq = false) {
    this.URL = baseUrl;
    this.cleanReq = cleanReq;
  }

  get({ url = "", headers }) {
    return this.#configureRequest({ url, headers });
  }

  post({ url = "", body, headers }) {
    return this.#configureRequest({ url, body, method: "post", headers });
  }

  #configureRequest = async ({ url, method = "get", body, headers = {} }) => {
    const token = await Storage.getItem("token");

    url = this.cleanReq
      ? this.URL + url
      : env.APP_URL + "/api" + this.URL + url;

    const config = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }

    if (body) {
      if (body.hasOwnProperty("email")) {
        body.email = body.email.toLowerCase();
      }
      if (body instanceof FormData) {
        config.headers["Content-Type"] = "multipart/form-data";
      }
      config.data = body;
    }

    return axios(url, config).then(response => response);
  };
}

export default Api;
