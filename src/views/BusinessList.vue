<template>
  <div class="business-list-page">
    <h2 class="section-title">Local Kenyan Businesses</h2>

    <div
  v-for="(biz, index) in businesses"
  :key="index"
  class="business-card"
>
  <h3 class="business-name">{{ biz.name }}</h3>
  <p class="business-description">{{ biz.description }}</p>
  <p class="business-location"><strong>Location:</strong> {{ biz.location }}</p>
</div>
  </div>
</template>

<script>
export default {
  name: "BusinessList",
  data() {
    return {
      businesses: [
        { name: "The Glass Shop", description: "Custom glass solutions.", location: "Nairobi" },
        { name: "Kiwi Scourers Ltd", description: "Cleaning product manufacturer.", location: "Nairobi" },
        { name: "Zuri Events", description: "Event planning company.", location: "Nairobi" },
        { name: "Bluewave Pools", description: "Pool construction experts.", location: "Nairobi" },
        { name: "ZM Engineering", description: "Engineering services.", location: "Nairobi" },
        { name: "Africa Holiday Travel", description: "Travel and tour services.", location: "Nairobi" },
        { name: "African Memorable Safaris", description: "Tour operator.", location: "Nairobi" },
        { name: "Ashford Tours", description: "Travel and safari provider.", location: "Nairobi" },
        { name: "Prima Vera Tours", description: "Holiday tour planner.", location: "Nairobi" },
        { name: "Remu Surgicals", description: "Medical supplies distributor.", location: "Nairobi" },
        { name: "Alpharama Ltd", description: "Leather exporter.", location: "Nairobi" },
        { name: "Leather Industries of Kenya", description: "Leather processor.", location: "Nairobi" },
        { name: "Bata Kenya", description: "Footwear brand.", location: "Nairobi" },
        { name: "Aziz Tanneries", description: "Leather tanning service.", location: "Nairobi" },
        { name: "Nakuru Tanners", description: "Tanning and leather processing.", location: "Nakuru" },
        { name: "AfricaNenda", description: "Digital payment solutions.", location: "Nairobi" },
        { name: "Safaricom", description: "Telecom service provider.", location: "Nairobi" },
        { name: "Equity Group", description: "Banking and loans.", location: "Nairobi" },
        { name: "KCB Group", description: "Bank and investment firm.", location: "Nairobi" },
        { name: "Kenya Airways", description: "National airline.", location: "Nairobi" },
        { name: "Nation Media Group", description: "Media and journalism.", location: "Nairobi" },
        { name: "KenGen", description: "Energy and electricity.", location: "Nairobi" },
        { name: "Serena Hotels", description: "Luxury hospitality.", location: "Nairobi" },
        { name: "Standard Group", description: "Media house.", location: "Nairobi" },
        { name: "Unga Group", description: "Food production company.", location: "Nairobi" },
        { name: "Kenya Airports Authority", description: "Airport services.", location: "Nairobi" },
        { name: "National Oil Corporation", description: "Fuel and gas services.", location: "Nairobi" },
        { name: "Java House", description: "Restaurant chain.", location: "Nairobi" },
        { name: "Twiga Foods", description: "Fresh food distributor.", location: "Nairobi" },
        { name: "Jumia Kenya", description: "E-commerce platform.", location: "Nairobi" }
      ]
    };
  }
};
</script>

<style scoped>
.business-list-page {
  padding: 6rem 2rem 3rem;
  background: #fafafa;
  min-height: 100vh;
}

.section-title {
  text-align: center;
  color: #014d3b;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.business-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1.5rem;
  width: 100%;
}

.business-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 300px;
  padding: 1rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.business-card:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.business-name {
  font-weight: bold;
  font-size: 1.2rem;
  color: #014d3b;
  margin-bottom: 0.4rem;
}

.business-description,
.business-location {
  font-size: 0.95rem;
  color: #333;
}
</style>
