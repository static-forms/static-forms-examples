<script setup lang="ts">
type FormStatus = "idle" | "loading" | "success" | "error";

const config = useRuntimeConfig();

const status = ref<FormStatus>("idle");
const errorMessage = ref("");

const formData = reactive({
  name: "",
  email: "",
  message: "",
});

async function handleSubmit() {
  status.value = "loading";
  errorMessage.value = "";

  const data = {
    apiKey: config.public.staticformsApiKey,
    name: formData.name,
    email: formData.email,
    message: formData.message,
    replyTo: "@",
    subject: "New Contact Form Submission",
  };

  try {
    const result = await $fetch<{ success: boolean; message?: string }>(
      "https://api.staticforms.dev/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }
    );

    if (result.success) {
      status.value = "success";
      formData.name = "";
      formData.email = "";
      formData.message = "";
    } else {
      status.value = "error";
      errorMessage.value = result.message || "Something went wrong";
    }
  } catch {
    status.value = "error";
    errorMessage.value = "Failed to send message. Please try again.";
  }
}

function resetForm() {
  status.value = "idle";
}
</script>

<template>
  <div v-if="status === 'success'" class="success-message">
    <svg
      class="success-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
    <h2>Message Sent!</h2>
    <p>Thank you for reaching out. We'll get back to you soon.</p>
    <button type="button" class="reset-button" @click="resetForm">
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
      {{ status === "loading" ? "Sending..." : "Send Message" }}
    </button>
  </form>
</template>

<style scoped>
.form {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem;
}

.field {
  margin-bottom: 1.25rem;
}

.label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
}

.input,
.textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-family: inherit;
  color: var(--text-primary);
  background-color: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: 8px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.input:focus,
.textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}

.input:disabled,
.textarea:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.input::placeholder,
.textarea::placeholder {
  color: var(--text-secondary);
  opacity: 0.6;
}

.textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-button {
  width: 100%;
  padding: 0.875rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  color: white;
  background-color: var(--accent);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.submit-button:hover:not(:disabled) {
  background-color: var(--accent-hover);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.error-message {
  background-color: rgba(239, 68, 68, 0.1);
  border: 1px solid var(--error);
  color: var(--error);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.success-message {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 3rem 2rem;
  text-align: center;
}

.success-icon {
  width: 48px;
  height: 48px;
  color: var(--success);
  margin-bottom: 1rem;
}

.success-message h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.success-message p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.reset-button {
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: inherit;
  color: var(--text-primary);
  background-color: transparent;
  border: 1px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.2s, background-color 0.2s;
}

.reset-button:hover {
  border-color: var(--text-secondary);
  background-color: rgba(255, 255, 255, 0.05);
}
</style>

