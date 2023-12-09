import useAxuisSecure from "../hooks/useAxuisSecure"

const getAllUsers = async () => {
    const axuosSecure = useAxuisSecure();

   const res = await axuosSecure.get("/users")
    return res.data
}

export default getAllUsers