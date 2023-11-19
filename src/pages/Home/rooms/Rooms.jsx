import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "../../../components/Shared/Loader";
import Container from "../../../components/Shared/Container";
import { useLoaderData, useSearchParams } from "react-router-dom";
import Heading from "../../../components/Shared/Heading";
import { getAllRooms } from "../../../api/rooms";

const Rooms =  () => {
  const [rooms, setrooms] = useState([]);
  const [loadding, setLoadding] = useState(false);

  const [params, setParams] = useSearchParams();
  const myQuery = params.get("category");


  useEffect(() => {
    setLoadding(true);
    getAllRooms()
      .then((data) => {
        if (myQuery) {
          const filterData = data.filter((item) => item.category === myQuery);
          setrooms(filterData);
          setLoadding(false);
        } else {
          setrooms(data);
          setLoadding(false);
        }
      });
  }, [myQuery]);

  if (loadding) {
    return <Loader />;
  }

  return (
    <Container>
      {rooms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4">
          {rooms.map((room) => (
            <Card key={room._id} room={room} />
          ))}
        </div>
      ) : (
        <Heading
          title={"No rooms abavible in this category"}
          subtitle={"please select others category"}
          center={true}
        />
      )}
    </Container>
  );
};

export default Rooms;
