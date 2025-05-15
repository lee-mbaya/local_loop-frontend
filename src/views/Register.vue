<template>
  <div class="register-page">
    <div class="register-card">
      <h2>Create Account</h2>
      <p>Fill in your details to register</p>

      <form @submit.prevent="register">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            id="name"
            name="name"
            v-model="name"
            type="text"
            required
            placeholder="Your name"
            autocomplete="name"
            :disabled="loading"
          />
          <span v-if="errors.name" class="error-msg">{{ errors.name }}</span>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            name="email"
            v-model="email"
            type="email"
            required
            placeholder="you@example.com"
            autocomplete="email"
            :disabled="loading"
          />
          <span v-if="errors.email" class="error-msg">{{ errors.email }}</span>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            id="password"
            name="password"
            v-model="password"
            type="password"
            required
            placeholder="••••••••"
            autocomplete="new-password"
            :disabled="loading"
          />
          <span v-if="errors.password" class="error-msg">{{ errors.password }}</span>
        </div>

        <div class="form-group">
          <label for="password_confirmation">Confirm Password</label>
          <input
            id="password_confirmation"
            name="password_confirmation"
            v-model="passwordConfirmation"
            type="password"
            required
            placeholder="••••••••"
            autocomplete="new-password"
            :disabled="loading"
          />
          <span v-if="errors.password_confirmation" class="error-msg">{{ errors.password_confirmation }}</span>
        </div>

        <button type="submit" class="register-btn" :disabled="loading">
          <span v-if="loading">Registering...</span>
          <span v-else>Register</span>
        </button>

        <p v-if="errors.general" class="error-msg">{{ errors.general }}</p>
      </form>

      <router-link to="/login" class="login-link">
        Already have an account? Login
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/axios'

const name = ref('')
const email = ref('')
const password = ref('')
const passwordConfirmation = ref('')
const errors = ref({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  general: '',
})
const loading = ref(false)
const router = useRouter()

const register = async () => {
  loading.value = true
  errors.value = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    general: '',
  }

  try {
    await api.get('/sanctum/csrf-cookie')

    await api.post('/register', {
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: passwordConfirmation.value,
    })

    router.push('/')
  } catch (err) {
    if (err.response?.status === 422) {
      const responseErrors = err.response.data.errors
      for (const key in responseErrors) {
        if (errors.value.hasOwnProperty(key)) {
          errors.value[key] = responseErrors[key][0]
        }
      }
    } else if (err.response?.status === 419) {
      errors.value.general = 'Session expired. Please refresh the page and try again.'
    } else {
      errors.value.general = 'Registration failed. Please try again later.'
    }

    console.error('Register error:', err)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.register-page {
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

.register-card {
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

.register-btn {
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

.register-btn[disabled] {
  opacity: 0.7;
  cursor: not-allowed;
}

.register-btn:hover:not([disabled]) {
  background-color: #1b4332;
}

.error-msg {
  color: #e63946;
  margin-top: 0.5rem;
  font-size: 0.875rem;
}

.login-link {
  display: block;
  margin-top: 1.5rem;
  font-size: 0.95rem;
  color: #1b4332;
  text-decoration: none;
}

.login-link:hover {
  text-decoration: underline;
}
</style>
