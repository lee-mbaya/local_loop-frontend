<template>
  <div class="tabs">
    <div class="tabs-list">
      <slot name="tabs"></slot> <!-- Slot for tab triggers -->
    </div>
    <div class="tabs-content">
      <slot name="content"></slot> <!-- Slot for tab content -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  data() {
    return {
      activeTab: this.$attrs.defaultValue || "balance", // Default active tab value
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style scoped>
.tabs {
  display: flex;
  flex-direction: column;
}

.tabs-list {
  display: flex;
  border-bottom: 2px solid #eee;
  margin-bottom: 1rem;
}

.tabs-trigger {
  padding: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.tabs-trigger.active {
  color: #ff7f32; /* Terracotta Orange */
  font-weight: bold;
}

.tabs-content {
  padding: 1rem;
  background-color: #1f1f1f;
  border-radius: 8px;
}
</style>
