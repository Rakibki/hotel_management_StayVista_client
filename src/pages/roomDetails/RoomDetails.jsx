import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Shared/Loader";
import Container from "../../components/Shared/Container";
import Header from "./Header";
import RoomInfo from "./RoomInfo";
import RoomRevievation from "./RoomRevievation";

const RoomDetails = () => {
  const [room, setroom] = useState({});
  const [loadding, setLoadding] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoadding(true);
    setLoadding(true);
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        const currentRoom = data.find((item) => item._id === id);
        setroom(currentRoom);
        setLoadding(false);
      });
  }, []);

  if (loadding) {
    return <Loader />;
  }

  return (
    <Container>
      <div className="w-[80%] mx-auto">
        <Header roomData={room} />

        <div className="grid grid-cols-7">
          <RoomInfo roomData={room} />
          <RoomRevievation room={room} />
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
