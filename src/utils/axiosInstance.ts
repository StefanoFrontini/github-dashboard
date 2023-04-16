import axios from "axios";

const token = import.meta.env.VITE_GITHUB_TOKEN;

export const axiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
