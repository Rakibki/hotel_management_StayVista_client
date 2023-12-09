import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxuisSecure from "../../../hooks/useAxuisSecure";
import { getMyBookings } from "../../../api/bookings";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/Shared/Loader";
import TableRow from "./TableRow";

const MyBooking = () => {
  const { user, loading } = useAuth();

  const {
    isPending,
    error,
    data: myBookings,
  } = useQuery({
    queryKey: ["booking", user.email],
    enabled: !loading,
    queryFn: async () => await getMyBookings(user?.email),
  });

  if ((loading, isPending)) <Loader />;

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-slate-500 text-sm">
            <th>TABLE</th>
            <th>LOCATION</th>
            <th>PRICE</th>
            <th>FROM</th>
            <th>TO</th>
            <th>DELETE</th>
            <th>UPDATE</th>
          </tr>
        </thead>
        <tbody>
          {myBookings?.map((booking) => (
            <TableRow key={booking._id} booking={booking} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBooking;
