import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import UpdateUserModal from "../../../components/modals/UpdateUserModal";
import updareRole from "../../../hooks/updareRole";
import {toast} from "react-hot-toast"

const UserDataRow = ({user, refetch}) => {
  const [isOpen, setIsEditModalOpen] = useState(false);
  // const {user} = useAuth();

  const modalHandler = async (role) => {
    try{
      await updareRole(role, user.email)
      toast.success("update role success")
      refetch()
    }
    catch(e) {
      console.log(e.message);
    }
  }


  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.role}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {user?.status ? (
          <p
            className={`${
              user.status === "Verified" ? "text-green-500" : "text-yellow-500"
            } whitespace-no-wrap`}
          >
            {user.status}
          </p>
        ) : (
          <p className="text-red-500 whitespace-no-wrap">Unavailable</p>
        )}
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span onClick={() => setIsEditModalOpen(true)} className="relative">
            Update Role
          </span>
        </span>
        <UpdateUserModal
          setIsEditModalOpen={setIsEditModalOpen}
          isOpen={isOpen}
          modalHandler={modalHandler}
          user={user}
        />
      </td>
    </tr>
  );
};

export default UserDataRow;
