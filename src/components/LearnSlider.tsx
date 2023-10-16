import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import arrowLeft from "../assets/icons/leftIcon.png";
import arrowRight from "../assets/icons/rightIcon.png";

interface Props {
  customer_name: string;
  value: number;
  review: string;
  location: string;
}

const ReviewCard: React.FC<Props> = ({
  customer_name,
  value,
  review,
  location,
}) => {
  return (
    <div className="w-full md:w-4/5 flex flex-col h-fit items-center relative">
      <div className="w-full font-Quicksand_B text-xl text-center p-4 order-2 md:w-full md:text-2xl">
        <p className="lg:h-40">{review}</p>
      </div>
      <div className="customer flex flex-col order-3 w-1/2 self-start pl-4 ml-4">
        <p className="font-Belleza font-extrabold text-base md:text-xl">
          {customer_name}
        </p>
        <p className="font-Quicksand_L text-sm md:text-base">{location}</p>
      </div>
      <div className="order-1 flex items-center justify-center md:flex-col md:items-end  md:absolute md:bottom-0 md:right-0 ">
        <Rating name="read-only" value={value} readOnly />
        <p className="text-lg font-Quicksand_B p-4 md:p-1">{value}/5</p>
      </div>
    </div>
  );
};

interface ReviewsProps {
  ratings: Props[];
}

const Reviews: React.FC<ReviewsProps> = ({ ratings }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ratings.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + ratings.length) % ratings.length
    );
  };
  return (
    <section className="flex flex-col h-full relative items-center justify-center md:flex-row w-full">
      <aside className="flex flex-col w-4/5 text-center md:w-2/5 p-6 items-center justify-center md:text-left md:items-start ">
        <h4 className="font-Belleza font-extrabold p-6 mt-4 md:mt-0 text-base md:px-0">
          REVIEWS
        </h4>
        <p className="font-Quicksand_L text-center text-sm md:text-left md:justify-start md:text-xs lg:text-sm lg:pt-0 md:w-40">
          Shop with confidence by reading customer reviews given by individuals
          who have used Planty'x.
          <br /> Excellent quality and streamlined service are both offered
          here.
        </p>
        <p className="font-Quicksand_L text-xs p-6 md:px-0 md:py-2">
          1479 views
        </p>
      </aside>
      <div className="md:relative">
        <ReviewCard
          customer_name={ratings[currentIndex].customer_name}
          location={ratings[currentIndex].location}
          value={ratings[currentIndex].value}
          review={ratings[currentIndex].review}
        />
        <aside className="flex w-fit absolute bottom-0 right-0 px-4 md:top-0 md:h-12 md:mt-4  ">
          <img
            id="left"
            src={arrowLeft.src}
            alt=""
            onClick={handlePrev}
            style={{ cursor: "pointer" }}
          />

          <img
            id="right"
            src={arrowRight.src}
            alt=""
            onClick={handleNext}
            style={{ cursor: "pointer" }}
          />
        </aside>
      </div>
    </section>
  );
};

export default Reviews;
