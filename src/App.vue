<template>
  <div id="app" :class="{ 'dark-mode': isDark }">
    <Navbar />

    <!-- Dark Mode Toggle Button -->
    <div style="padding: 1rem; text-align: right;">
      <button @click="toggleDarkMode" :aria-pressed="isDark.toString()">
        {{ isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode' }}
      </button>
    </div>

    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, watch, provide } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const isDark = ref(false)

// Provide the dark mode reactive ref so children can inject it
provide('isDark', isDark)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  // toggle body class for global styling (optional now because #app has it)
  document.body.classList.toggle('dark-mode', isDark.value)
}

onMounted(() => {
  if (localStorage.getItem('theme') === 'dark') {
    isDark.value = true
    document.body.classList.add('dark-mode')
  }
})

watch(isDark, (val) => {
  localStorage.setItem('theme', val ? 'dark' : 'light')
})
</script>

<style>
button {
  background: #f97316;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}
button:hover {
  background: #fb923c;
}
.dark-mode button {
  background: #374151;
  color: #f3f4f6;
}

body.dark-mode {
  background-color: #121212;
  color: #e4e4e7;
}

body.dark-mode a {
  color: #f97316; /* Adjust link colors in dark mode */
}

body.dark-mode footer {
  background-color: #1f2937;
  color: #d1d5db;
}

/* Add more dark mode overrides as needed for your components */
</style>
