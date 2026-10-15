import { $, component$, useSignal } from "@builder.io/qwik";

type FormStatus = "idle" | "loading" | "success" | "error";

export const ContactForm = component$(() => {
  const status = useSignal<FormStatus>("idle");
  const errorMessage = useSignal("");

  const handleSubmit = $(async (_: SubmitEvent, form: HTMLFormElement) => {
    // Read values before the fields are disabled (disabled fields are excluded from FormData)
    const formData = new FormData(form);

    status.value = "loading";
    errorMessage.value = "";

    const data = {
      apiKey: import.meta.env.PUBLIC_STATICFORMS_API_KEY || "YOUR_API_KEY",
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      replyTo: "@", // Uses sender's email as reply-to
      subject: "New Contact Form Submission",
    };

    try {
      const response = await fetch("https://api.staticforms.dev/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result: { success: boolean; message?: string } = await response.json();

      if (result.success) {
        status.value = "success";
        form.reset();
      } else {
        status.value = "error";
        errorMessage.value = result.message || "Something went wrong";
      }
    } catch {
      status.value = "error";
      errorMessage.value = "Failed to send message. Please try again.";
    }
  });

  if (status.value === "success") {
    return (
      <div class="success-message">
        <svg class="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <h2>Message Sent!</h2>
        <p>Thank you for reaching out. We'll get back to you soon.</p>
        <button type="button" class="reset-button" onClick$={() => (status.value = "idle")}>
          Send another message
        </button>
      </div>
    );
  }

  const loading = status.value === "loading";

  return (
    <form class="form" preventdefault:submit onSubmit$={handleSubmit}>
      <div class="field">
        <label for="name" class="label">Name</label>
        <input type="text" id="name" name="name" class="input" placeholder="Your name" required disabled={loading} />
      </div>

      <div class="field">
        <label for="email" class="label">Email</label>
        <input type="email" id="email" name="email" class="input" placeholder="your@email.com" required disabled={loading} />
      </div>

      <div class="field">
        <label for="message" class="label">Message</label>
        <textarea id="message" name="message" class="textarea" placeholder="Your message..." rows={5} required disabled={loading} />
      </div>

      {status.value === "error" && <div class="error-message">{errorMessage.value}</div>}

      <button type="submit" class="submit-button" disabled={loading}>
        {loading ? (
          <>
            <span class="spinner" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
});
