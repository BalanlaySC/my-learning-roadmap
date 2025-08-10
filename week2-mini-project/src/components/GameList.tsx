import React, { useEffect, useState } from 'react';
import type { Game } from '../data/types';
import games from '../data/games'
import GameCard from '../components/GameCard'

const GameList: React.FC = () => {
  const [curGames, setGames] = useState<Game[]>(games);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Simulate fetching
      Promise.resolve(games)
        .then((data) => {
          setGames(data);
        })
        .catch(() => {
          setError("Games not found.");
        })
        .finally(() => {
          setLoading(false);
        });
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
    <div className="p-4 m-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mb-6">Browse Games</h1>
      </div>
      <p className="text-center p-8">Loading games...</p>
    </div>
    );
  }

  if (error) {
    return (
    <div className="p-4 m-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mb-6">Browse Games</h1>
      </div>
      <p className="text-center p-8 text-red-500">{error}</p>
    </div>
    );
  }


  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mb-6">Browse Games</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {curGames.map((myGame) => (
            <GameCard key={myGame.id} game={myGame} />
        ))}
      </div>
    </>
  );
};


export default GameList;