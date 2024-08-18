import React from "react";
import ShowRoom from "../ShowRoom/ShowRoom";

const Store = () => {
  return (
    <>
      <div className="my-3 flex justify-between items-center">
        <h1 className="uppercase text-xl font-bold">Our Store</h1>
        <p className="font-semibold text-[12px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="grid grid-col-1 lg:grid-cols-2 gap-5 mt-3">
        <ShowRoom />
      </div>
    </>
  );
};

export default Store;
