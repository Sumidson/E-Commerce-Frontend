'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import useAuthStore from '../../store/authStore';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { isAuthenticated, currentUser, logoutUser } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-teal-500">
              E-Shop
            </Link>
          </div>
            
          {/* Centered Navigation Links */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            <Link 
              href="/" 
              className={`${pathname === '/' ? 'text-teal-500' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className={`${pathname === '/products' ? 'text-teal-500' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
            >
              Products
            </Link>
            <Link 
              href="/deals" 
              className={`${pathname === '/deals' ? 'text-teal-500' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
            >
              Deals
            </Link>
            <Link 
              href="/about" 
              className={`${pathname === '/about' ? 'text-teal-500' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
            >
              About
            </Link>
          </div>
          
          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/cart" className="text-gray-600 hover:text-gray-900 p-2 relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </Link>
            
            {isAuthenticated ? (
              <div className="relative">
                <button 
                  onClick={toggleProfile}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {currentUser?.name?.charAt(0) || 'U'}
                  </div>
                </button>
                
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link 
                      href="/profile" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Profile
                    </Link>
                    <button 
                      onClick={() => {
                        logoutUser();
                        setIsProfileOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                href="/auth" 
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Login
              </Link>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Link href="/cart" className="text-gray-600 hover:text-gray-900 p-2 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </Link>
            
            <button 
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className={`${pathname === '/' ? 'text-teal-500' : 'text-gray-600'} block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className={`${pathname === '/products' ? 'text-teal-500' : 'text-gray-600'} block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/deals" 
              className={`${pathname === '/deals' ? 'text-teal-500' : 'text-gray-600'} block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              Deals
            </Link>
            <Link 
              href="/about" 
              className={`${pathname === '/about' ? 'text-teal-500' : 'text-gray-600'} block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link 
                  href="/profile" 
                  className="text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <button 
                  onClick={() => {
                    logoutUser();
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-600 block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link 
                href="/auth" 
                className="text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}