import React, { useEffect, useState } from 'react'
import useAuth from './useAuth'
import useAxuisPublic from './useAxiosPublic'

const useRole = () => {
    const AxuisPublic = useAxuisPublic() 
    const [role, setRole] = useState(null)
    const {user} = useAuth()
    
   useEffect(() => {
    AxuisPublic.get(`/user/${user?.email}`)
    .then((res) => {
        setRole(res.data.role)
    })  
   }, [user])

    return [role]
}

export default useRole