'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AddProducts() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
    category: '',
    stockQuantity: ''
  });
  
  const [status, setStatus] = useState({ message: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Check authentication on component mount
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
    if (!isAuthenticated) {
      router.push('/admin/login');
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Format data for API
    const productData = {
      ...formData,
      price: parseFloat(formData.price),
      stockQuantity: parseInt(formData.stockQuantity)
    };
    
    try {
      const response = await fetch('http://localhost:8080/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to add product');
      }
      
      // Reset form and show success message
      setFormData({
        name: '',
        description: '',
        price: '',
        imageUrl: '',
        category: '',
        stockQuantity: ''
      });
      
      setStatus({
        message: 'Product added successfully!',
        type: 'success'
      });
      
      // Clear status after 3 seconds
      setTimeout(() => {
        setStatus({ message: '', type: '' });
      }, 3000);
      
    } catch (error) {
      setStatus({
        message: error.message || 'Error adding product',
        type: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">E-Shop Admin Dashboard</h1>
        <button 
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm"
        >
          Logout
        </button>
      </header>
      
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
                  Price ($)
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  min="0"
                  step="0.01"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="imageUrl" className="block text-gray-700 font-medium mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="stockQuantity" className="block text-gray-700 font-medium mb-2">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  id="stockQuantity"
                  name="stockQuantity"
                  min="0"
                  value={formData.stockQuantity}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            
            <div className="mt-6">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? 'Adding Product...' : 'Add Product'}
              </button>
            </div>
          </form>
          
          {status.message && (
            <div className={`mt-6 p-4 rounded-md ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {status.message}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}