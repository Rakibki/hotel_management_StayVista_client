import React, { useEffect, useState } from "react";
import Calander from "./Calander";
import Button from "../../components/Shared/Button";
import { formatDistance } from "date-fns";

const RoomRevievation = ({ room }) => {

    // const totalDateDay = parseInt(
    //   formatDistance(new Date(room?.to), new Date(room?.from))
    // ).split(" ")[0];
    // const totalPrice = totalDateDay * room?.price

    

  return (
    <div className="p-4 col-span-3 m-6 rounded-xl border-[1px] ml-4 w-full border-neutral-200">
      <div className="flex mb-2 items-center gap-2">
        <div className="text-2xl font-semibold ">${room?.price}</div>
        <div>night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        {" "}
        <Calander />
      </div>
      <Button label={"Reserve"} />
      <div className="flex mt-4 justify-between">
        <div className="text-xl font-semibold">Total</div>
        <div className="text-xl font-semibold">$1240</div>
      </div>
    </div>
  );
};

export default RoomRevievation;
