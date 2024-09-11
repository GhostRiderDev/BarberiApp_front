import React from "react";

type RatingProps = {
  rating: number;
};

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const starTotal = 5;
  const starPercentage = (rating / starTotal) * 100;
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

  return (
    <div className="relative inline-block text-gray-400">
      <div
        className="absolute top-0 left-0 overflow-hidden whitespace-nowrap"
        style={{ width: starPercentageRounded }}
      >
        <span className="text-yellow-400">★★★★★</span>
      </div>
      <span>★★★★★</span>
    </div>
  );
};

export default Rating;
