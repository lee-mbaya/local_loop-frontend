<template>
  <v-main>
    <v-container class="donation-container py-10" fluid>
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h1 class="text-h3 font-weight-bold text-donation">Support Local Startups</h1>
          <p class="text-subtitle-1 text-secondary max-width-text mx-auto">
            Your donation helps empower small businesses in Kenya to grow and thrive. Every contribution makes a difference!
          </p>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card elevation="10" class="pa-6 rounded-lg donation-card">
            <v-card-title class="pb-0">
              <h2 class="text-h5 font-weight-bold mb-2">Make a Donation</h2>
            </v-card-title>
            <v-card-text>
              <v-form ref="donationForm" v-model="valid" @submit.prevent="submitDonation">
                <v-text-field
                  v-model="name"
                  label="Full Name"
                  :rules="nameRules"
                  outlined
                  dense
                  prepend-inner-icon="mdi-account"
                />

                <v-text-field
                  v-model="cardNumber"
                  label="Card Number"
                  :rules="cardRules"
                  outlined
                  dense
                  prepend-inner-icon="mdi-credit-card"
                />

                <v-row dense>
                  <v-col cols="6">
                    <v-text-field
                      v-model="expiry"
                      label="MM/YY"
                      :rules="expiryRules"
                      outlined
                      dense
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="cvv"
                      label="CVV"
                      :rules="cvvRules"
                      outlined
                      dense
                    />
                  </v-col>
                </v-row>

                <v-text-field
                  v-model="amount"
                  label="Donation Amount (KES)"
                  :rules="amountRules"
                  outlined
                  dense
                  type="number"
                  prepend-inner-icon="mdi-cash"
                />

                <v-btn
                  type="submit"
                  class="donate-btn mt-4"
                  block
                  large
                  :loading="loading"
                >
                  Donate Now
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import { ref } from 'vue'

const valid = ref(false)
const loading = ref(false)
const donationForm = ref(null)

const name = ref('')
const cardNumber = ref('')
const expiry = ref('')
const cvv = ref('')
const amount = ref('')

const nameRules = [v => !!v || 'Name is required']
const cardRules = [
  v => !!v || 'Card number is required',
  v => /^\d{16}$/.test(v) || 'Card number must be 16 digits'
]
const expiryRules = [
  v => !!v || 'Expiry date required',
  v => /^\d{2}\/\d{2}$/.test(v) || 'Use MM/YY format'
]
const cvvRules = [
  v => !!v || 'CVV is required',
  v => /^\d{3,4}$/.test(v) || 'Invalid CVV'
]
const amountRules = [
  v => !!v || 'Amount is required',
  v => Number(v) > 0 || 'Must be greater than 0'
]

const submitDonation = () => {
  if (!valid.value) return

  loading.value = true
  setTimeout(() => {
    alert(`Thank you for supporting local businesses with a donation of KES ${amount.value}!`)
    donationForm.value.reset()
    loading.value = false
  }, 1500)
}
</script>

<style scoped>
.donation-container {
  background-color: #1b1b1b;
  color: #fff;
}

.text-donation {
  color: #E07A5F;
  font-family: 'Playfair Display', serif;
}

.text-secondary {
  color: #bbb;
}

.max-width-text {
  max-width: 600px;
}

.donation-card {
  background-color: #2e2e2e;
  border-radius: 16px;
  color: #ffffff;
  transition: box-shadow 0.3s ease;
}

.donation-card:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.donate-btn {
  background-color: #E07A5F;
  color: white;
  font-weight: bold;
  border-radius: 10px;
}

.donate-btn:hover {
  background-color: #d06045;
}
</style>
