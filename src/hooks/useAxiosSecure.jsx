import axios from "axios";

// Custom Axios instance with base URL
const useAxiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

useAxiosSecure.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      // Handle logout logic here
    }
    return Promise.reject(error);
  }
);

export default useAxiosSecure;
