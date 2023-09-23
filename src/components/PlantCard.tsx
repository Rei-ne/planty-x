import React from "react";

interface Props {
  title: string;
  img: string;
  price: string;
}

const PlantCard: React.FC<Props> = ({ title, img, price }) => {
  return (
    <div className="card mt-4 w-full flex flex-col items-center">
      <div className=" flex items-center flex-col justify-between md:w-1/2 custom-container">
        <img className="w-60 h-80 " src={img} alt="plant-image" />
        <div className="mt-6 flex justify-between text-sm w-full md:w-60">
          <p className=" font-Quicksand_B">{title}</p>
          <p className=" font-Quicksand_L">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
