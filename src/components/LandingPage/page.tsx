import React from "react";
import NavBar from "./NavBar";
import Slogan from "./Slogan";
import Banner from "./Banner";
import Brand from "./Brand";
import PopularProduct from "./PopularProduct";
import Trending from "./Trending";
import Products from "./Products";
import Store from "./Store";
import Member from "./Member";

const LandingPage = () => {
  return (
    <>
      <section className="container flex flex-col w-full mt-3">
        <Slogan />
      </section>
      <section className="container flex flex-col w-full mt-3">
        <Banner />
      </section>
      <section className="container flex flex-col w-full mt-3">
        <Brand />
      </section>
      <section className="container flex flex-col w-full mt-3">
        <PopularProduct />
      </section>
      <section className="container flex flex-col w-full mt-3">
        <Trending />
      </section>
      <section className="container flex flex-col w-full mt-3">
        <Products />
      </section>
      <section className="container flex flex-col w-full mt-3">
        <Store />
      </section>
      <section className="container w-full mt-3">
        <Member />
      </section>
    </>
  );
};

export default LandingPage;
