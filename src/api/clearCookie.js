import useAxuisPublic from "../hooks/useAxiosPublic"

const clearCookie = async () => {
    const axiosPublic = useAxuisPublic()
    const res = await axiosPublic.get("/logout")
     return res
}

export default clearCookie