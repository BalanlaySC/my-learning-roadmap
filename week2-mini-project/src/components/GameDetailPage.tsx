import React from 'react';
import { useParams } from 'react-router-dom';

import games from '../data/games';

// interface GameDetailProps {
//   game: Game;
// }

const GameDetailPage: React.FC = () => {
  const { id } = useParams();

  const game = games.find(g => g.id === id);

  if (!game) {
    return <div>Game not found!</div>
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto text-center">
      <h2 className="text-xl font-bold text-gray-800 mb-1">{game.title}</h2>
      <p className="text-gray-600 text-sm mb-4">{game.releaseYear}</p>
      <p className="text-gray-600 text-sm mb-4">{game.developer}</p>
      <p className="text-gray-600 text-sm mb-4">{game.genre}</p>
      <p className="text-gray-600 text-sm mb-4">{game.description}</p>
    </div>
  );
};

export default GameDetailPage;