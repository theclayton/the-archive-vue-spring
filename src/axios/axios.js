import axios from "axios";

let BASE_URL = "http://localhost:3500/api";

if (process.env.NODE_ENV === 'production') {
  BASE_URL = "https://api-archive.flaresoftware.com/api";
}

const instance = axios.create({
  baseURL: BASE_URL,
  auth: {
    username: "",
    password: ""
  }
});

export default instance;
