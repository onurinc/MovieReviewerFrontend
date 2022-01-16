import axios from "axios";

const instance = axios.create({
  baseURL: "",
  // baseURL: "http://localhost:44318/api",
});

export default instance;
