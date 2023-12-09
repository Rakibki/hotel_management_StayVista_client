import React, { useEffect, useState } from "react";
import useAxuisSecure from "../../../hooks/useAxuisSecure";
import { getRoomForAdmin } from "../../../api/rooms";
import useAuth from "../../../hooks/useAuth";
import RoomDataRow from "./RoomDataRow";

const MyListing = () => {
  const { user } = useAuth();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getRoomForAdmin(user?.email).then((res) => setRooms(res));
  }, [user]);

  console.log(rooms);

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
          {rooms.map((room) => (
            <RoomDataRow key={room._id} room={room} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyListing;
