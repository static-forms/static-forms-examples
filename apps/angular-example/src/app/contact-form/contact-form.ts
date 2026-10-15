import { Component, signal } from '@angular/core';
import { STATICFORMS_API_KEY } from '../../env.generated';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.html',
})
export class ContactForm {
  protected readonly status = signal<FormStatus>('idle');
  protected readonly errorMessage = signal('');

  protected async handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    // Read values before the fields are disabled (disabled fields are excluded from FormData)
    const formData = new FormData(form);

    this.status.set('loading');
    this.errorMessage.set('');

    const data = {
      apiKey: STATICFORMS_API_KEY,
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      replyTo: '@', // Uses sender's email as reply-to
      subject: 'New Contact Form Submission',
    };

    try {
      const response = await fetch('https://api.staticforms.dev/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result: { success: boolean; message?: string } = await response.json();

      if (result.success) {
        this.status.set('success');
        form.reset();
      } else {
        this.status.set('error');
        this.errorMessage.set(result.message || 'Something went wrong');
      }
    } catch {
      this.status.set('error');
      this.errorMessage.set('Failed to send message. Please try again.');
    }
  }
}
