import React from "react";
import NavBar from "./NavBar";
import Slogan from "./Slogan";
import Banner from "./Banner"
import Brand from "./Brand";
import PopularProduct from "./PopularProduct";

const LandingPage = () => {
  return (
    <>
      <section className="container flex flex-col w-full">
        <Slogan />
      </section>
      <section className="container flex flex-col w-full">
        <Banner />
      </section>
      <section className="container flex flex-col w-full">
        <Brand />
      </section>
      <section className="container flex flex-col w-full">
        <PopularProduct />
      </section>
    </>
  );
};

export default LandingPage;
