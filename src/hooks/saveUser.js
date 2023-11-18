import useAxiosPublic from "../hooks/useAxiosPublic"

const saveUser = async (user) => {
    const axiosPublic = useAxiosPublic();

    const currentUser = {
        email: user?.email,
        role: "Gost",
        status: 'verifyed'
    }

    const res = await axiosPublic.put(`/users/${user.email}`, currentUser)
    return res

}

export default saveUser