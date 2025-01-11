import axios from "axios";

const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_server_URL,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
