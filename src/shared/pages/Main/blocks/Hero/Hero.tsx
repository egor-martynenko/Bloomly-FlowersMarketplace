import Image from "next/image";

export const Hero = () => {
  return (
    <div className=" h-screen flex items-center">
      <div className="w-1/2 relative h-full">
        <Image src={"/heroImage.jpg"} alt={"heroImage"} fill/>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center h-full">
        <h2>Some Title</h2>
        <span>Text</span>
        <div className="mt-auto flex w-full items-center justify-center h-32">
          <button className="w-1/2 h-full cursor-pointer">
            <span className="text-[#156963] font-light">Предыдущее</span>
          </button>
          <button className="bg-[#156963] w-1/2 h-full cursor-pointer">
            <span className="text-white font-light">Следующее</span>
          </button>
        </div>
      </div>
    </div>
  );
};

