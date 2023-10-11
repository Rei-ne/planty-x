import React from "react";

interface Props {
  title: string;
  img: string;
  price: string;
}

const PlantCard: React.FC<Props> = ({ title, img, price }) => {
  return (
    <div className="card mt-4 w-full flex flex-col items-center justify-center">
      <div className=" flex items-center flex-col justify-between md:w-1/2 custom-container">
        <img
          className="w-40 h-60 sm:w-60  sm:h-80  rounded-lg"
          src={img}
          alt="plant-image"
        />
        <div className="mt-6 flex justify-between text-sm w-40  sm:w-60    md:w-60 text-center">
          <p className="w-1/2 px-2 flex items-start  font-Quicksand_B text-xs sm:text-sm">
            {title}
          </p>
          <p className="w-1/2 flex justify-end px-2 font-Quicksand_L text-xs sm:text-sm">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
