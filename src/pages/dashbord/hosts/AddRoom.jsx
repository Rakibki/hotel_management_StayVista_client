import React, { useState } from "react";
import AddRoomForm from "../../../components/Shared/AddRoomForm";
import UploadImage from "../../../api/UploadImage";
import useAuth from "../../../hooks/useAuth";
import { AddRoomInDB } from "../../../api/rooms";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddRoom = () => {
  const { user } = useAuth();
  const [uploadButtonText, setUplodeButtonText] = useState("Photo Upload");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const location = e.target.location.value;
    const category = e.target.category.value;
    const imageFile = e.target.image.files[0];
    const title = e.target.title.value;
    const price = e.target.price.value;
    const guests = e.target.total_guest.value;
    const bedrooms = e.target.bedrooms.value;
    const bathrooms = e.target.bathrooms.value;
    const description = e.target.description.value;
    const from = dates.startDate;
    const to = dates.endDate;
    const image = await UploadImage(imageFile);

    const host = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    };

    const roomDate = {
      location,
      category,
      title,
      price,
      guests,
      bedrooms,
      bathrooms,
      description,
      from,
      to,
      image,
      host,
    };
    setLoading
    try {
        setLoading(true)
        const DB_response = await AddRoomInDB(roomDate);
        if (DB_response.insertedId) {
          setUplodeButtonText("Uploded"), toast.success("Room Added Successfully");
          setLoading(false)
          navigate("/dashbord/myListing");
        }
    }catch(e) {
        setLoading(false)
        console.log(e);
    }
  };

  const handleCalanderChange = (ranages) => {
    setDates(ranages.selection);
  };

  const handleImageChange = (image) => {
    setUplodeButtonText(image?.name);
    console.log(image);
    console.log("DFgfdg");
  };

  return (
    <div>
      <AddRoomForm
        dates={dates}
        handleCalanderChange={handleCalanderChange}
        handleSubmit={handleSubmit}
        handleImageChange={handleImageChange}
        uploadButtonText={uploadButtonText}
        loading={loading}
      />
    </div>
  );
};

export default AddRoom;
