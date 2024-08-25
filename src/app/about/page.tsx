import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="">
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-center underline">
          About <span className="text-cyan-400 font-bold">VenN Sneaker</span>
        </h1>

        <p className="px-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam natus
          possimus sunt molestiae id officiis? Repellendus impedit voluptatem
          error, distinctio ea ratione unde libero qui fuga eos quae, pariatur
          debitis.
        </p>
        <Image
          src="/logo.png"
          width={400}
          height={400}
          alt="logo"
          className=""
        />
      </div>
      <div className="container flex flex-col gap-2 mt-4">
        <h1>This is Our Story</h1>

        <p className="text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi a,
          praesentium at repellendus earum libero exercitationem, consequatur
          cumque provident, deserunt magnam ipsa. Incidunt pariatur vitae hic
          dignissimos quod ex omnis!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h1 className="mb-2">Who We Are</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              tenetur unde ipsum ducimus molestias ut animi nobis perspiciatis,
              placeat, aperiam natus laboriosam non quo. Ullam ratione dolore
              ipsa mollitia voluptatem.
            </p>
          </div>
          <div>
            <h1 className="mb-2">Our Mission.</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              tenetur unde ipsum ducimus molestias ut animi nobis perspiciatis,
              placeat, aperiam natus laboriosam non quo. Ullam ratione dolore
              ipsa mollitia voluptatem.
            </p>
          </div>
          <div>
            <h1 className="mb-2">Our Vision.</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              tenetur unde ipsum ducimus molestias ut animi nobis perspiciatis,
              placeat, aperiam natus laboriosam non quo. Ullam ratione dolore
              ipsa mollitia voluptatem.
            </p>
          </div>
          <div>
            <h1 className="mb-2">Our Core Values.</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              tenetur unde ipsum ducimus molestias ut animi nobis perspiciatis,
              placeat, aperiam natus laboriosam non quo. Ullam ratione dolore
              ipsa mollitia voluptatem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
