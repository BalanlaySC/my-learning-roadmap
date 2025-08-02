import React, { useEffect, useState } from 'react';
import type { Product } from '../data/types';
import products from '../data/products'
import ProductCard from '../components/ProductCard'

const ProductBrowser: React.FC = () => {
  const [curProducts, setProducts] = useState<Product[]>(products);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => {
      // Simulate fetching
      Promise.resolve(products)
        .then((data) => {
          setProducts(data);
        })
        .catch(() => {
          setError("Products not found.");
        })
        .finally(() => {
          setLoading(false);
        });
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  };

  const filteredProducts = curProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
    <div className="p-4 m-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mb-6">My Products</h1>
      </div>
      <p className="text-center p-8">Loading products...</p>
    </div>
    );
  }

  if (error) {
    return (
    <div className="p-4 m-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mb-6">My Products</h1>
      </div>
      <p className="text-center p-8 text-red-500">{error}</p>
    </div>
    );
  }


  return (
    <div className="p-4 m-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mb-6">My Products</h1>
        <div className="flex items-center space-x-2"> 
          <input
            id='prodSearchBar'
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};


export default ProductBrowser;
