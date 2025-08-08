import React from 'react';
import type { Review } from '../data/types';

type ReviewCardProps = {
  review: Review;
};

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-slate-700 p-4 rounded-lg">
      <div className="flex items-center mb-2">
        <p className="font-bold text-white">{review.user}</p>
        <p className="ml-auto text-lg font-bold text-yellow-400">{review.rating} ★</p>
      </div>
      <p className="text-slate-300">{review.comment}</p>
    </div>
  );
};

export default ReviewCard;