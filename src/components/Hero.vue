<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Your Business Name</h1>
      <p>Connecting local businesses and helping them grow together.</p>
      <router-link to="/contact">
        <button>Contact Us</button>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: url('@/assets/hero-image.jpg') no-repeat center center/cover;
  color: white;
  padding: 5rem 2rem;
  text-align: center;
}
.hero-content {
  max-width: 600px;
  margin: 0 auto;
}
button {
  background-color: #2d6a4f;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
}
button:hover {
  background-color: #1b4332;
}
</style>
