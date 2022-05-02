import axios from "axios";
import { getToken } from "./auth";
const token = getToken();

const api = axios.create({
  baseURL: "https://plasticobolha.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default api;
