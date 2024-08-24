import Image from "next/image";
import { Button } from "../ui/button";

const Member = () => {
  return (
    <>
      <div className="my-6 flex px-20 py-6 justify-between items-center bg-slate-800 gap-4">
        <div className="flex flex-col gap-4 w-[400px]">
          <h1 className="font-bold text-2xl lg:text-4xl leading-none text-white">Become <br /> A members</h1>
          <p className="text-gray-400 text-[14px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            cumque optio, libero quas, reprehenderit.
          </p>
          <Button className="w-32 bg-white text-black rounded-[15px] hover:text-white">Join Now</Button>
        </div>
        <div>
          <Image width={300} height={300} src="/logo.png" alt="logo" className="w-full rounded-full object-contain h-auto" />
        </div>
      </div>
    </>
  );
};

export default Member;
