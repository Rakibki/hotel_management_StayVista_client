import React from 'react'
import useAuth from '../hooks/useAuth'
import useRole from '../hooks/useRole'
import { Navigate } from 'react-router-dom'
import Loader from '../components/Shared/Loader'

const HostRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [role, isPending] = useRole();

    if(loading || isPending) {
        return <Loader />
    }
    
    if(user, role === "host") {
        return children
    }
    return <Navigate to={"/"} />
}

export default HostRoute