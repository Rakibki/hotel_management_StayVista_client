import useAxuisPublic from '../hooks/useAxiosPublic'

const getToekn = async (email) => {
    const axiosPublic = useAxuisPublic()
   const res = await axiosPublic.post("/jwt", {email: email})
    return res
}

export default getToekn