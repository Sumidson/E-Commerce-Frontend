'use client';

import React from 'react';
import { clearCart } from '@/services/cartService';
import { getSessionId } from '@/utils/sessionId';
import { useRouter } from 'next/navigation';

const CartSummary = ({ cartItems, onCartUpdate }) => {
  const router = useRouter();
  
  const totalItems = cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;
  const subtotal = cartItems?.reduce((total, item) => total + (item.price * item.quantity), 0) || 0;
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;

  const handleClearCart = async () => {
    if (confirm('Are you sure you want to clear your cart?')) {
      try {
        const sessionId = getSessionId();
        await clearCart(sessionId);
        onCartUpdate();
      } catch (error) {
        console.error('Error clearing cart:', error);
        alert('Failed to clear cart');
      }
    }
  };

  const handleCheckout = () => {
    alert('This is a demo app. Checkout functionality would be implemented here in a real application.');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal ({totalItems} items)</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="border-t pt-3 mt-3 flex justify-between font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <button 
          onClick={handleCheckout} 
          className="btn btn-primary w-full bg-blue-600 text-white hover:bg-blue-700 py-2 px-4 rounded"
          disabled={totalItems === 0}
        >
          Proceed to Checkout
        </button>
        
        <button 
          onClick={() => router.push('/products')} 
          className="btn btn-secondary w-full bg-gray-200 text-gray-800 hover:bg-gray-300 py-2 px-4 rounded"
        >
          Continue Shopping
        </button>
        
        {totalItems > 0 && (
          <button 
            onClick={handleClearCart}
            className="text-red-600 hover:text-red-900 text-sm flex justify-center w-full mt-4"
          >
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default CartSummary;