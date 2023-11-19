import React from 'react'
import useAuth from '../hooks/useAuth'
import useRole from '../hooks/useRole'
import { Navigate } from 'react-router-dom'

const HostRoute = ({children}) => {
    const {user} = useAuth()
    const [role] = useRole();

    // console.log(role);
    
    if(user && role === "host") {
        return children;
    }
    return <Navigate to={"/"} />
}

export default HostRoute