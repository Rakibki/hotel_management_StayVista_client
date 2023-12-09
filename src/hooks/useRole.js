import React, { useEffect, useState } from 'react'
import useAuth from './useAuth'
import useAxuisPublic from './useAxiosPublic'
import {useQuery} from "@tanstack/react-query"

const useRole = () => {
    const AxuisPublic = useAxuisPublic() 
    const {user, loading} = useAuth()

const { isPending, data:role } = useQuery({
    enabled: !loading && !!user.email,
    queryKey: ['useRole', user?.email],
    queryFn: () => AxuisPublic.get(`/user/${user?.email}`)
      .then((res) => {
        return res.data.role
      })
  })
  return [role, isPending]
}

export default useRole