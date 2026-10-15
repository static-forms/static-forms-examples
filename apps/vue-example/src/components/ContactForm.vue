<script setup lang="ts">
import { reactive, ref } from 'vue'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

const apiKey = import.meta.env.VITE_STATICFORMS_API_KEY || 'YOUR_API_KEY'

const status = ref<FormStatus>('idle')
const errorMessage = ref('')

const formData = reactive({
  name: '',
  email: '',
  message: '',
})

async function handleSubmit() {
  status.value = 'loading'
  errorMessage.value = ''

  const data = {
    apiKey,
    name: formData.name,
    email: formData.email,
    message: formData.message,
    replyTo: '@', // Uses sender's email as reply-to
    subject: 'New Contact Form Submission',
  }

  try {
    const response = await fetch('https://api.staticforms.dev/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    const result: { success: boolean; message?: string } = await response.json()

    if (result.success) {
      status.value = 'success'
      formData.name = ''
      formData.email = ''
      formData.message = ''
    } else {
      status.value = 'error'
      errorMessage.value = result.message || 'Something went wrong'
    }
  } catch {
    status.value = 'error'
    errorMessage.value = 'Failed to send message. Please try again.'
  }
}
</script>

<template>
  <div v-if="status === 'success'" class="success-message">
    <svg class="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
    <h2>Message Sent!</h2>
    <p>Thank you for reaching out. We'll get back to you soon.</p>
    <button type="button" class="reset-button" @click="status = 'idle'">
      Send another message
    </button>
  </div>

  <form v-else class="form" @submit.prevent="handleSubmit">
    <div class="field">
      <label for="name" class="label">Name</label>
      <input
        id="name"
        v-model="formData.name"
        type="text"
        class="input"
        placeholder="Your name"
        required
        :disabled="status === 'loading'"
      />
    </div>

    <div class="field">
      <label for="email" class="label">Email</label>
      <input
        id="email"
        v-model="formData.email"
        type="email"
        class="input"
        placeholder="your@email.com"
        required
        :disabled="status === 'loading'"
      />
    </div>

    <div class="field">
      <label for="message" class="label">Message</label>
      <textarea
        id="message"
        v-model="formData.message"
        class="textarea"
        placeholder="Your message..."
        rows="5"
        required
        :disabled="status === 'loading'"
      />
    </div>

    <div v-if="status === 'error'" class="error-message">
      {{ errorMessage }}
    </div>

    <button type="submit" class="submit-button" :disabled="status === 'loading'">
      <span v-if="status === 'loading'" class="spinner" />
      {{ status === 'loading' ? 'Sending...' : 'Send Message' }}
    </button>
  </form>
</template>
