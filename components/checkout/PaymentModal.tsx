import React from 'react';
import Image from 'next/image';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalAmount: number;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, totalAmount }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Complete Your Payment</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="text-center mb-4">
          <p className="text-gray-600 mb-2">Total Amount</p>
          <p className="text-3xl font-bold text-green-600">${totalAmount.toFixed(2)}</p>
        </div>
        
        <div className="flex justify-center mb-6">
          <div className="relative w-64 h-64">
            <Image
              src="/upi.jpg"
              alt="UPI Payment QR Code"
              fill
              style={{ objectFit: 'contain' }}
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
            onClick={onClose}
            className="flex-1 py-2 px-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              alert('Payment successful!');
              onClose();
            }}
            className="flex-1 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            I've Paid
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;