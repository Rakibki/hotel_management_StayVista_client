import useAxuisPublic from "../hooks/useAxiosPublic"
import useAxuisSecure from "../hooks/useAxuisSecure"


const axiosPublic = useAxuisPublic()
const axiosSecure = useAxuisSecure()

export const getAllRooms = async () => {
    const res = await axiosPublic.get("/rooms")
    return res.data
} 

export const getSingleRoom = async (id) => {
    const res = await axiosPublic.get(`/room/${id}`)
    return res.data
}

export const getRoomForAdmin = async (email) => {
    const res = await axiosSecure.get(`/rooms/${email}`)
    return res.data
} 

export const AddRoomInDB = async (roomDate) => {
   const res = await axiosSecure.post('/rooms', roomDate)
   return res.data
}