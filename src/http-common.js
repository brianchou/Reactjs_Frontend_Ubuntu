import axios from "axios";

export default axios.create({
  baseURL: "http://94.237.78.157:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});