import axios from "axios";

const url = "http://localhost:5000";

const http = axios.create({
  baseURL: url,
});

export { http };
