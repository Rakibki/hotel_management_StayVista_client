import axios from "axios"

const AxuisSecure = axios.create({
    baseURL: "http://localhost:4000"
})

const useAxuisSecure = () => {
  return AxuisSecure
}

export default useAxuisSecure