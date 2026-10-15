<script lang="ts">
	import '../app.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>StaticForms - SvelteKit Example</title>
	<meta name="description" content="A simple contact form using StaticForms.dev" />
</svelte:head>

{@render children()}
