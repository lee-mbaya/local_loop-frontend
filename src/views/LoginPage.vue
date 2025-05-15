<template>
  <div class="login-page">
    <div class="login-card">
      <h2>Welcome Back</h2>
      <p>Please sign in to continue</p>

      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            v-model="email"
            required
            autocomplete="email"
            placeholder="you@example.com"
            :disabled="loading"
          />
          <span v-if="errors.email" class="error-msg">{{ errors.email }}</span>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            v-model="password"
            required
            autocomplete="current-password"
            placeholder="••••••••"
            :disabled="loading"
          />
          <span v-if="errors.password" class="error-msg">{{ errors.password }}</span>
        </div>

        <div class="form-group checkbox-group">
          <label for="remember" class="checkbox-label">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              v-model="rememberMe"
              :disabled="loading"
            />
            Remember me
          </label>
        </div>

        <button type="submit" class="login-btn" :disabled="loading">
          <span v-if="loading">Logging in...</span>
          <span v-else>Login</span>
        </button>

        <p v-if="errors.general" class="error-msg">{{ errors.general }}</p>
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
const rememberMe = ref(false)
const errors = ref({
  email: '',
  password: '',
  general: '',
})
const loading = ref(false)
const router = useRouter()

const login = async () => {
  loading.value = true
  errors.value = { email: '', password: '', general: '' }

  try {
    await api.get('/sanctum/csrf-cookie')

    await api.post('/login', {
      email: email.value,
      password: password.value,
      remember: rememberMe.value,
    })

    router.push('/')
  } catch (err) {
    if (err.response?.status === 422) {
      const responseErrors = err.response.data.errors
      errors.value.email = responseErrors.email?.[0] || ''
      errors.value.password = responseErrors.password?.[0] || ''
    } else if (err.response?.status === 401) {
      errors.value.general = 'Invalid email or password.'
    } else {
      errors.value.general = 'Server error. Please try again later.'
    }

    console.error('Login error:', err)
  } finally {
    loading.value = false
  }
}
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

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.checkbox-group {
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
}

.checkbox-label {
  font-size: 0.95rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
  transition: background-color 0.2s ease;
}

.login-btn[disabled] {
  opacity: 0.7;
  cursor: not-allowed;
}

.login-btn:hover:not([disabled]) {
  background-color: #1b4332;
}

.error-msg {
  color: #e63946;
  margin-top: 0.5rem;
  font-size: 0.875rem;
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
