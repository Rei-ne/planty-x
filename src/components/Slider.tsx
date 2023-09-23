import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

interface PlantData {
  id: string;
  img: string;
  title: string;
  price: string;
}

interface SliderProps {
  plants: PlantData[];
}

const Slider: React.FC<SliderProps> = ({ plants }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    // console.log("Number of plants:", plants.length);
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % plants.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [plants]);

  return (
    <div className="w-full overflow-hidden relative">
      <div
        className="flex gap-2 lg:gap-10 transition-transform duration-500 transform translate-x-[-100%]"
        style={{
          width: `${plants.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / plants.length)}%)`,
          transitionDuration: "780ms",
        }}
      >
        {plants.map((plant) => (
          <PlantCard
            key={plant.id}
            img={plant.img}
            title={plant.title}
            price={plant.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
