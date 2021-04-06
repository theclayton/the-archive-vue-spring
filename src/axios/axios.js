import axios from "axios";

const BASE_URL = "https://api-archive.flaresoftware.com/api";

const instance = axios.create({
  baseURL: BASE_URL
});

export default instance;
