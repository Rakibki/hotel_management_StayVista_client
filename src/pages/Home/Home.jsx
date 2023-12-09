import useRole from "../../hooks/useRole";
import Categories from "./categories/Categories";
import Rooms from "./rooms/Rooms";
import {useLoaderData, useSearchParams} from "react-router-dom"
 
const Home = () => {

  return (
    <div>
      <Categories />
      <Rooms />
    </div>
  );
};

export default Home;
