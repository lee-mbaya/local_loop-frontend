import axios from 'axios'

// Create a custom Axios instance
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Laravel backend
  withCredentials: true,
})

// Don't call csrf-cookie here automatically — move it to your login/register logic
export default api
