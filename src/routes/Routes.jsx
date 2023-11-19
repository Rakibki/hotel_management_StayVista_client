import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import RoomDetails from "../pages/roomDetails/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import { getSingleRoom } from "../api/rooms";
import DashboardLayout from "../layouts/DashboardLayout";
import AddRoom from "../pages/dashbord/hosts/AddRoom";
import MyListing from "../pages/dashbord/hosts/MyListing";
import ManageUser from "../pages/dashbord/admin/ManageUser";
import MyBooking from "../pages/dashbord/guest/MyBooking";
import HostRoute from "./HostRoute";
import AddminRoute from "./AddminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/room/:id",
        element: (
          <PrivateRoute>
            {" "}
            <RoomDetails />{" "}
          </PrivateRoute>
        ),
        loader: ({ params }) => getSingleRoom(params.id),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashbord",
    element: <PrivateRoute> <DashboardLayout /> </PrivateRoute>,
    children: [
      {
        path: "/dashbord/addRoom",
        element: <AddRoom /> ,
      },
      {
        path: "/dashbord/myListing",
        element: <MyListing />,
      },
      {
        path: "/dashbord/manageUser",
        element: <ManageUser /> 
      },
      {
        path: "/dashbord/myBookings",
        element: <MyBooking />,
      },
    ],
  },
]);
