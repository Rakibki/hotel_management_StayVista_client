import React from "react";
import MenuItem from "../../hooks/MenuItem";
import { FaUsersCog } from "react-icons/fa";

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={FaUsersCog}
        label="manage User"
        address="/dashbord/manageUser"
      />
    </>
  );
};

export default AdminMenu;
