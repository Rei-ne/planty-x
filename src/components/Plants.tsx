import React from "react";
import Slider from "./Slider";
import { plantsData } from "../data";

const Plants: React.FC = () => {
  return (
    <>
      <div className="mt-12 px-8 font-Lora_Reg text-sm py-4">
        <h3 className=" md:px-4 py-2  font-extrabold font-Quicksand_B text-base">
          OUR SHOP
        </h3>
        <p className="md:px-4 py-2  font-Belleza  text-2xl mb-4">
          Here are the best seller from our varieties
        </p>
        <a
          className="rounded-2xl xs:text-xs sm:text-sm bg-black w-full h-fit text-white px-8 py-2 lg:w-full  md:ml-3 font-Quicksand_L"
          href="/shop"
        >
          See all
        </a>
      </div>

      <div className="mt-4  mb-12">
        <Slider plants={plantsData} />
      </div>
    </>
  );
};
export default Plants;
