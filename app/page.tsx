// src/app/page.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  // Demo products - simple examples that all link to the products page
  const demoProducts = [
    {
      id: 'demo1',
      name: 'Premium Headphones',
      price: 149.99,
      image: 'https://via.placeholder.com/300x300.png?text=Headphones',
      description: 'Wireless noise-cancelling headphones with premium sound quality.'
    },
    {
      id: 'demo2',
      name: 'Smart Watch',
      price: 199.99,
      image: 'https://via.placeholder.com/300x300.png?text=Smart+Watch',
      description: 'Track your fitness goals and stay connected with this premium smartwatch.'
    },
    {
      id: 'demo3',
      name: 'Wireless Speaker',
      price: 89.99,
      image: 'https://via.placeholder.com/300x300.png?text=Speaker',
      description: 'Portable Bluetooth speaker with 20-hour battery life and water resistance.'
    },
    {
      id: 'demo4',
      name: 'Smartphone',
      price: 699.99,
      image: 'https://via.placeholder.com/300x300.png?text=Smartphone',
      description: 'Latest model with advanced camera system and all-day battery life.'
    },
  ];

  // Categories
  const categories = [
    { name: 'Electronics', icon: '📱', link: '/products' },
    { name: 'Clothing', icon: '👕', link: '/products' },
    { name: 'Home & Kitchen', icon: '🏠', link: '/products' },
    { name: 'Sports', icon: '⚽', link: '/products' },
  ];

  return (
    <div className="space-y-14">
      {/* Hero Section */}
      <section className="relative bg-gray-50 rounded-xl overflow-hidden">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to E-Shop</h1>
              <p className="text-xl mb-8 text-gray-600">
                Discover amazing products at unbeatable prices. Shop now and enjoy free shipping on all orders!
              </p>
              <Link 
                href="/products" 
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                Shop All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.name} 
              href={category.link}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 overflow-hidden text-center p-6"
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-teal-500 transition-colors">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-gray-50 py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-gray-800 text-center">Featured Products</h2>
          <p className="text-gray-600 text-center mb-8">Check out our most popular items</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {demoProducts.map((product) => (
              <Link key={product.id} href="/products" className="block">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all border border-gray-100 h-full">
                  <div className="relative h-64 w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                    <p className="text-teal-600 text-xl font-bold">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/products" 
              className="inline-block border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="text-teal-500 text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Fast Delivery</h3>
            <p className="text-gray-600">Get your order delivered to your doorstep in 2-3 business days.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="text-teal-500 text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Secure Payments</h3>
            <p className="text-gray-600">Your payment information is always protected with top-level security.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="text-teal-500 text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Money Back Guarantee</h3>
            <p className="text-gray-600">Not satisfied with your purchase? Get a full refund within 30 days.</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Stay Updated</h2>
          <p className="mb-6 max-w-xl mx-auto text-gray-600">Subscribe to our newsletter to receive updates on new products, special offers, and discount information.</p>
          
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-r-lg font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}