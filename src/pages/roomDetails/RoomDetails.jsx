import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../../components/Shared/Loader';
import Container from '../../components/Shared/Container';

const RoomDetails = () => {
    const [room, setroom] = useState({});
    const [loadding, setLoadding] = useState(false);
    const {id} = useParams()


    useEffect(() => {
        setLoadding(true)
        setLoadding(true);
        fetch("/rooms.json")
          .then((res) => res.json())
          .then((data) => {
            const currentRoom = data.find((item) => item._id === id)
            setroom(currentRoom)
            setLoadding(false)
          });
      }, []);

      if (loadding) {
        return <Loader />;
      }


  return (
    <Container>
        <div>
            <h1>{room?.title}</h1>
        </div>
    </Container>
  )
}

export default RoomDetails