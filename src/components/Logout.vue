<!-- <template>
  <div>
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const logout = async () => {
  try {
    await axios.post('/api/logout')  // Call the logout route
    router.push('/login')  // Redirect to the login page
  } catch (error) {
    console.error('Logout failed:', error)
  }
}
</script>

<style scoped>
button {
  background-color: #e63946;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background-color: #f1faee;
}
</style>
 -- -->