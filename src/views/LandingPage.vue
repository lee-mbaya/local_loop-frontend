<template>
  <div class="landing-page">
    <div class="hero-section">
      <h1>
        Support Your Local Community <br />
        with <span class="highlight">Local Loop</span>
      </h1>
      <p>
        Earn and spend tokens at local businesses, strengthening the community economy and building sustainable neighborhoods.
      </p>
      <div class="buttons">
        <router-link to="/register" class="btn primary">Get Started</router-link>
        <router-link to="/businesses" class="btn secondary">Explore Businesses</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.landing-page {
  background-color: #111;
  color: #fff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.hero-section {
  text-align: center;
  max-width: 700px;
}

h1 {
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.highlight {
  color: #ff6600; /* terracotta/orange */
}

p {
  font-size: 1.2rem;
  color: #ccc;
  margin-bottom: 2rem;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  border-radius: 5px;
  transition: 0.3s ease;
}

.btn.primary {
  background-color: #ff6600;
  color: white;
  border: none;
}

.btn.primary:hover {
  background-color: #e65c00;
}

.btn.secondary {
  background-color: transparent;
  color: #ff6600;
  border: 2px solid #ff6600;
}

.btn.secondary:hover {
  background-color: #ff6600;
  color: white;
}
</style>
