import React from 'react';
import { useParams } from 'react-router-dom';

import games from '../data/games';
import ReviewList from './ReviewList';

// interface GameDetailProps {
//   game: Game;
// }

const GameDetailPage: React.FC = () => {
  const { id } = useParams();

  const game = games.find(g => g.id === id);
  
  const averageRating =
    game && game.reviews && game.reviews.length > 0
      ? (
          game.reviews.reduce((acc, review) => acc + review.rating, 0) /
          game.reviews.length
        ).toFixed(1) // Keep one decimal place
      : null;

  if (!game) {
    return <div>Game not found!</div>;
  }
  if (!game) {
    return <div>Game not found!</div>
  }

  return (
    <div className="p-4 md:p-8">
      <section className="bg-slate-800 rounded-lg shadow-xl p-6 md:p-8">
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
                  Based on {game.reviews.length} review(s)
                </p>
              </>
            ) : (
              <p className="text-slate-300">No reviews yet.</p>
            )}
            <button className="bg-cyan-500 text-white font-bold py-2 px-4 rounded-lg mt-4 w-full hover:bg-cyan-600 transition-colors">
              Add Your Review
            </button>
          </div>
        </div>
      </section>

      <ReviewList reviews={game.reviews} />
    </div>
    // TODO: Apply consistency in UI, based frorm GameDetailPage
  );
};

export default GameDetailPage;