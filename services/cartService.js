
// src/services/cartService.js
import api from './api';

export const getCart = async (sessionId) => {
  try {
    const response = await api.get(`/cart/${sessionId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cart:', error);
    throw error;
  }
};

export const addToCart = async (sessionId, productId, quantity = 1) => {
  try {
    const response = await api.post(`/cart/${sessionId}/items?productId=${productId}&quantity=${quantity}`);
    return response.data;
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw error;
  }
};

export const updateCartItem = async (sessionId, productId, quantity) => {
  try {
    const response = await api.put(`/cart/${sessionId}/items/${productId}?quantity=${quantity}`);
    return response.data;
  } catch (error) {
    console.error('Error updating cart item:', error);
    throw error;
  }
};

export const removeCartItem = async (sessionId, productId) => {
  try {
    const response = await api.delete(`/cart/${sessionId}/items/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error removing item from cart:', error);
    throw error;
  }
};

export const clearCart = async (sessionId) => {
  try {
    await api.delete(`/cart/${sessionId}`);
    return true;
  } catch (error) {
    console.error('Error clearing cart:', error);
    throw error;
  }
};