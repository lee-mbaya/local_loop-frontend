<template>
  <footer class="footer" :class="{ 'dark-mode': isDark }">
    <div class="container">
      <div class="footer-grid">
        <!-- Logo and Description -->
        <div>
          <router-link to="/" class="logo-link">
            <div class="logo-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8L16 12L12 16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span class="logo-text">Local Loop</span>
          </router-link>
          <p class="description">
            Supporting local businesses through community engagement and our
            unique token economy.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="section-title">Quick Links</h3>
          <ul class="link-list">
            <li>
              <router-link to="/tokens" class="footer-link">Tokens</router-link>
            </li>
            <li>
              <router-link to="/businesses" class="footer-link"
                >Businesses</router-link
              >
            </li>
            <li>
              <router-link to="/donate" class="footer-link">Donate</router-link>
            </li>
          </ul>
        </div>

        <!-- About -->
        <div>
          <h3 class="section-title">About</h3>
          <ul class="link-list">
            <li>
              <router-link to="/about" class="footer-link">About Us</router-link>
            </li>
            <li>
              <router-link to="/contact" class="footer-link">Contact</router-link>
            </li>
            <li>
              <router-link to="#" class="footer-link">Privacy Policy</router-link>
            </li>
            <li>
              <router-link to="#" class="footer-link"
                >Terms of Service</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Social Media and Newsletter -->
        <div>
          <h3 class="section-title">Connect With Us</h3>
          <div class="social-icons">
            <a href="#"
              ><svg
                class="icon"
                fill="currentColor"
                viewBox="0 0 24 24"
                ><path d="..." /></svg
            ></a>
            <a href="#"
              ><svg
                class="icon"
                fill="currentColor"
                viewBox="0 0 24 24"
                ><path d="..." /></svg
            ></a>
            <a href="#"
              ><svg
                class="icon"
                fill="currentColor"
                viewBox="0 0 24 24"
                ><path d="..." /></svg
            ></a>
          </div>
          <div class="newsletter">
            <h4>Subscribe to our newsletter</h4>
            <form class="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p>© {{ new Date().getFullYear() }} Local Loop. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { inject } from 'vue'
// Inject the dark mode reactive ref from parent
const isDark = inject('isDark')
</script>

<style scoped>
.footer {
  background-color: #f9fafb;
  border-top: 1px solid #e5e7eb;
  color: #4b5563;
  padding: 3rem 1.5rem;
  font-family: sans-serif;
  transition: background-color 0.3s, color 0.3s;
}
.footer .container {
  max-width: 1200px;
  margin: auto;
}
.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
.logo-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
}
.logo-icon {
  background-color: #f97316;
  padding: 0.5rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer .logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
}
.description {
  margin-top: 1rem;
}
.section-title {
  font-weight: 600;
  margin-bottom: 1rem;
}
.link-list {
  list-style: none;
  padding: 0;
}
.footer-link {
  display: block;
  margin-bottom: 0.5rem;
  color: #4b5563;
  text-decoration: none;
  transition: color 0.2s ease;
}
.footer-link:hover {
  color: #f97316;
}
.social-icons {
  display: flex;
  gap: 1rem;
}
.icon {
  width: 1.5rem;
  height: 1.5rem;
  color: #4b5563;
  transition: color 0.2s ease;
}
.icon:hover {
  color: #f97316;
}
.newsletter {
  margin-top: 1.5rem;
}
.newsletter-form {
  display: flex;
  margin-top: 0.5rem;
}
.newsletter-form input {
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem 0 0 0.375rem;
  flex: 1;
  background-color: white;
  color: #111827;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}
.newsletter-form button {
  background-color: #f97316;
  color: white;
  border: none;
  padding: 0 1rem;
  border-radius: 0 0.375rem 0.375rem 0;
  cursor: pointer;
  transition: background-color 0.3s;
}
.newsletter-form button:hover {
  background-color: #fb923c;
}
.footer-bottom {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
  text-align: center;
  font-size: 0.875rem;
}

/* 🌙 DARK MODE STYLES */
.footer.dark-mode {
  background-color: #1f2937;
  color: #d1d5db;
  border-top-color: #374151;
}
.footer.dark-mode .footer-link,
.footer.dark-mode .icon {
  color: #9ca3af;
}
.footer.dark-mode .footer-link:hover,
.footer.dark-mode .icon:hover {
  color: #f97316;
}
.footer.dark-mode .logo-text {
  color: #f3f4f6;
}
.footer.dark-mode .newsletter-form input {
  background-color: #374151;
  color: white;
  border-color: #4b5563;
}
.footer.dark-mode .newsletter-form button {
  background-color: #f97316;
}
.footer.dark-mode .newsletter-form button:hover {
  background-color: #ea580c;
}
</style>
