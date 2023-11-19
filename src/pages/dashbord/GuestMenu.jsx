import React from 'react'
import MenuItem from '../../hooks/MenuItem'
import { TbBrandBooking } from "react-icons/tb";

const GuestMenu = () => {
  return (
    <>
       <MenuItem
        icon={TbBrandBooking}
        label="My Bookings"
        address="/dashbord/myBookings"
      />
    </>
  )
}

export default GuestMenu