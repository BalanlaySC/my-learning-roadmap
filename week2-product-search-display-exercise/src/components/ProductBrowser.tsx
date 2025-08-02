/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import type { Product } from '../data/types';
import products from '../data/products'
import ProductCard from '../components/ProductCard'

const ProductBrowser: React.FC = () => {
  const [curProducts, setProducts] = useState<Product[]>(products);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className="p-4 m-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mb-6">My Products</h1>
        <div className="flex items-center space-x-2"> 
          <input
            id='prodSearchBar'
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {curProducts.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
};


export default ProductBrowser;
