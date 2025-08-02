import React from 'react';
import type { Product } from '../data/types';

interface ProductCardProps {
  product: Product;
}

const ProjectCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200"
    >
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm">{product.description}</p>
        <h4 className="text-lg mb-2">{product.price}</h4>
      </div>
    </a>
  );
};

export default ProjectCard;