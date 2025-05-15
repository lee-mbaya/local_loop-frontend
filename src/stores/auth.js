import { defineStore } from 'pinia'
import api from '../axios'  // Import your Axios configuration

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,  // To store user info after login
  }),

  actions: {
    // Fetch the authenticated user from the backend
    async fetchUser() {
      try {
        const response = await api.get('/api/user')  // Get authenticated user info
        this.user = response.data  // Store user info in the store
      } catch (error) {
        this.user = null  // If not authenticated, set to null
      }
    },

    // Logout action that clears user data and sends a logout request
    async logout() {
      try {
        await api.post('/api/logout')  // Send logout request to the backend
        this.user = null  // Clear user data
      } catch (err) {
        console.error('Logout failed:', err)  // Handle errors
      }
    },
  },
})
