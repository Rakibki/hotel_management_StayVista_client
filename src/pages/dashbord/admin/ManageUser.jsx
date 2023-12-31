import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import getAllUsers from "../../../api/getAllusers";
import Loader from "../../../components/Shared/Loader";
import UserDataRow from "./UserDataRow";
import UpdateUserModal from "../../../components/modals/UpdateUserModal";
import useAuth from "../../../hooks/useAuth";

const ManageUser = () => {

  const { isPending, refetch, data: users } = useQuery({
    queryKey: ["users"],
    queryFn: async () => await getAllUsers(),
  });


  if (isPending) <Loader />;

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        {/* <Helmet>
          <title>Manage Users</title>
        </Helmet> */}
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Status
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users &&
                    users?.map((user) => (
                      <UserDataRow refetch={refetch} user={user} key={user._id} />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageUser;
