import React from "react";
import NavBar from "./NavBar";
import Slogan from "./Slogan";
import Banner from "./Banner"

const LandingPage = () => {
  return (
    <>
      <section className="container flex flex-col w-full">
        <Slogan />
      </section>
      <section className="container flex flex-col w-full">
        <Banner />
      </section>
    </>
  );
};

export default LandingPage;
