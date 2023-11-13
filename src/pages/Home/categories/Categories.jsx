import React, { useState } from "react";
import { categoriesData } from "./categoriensData";
import Container from "../../../components/Shared/Container";
import CategoryItem from "./CategoryItem";
import { useSearchParams } from "react-router-dom";

const Categories = () => {
  const [params, setParams] = useSearchParams();
  const myQuery = params.get("category");
  console.log(myQuery);

  return (
    <Container className="mt-10">
      <div className="flex overflow-x-auto justify-between items-center  gap-6 mb-6">
        {categoriesData.map((item, index) => (
          <CategoryItem
            myQuery={myQuery === item.label}
            item={item}
            key={index}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
