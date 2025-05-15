<template>
  <div>
    <!-- Form for new business -->
    <form @submit.prevent="submitBusiness">
      <div class="mb-2">
        <input v-model="form.name" placeholder="Business name" class="border p-1 w-full" required />
      </div>
      <div class="mb-2">
        <textarea v-model="form.description" placeholder="Description" class="border p-1 w-full" required></textarea>
      </div>
      <div class="mb-2">
        <!-- Address input for geocoding -->
        <input v-model="form.address" placeholder="Business address" class="border p-1 w-full" required />
      </div>
      <button type="submit" class="bg-green-600 text-white px-2 py-1 rounded">Add Business</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const form = ref({
  name: '',
  description: '',
  address: ''  // New field for address
});

// Function to submit the business
async function submitBusiness() {
  if (!form.value.name || !form.value.description || !form.value.address) return;

  try {
    // Geocode the address before sending the data to the backend
    const coordinates = await geocodeAddress(form.value.address);

    if (!coordinates) {
      alert('Failed to geocode the address.');
      return;
    }

    // Send the business data with geocoded coordinates to the backend
    await axios.post('/api/businesses', {
      name: form.value.name,
      description: form.value.description,
      address: form.value.address,  // Optional, for reference
      latitude: coordinates.lat,
      longitude: coordinates.lng
    });

    alert('Business added!');
    form.value.name = '';
    form.value.description = '';
    form.value.address = '';  // Reset address field
  } catch (error) {
    alert('Error adding business.');
    console.error(error);
  }
}

// Geocode the address using a geocoding API (example with Google Maps)
async function geocodeAddress(address) {
  const apiKey = 'YOUR_GOOGLE_API_KEY';  // Replace with your API key
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === 'OK') {
      const location = response.data.results[0].geometry.location;
      return { lat: location.lat, lng: location.lng };
    } else {
      console.error('Geocoding failed:', response.data.status);
      return null;
    }
  } catch (error) {
    console.error('Error during geocoding:', error);
    return null;
  }
}
</script>

<style scoped>
/* Your styles here */
</style>
