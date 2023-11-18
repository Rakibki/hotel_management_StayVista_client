import axios from "axios"

const AxuisPublic = axios.create({
    baseURL: "http://localhost:4000",
    withCredentials: true
})

const useAxuisPublic = () => {
  return AxuisPublic
}

export default useAxuisPublic