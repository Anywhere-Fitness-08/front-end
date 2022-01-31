import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: "https://dog.ceo/api/breeds/image/",
  });
};

export default axiosWithAuth;
