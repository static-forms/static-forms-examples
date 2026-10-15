<script lang="ts">
	import ContactForm from '#lib/components/ContactForm.svelte';
</script>

<main class="main">
	<div class="container">
		<header class="header">
			<h1 class="title">Contact Us</h1>
			<p class="subtitle">
				SvelteKit example using
				<a href="https://www.staticforms.dev" target="_blank" rel="noopener noreferrer">
					StaticForms.dev
				</a>
			</p>
		</header>
		<ContactForm />
		<p class="footer">
			<a href="https://www.staticforms.dev/blog/jamstack-contact-form">Read the Jamstack forms guide</a>
			·
			<a href="https://github.com/static-forms/static-forms-examples/tree/main/apps/sveltekit-example">
				View source
			</a>
		</p>
	</div>
</main>
