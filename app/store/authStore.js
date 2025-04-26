import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set, get) => ({
      users: [],
      currentUser: null,
      isAuthenticated: false,
      
      // Register a new user
      registerUser: (userData) => {
        const { users } = get();
        // Check if user already exists
        const userExists = users.some(user => user.email === userData.email);
        
        if (userExists) {
          return { success: false, message: 'Email already registered' };
        }
        
        // Create new user with ID
        const newUser = {
          id: Date.now().toString(),
          ...userData,
          createdAt: new Date().toISOString()
        };
        
        set(state => ({ 
          users: [...state.users, newUser],
          currentUser: newUser,
          isAuthenticated: true
        }));
        
        return { success: true, message: 'Registration successful' };
      },
      
      // Login user
      loginUser: (email, password) => {
        const { users } = get();
        const user = users.find(user => user.email === email && user.password === password);
        
        if (user) {
          set({ currentUser: user, isAuthenticated: true });
          return { success: true, message: 'Login successful' };
        }
        
        return { success: false, message: 'Invalid email or password' };
      },
      
      // Logout user
      logoutUser: () => {
        set({ currentUser: null, isAuthenticated: false });
      },
      
      // Check if user is authenticated
      checkAuth: () => {
        return get().isAuthenticated;
      }
    }),
    {
      name: 'auth-storage', // name of the item in localStorage
      partialize: (state) => ({
        users: state.users,
        currentUser: state.currentUser,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
);

export default useAuthStore;