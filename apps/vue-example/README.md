# StaticForms Vue Example

A contact form built with **Vue 3.5 + Vite 8** that sends submissions to your inbox through [StaticForms.dev](https://www.staticforms.dev). There's no backend to write or host.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fstatic-forms%2Fstatic-forms-examples&root-directory=apps%2Fvue-example&project-name=staticforms-vue&repository-name=staticforms-vue-example&env=VITE_STATICFORMS_API_KEY&envDescription=Your%20StaticForms.dev%20API%20key&envLink=https%3A%2F%2Fwww.staticforms.dev%2Fdocs)

> 📖 **Step-by-step tutorial:** [Vue contact form tutorial](https://www.staticforms.dev/blog/vue-contact-form-tutorial) on the StaticForms blog.

## Features

- Single-page app built with Vite
- `<script setup>` Composition API
- `v-model` with `reactive()`
- TypeScript with `vue-tsc`
- Loading, success and error states
- Shared styling with every other example in [this repo](https://github.com/static-forms/static-forms-examples)

## Quick Start

```bash
# From the monorepo root
pnpm install
cp apps/vue-example/env.example apps/vue-example/.env.local
# Add your API key to the new file, then:
pnpm dev:vue
```

The app runs on [http://localhost:3003](http://localhost:3003).

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_STATICFORMS_API_KEY` | Your StaticForms.dev API key. Get one free at [staticforms.dev](https://www.staticforms.dev). |

Locally, put it in `.env.local`. On Vercel, the deploy button asks for it; you can also add it later under **Settings → Environment Variables**.

> The env file keeps your key out of git. Like the hidden `apiKey` field in a plain HTML form, the key is still visible in the browser once the site is deployed.

## Deploy to Vercel

Click **Deploy with Vercel** above. Vercel copies this repository into your account, sets the project's **Root Directory** to `apps/vue-example` and asks for `VITE_STATICFORMS_API_KEY`.

`vercel.json` in this folder installs only this example's dependencies from the monorepo. Output: Static (`dist/`).

To deploy manually, import the repository at [vercel.com/new](https://vercel.com/new), set **Root Directory** to `apps/vue-example`, add the environment variable, and deploy.

## Project Structure

| Path | Purpose |
|------|---------|
| `src/App.vue` | Page layout |
| `src/components/ContactForm.vue` | Contact form |
| `src/style.css` | Styles |
| `vercel.json` | Vercel deployment settings |
| `env.example` | Environment variable template |

## How It Works

The form `POST`s JSON to the StaticForms API:

```http
POST https://api.staticforms.dev/submit
Content-Type: application/json

{
  "apiKey": "YOUR_API_KEY",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Hello!",
  "replyTo": "@",
  "subject": "New Contact Form Submission"
}
```

`"replyTo": "@"` sets the reply-to address to the sender's email. The API responds with `{ "success": true }`, or with `{ "success": false, "message": "..." }` when something goes wrong.

## Learn More

From the StaticForms blog:

- [Vue contact form tutorial](https://www.staticforms.dev/blog/vue-contact-form-tutorial)
- [All StaticForms tutorials and guides](https://www.staticforms.dev/blog)

Docs:

- [StaticForms.dev documentation](https://www.staticforms.dev/docs)
- [Vue documentation](https://vuejs.org)
- [Examples for other frameworks](https://github.com/static-forms/static-forms-examples#examples)

## License

MIT
