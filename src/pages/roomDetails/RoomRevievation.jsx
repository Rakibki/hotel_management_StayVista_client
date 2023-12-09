import React, { useEffect, useState } from "react";
import Calander from "./Calander";
import Button from "../../components/Shared/Button";
import { formatDistance } from "date-fns";
import useAuth from "../../hooks/useAuth";
import BookingModal from "../../components/modals/BookingModal";



const RoomRevievation = ({ room }) => {
  const [isOpen, setOpen] = useState(false);
const {user} = useAuth()

  const totalDateDay = parseInt(
    formatDistance(new Date(room?.to), new Date(room?.from))
  );

  const totalPrice = totalDateDay * room?.price;

  const selectionRange = {
    startDate: new Date(room.from),
    endDate: new Date(room.to),
    key: "selection",
  };


  const bookingInfo = {
    guest: {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    },
    host: room?.host?.email,
    location: room.location,
    price: totalPrice,
    to: selectionRange.endDate,
    from: selectionRange.startDate,
    title: room.title,
    roodId: room?._id,
    image: room?.image
  }

  const closeModal = () => {
    setOpen(false)
  }

  return (
    <>
      <div className="p-4 col-span-3 m-6 rounded-xl border-[1px] ml-4 w-full border-neutral-200">
        <div className="flex mb-2 items-center gap-2">
          <div className="text-2xl font-semibold ">${room?.price}</div>
          <div>night</div>
        </div>
        <hr />
        <div className="flex justify-center">
          {" "}
          <Calander selectionRange={selectionRange} />
        </div>
        <Button onClick={() => setOpen(true)} label={"Reserve"} />
        <div className="flex mt-4 justify-between">
          <div className="text-xl font-semibold">Total</div>
          <div className="text-xl font-semibold">${totalPrice}</div>
        </div>
      </div>
      <BookingModal bookingInfo={bookingInfo} closeModal={closeModal} isOpen={isOpen} />
    </>
  );
};

export default RoomRevievation;
