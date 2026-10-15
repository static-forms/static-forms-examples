import { useState, type FormEvent } from 'react'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

const API_KEY = import.meta.env.VITE_STATICFORMS_API_KEY || 'YOUR_API_KEY'

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      apiKey: API_KEY,
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
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
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setErrorMessage(result.message || 'Something went wrong')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Failed to send message. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="success-message">
        <svg className="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <h2>Message Sent!</h2>
        <p>Thank you for reaching out. We&apos;ll get back to you soon.</p>
        <button type="button" className="reset-button" onClick={() => setStatus('idle')}>
          Send another message
        </button>
      </div>
    )
  }

  const loading = status === 'loading'

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name" className="label">Name</label>
        <input type="text" id="name" name="name" className="input" placeholder="Your name" required disabled={loading} />
      </div>

      <div className="field">
        <label htmlFor="email" className="label">Email</label>
        <input type="email" id="email" name="email" className="input" placeholder="your@email.com" required disabled={loading} />
      </div>

      <div className="field">
        <label htmlFor="message" className="label">Message</label>
        <textarea id="message" name="message" className="textarea" placeholder="Your message..." rows={5} required disabled={loading} />
      </div>

      {status === 'error' && <div className="error-message">{errorMessage}</div>}

      <button type="submit" className="submit-button" disabled={loading}>
        {loading ? (
          <>
            <span className="spinner" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  )
}
