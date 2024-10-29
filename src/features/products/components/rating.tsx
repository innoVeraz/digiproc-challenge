import React from "react";
import StarIcon from "./star-icon";
import { Product } from "../types/products";

type RatingProps = {
  rating: Product["rating"];
};

export default function Rating({ rating }: RatingProps) {
  return (
    <div>
      <div className="text-xs mb-1">Ratings</div>
      <div className="flex gap-[2px] mb-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon key={index} fill={index < rating} />
        ))}
      </div>
    </div>
  );
}
