import React from 'react';
import type { Review } from '../data/types';
import ReviewCard from './ReviewCard';

type ReviewListProps = {
  reviews: Review[] | undefined; // Accept potentially undefined reviews
};

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <section className="mt-8">
      <h2 className="text-3xl font-bold text-slate-800 mb-4">User Reviews</h2>
      {reviews && reviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((review) => (
            <ReviewCard key={review.user} review={review} /> // Assuming user is unique for key
          ))}
        </div>
      ) : (
        <p className="text-slate-500">Be the first to leave a review!</p>
      )}
    </section>
  );
};

export default ReviewList;