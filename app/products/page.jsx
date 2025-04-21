'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductList from '@/components/products/ProductList';
import { getAllProducts, searchProducts } from '@/services/productService';
import Loading from '../loading';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('default');
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check for category in URL query params
    const category = searchParams.get('category');
    if (category) {
      // You would need to implement getCategoryProducts in your productService
      // For now, we'll just use it for display purposes
      document.title = `E-Shop | ${category.charAt(0).toUpperCase() + category.slice(1)} Products`;
    }

    const loadProducts = async () => {
      try {
        setLoading(true);
        let data;
        
        if (searchTerm.trim()) {
          data = await searchProducts(searchTerm);
        } else {
          data = await getAllProducts();
        }
        
        // Apply sorting if needed
        if (sortBy !== 'default' && data.length > 0) {
          data = sortProducts(data, sortBy);
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
  }, [searchTerm, sortBy, searchParams]);

  const sortProducts = (products, sortOption) => {
    const productsCopy = [...products];
    
    switch (sortOption) {
      case 'price-low-high':
        return productsCopy.sort((a, b) => a.price - b.price);
      case 'price-high-low':
        return productsCopy.sort((a, b) => b.price - a.price);
      case 'name-a-z':
        return productsCopy.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-z-a':
        return productsCopy.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return productsCopy;
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // The search is triggered by the useEffect that depends on searchTerm
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Determine page title based on URL category or search term
  let pageTitle = "All Products";
  const category = searchParams.get('category');
  if (category) {
    pageTitle = `${category.charAt(0).toUpperCase() + category.slice(1)} Products`;
  } else if (searchTerm) {
    pageTitle = `Search Results: "${searchTerm}"`;
  }

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8 mb-6">
        <h1 className="text-3xl font-bold mb-3">{pageTitle}</h1>
        <p className="text-lg opacity-90">
          {searchTerm 
            ? `Showing results for "${searchTerm}"`
            : category 
              ? `Browse our selection of ${category} products`
              : 'Discover our wide range of high-quality products at great prices'
          }
        </p>
      </div>
      
      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <form onSubmit={handleSearch} className="flex flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
          
          <div className="flex items-center">
            <label htmlFor="sort" className="mr-2 text-gray-700">Sort by:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={handleSortChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="default">Featured</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="name-a-z">Name: A to Z</option>
              <option value="name-z-a">Name: Z to A</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Results */}
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="bg-red-50 text-red-600 p-6 rounded-lg text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-xl font-semibold mb-2">Error</p>
          <p>{error}</p>
        </div>
      ) : products.length === 0 ? (
        <div className="bg-gray-50 text-center py-16 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-2xl font-semibold text-gray-600 mb-2">No products found</h3>
          <p className="text-gray-500 max-w-md mx-auto">
            {searchTerm 
              ? `We couldn't find any products matching "${searchTerm}". Try a different search term or browse our categories.`
              : 'There are no products available at the moment. Please check back later.'}
          </p>
        </div>
      ) : (
        <>
          <p className="text-gray-600 mb-4">Showing {products.length} products</p>
          <ProductList products={products} />
        </>
      )}
    </div>
  );
}