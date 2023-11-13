import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import queryString from "query-string";

const CategoryItem = ({ item, myQuery }) => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = () => {
    let currentQuery = {};

    if (params) {
      currentQuery = queryString.parse(params.toString());
    }

    const updateQuery = { ...currentQuery, category: item.label };

    const url = queryString.stringifyUrl({
      url: "/",
      query: updateQuery,
    });

    navigate(url);
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        myQuery ? "text-red-700" : "text-black"
      } cursor-pointer gap-2 hover:text-neutral-800 flex flex-col p-3 justify-center items-center border-b-2 transition`}
    >
      <div className="text-sm font-medium">{item.label}</div>
      <div className="text-4xl">{<item.icon />}</div>
    </div>
  );
};

export default CategoryItem;
