<template>
  <section class="hero">
    <div class="hero-content">
      <h1>
        Support Your Local Community<br />
        with <span class="highlight">Local Loop</span>
      </h1>
      <p>
        Earn and spend tokens at local businesses, strengthening the community economy and
        building sustainable neighborhoods.
      </p>
      <div class="hero-buttons">
        <button class="cta">Get Started</button>
        <button class="outline">Explore Businesses</button>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero {
  background-color: #fff;
  background-image: radial-gradient(#f97316 1px, transparent 1px);
  background-size: 24px 24px;
  padding: 6rem 2rem;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 2.75rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #1f2937;
}

.highlight {
  color: #f97316;
}

p {
  color: #4b5563;
  font-size: 1.125rem;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.cta {
  background-color: #f97316;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.cta:hover {
  background-color: #ea580c;
}

.outline {
  background: white;
  border: 1px solid #ccc;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.outline:hover {
  border-color: #888;
}
</style>
