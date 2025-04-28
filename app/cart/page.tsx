
// src/app/cart/page.js
'use client';

import { useState, useEffect } from 'react';
import CartItems from '@/components/cart/CartItems';
import CartSummary from '@/components/cart/CartSummary';
import { getCart } from '@/services/cartService';
import { getSessionId } from '@/utils/sessionId';

// Define CartItem interface
interface CartItem {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

// Define Cart interface
interface Cart {
  id?: string;
  sessionId?: string;
  items: CartItem[];
}

export default function CartPage() {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadCart = async (): Promise<void> => {
    try {
      setLoading(true);
      const sessionId = getSessionId();
      
      if (!sessionId) {
        setError('Session not available. Please refresh the page.');
        return;
      }
      
      const cartData = await getCart(sessionId);
      setCart(cartData);
      setError(null);
    } catch (err) {
      console.error('Error loading cart:', err);
      setError('Failed to load cart. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Loading cart...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <CartItems cartItems={cart?.items || []} onCartUpdate={loadCart} />
        </div>
        <div>
          <CartSummary cartItems={cart?.items || []} onCartUpdate={loadCart} />
        </div>
      </div>
    </div>
  );
}