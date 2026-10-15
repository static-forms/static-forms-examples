# StaticForms Next.js Example

A contact form built with **Next.js 16 + React 19** that sends submissions to your inbox through [StaticForms.dev](https://www.staticforms.dev). There's no backend to write or host.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fstatic-forms%2Fstatic-forms-examples&root-directory=apps%2Fnext-example&project-name=staticforms-next&repository-name=staticforms-next-example&env=NEXT_PUBLIC_STATICFORMS_API_KEY&envDescription=Your%20StaticForms.dev%20API%20key&envLink=https%3A%2F%2Fwww.staticforms.dev%2Fdocs)

> 📖 **Step-by-step tutorial:** [Using Static Forms with Next.js: A Complete Guide](https://www.staticforms.dev/blog/using-staticforms-with-nextjs) on the StaticForms blog.

## Features

- App Router with React Server Components
- Client component (`"use client"`) for the form
- `useState` for form status
- CSS Modules
- Turbopack dev server (default in Next.js 16)
- Loading, success and error states
- Shared styling with every other example in [this repo](https://github.com/static-forms/static-forms-examples)

## Quick Start

```bash
# From the monorepo root
pnpm install
cp apps/next-example/env.example apps/next-example/.env.local
# Add your API key to the new file, then:
pnpm dev:next
```

The app runs on [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_STATICFORMS_API_KEY` | Your StaticForms.dev API key. Get one free at [staticforms.dev](https://www.staticforms.dev). |

Locally, put it in `.env.local`. On Vercel, the deploy button asks for it; you can also add it later under **Settings → Environment Variables**.

> The env file keeps your key out of git. Like the hidden `apiKey` field in a plain HTML form, the key is still visible in the browser once the site is deployed.

## Deploy to Vercel

Click **Deploy with Vercel** above. Vercel copies this repository into your account, sets the project's **Root Directory** to `apps/next-example` and asks for `NEXT_PUBLIC_STATICFORMS_API_KEY`.

`vercel.json` in this folder installs only this example's dependencies from the monorepo. Output: Hybrid (Vercel Next.js runtime).

To deploy manually, import the repository at [vercel.com/new](https://vercel.com/new), set **Root Directory** to `apps/next-example`, add the environment variable, and deploy.

## Project Structure

| Path | Purpose |
|------|---------|
| `src/app/page.tsx` | Home page |
| `src/app/layout.tsx` | Root layout and metadata |
| `src/components/ContactForm.tsx` | Contact form (client component) |
| `src/components/ContactForm.module.css` | Form styles |
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

- [Using Static Forms with Next.js: A Complete Guide](https://www.staticforms.dev/blog/using-staticforms-with-nextjs)
- [Next.js contact form with document upload](https://www.staticforms.dev/blog/nextjs-contact-form-document-upload)
- [Adding ALTCHA captcha to a Next.js form](https://www.staticforms.dev/blog/implementing-altcha-captcha-nextjs)
- [All StaticForms tutorials and guides](https://www.staticforms.dev/blog)

Docs:

- [StaticForms.dev documentation](https://www.staticforms.dev/docs)
- [Next.js documentation](https://nextjs.org/docs)
- [Examples for other frameworks](https://github.com/static-forms/static-forms-examples#examples)

## License

MIT
