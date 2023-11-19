import { Outlet } from "react-router-dom";
import Sideber from "../pages/dashbord/dashbord/Sideber";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex">
        <Sideber />
      <div className="flex-1  md:ml-64">
        <div className="p-5">
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
