<template>
  <div class="card">
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ['name', 'description'],
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
}
</style>
