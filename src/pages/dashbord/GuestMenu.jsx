import React, { useState } from "react";
import MenuItem from "../../hooks/MenuItem";
import { TbBrandBooking } from "react-icons/tb";
import useRole from "../../hooks/useRole";
import {GrUserAdmin} from "react-icons/gr"
import HostModal from "../../components/modals/HostRequestModal";

const GuestMenu = () => {
  const [role] = useRole()
  const [isOpen, setIsOpen] = useState(false)

  const modalHandler = () => {
     alert("conti")
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <MenuItem
        icon={TbBrandBooking}
        label="My Bookings"
        address="/dashbord/myBookings"
      />

      {role === "guest" && (
        <div className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer">
          <GrUserAdmin className="w-5 h-5" />

          <span onClick={() => setIsOpen(true)} className="mx-4 font-medium">Become A Host</span>
        </div>
      )}

      <HostModal closeModal={closeModal} modalHandler={modalHandler} isOpen={isOpen} />
    </>
  );
};

export default GuestMenu;
