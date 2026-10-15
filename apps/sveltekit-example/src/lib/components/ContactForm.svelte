<script lang="ts">
	import { PUBLIC_STATICFORMS_API_KEY } from '$app/env/public';

	type FormStatus = 'idle' | 'loading' | 'success' | 'error';

	let status = $state<FormStatus>('idle');
	let errorMessage = $state('');

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		status = 'loading';
		errorMessage = '';

		const form = event.currentTarget as HTMLFormElement;
		const formData = new FormData(form);

		const data = {
			apiKey: PUBLIC_STATICFORMS_API_KEY,
			name: formData.get('name') as string,
			email: formData.get('email') as string,
			message: formData.get('message') as string,
			replyTo: '@', // Uses sender's email as reply-to
			subject: 'New Contact Form Submission'
		};

		try {
			const response = await fetch('https://api.staticforms.dev/submit', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data)
			});

			const result: { success: boolean; message?: string } = await response.json();

			if (result.success) {
				status = 'success';
				form.reset();
			} else {
				status = 'error';
				errorMessage = result.message || 'Something went wrong';
			}
		} catch {
			status = 'error';
			errorMessage = 'Failed to send message. Please try again.';
		}
	}
</script>

{#if status === 'success'}
	<div class="success-message">
		<svg class="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
			<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
			<polyline points="22 4 12 14.01 9 11.01" />
		</svg>
		<h2>Message Sent!</h2>
		<p>Thank you for reaching out. We'll get back to you soon.</p>
		<button type="button" class="reset-button" onclick={() => (status = 'idle')}>
			Send another message
		</button>
	</div>
{:else}
	<form class="form" onsubmit={handleSubmit}>
		<div class="field">
			<label for="name" class="label">Name</label>
			<input
				type="text"
				id="name"
				name="name"
				class="input"
				placeholder="Your name"
				required
				disabled={status === 'loading'}
			/>
		</div>

		<div class="field">
			<label for="email" class="label">Email</label>
			<input
				type="email"
				id="email"
				name="email"
				class="input"
				placeholder="your@email.com"
				required
				disabled={status === 'loading'}
			/>
		</div>

		<div class="field">
			<label for="message" class="label">Message</label>
			<textarea
				id="message"
				name="message"
				class="textarea"
				placeholder="Your message..."
				rows="5"
				required
				disabled={status === 'loading'}
			></textarea>
		</div>

		{#if status === 'error'}
			<div class="error-message">{errorMessage}</div>
		{/if}

		<button type="submit" class="submit-button" disabled={status === 'loading'}>
			{#if status === 'loading'}
				<span class="spinner"></span>
				Sending...
			{:else}
				Send Message
			{/if}
		</button>
	</form>
{/if}
