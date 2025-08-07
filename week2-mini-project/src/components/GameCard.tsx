import React from 'react';
import { Link } from 'react-router-dom';
import type { Game } from '../data/types';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Link to={`/games/${game.id}`}>
      <div className="block bg-white rounded-lg p-4 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
        <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
        <p className="text-gray-600 text-sm">{game.description}</p>
        <h4 className="text-lg mb-2">{5}</h4>
      </div>
    </Link>
  );
};

export default GameCard;