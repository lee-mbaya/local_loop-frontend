import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '../views/LandingPage.vue'
import Homepage from '../views/HomePage.vue'
import AboutView from '../views/AboutView.vue'
import BusinessList from '../views/BusinessList.vue'
import Contact from '../views/Contact.vue'
import DonationPage from '../views/DonationPage.vue'
import TokenInputPage from '../views/TokenInputPage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/Register.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/landing', name: 'Landing', component: LandingPage },
  { path: '/home', name: 'Home', component: Homepage },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/businesses', name: 'Businesses', component: BusinessList },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/donate', name: 'Donate', component: DonationPage },
  { path: '/tokens', name: 'Tokens', component: TokenInputPage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/register', name: 'Register', component: RegisterPage },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
