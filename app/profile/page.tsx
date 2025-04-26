'use client';

import React from 'react';
import useAuthStore from '../store/authStore';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const { currentUser, logoutUser } = useAuthStore();
  const router = useRouter();
  
  // Redirect if not logged in
  React.useEffect(() => {
    if (!currentUser) {
      router.push('/auth');
    }
  }, [currentUser, router]);
  
  if (!currentUser) {
    return <div className="container mx-auto px-4 py-12 text-center">Loading...</div>;
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-teal-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4">
            {currentUser.name.charAt(0)}
          </div>
          
          <h1 className="text-2xl font-bold text-gray-800 mb-1">
            {currentUser.name}
          </h1>
          
          <p className="text-gray-600 mb-6">
            {currentUser.email}
          </p>
          
          <div className="w-full mt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Account Information
            </h2>
            
            <div className="mb-4">
              <p className="text-sm text-gray-600">Member since</p>
              <p className="text-gray-800">
                {new Date(currentUser.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          
          <button
            onClick={() => {
              logoutUser();
              router.push('/');
            }}
            className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-md transition-colors font-medium"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}