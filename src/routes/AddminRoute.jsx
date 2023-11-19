import React from 'react'
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';

const AddminRoute = ({children}) => {
    const {user} = useAuth()
    const [role] = useRole();
    

    if(user && role === "host") {
        return children;
    }
    return <Navigate to={"/"} />
}

export default AddminRoute