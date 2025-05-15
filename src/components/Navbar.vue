<template>
  <nav class="bg-white shadow-sm py-4 px-6">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo & Title -->
      <RouterLink to="/" class="flex items-center gap-2">
        <div class="rounded-full bg-loop-orange p-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="text-white"
          >
            <path
              d="M12 8L16 12L12 16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <span class="text-2xl font-bold text-gray-800">Local Loop</span>
      </RouterLink>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-6">
        <RouterLink to="/tokens" class="text-gray-600 hover:text-loop-orange transition-colors">Tokens</RouterLink>
        <RouterLink to="/businesses" class="text-gray-600 hover:text-loop-orange transition-colors">Businesses</RouterLink>
        <RouterLink to="/donate" class="text-gray-600 hover:text-loop-orange transition-colors">Donate</RouterLink>
        <RouterLink to="/about" class="text-gray-600 hover:text-loop-orange transition-colors">About Us</RouterLink>
        <RouterLink to="/contact" class="text-gray-600 hover:text-loop-orange transition-colors">Contact</RouterLink>
      </div>

      <!-- Desktop Auth Buttons -->
      <div class="hidden md:flex items-center space-x-4">
        <RouterLink to="/login" class="flex items-center gap-1 border border-gray-300 px-3 py-1 rounded-md hover:border-loop-orange">
          <LogIn class="w-4 h-4 mr-1" /> Login
        </RouterLink>
        <RouterLink to="/register" class="flex items-center gap-1 bg-loop-orange text-white px-3 py-1 rounded-md hover:bg-opacity-90">
          <User class="w-4 h-4 mr-1" /> Sign Up
        </RouterLink>
      </div>

      <!-- Mobile Menu Button -->
      <button class="md:hidden text-gray-700 focus:outline-none" @click="toggleMenu" aria-label="Toggle Menu">
        <svg v-if="isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="isMenuOpen" class="md:hidden mt-4 bg-white border-t pt-4">
      <div class="flex flex-col space-y-2 px-4 pb-4">
        <RouterLink to="/tokens" class="flex items-center gap-2 text-gray-700" @click="toggleMenu">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
            <path d="M12 8V12M12 16H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
          Tokens
        </RouterLink>
        <RouterLink to="/businesses" class="flex items-center gap-2 text-gray-700" @click="toggleMenu">
          <List class="h-4 w-4" /> Businesses
        </RouterLink>
        <RouterLink to="/donate" class="flex items-center gap-2 text-gray-700" @click="toggleMenu">
          <DollarSign class="h-4 w-4" /> Donate
        </RouterLink>
        <RouterLink to="/about" class="flex items-center gap-2 text-gray-700" @click="toggleMenu">
          <BookOpen class="h-4 w-4" /> About Us
        </RouterLink>
        <RouterLink to="/contact" class="flex items-center gap-2 text-gray-700" @click="toggleMenu">
          <MessageSquare class="h-4 w-4" /> Contact
        </RouterLink>

        <div class="pt-4 flex flex-col space-y-2">
          <RouterLink to="/login" class="w-full flex justify-center items-center border border-gray-300 py-2 rounded-md" @click="toggleMenu">
            <LogIn class="w-4 h-4 mr-2" /> Login
          </RouterLink>
          <RouterLink to="/register" class="w-full flex justify-center items-center bg-loop-orange text-white py-2 rounded-md" @click="toggleMenu">
            <User class="w-4 h-4 mr-2" /> Sign Up
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { BookOpen, DollarSign, List, LogIn, MessageSquare, User } from 'lucide-vue-next'

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
