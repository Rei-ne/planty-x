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
    <div className="w-full md:2/4 lg:w-3/4 self-center flex flex-col h-full items-center">
      <div className="md:w-[400px] lg:w-full md:self-start self-center  ">
        <div className="w-full font-Quicksand_B text-base md:text-xl text-center p-4 lg:text-3xl md:text-left xs:h-60 sm:h-32 md:h-52 lg:h-60 my-4 md:m-0  ">
          <p className="">{review}</p>
        </div>
        <div className="flex py-2 mt-8 md:mt-0 ">
          <div className="customer flex flex-col w-1/2 self-center md:self-start p-4 ml-4 md:ml-0">
            <p className="font-Belleza font-extrabold text-xl">
              {customer_name}
            </p>
            <p className="font-Quicksand_L text-xs sm:text-base">{location}</p>
          </div>
          <div className="flex flex-col   w-1/2  p-4 ml-4 md:ml-0 items-end">
            <Rating name="read-only" value={value} readOnly />
            <p className="text-base font-Quicksand_B  p-1">{value}/5</p>
          </div>
        </div>
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
    <section className="flex flex-col h-full relative items-center justify-center lg:justify-between md:flex-row w-full md:justify-around ">
      <aside className="flex flex-col  xs:text-center lg:w-1/5 h-full  p-6 items-center justify-start md:text-left md:items-start md:ml-8">
        <h4 className="font-Belleza font-extrabold p-6 lg:mt-4 text-xl md:text-base md:px-0 ">
          REVIEWS
        </h4>
        <p
          className="font-Quicksand_L text-justify w-4/5 md:text-left md:justify-center text-sm  lg:pt-0 md:w-4/5"
          style={{ maxHeight: "100%", overflow: "auto" }}
        >
          Shop with confidence by reading customer reviews given by individuals
          who have used Planty'x.
          <br /> Excellent quality and streamlined service are both offered
          here.
        </p>
        <p className="font-Quicksand_L text-xs p-6 md:px-0 md:py-2">
          1479 views
        </p>
      </aside>

      <ReviewCard
        customer_name={ratings[currentIndex].customer_name}
        location={ratings[currentIndex].location}
        value={ratings[currentIndex].value}
        review={ratings[currentIndex].review}
      />
      <aside className="flex w-4/5 text-center md:w-2/4 lg:w-1/5 md:h-[400px] p-6 items-center justify-center md:text-left md:items-start ">
        <div className="flex py-4 gap-2">
          <img
            id="left"
            src={arrowLeft.src}
            alt=""
            onClick={handlePrev}
            className="w-10 h-10 cursor-pointer"
          />

          <img
            id="right"
            src={arrowRight.src}
            alt=""
            onClick={handleNext}
            className="w-10 h-10 cursor-pointer"
          />
        </div>
      </aside>
    </section>
  );
};

export default Reviews;
