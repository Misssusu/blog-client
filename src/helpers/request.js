import axios from "axios";
import { Message } from "element-ui";

axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.baseURL = "https://blog-server.hunger-valley.com";

export default function request(url, type = "GET", data = {}) {
  return new Promise((resolve, reject) => {
    let options = {
      url,
      method: type
    };
    if (type.toLowerCase() === "get") {
      options.params = data;
    } else {
      options.data = data;
    }
    if(localStorage.token) {
      axios.defaults.headers.common['Authorization'] = localStorage.token
    }
    axios(options)
      .then(res => {
        if (res.data.status === "ok") {
          if(res.data.token) {
            localStorage.token = res.data.token
          }
          resolve(res.data);
        } else {
          Message.error(res.data.msg);
          reject(res.data);
        }
      })
      .catch(err => {
        Message.error("网络异常");
        reject({ msg: "网络异常" });
      });
  });
}