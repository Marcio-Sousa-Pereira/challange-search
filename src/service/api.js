import axios from "axios";

const base = axios.create({
  baseURL: "https://randomuser.me",
});

export default base;
