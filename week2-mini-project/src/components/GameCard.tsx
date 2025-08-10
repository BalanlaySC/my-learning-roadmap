import React from 'react';
import { Link } from 'react-router-dom';
import type { Game } from '../data/types';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const averageRating =
    game && game.reviews && game.reviews.length > 0
      ? (
          game.reviews.reduce((acc, review) => acc + review.rating, 0) /
          game.reviews.length
        ).toFixed(1) // Keep one decimal place
      : null;

  return (
    <Link to={`/games/${game.id}`}>
      <div className="block bg-white rounded-lg p-4 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
        <h3 className="text-xl font-bold mb-2">{game.title}</h3>
        <p className="text-gray-600 text-sm">{game.description}</p>
        <h4 className="text-lg mb-2">
          {averageRating ? (
              averageRating
            ) : (
              'No reviews yet.'
            )}
        </h4>
      </div>
    </Link>
  );
};

export default GameCard;