<template>
  <div class="container mx-auto py-12 px-6">
    <h1 class="text-4xl font-bold mb-10">Your Local Loop Tokens</h1>

    <!-- Token Overview Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      <div class="card">
        <div class="card-header pb-2">
          <h2 class="card-title text-lg">Current Balance</h2>
        </div>
        <div class="card-content">
          <p class="text-4xl font-bold text-loop-orange">{{ userTokens.balance }}</p>
        </div>
      </div>

      <div class="card">
        <div class="card-header pb-2">
          <h2 class="card-title text-lg">Lifetime Earned</h2>
        </div>
        <div class="card-content">
          <p class="text-4xl font-bold">{{ userTokens.lifetime }}</p>
        </div>
      </div>

      <div class="card">
        <div class="card-header pb-2">
          <h2 class="card-title text-lg">Tokens Spent</h2>
        </div>
        <div class="card-content">
          <p class="text-4xl font-bold">{{ userTokens.spent }}</p>
        </div>
      </div>

      <div class="card">
        <div class="card-header pb-2">
          <h2 class="card-title text-lg">Pending Rewards</h2>
        </div>
        <div class="card-content">
          <p class="text-4xl font-bold">{{ userTokens.pendingRewards }}</p>
          <button class="mt-2 w-full">Claim</button>
        </div>
      </div>
    </div>

    <!-- Main Content Tabs -->
    <div class="tabs">
      <div class="tabs-list mb-8">
        <button
          v-for="tab in tabs"
          :key="tab"
          class="tabs-trigger"
          :class="{ active: activeTab === tab }"
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </div>

      <div v-if="activeTab === 'Token Balance'" class="tab-content">
        <div class="card">
          <div class="card-header">
            <h2 class="card-title">Your Token Progress</h2>
            <p class="card-description">Track your achievements and milestones</p>
          </div>
          <div class="card-content">
            <div class="space-y-6">
              <!-- Token Progress Bars -->
              <div>
                <div class="flex justify-between mb-2">
                  <p class="font-medium">Community Supporter</p>
                  <p class="text-sm">145/200</p>
                </div>
                <Progress :value="72.5" />
                <p class="text-sm text-muted-foreground mt-2">
                  Earn 200 tokens to reach Community Champion status and unlock exclusive rewards!
                </p>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <button variant="outline" class="w-full">View All Achievements</button>
          </div>
        </div>
      </div>

      <!-- Add other tabs like history, earn, spend as needed -->
    </div>
  </div>
</template>

<script>
export default {
  name: "TokenInputPage",
  components: {
    Progress: {
      props: {
        value: {
          type: Number,
          required: true,
        },
      },
      computed: {
        clampedValue() {
          return Math.min(Math.max(this.value, 0), 100);
        },
      },
      template: `
        <div class="progress-bar-wrapper">
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" :style="{ width: clampedValue + '%' }"></div>
          </div>
          <p class="progress-percent">{{ clampedValue }}%</p>
        </div>
      `,
    },
  },
  data() {
    return {
      activeTab: "Token Balance",
      tabs: ["Token Balance", "Transaction History", "Earn Tokens", "Spend Tokens"],
      userTokens: {
        balance: 145,
        lifetime: 267,
        spent: 122,
        pendingRewards: 15,
      },
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 24px;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 40px;
}

/* Card Styles */
.card {
  background-color: #1f1f1f;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-header {
  margin-bottom: 15px;
}

.card-title {
  font-size: 1.125rem;
  font-weight: bold;
}

.card-content {
  margin-bottom: 20px;
}

.card-footer {
  padding-top: 15px;
}

button {
  background-color: #ff7f32;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: #e66e1e;
}

.text-loop-orange {
  color: #ff7f32;
}

.text-muted-foreground {
  color: #9a9a9a;
}

/* Grid Layout */
.grid {
  display: grid;
  gap: 24px;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, 1fr);
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-cols-4 {
  grid-template-columns: repeat(4, 1fr);
}

/* Tabs */
.tabs-list {
  display: flex;
  gap: 1rem;
}

.tabs-trigger {
  font-weight: bold;
  padding: 10px;
  background: transparent;
  color: #ccc;
  border: none;
  cursor: pointer;
}

.tabs-trigger.active {
  color: #ff7f32;
  border-bottom: 2px solid #ff7f32;
}

/* Progress Component */
.progress-bar-wrapper {
  width: 100%;
}

.progress-bar-bg {
  background-color: #333;
  border-radius: 5px;
  height: 10px;
  width: 100%;
}

.progress-bar-fill {
  height: 100%;
  background-color: #ff7f32;
  border-radius: 5px;
  transition: width 0.3s ease;
}

.progress-percent {
  margin-top: 5px;
  font-size: 12px;
  color: #fff;
}
</style>
