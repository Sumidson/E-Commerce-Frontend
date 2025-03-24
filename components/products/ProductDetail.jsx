'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { addToCart } from '@/services/cartService';
import { getSessionId } from '@/utils/sessionId';

const ProductDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= product.stockQuantity) {
      setQuantity(value);
    }
  };

  const handleAddToCart = async () => {
    try {
      const sessionId = getSessionId();
      await addToCart(sessionId, product.id, quantity);
      alert('Product added to cart!');
      router.push('/cart');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add product to cart');
    }
  };

  if (!product) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl text-gray-600">Product not found</h3>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/2 relative h-80 md:h-auto">
          <Image
            src={product.imageUrl || '/images/placeholder.jpg'}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="p-6 md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          
          <div className="mb-4">
            <span className="text-2xl font-bold text-blue-600">${product.price?.toFixed(2)}</span>
          </div>
          
          <div className="mb-4">
            <p className="text-gray-700">
              Status: 
              <span className={product.stockQuantity > 0 ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                {product.stockQuantity > 0 ? ' In Stock' : ' Out of Stock'}
              </span>
            </p>
            {product.stockQuantity > 0 && (
              <p className="text-gray-700 mt-1">
                Available: <span className="font-semibold">{product.stockQuantity}</span>
              </p>
            )}
          </div>
          
          {product.stockQuantity > 0 && (
            <>
              <div className="mb-6">
                <label htmlFor="quantity" className="block text-gray-700 mb-2">Quantity:</label>
                <div className="flex items-center">
                  <button
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="px-3 py-1 bg-gray-200 rounded-l"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    max={product.stockQuantity}
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-16 text-center border-t border-b border-gray-300 py-1"
                  />
                  <button
                    onClick={() => quantity < product.stockQuantity && setQuantity(quantity + 1)}
                    className="px-3 py-1 bg-gray-200 rounded-r"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="btn btn-primary w-full bg-blue-600 text-white hover:bg-blue-700 py-2 px-4 rounded"
              >
                Add to Cart
              </button>
            </>
          )}
          
          <button
            onClick={() => router.back()}
            className="mt-4 w-full text-center text-blue-600 hover:underline"
          >
            Back to Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;