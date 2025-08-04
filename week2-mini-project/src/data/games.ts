import { type Game } from '../data/types';

const games: Game[] = [
  // --- MOBA (3) ---
  {
    id: 'game-001',
    title: 'Nexus Rift',
    developer: 'Vanguard Studios',
    genre: 'MOBA',
    releaseYear: 2018,
    description: 'A classic 5v5 multiplayer online battle arena with strategic depth and a competitive scene.',
    reviews: [
      { user: 'Player1', rating: 5, comment: 'Best MOBA out there!' },
      { user: 'Player2', rating: 4, comment: 'Good game, but a bit of a learning curve.' }
    ]
  },
  {
    id: 'game-002',
    title: 'Eternal Clash',
    developer: 'Mythic Games',
    genre: 'MOBA',
    releaseYear: 2016,
    description: 'Fast-paced MOBA with unique heroes and regular balance updates.',
    reviews: []
  },
  {
    id: 'game-003',
    title: 'Champion\'s Arena',
    developer: 'Pixel Punch',
    genre: 'MOBA',
    releaseYear: 2021,
    description: 'A colorful and accessible MOBA with a large roster of unique characters.',
    reviews: []
  },

  // --- Open-World (6) ---
  {
    id: 'game-004',
    title: 'Skyward Dominion',
    developer: 'Horizon Soft',
    genre: 'Open-World',
    releaseYear: 2020,
    description: 'Explore a massive fantasy world full of secrets, quests, and mythical creatures.',
    reviews: []
  },
  {
    id: 'game-005',
    title: 'Cyber Heist',
    developer: 'Neon Dream',
    genre: 'Open-World',
    releaseYear: 2022,
    description: 'An action RPG set in a sprawling cyberpunk city. Hack, fight, and survive.',
    reviews: [
      { user: 'GamerGirl', rating: 4, comment: 'Amazing visuals and a great story.' }
    ]
  },
  {
    id: 'game-006',
    title: 'The Great Frontier',
    developer: 'Wild West Interactive',
    genre: 'Open-World',
    releaseYear: 2019,
    description: 'Live the life of a cowboy in an expansive, beautiful western landscape.',
    reviews: []
  },
  {
    id: 'game-007',
    title: 'Project Chimera',
    developer: 'BioLogic Studio',
    genre: 'Open-World',
    releaseYear: 2023,
    description: 'A post-apocalyptic world where you must survive against mutated beasts and other players.',
    reviews: []
  },
  {
    id: 'game-008',
    title: 'Echoes of Eternity',
    developer: 'Luminous Core',
    genre: 'Open-World',
    releaseYear: 2017,
    description: 'A vast, magical world with a deep lore and intricate combat system.',
    reviews: []
  },
  {
    id: 'game-009',
    title: 'Urban Legends',
    developer: 'Cityscape Studios',
    genre: 'Open-World',
    releaseYear: 2024,
    description: 'Solve mysteries in a modern-day open world city with a supernatural twist.',
    reviews: []
  },

  // --- Rogue-like (3) ---
  {
    id: 'game-010',
    title: 'Shadow Ascent',
    developer: 'Indie Spark',
    genre: 'Rogue-like',
    releaseYear: 2021,
    description: 'A challenging dungeon crawler with procedurally generated levels and permadeath.',
    reviews: []
  },
  {
    id: 'game-011',
    title: 'Cosmic Drift',
    developer: 'Stellar Play',
    genre: 'Rogue-like',
    releaseYear: 2023,
    description: 'Navigate a spaceship through a dangerous galaxy. Every run is different.',
    reviews: []
  },
  {
    id: 'game-012',
    title: 'Abyssal Descent',
    developer: 'Deep Dive Games',
    genre: 'Rogue-like',
    releaseYear: 2019,
    description: 'A top-down rogue-like with fast-paced combat and a dark fantasy setting.',
    reviews: []
  },

  // --- Survival (3) ---
  {
    id: 'game-013',
    title: 'Endless Winter',
    developer: 'Frostbite Interactive',
    genre: 'Survival',
    releaseYear: 2022,
    description: 'Survive in a harsh, frozen wilderness by crafting tools and managing your resources.',
    reviews: []
  },
  {
    id: 'game-014',
    title: 'Island of Solitude',
    developer: 'Stranded Devs',
    genre: 'Survival',
    releaseYear: 2020,
    description: 'You are stranded on a deserted island. Hunt, build, and explore to stay alive.',
    reviews: []
  },
  {
    id: 'game-015',
    title: 'The Outbreak',
    developer: 'Z-Games',
    genre: 'Survival',
    releaseYear: 2021,
    description: 'A post-apocalyptic survival game where you must scavenge for supplies and fend off hordes.',
    reviews: []
  },
];

export default games;