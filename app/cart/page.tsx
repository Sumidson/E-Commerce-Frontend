'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CheckoutAuth from '../components/checkout/CheckoutAuth';
import { Trash2, Plus, Minus } from 'lucide-react';

// Mock cart items - in a real app, you'd use a cart store
const mockCartItems = [
  { id: 1, name: 'Premium Headphones', price: 149.99, quantity: 2, image: 'https://via.placeholder.com/80x80.png?text=Headphones' },
  // { id: 2, name: 'Smart Watch', price: 199.99, quantity: 1, image: 'https://via.placeholder.com/80x80.png?text=Watch' },
  // { id: 3, name: 'Wireless Speaker', price: 89.99, quantity: 3, image: 'https://via.placeholder.com/80x80.png?text=Speaker' }
];

export default function CartPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState(mockCartItems);
  
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0).toFixed(2);
  };
  
  const calculateTax = () => {
    return (parseFloat(calculateSubtotal()) * 0.07).toFixed(2);
  };
  
  const calculateTotal = () => {
    return (parseFloat(calculateSubtotal()) + parseFloat(calculateTax())).toFixed(2);
  };
  
  const handleProceedToCheckout = () => {
    // In a real app, navigate to checkout page
    router.push('/checkout');
  };
  
  const handleUpdateQuantity = (id: number, change: number) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };
  
  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">Your Cart</h1>
        <p className="text-gray-500 mb-12 text-lg">{cartItems.length} items in your shopping cart</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cartItems.length > 0 ? (
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 bg-gray-50 border-b border-gray-100">
                  <div className="grid grid-cols-12 text-sm font-medium text-gray-500 uppercase">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-right">Price</div>
                    <div className="col-span-2 text-right">Total</div>
                  </div>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6 hover:bg-gray-50 transition duration-150">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-6 flex items-center space-x-4">
                          <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              sizes="80px"
                              style={{ objectFit: 'cover' }}
                              className="rounded-lg"
                            />
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                            <button 
                              onClick={() => handleRemoveItem(item.id)}
                              className="text-sm text-red-500 flex items-center mt-1 hover:text-red-700"
                            >
                              <Trash2 size={14} className="mr-1" /> Remove
                            </button>
                          </div>
                        </div>
                        
                        <div className="col-span-2 flex justify-center">
                          <div className="flex items-center border border-gray-200 rounded-lg">
                            <button 
                              onClick={() => handleUpdateQuantity(item.id, -1)}
                              className="px-3 py-1 hover:bg-gray-100 text-gray-600"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-3 py-1 font-medium text-gray-700">{item.quantity}</span>
                            <button 
                              onClick={() => handleUpdateQuantity(item.id, 1)}
                              className="px-3 py-1 hover:bg-gray-100 text-gray-600"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                        
                        <div className="col-span-2 text-right text-gray-800">
                          ${item.price.toFixed(2)}
                        </div>
                        
                        <div className="col-span-2 text-right font-medium text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                  <button 
                    onClick={() => router.push('/products')}
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md py-16 px-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
                  <p className="text-gray-500 mb-6">Looks like you havent added anything to your cart yet.</p>
                  <button 
                    onClick={() => router.push('/products')}
                    className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-150"
                  >
                    Start Shopping
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-bold mb-6 text-gray-900 pb-4 border-b border-gray-100">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="text-gray-900 font-medium">${calculateSubtotal()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (7%)</span>
                  <span className="text-gray-900 font-medium">${calculateTax()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Discount</span>
                  <span className="text-gray-900 font-medium">$0.00</span>
                </div>
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-gray-900">${calculateTotal()}</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">Including VAT</p>
                </div>
              </div>
              
              {cartItems.length > 0 && (
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Promo code"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 text-sm bg-gray-100 text-gray-800 rounded hover:bg-gray-200 font-medium">
                      Apply
                    </button>
                  </div>
                  
                  <CheckoutAuth onProceed={handleProceedToCheckout} />
                  
                  <div className="mt-6 text-center">
                    <div className="flex items-center justify-center space-x-4 text-gray-500 text-sm">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Secure Checkout
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        Multiple Payment Options
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}