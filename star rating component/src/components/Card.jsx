/* eslint-disable no-unused-vars */

import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Card = () => {
  const [rating, setRating] = useState(1);
  const [hover, setHover] = useState(1);

  const oneStar =
    "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.";
  const twoStars =
    "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.";

  const threeStars =
    "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.";
  const fourStars =
    "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.";
  const fiveStars =
    "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our product/service.";

  return (
    <div className="bg-white py-10 px-10 lg:px-20 rounded-xl w-[90%]  lg:w-[35%]">
      <h2 className="font-bold text-lg md:text-xl text-center">
        How many stars would you give to our Online Code Editor?
      </h2>
      <div className="flex justify-center gap-3 my-5">
        {[...Array(5)].map((_, index) => {
          const currentRating = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating)}
              />
              <FaStar
                className="text-3xl lg:text-6xl"
                color={
                  currentRating <= (hover || rating) ? "#ffff00" : "#e6e9fb"
                }
                cursor={"pointer"}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
      <div className="h-[100px] text-md lg:text-md">
        {rating === 1 ? (
          <p>{oneStar}</p>
        ) : rating === 2 ? (
          <p>{twoStars}</p>
        ) : rating === 3 ? (
          <p>{threeStars}</p>
        ) : rating === 4 ? (
          <p>{fourStars}</p>
        ) : rating === 5 ? (
          <p>{fiveStars}</p>
        ) : (
          <p>{oneStar}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
