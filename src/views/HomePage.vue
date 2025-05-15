<template>
  <div class="index-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>
          Support Your Local Community with <span class="highlight">Local Loop</span>
        </h1>
        <p>
          Earn and spend tokens at local businesses, strengthening the community economy and building sustainable neighborhoods.
        </p>
        <div class="hero-buttons">
          <router-link to="/Register" class="btn primary">Get Started</router-link>
          <router-link to="/businesses" class="btn outline">Explore Businesses</router-link>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="section how-it-works">
      <h2>How Local Loop Works</h2>
      <div class="info-grid">
        <div class="info-box">
          <div class="step-circle">1</div>
          <h3>Earn Tokens</h3>
          <p>Participate in community activities, make purchases at local businesses, or donate to earn Local Loop tokens.</p>
        </div>
        <div class="info-box">
          <div class="step-circle">2</div>
          <h3>Discover Local Businesses</h3>
          <p>Explore our curated directory of local shops, restaurants, and service providers in your area.</p>
        </div>
        <div class="info-box">
          <div class="step-circle">3</div>
          <h3>Spend Your Tokens</h3>
          <p>Use your tokens for discounts, special offers, and exclusive deals at participating local businesses.</p>
        </div>
      </div>
    </section>

    <!-- Featured Businesses -->
    <section class="section featured">
      <div class="section-header">
        <h2>Featured Local Businesses</h2>
        <router-link to="/businesses" class="view-all">View All →</router-link>
      </div>
      <div class="cards">
        <BusinessCard
          name="Green Earth Grocery"
          description="Organic and locally sourced produce, eco-friendly products, and bulk foods."
          location="123 Main St, Anytown"
          offer="5% off with tokens"
        />
        <BusinessCard
          name="Community Cafe"
          description="Cozy spot for locally roasted coffees, homemade pastries, and community events."
          location="456 Elm St, Anytown"
          offer="Free coffee with tokens"
        />
        <BusinessCard
          name="FixIt Repair Shop"
          description="Bike repairs, household fixes, and electronics troubleshooting by local experts."
          location="789 Oak St, Anytown"
          offer="10% off services"
        />
      </div>
    </section>

    <!-- Token Stats -->
    <section class="section stats">
      <h2>Community Impact</h2>
      <div class="cards">
        <StatCard value="14,387" label="Tokens Circulating" />
        <StatCard value="52" label="Local Businesses" />
        <StatCard value="$23,410" label="Local Economy Impact" />
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="cta-content">
        <h2>Join The Local Loop Today</h2>
        <p>Start earning and spending tokens while supporting your local community economy.</p>
        <div class="cta-buttons">
          <router-link to="/signup" class="btn light">Sign Up Now</router-link>
          <router-link to="/about" class="btn outline-light">Learn More</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BusinessCard from "@/components/BusinessCard.vue";
import StatCard from "@/components/StatCard.vue";

export default {
  name: "Index",
  components: {
    BusinessCard,
    StatCard,
  },
};
</script>

<style scoped>
.index-page {
  font-family: sans-serif;
}

/* Hero */
.hero-section {
  background: url('@/assets/hero-bg.png') center/cover no-repeat;
  padding: 100px 20px;
  color: #333;
  text-align: center;
}
.hero-section .highlight {
  color: #d95d39; /* terracotta */
}
.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}
.hero-content p {
  font-size: 1.25rem;
  margin-bottom: 30px;
}
.hero-buttons .btn {
  margin: 10px;
}

/* Section */
.section {
  padding: 60px 20px;
}
.section h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 40px;
}

/* Info Grid */
.info-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.info-box {
  flex: 1 1 250px;
  max-width: 300px;
  text-align: center;
}
.step-circle {
  width: 50px;
  height: 50px;
  margin: 0 auto 15px;
  border-radius: 50%;
  background: #f2f2f2;
  color: #d95d39;
  font-weight: bold;
  line-height: 50px;
}

/* Cards and CTA */
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
.section-header .view-all {
  color: #d95d39;
  text-decoration: none;
}
.cta {
  background: #d95d39;
  color: white;
  text-align: center;
  padding: 60px 20px;
}
.cta-buttons .btn {
  margin: 10px;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 12px 24px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.3s;
}
.btn.primary {
  background: #d95d39;
  color: white;
}
.btn.outline {
  border: 2px solid #d95d39;
  color: #d95d39;
  background: white;
}
.btn.light {
  background: white;
  color: #d95d39;
}
.btn.outline-light {
  border: 2px solid white;
  color: white;
  background: transparent;
}
.btn.outline-light:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
