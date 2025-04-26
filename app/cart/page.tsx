'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CheckoutAuth from '../components/checkout/CheckoutAuth';

// Mock cart items - in a real app, you'd use a cart store
const mockCartItems = [
  { id: 1, name: 'Premium Headphones', price: 149.99, quantity: 2, image: 'https://via.placeholder.com/80x80.png?text=Headphones' },
  { id: 2, name: 'Smart Watch', price: 199.99, quantity: 1, image: 'https://via.placeholder.com/80x80.png?text=Watch' },
  { id: 3, name: 'Wireless Speaker', price: 89.99, quantity: 3, image: 'https://via.placeholder.com/80x80.png?text=Speaker' }
];

export default function CartPage() {
  const router = useRouter();
  
  const calculateTotal = () => {
    return mockCartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0).toFixed(2);
  };
  
  const handleProceedToCheckout = () => {
    // In a real app, navigate to checkout page
    router.push('/checkout');
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Cart</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {mockCartItems.length > 0 ? (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="divide-y divide-gray-200">
                {mockCartItems.map((item) => (
                  <div key={item.id} className="p-4 flex items-center">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="80px"
                        style={{ objectFit: 'cover' }}
                        className="rounded-md"
                      />
                    </div>
                    
                    <div className="ml-4 flex-grow">
                      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)} × {item.quantity}</p>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <p className="text-xl text-gray-600">Your cart is empty</p>
            </div>
          )}
        </div>
        
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-800 font-medium">${calculateTotal()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="text-gray-800 font-medium">Free</span>
              </div>
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-gray-800">Total</span>
                  <span className="text-lg font-semibold text-gray-800">${calculateTotal()}</span>
                </div>
              </div>
            </div>
            
            <CheckoutAuth onProceed={handleProceedToCheckout} />
          </div>
        </div>
      </div>
    </div>
  );
}