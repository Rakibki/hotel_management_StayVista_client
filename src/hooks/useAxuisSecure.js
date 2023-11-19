import axios from "axios"

const AxuisSecure = axios.create({
    baseURL: "http://localhost:4000",
    withCredentials: true
})

const useAxuisSecure = () => {
  
  AxuisSecure.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    console.log(error);
    return Promise.reject(error);
  });

  return AxuisSecure
}

export default useAxuisSecure