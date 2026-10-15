import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	PUBLIC_STATICFORMS_API_KEY: {
		description: 'Your StaticForms.dev API key (https://www.staticforms.dev)',
		// Safe to expose: StaticForms keys are designed to be used from the browser
		public: true,
		// Inline the value at build time so the page can be fully prerendered
		static: true,
		schema: (value) => value || 'YOUR_API_KEY'
	}
});
