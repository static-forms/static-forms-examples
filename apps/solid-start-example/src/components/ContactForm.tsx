import { createSignal, Match, Show, Switch } from "solid-js";

type FormStatus = "idle" | "loading" | "success" | "error";

const API_KEY = import.meta.env.VITE_STATICFORMS_API_KEY || "YOUR_API_KEY";

export default function ContactForm() {
  const [status, setStatus] = createSignal<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = createSignal("");

  const loading = () => status() === "loading";

  async function handleSubmit(e: SubmitEvent & { currentTarget: HTMLFormElement }) {
    e.preventDefault();

    const form = e.currentTarget;
    // Read values before the fields are disabled (disabled fields are excluded from FormData)
    const formData = new FormData(form);

    setStatus("loading");
    setErrorMessage("");

    const data = {
      apiKey: API_KEY,
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
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
    }
  }

  return (
    <Show
      when={status() !== "success"}
      fallback={
        <div class="success-message">
          <svg class="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <h2>Message Sent!</h2>
          <p>Thank you for reaching out. We'll get back to you soon.</p>
          <button type="button" class="reset-button" onClick={() => setStatus("idle")}>
            Send another message
          </button>
        </div>
      }
    >
      <form class="form" onSubmit={handleSubmit}>
        <div class="field">
          <label for="name" class="label">Name</label>
          <input type="text" id="name" name="name" class="input" placeholder="Your name" required disabled={loading()} />
        </div>

        <div class="field">
          <label for="email" class="label">Email</label>
          <input type="email" id="email" name="email" class="input" placeholder="your@email.com" required disabled={loading()} />
        </div>

        <div class="field">
          <label for="message" class="label">Message</label>
          <textarea id="message" name="message" class="textarea" placeholder="Your message..." rows={5} required disabled={loading()} />
        </div>

        <Show when={status() === "error"}>
          <div class="error-message">{errorMessage()}</div>
        </Show>

        <button type="submit" class="submit-button" disabled={loading()}>
          <Switch fallback="Send Message">
            <Match when={loading()}>
              <span class="spinner" />
              Sending...
            </Match>
          </Switch>
        </button>
      </form>
    </Show>
  );
}
