import { TbLoader } from "react-icons/tb";

const Loading = () => {
  return (
    <div className="container h-[600px] flex justify-center items-center">
      <TbLoader size={80} className="mx-auto animate-spin" />
    </div>
  );
};

export default Loading;
