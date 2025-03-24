
// src/app/products/page.js
'use client';

import { useState, useEffect } from 'react';
import ProductList from '@/components/products/ProductList';
import { getAllProducts, searchProducts } from '@/services/productService';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        let data;
        
        if (searchTerm.trim()) {
          data = await searchProducts(searchTerm);
        } else {
          data = await getAllProducts();
        }
        
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error('Error loading products:', err);
        setError('Failed to load products. Please try again later.');
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    // The search is triggered by the useEffect that depends on searchTerm
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">All Products</h1>
        
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-input rounded-r-none"
          />
          <button
            type="submit"
            className="btn btn-primary rounded-l-none"
          >
            Search
          </button>
        </form>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-600">Loading products...</p>
        </div>
      ) : error ? (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
          {error}
        </div>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}
