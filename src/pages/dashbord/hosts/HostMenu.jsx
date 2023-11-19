import React from "react";
import MenuItem from "../../../hooks/MenuItem";
import { MdAddBusiness } from "react-icons/md";
import { FaListUl } from "react-icons/fa6";

const HostMenu = () => {
  return (
    <>
      <MenuItem
        icon={MdAddBusiness}
        label="Add Room"
        address="/dashbord/addRoom"
      />

      <MenuItem
        icon={FaListUl}
        label="My Listing"
        address="/dashbord/myListing"
      />
    </>
  );
};

export default HostMenu;
