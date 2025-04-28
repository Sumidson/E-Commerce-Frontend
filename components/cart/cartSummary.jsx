'use client';

import React, { useState } from 'react';
import { clearCart } from '@/services/cartService';
import { getSessionId } from '@/utils/sessionId';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const CartSummary = ({ cartItems, onCartUpdate }) => {
  const router = useRouter();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  
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
    setShowPaymentModal(true);
  };

  const closePaymentModal = () => {
    setShowPaymentModal(false);
  };

  const handlePaymentComplete = () => {
    alert('Payment successful! Thank you for your order.');
    setShowPaymentModal(false);
    // You could redirect to an order confirmation page here
    // router.push('/order-confirmation');
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

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Complete Your Payment</h2>
              <button 
                onClick={closePaymentModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="text-center mb-4">
              <p className="text-gray-600 mb-2">Total Amount</p>
              <p className="text-3xl font-bold text-green-600">${total.toFixed(2)}</p>
            </div>
            
            <div className="flex justify-center mb-6">
              <div className="relative w-64 h-64">
                <Image
                  src="/upi.jpg"
                  alt="UPI Payment QR Code"
                  width={256}
                  height={256}
                  className="rounded-lg"
                />
              </div>
            </div>
            
            <div className="text-center text-gray-600 mb-4">
              <p>Scan the QR code with any UPI app to pay</p>
              <p className="text-sm mt-1">Payment ID: {Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={closePaymentModal}
                className="flex-1 py-2 px-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handlePaymentComplete}
                className="flex-1 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                I've Paid
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSummary;