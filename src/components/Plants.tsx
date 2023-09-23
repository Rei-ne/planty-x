import React from "react";
import Slider from "./Slider";

const Plants: React.FC = () => {
  const plantsData = [
    {
      id: "1",
      title: "Ore Stera",
      img: "/images/plant1.png",
      price: "$99.00",
    },
    {
      id: "2",
      title: "Reine Vera",
      img: "/images/plant2.png",
      price: "$109.00",
    },
    {
      id: "3",
      title: "Lina Pothos",
      img: "/images/plant3.jpg",
      price: "$59.99",
    },
    {
      id: "4",
      title: "Jasmine Lily",
      img: "/images/plant4.jpg",
      price: "$95.00",
    },
    {
      id: "5",
      title: "Mokeji Bud",
      img: "/images/plant5.jpg",
      price: "$209.00",
    },
  ];

  return (
    <>
      <div className="px-8 font-Lora_Reg text-sm md:w-1/2">
        <h3 className="p-4">OUR SHOP</h3>
        <p className=" p-4 font-Belleza font-extrabold text-xl md:w-1/2">
          Here are the best seller from our varieties
        </p>
        <a
          className="p-4 rounded-xl text-xs bg-black w-full h-fit text-white  py-2 ml-2 lg:w-[158px] lg:text-xs lg:rounded-2xl"
          href="/shop"
        >
          See all
        </a>
      </div>

      <div className="mb-12">
        <Slider plants={plantsData} />
      </div>
    </>
  );
};
export default Plants;
