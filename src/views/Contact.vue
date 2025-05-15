<template>
  <div class="contact-form">
    <form ref="contactForm" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Full Name</label>
        <input
          v-model="name"
          type="text"
          id="name"
          name="name"
          :rules="nameRules"
          placeholder="Enter your full name"
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          v-model="email"
          type="email"
          id="email"
          name="email"
          :rules="emailRules"
          placeholder="Enter your email"
        />
      </div>

      <div class="form-group">
        <label for="subject">Subject</label>
        <input
          v-model="subject"
          type="text"
          id="subject"
          name="subject"
          :rules="subjectRules"
          placeholder="Enter the subject"
        />
      </div>

      <div class="form-group">
        <label for="inquiryType">Inquiry Type</label>
        <select v-model="inquiryType" id="inquiryType">
          <option v-for="type in inquiryTypes" :key="type" :value="type">
            {{ type }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          v-model="message"
          id="message"
          name="message"
          :rules="messageRules"
          placeholder="Enter your message"
        ></textarea>
      </div>

      <button :disabled="loading" type="submit">Submit</button>

      <div v-if="loading">Sending...</div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const valid = ref(false)
const contactForm = ref(null)
const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const inquiryType = ref('')
const loading = ref(false)

const nameRules = [
  v => !!v || 'Name is required',
  v => v.length >= 2 || 'Min 2 characters'
]

const emailRules = [
  v => !!v || 'Email is required',
  v => /.+@.+\..+/.test(v) || 'Must be valid'
]

const subjectRules = [v => !!v || 'Subject is required']

const messageRules = [
  v => !!v || 'Message is required',
  v => v.length >= 10 || 'Min 10 characters'
]

const inquiryTypes = [
  'General Inquiry',
  'Technical Support',
  'Partnership Opportunity',
  'Feedback',
  'Report an Issue',
  'Billing Question',
]

const submitForm = async () => {
  if (!valid.value) return

  loading.value = true
  try {
    const fullMessage = `Full Name: ${name.value}\nEmail: ${email.value}\nSubject: ${subject.value}\nInquiry Type: ${inquiryType.value}\nMessage: ${message.value}`
    const whatsappUrl = `https://wa.me/254720327141?text=${encodeURIComponent(fullMessage)}`
    window.open(whatsappUrl, '_blank')
    contactForm.value.reset()
  } catch {
    alert('Something went wrong. Please try again.')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.contact-form {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1.5em;
}

label {
  display: block;
  margin-bottom: 0.5em;
}

input,
select,
textarea {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2em;
}

button:disabled {
  background-color: #ccc;
}

textarea {
  resize: vertical;
  height: 150px;
}

div[loading] {
  font-style: italic;
}
</style>
