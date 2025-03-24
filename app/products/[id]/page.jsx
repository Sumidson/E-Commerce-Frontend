

// src/app/products/[id]/page.js
'use client';

import { useState, useEffect } from 'react';
import ProductDetail from '@/components/products/ProductDetail';
import { getProductById } from '@/services/productService';

export default function ProductPage({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductById(id);
        console.log('Products loaded:', data); // Add this line
        setProduct(data);
        setError(null);
      } catch (err) {
        console.error(`Error loading product with id ${id}:`, err);
        setError('Failed to load product. Please try again later.');
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Loading product...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-lg">
        {error}
      </div>
    );
  }

  return <ProductDetail product={product} />;
}
