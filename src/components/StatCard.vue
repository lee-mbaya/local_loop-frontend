<template>
  <div class="stat-card">
    <h3>{{ value }}</h3>
    <p>{{ label }}</p>
  </div>
</template>

<script>
export default {
  props: ['value', 'label']
}
</script>

<style scoped>
.stat-card {
  text-align: center;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #fff;
  width: 100%;
  max-width: 300px;
}
.stat-card h3 {
  font-size: 2rem;
  color: #d95d39;
  margin-bottom: 10px;
}
</style>
