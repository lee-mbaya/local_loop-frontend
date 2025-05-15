<template>
  <nav class="navbar" :class="{ 'dark-mode': isDark }">
    <div class="navbar-container">
      <!-- Logo & Title -->
      <RouterLink to="/" class="logo">
        <div class="logo-icon">
          <!-- Example SVG logo -->
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 8L16 12L12 16M8 12H16M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <span class="logo-text">Local Loop</span>
      </RouterLink>

      <!-- Navigation Links -->
      <div class="nav-links" :class="{ open: isMenuOpen }">
        <RouterLink to="/tokens" @click="toggleMenu">Tokens</RouterLink>
        <RouterLink to="/businesses" @click="toggleMenu">Businesses</RouterLink>
        <RouterLink to="/donate" @click="toggleMenu">Donate</RouterLink>
        <RouterLink to="/about" @click="toggleMenu">About Us</RouterLink>
        <RouterLink to="/contact" @click="toggleMenu">Contact</RouterLink>

        <div class="auth-buttons">
          <RouterLink to="/login" class="btn-outline" @click="toggleMenu">Login</RouterLink>
          <RouterLink to="/register" class="btn-filled" @click="toggleMenu">Sign Up</RouterLink>
        </div>
      </div>

      <!-- Mobile Menu Toggle -->
      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span v-if="!isMenuOpen">&#9776;</span> <!-- hamburger -->
        <span v-else>&times;</span> <!-- close icon -->
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, inject } from 'vue'
import { RouterLink } from 'vue-router'

// Receive dark mode reactive variable from parent
const isDark = inject('isDark')

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
/* Navbar container */
.navbar {
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  color: #555;
  transition: background-color 0.3s, color 0.3s;
}

.navbar.dark-mode {
  background-color: #1f2937; /* Dark bg */
  color: #e5e7eb; /* Light text */
  box-shadow: none;
}

/* Navbar container */
.navbar-container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
}

.logo-icon {
  background-color: orange;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar.dark-mode .logo-icon {
  background-color: #f97316; /* slightly lighter orange */
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
}

/* Nav links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: orange;
}

/* Auth buttons */
.auth-buttons {
  display: flex;
  gap: 1rem;
  margin-left: 1rem;
}

.btn-outline {
  border: 1px solid #ccc;
  padding: 6px 14px;
  border-radius: 5px;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.2s;
}

.btn-outline:hover {
  border-color: orange;
}

.btn-filled {
  background-color: orange;
  color: white;
  padding: 6px 14px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.2s;
}

.btn-filled:hover {
  background-color: darkorange;
}

.navbar.dark-mode .btn-outline {
  border-color: #555;
  color: #ddd;
}
.navbar.dark-mode .btn-outline:hover {
  border-color: #f97316;
}
.navbar.dark-mode .btn-filled {
  background-color: #f97316;
}
.navbar.dark-mode .btn-filled:hover {
  background-color: #ea580c;
}

/* Mobile styles */
.menu-toggle {
  display: none;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
}

/* Responsive rules */
@media (max-width: 768px) {
  .nav-links {
    display: none;
    width: 100%;
    flex-direction: column;
    margin-top: 1rem;
    gap: 1rem;
  }

  .nav-links.open {
    display: flex;
  }

  .auth-buttons {
    flex-direction: column;
    margin-left: 0;
  }

  .menu-toggle {
    display: block;
  }
}
</style>
