import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className=" flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-center underline">Contact Us</h1>

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

      <div>
        <h1 className="mb-2">Say Hello</h1>
        <p className="my-2 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          fugiat veniam in quia eaque, dolores molestiae culpa magni voluptatem
          itaque aliquid modi ducimus tenetur nam. Provident fugit sapiente hic
          distinctio.
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1654.1320511379793!2d105.80036050691749!3d20.981265426366786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1724559889251!5m2!1sen!2s"
          className="w-full h-[400px]"
          loading={"lazy"}
        ></iframe>
      </div>

      <div className="flex flex-row justify-evenly items-center gap-4 my-4">
        <div>
          <h1 className="mb-2">Where to Find Us</h1>
          <p>29/N136/Trieu Khuc Thanh Tri/Ha Noi 11111 VN</p>
        </div>
        <div>
          <h1 className="mb-2s">Contact Us</h1>
          <ul>
            <li>
              <a href="mailto:tuvngdevsl@gmail.com">
                Email: tuvngdevsl@gmail.com
              </a>
            </li>
            <li>
              <a href="https://vutu-portfolio.vercel.app/">
                Website: https://vutu-portfolio.vercel.app/
              </a>
            </li>
            <li>
              <a href="tel:+84865607681">Phone: (+84) 865607681</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 my-4">
        <h1 className="mb-2">Get In Touch</h1>
        <Input placeholder="Your Name" type="text" className=" w-full md:w-[50%]" required/>
        <Input placeholder="Your Mail" type="email" className=" w-full md:w-[50%]" required/>
        <Input placeholder="Website" className=" w-full md:w-[50%]" required/>
        <Textarea placeholder="Your Message" className=" w-full md:w-[50%]" rows={4} required></Textarea>
        <Button className=" w-full md:w-[50%]">Send Message</Button>
      </div>
    </div>
  );
};

export default Contact;
