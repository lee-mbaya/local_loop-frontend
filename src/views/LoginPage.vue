<template>
  <div class="login-page">
    <div class="login-card">
      <h2>Welcome Back</h2>
      <p>Please sign in to continue</p>

      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" v-model="email" type="email" required placeholder="you@example.com" />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input id="password" v-model="password" type="password" required placeholder="••••••••" />
        </div>

        <button type="submit" class="login-btn">Login</button>
        <p v-if="error" class="error-msg">{{ error }}</p>
      </form>

      <router-link to="/register" class="register-link">
        Don't have an account? Register
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/axios'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()
const login = async () => {
  try {
    error.value = '';

    await api.get('/sanctum/csrf-cookie');

    await api.post('/login', {
      email: email.value,
      password: password.value,
    });

    router.push('/');
  } catch (err) {
    error.value = 'Invalid credentials or server error';
    console.error(err);
  }
};


</script>

<style scoped>
.login-page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f1f5f4;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  box-sizing: border-box;
}

.login-card {
  background-color: white;
  padding: 2rem 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

h2 {
  margin-bottom: 0.5rem;
  color: #2d6a4f;
}

p {
  margin-bottom: 1.5rem;
  color: #555;
}

.form-group {
  margin-bottom: 1.2rem;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.3rem;
  color: #333;
}

input {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.login-btn {
  width: 100%;
  padding: 0.75rem;
  background-color: #2d6a4f;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 0.5rem;
}

.login-btn:hover {
  background-color: #1b4332;
}

.error-msg {
  color: #e63946;
  margin-top: 1rem;
}

.register-link {
  display: block;
  margin-top: 1.5rem;
  font-size: 0.95rem;
  color: #1b4332;
  text-decoration: none;
}

.register-link:hover {
  text-decoration: underline;
}
</style>
