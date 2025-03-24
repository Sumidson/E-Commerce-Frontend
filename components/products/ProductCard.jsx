'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { addToCart } from '@/services/cartService';
import { getSessionId } from '@/utils/sessionId';

const ProductCard = ({ product }) => {
  const handleAddToCart = async () => {
    try {
      const sessionId = getSessionId();
      await addToCart(sessionId, product.id, 1);
      alert('Product added to cart!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add product to cart');
    }
  };

  return (
    <div className="card flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg">
      <div className="relative w-full h-48">
        <Image
          src={product.imageUrl || '/images/placeholder.jpg'}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
          {product.description || 'No description available'}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">${product.price?.toFixed(2)}</span>
          <div className="flex space-x-2">
            <Link href={`/products/${product.id}`} className="btn btn-secondary text-sm px-3 py-1 bg-gray-200 text-gray-800 hover:bg-gray-300 rounded">
              Details
            </Link>
            <button 
              onClick={handleAddToCart} 
              className="btn btn-primary text-sm px-3 py-1 bg-blue-600 text-white hover:bg-blue-700 rounded"
              disabled={product.stockQuantity <= 0}
            >
              {product.stockQuantity > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
        {product.stockQuantity > 0 && product.stockQuantity < 10 && (
          <p className="text-orange-500 text-xs mt-2">
            Only {product.stockQuantity} left in stock!
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;