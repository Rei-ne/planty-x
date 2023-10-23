import React from "react";
import Slider from "./Slider";
import { plantsData } from "../data";
// import arrow from "../assets/icons/arrowBlack.png";

const PlantSlider: React.FC = () => {
  return (
    <section className="h-full w-full justify-evenly flex flex-col my-4">
      <div className="px-8 font-Lora_Reg text-sm py-4 ">
        <h3 className="md:px-6  font-Quicksand_L text-base px-2">OUR SHOP</h3>
        <p className="text-left font-Belleza text-xl font-extrabold mt-4 lg:w-4/5 lg:text-2xl lg:p-4  px-2">
          Here are the best seller from our varieties
        </p>
        <div className="w-1/2 px-2 md:px-4 mt-6 lg:mt-2 flex ">
          <a
            className="xs:text-xs sm:text-sm bg-black w-[120px] text-white py-2 px-4 md:my-4 lg:px-8 rounded-3xl font-Quicksand_L"
            href="/shop"
          >
            See all
          </a>
        </div>
      </div>

      <div className="">
        <Slider plants={plantsData} />
      </div>
    </section>
  );
};
export default PlantSlider;
