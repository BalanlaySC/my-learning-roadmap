import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import games from '../data/games';
import ReviewList from './ReviewList';
import ReviewForm from '../components/ReviewForm';
import Card from './Card';

import type { Review } from '../data/types';

const GameDetailPage: React.FC = () => {
  const { id } = useParams();
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [game, setGame] = useState(games.find(g => g.id === id));
  const [isFormVisible, setFormVisible] = useState(false);
  const [reviewObj, setReviewObj] = useState({
    user: '',
    rating: 5,
    comment: ''
  });
  const [reviews, setReviews] = useState<Review[]>(game?.reviews || []);

  const handleAddReviewClick = () => {
    setFormVisible(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReviews(prevReviews => [...prevReviews, reviewObj]);
    // Reset
    setReviewObj(prevReviews => ({
      ...prevReviews,
      user: '',
      rating: 5,
      comment: ''
    }));
    setFormVisible(false);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setReviewObj(prevReviews => ({
      ...prevReviews,
      [id]: id === 'rating' ? Number(value) : value,
    }));
  };
  
  const averageRating =
    game && reviews && reviews.length > 0
      ? (
          reviews.reduce((acc, review) => acc + review.rating, 0) /
          reviews.length
        ).toFixed(1) // Keep one decimal place
      : null;

  if (!game) {
    return <div>Game not found!</div>;
  }

  return (
    <>
      <Card variant="dark" className="p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Title and Details */}
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
              {game.title}
            </h1>
            <p className="text-slate-400 font-semibold text-lg mb-4">
              By {game.developer} • {game.releaseYear} • {game.genre}
            </p>
            <p className="text-slate-200 text-base">
              {game.description}
            </p>
          </div>

          {/* Right Column: Ratings and Actions */}
          <div className="bg-slate-700 rounded-lg p-4 flex flex-col items-center justify-center text-center">
            {averageRating ? (
              <>
                <h2 className="text-slate-300 text-lg font-bold">Average Rating</h2>
                <p className="text-4xl font-bold text-yellow-400 my-2">{averageRating}</p>
                <p className="text-slate-400 text-sm">
                  Based on {reviews.length} review(s)
                </p>
              </>
            ) : (
              <p className="text-slate-300">No reviews yet.</p>
            )}
            <button
              onClick={handleAddReviewClick}
              className="bg-cyan-500 text-white font-bold py-2 px-4 rounded-lg mt-4 w-full hover:bg-cyan-600 transition-colors"
            >
              Add Your Review
            </button>
          </div>
        </div>
      </Card>

      <ReviewList reviews={reviews} />
      <div className="mt-8">
        {isFormVisible && <ReviewForm 
          reviewObj={reviewObj}
          onFormChange={handleFormChange}
          onSubmit={handleSubmit}
        />}
      </div>
    </>
  );
};

export default GameDetailPage;