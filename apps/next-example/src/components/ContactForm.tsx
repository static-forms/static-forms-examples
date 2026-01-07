"use client";

import { useState, FormEvent } from "react";
import styles from "./ContactForm.module.css";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      apiKey: formData.get("apiKey") as string,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      replyTo: "@", // Uses sender's email as reply-to
      subject: "New Contact Form Submission",
    };

    try {
      const response = await fetch("https://api.staticforms.dev/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

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

  if (status === "success") {
    return (
      <div className={styles.successMessage}>
        <svg
          className={styles.successIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <h2>Message Sent!</h2>
        <p>Thank you for reaching out. We&apos;ll get back to you soon.</p>
        <button
          type="button"
          className={styles.resetButton}
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="hidden"
        name="apiKey"
        value={process.env.NEXT_PUBLIC_STATICFORMS_API_KEY || "YOUR_API_KEY"}
      />

      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={styles.input}
          placeholder="Your name"
          required
          disabled={status === "loading"}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.input}
          placeholder="your@email.com"
          required
          disabled={status === "loading"}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className={styles.textarea}
          placeholder="Your message..."
          rows={5}
          required
          disabled={status === "loading"}
        />
      </div>

      {status === "error" && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}

      <button
        type="submit"
        className={styles.submitButton}
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <span className={styles.spinner} />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}

