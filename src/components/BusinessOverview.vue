<template>
  <section class="overview">
    <h2>Our Services</h2>
    <div class="service-cards">
      <div class="card">
        <h3>Service 1</h3>
        <p>Description of Service 1.</p>
      </div>
      <div class="card">
        <h3>Service 2</h3>
        <p>Description of Service 2.</p>
      </div>
      <div class="card">
        <h3>Service 3</h3>
        <p>Description of Service 3.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.overview {
  padding: 3rem 2rem;
  text-align: center;
}
.service-cards {
  display: flex;
  justify-content: space-around;
  gap: 2rem;
}
.card {
  background-color: #f4f4f4;
  padding: 2rem;
  border-radius: 8px;
  width: 30%;
}
</style>
