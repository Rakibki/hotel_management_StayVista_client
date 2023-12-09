import React from 'react'
import useAxuisSecure from './useAxuisSecure';

const updareRole = async (role, email) => {
    const axiosSecure = useAxuisSecure();
    const currentUser = {
        role: role,
        email: email,
        status: 'verifyed',
    }
    const res = await axiosSecure.put(`/user/update-Role/${email}`, currentUser)
    return res
}
export default updareRole