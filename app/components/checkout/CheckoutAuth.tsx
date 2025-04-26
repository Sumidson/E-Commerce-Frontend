'use client';

import React, { useState, useEffect } from 'react';
import useAuthStore from '../../store/authStore';
import { useRouter } from 'next/navigation';
import AuthPage from '../../auth/page';

interface CheckoutAuthProps {
  onProceed: () => void;
}

const CheckoutAuth: React.FC<CheckoutAuthProps> = ({ onProceed }) => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const router = useRouter();
  
  const handleCheckout = () => {
    if (isAuthenticated) {
      onProceed();
    } else {
      setShowAuthModal(true);
    }
  };
  
  // Check if user is authenticated after login/signup
  useEffect(() => {
    if (isAuthenticated && showAuthModal) {
      setShowAuthModal(false);
      onProceed();
    }
  }, [isAuthenticated, showAuthModal, onProceed]);
  
  return (
    <>
      <button 
        onClick={handleCheckout}
        className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg transition-colors font-semibold text-lg"
      >
        Proceed to Checkout
      </button>
      
      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">
                Please login to continue checkout
              </h2>
            </div>
            
            <div className="p-4">
              <AuthPage />
            </div>
            
            <div className="p-4 border-t border-gray-200 flex justify-end">
              <button 
                onClick={() => setShowAuthModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutAuth;