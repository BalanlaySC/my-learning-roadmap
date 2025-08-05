import React from 'react';
import type { Game } from '../data/types';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
        <p className="text-gray-600 text-sm">{game.description}</p>
        <h4 className="text-lg mb-2">{5}</h4>
      </div>
    </a>
  );
};

export default GameCard;