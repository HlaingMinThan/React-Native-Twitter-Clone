import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.100.4:80/api",
});
