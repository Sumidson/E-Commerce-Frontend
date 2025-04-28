'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">About E-Shop</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-teal-500">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Journey</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded with a vision to revolutionize online shopping, E-Shop emerged from a simple idea: 
                what if shopping online could feel as personal and reliable as visiting your favorite local store?
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we have grown into a trusted marketplace connecting customers with premium products across 
                categories. Our passion for excellence drives us to continuously innovate and elevate your 
                shopping experience. Behind every transaction is our commitment to quality, transparency, 
                and customer satisfaction.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-teal-500">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">The E-Shop Difference</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-teal-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">Curated Excellence</span>
                    <p className="text-gray-600 mt-1">We handpick every product in our inventory, ensuring only the finest quality reaches your doorstep.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-teal-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">Lightning-Fast Delivery</span>
                    <p className="text-gray-600 mt-1">Our optimized logistics network ensures your purchases arrive promptly, wherever you are.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-teal-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">Customer-First Support</span>
                    <p className="text-gray-600 mt-1">Our dedicated team is available 24/7 to assist you with personalized care and expert advice.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-semibold mb-2 text-center text-gray-800">Meet Our Team</h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">The talented individuals behind E-Shops success, working together to deliver exceptional shopping experiences.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden group"
              >
                <div className="relative">
                  <Image
                  height={600}
                  width={600}
                    src="/WhatsApp Image 2025-04-28 at 20.23.01_a3dfb656.jpg" 
                    alt="Avi Srivastava"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">Avi Srivastava</h3>
                  <p className="text-teal-600 mb-2 font-medium">S24CSEU1207</p>
                  <p className="text-gray-600 text-sm mb-4">
                       Frontend and Backend Developer
                  </p>
                  <div className="flex justify-center space-x-3">
                    <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/avi-srivastava-567067306/" className="text-gray-400 hover:text-teal-500 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Team Member 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden group"
              >
                <div className="relative">
                  <Image
                    height={600}
                    width={600}
                    src="/DSC_0034.JPG" 
                    alt="Sumidson S Henry"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">Sumidson S Henry</h3>
                  <p className="text-teal-600 mb-2 font-medium">S24CSEU1199</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Frontend Developer
                  </p>
                  <div className="flex justify-center space-x-3">
                    <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/sumidson-s-henry-508081322/" className="text-gray-400 hover:text-teal-500 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Team Member 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden group"
              >
                <div className="relative">
                  <Image
                    height={600}
                    width={600}
                    src="/WhatsApp Image 2025-04-28 at 20.23.02_ada0d424.jpg" 
                    alt="Aditya Veer Singh"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">Aditya Veer Singh</h3>
                  <p className="text-teal-600 mb-2 font-medium">S24CSEU1195</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Backend Developer
                  </p>
                  <div className="flex justify-center space-x-3">
                    <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Team Member 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden group"
              >
                <div className="relative">
                  <Image
                    height={600}
                    width={600}
                    src="/WhatsApp Image 2025-04-28 at 20.46.14_efa9c8e7.jpg" 
                    alt="Jiya Gupta"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">Jiya Gupta</h3>
                  <p className="text-teal-600 mb-2 font-medium">S24CSEU1173</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Frontend Developer
                  </p>
                  <div className="flex justify-center space-x-3">
                    <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Feature Cards Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-semibold mb-2 text-center text-gray-800">What Sets Us Apart</h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Discover the core values that drive our business and shape your shopping experience.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow border-t-4 border-teal-500"
              >
                <div className="text-teal-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Bank-Level Security</h3>
                <p className="text-gray-600">Your transactions are protected with state-of-the-art encryption and multi-layer security protocols.</p>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow border-t-4 border-teal-500"
              >
                <div className="text-teal-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Express Delivery</h3>
                <p className="text-gray-600">Our optimized logistics network ensures your products arrive quickly and safely, anywhere in the world.</p>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow border-t-4 border-teal-500"
              >
                <div className="text-teal-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Assistance</h3>
                <p className="text-gray-600">Our knowledgeable support team is ready around the clock to provide personalized help and product guidance.</p>
              </motion.div>

              {/* Card 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow border-t-4 border-teal-500"
              >
                <div className="text-teal-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Satisfaction Promise</h3>
                <p className="text-gray-600">If you are not completely satisfied, our hassle-free return policy ensures your peace of mind with every purchase.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}