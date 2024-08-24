import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://book-zone-server.vercel.app",
  // baseURL: "http://localhost:4000",
});

const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
