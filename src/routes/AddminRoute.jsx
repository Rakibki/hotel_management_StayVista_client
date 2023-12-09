import React from 'react'
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import Loader from '../components/Shared/Loader';
import { Navigate } from 'react-router-dom';

const AddminRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [role, isPending] = useRole();
    
    if(isPending || loading) {
        return <Loader />
    }

    if(user && role === "admin") {
        return children;
    }
    return <Navigate to={"/"} />
}

export default AddminRoute