<template>
  <div class="progress-bar-container">
    <div class="progress-bar-background">
      <div
        class="progress-bar-fill"
        :style="{ width: progress + '%' }"
      ></div>
    </div>
    <p class="progress-text">{{ progress }}%</p>
  </div>
</template>

<script>
export default {
  name: "Progress",
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  computed: {
    progress() {
      return Math.min(Math.max(this.value, 0), 100); // Ensures the value stays between 0 and 100
    },
  },
};
</script>

<style scoped>
.progress-bar-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 8px;
}

.progress-bar-background {
  width: 100%;
  height: 10px;
  background-color: #333;
  border-radius: 5px;
}

.progress-bar-fill {
  height: 100%;
  background-color: #ff7f32; /* Terracotta Orange */
  border-radius: 5px;
  transition: width 0.3s ease;
}

.progress-text {
  margin-top: 5px;
  font-size: 12px;
  color: #fff;
}
</style>
