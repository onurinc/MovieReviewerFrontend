import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  // baseURL: "http://localhost:44318/api",
});

export default instance;
