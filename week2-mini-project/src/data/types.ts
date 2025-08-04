export type Game = {
  id: string;
  title: string;
  developer: string;
  genre: 'MOBA' | 'Open-World' | 'Rogue-like' | 'Survival';
  releaseYear: number;
  description: string;
  reviews: Review[];
}

export interface Review {
  user: string;
  rating: number;
  comment: string;
}