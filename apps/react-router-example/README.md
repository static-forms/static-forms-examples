# StaticForms React Router Example

A contact form built with **React Router 8 (framework mode) + React 19** that sends submissions to your inbox through [StaticForms.dev](https://www.staticforms.dev). There's no backend to write or host.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fstatic-forms%2Fstatic-forms-examples&root-directory=apps%2Freact-router-example&project-name=staticforms-react-router&repository-name=staticforms-react-router-example&env=VITE_STATICFORMS_API_KEY&envDescription=Your%20StaticForms.dev%20API%20key&envLink=https%3A%2F%2Fwww.staticforms.dev%2Fdocs)

> 📖 **Step-by-step tutorial:** [React contact form that sends email](https://www.staticforms.dev/blog/react-contact-form-email-tutorial) on the StaticForms blog.

## Features

- React Router framework mode (the successor to Remix)
- SPA mode (`ssr: false`), deployed as static files
- Typed route modules
- TypeScript
- Loading, success and error states
- Shared styling with every other example in [this repo](https://github.com/static-forms/static-forms-examples)

## Quick Start

```bash
# From the monorepo root
pnpm install
cp apps/react-router-example/env.example apps/react-router-example/.env
# Add your API key to the new file, then:
pnpm dev:react-router
```

The app runs on [http://localhost:3007](http://localhost:3007).

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_STATICFORMS_API_KEY` | Your StaticForms.dev API key. Get one free at [staticforms.dev](https://www.staticforms.dev). |

Locally, put it in `.env`. On Vercel, the deploy button asks for it; you can also add it later under **Settings → Environment Variables**.

> The env file keeps your key out of git. Like the hidden `apiKey` field in a plain HTML form, the key is still visible in the browser once the site is deployed.

## Deploy to Vercel

Click **Deploy with Vercel** above. Vercel copies this repository into your account, sets the project's **Root Directory** to `apps/react-router-example` and asks for `VITE_STATICFORMS_API_KEY`.

`vercel.json` in this folder installs only this example's dependencies from the monorepo. Output: Static SPA (`build/client`).

To deploy manually, import the repository at [vercel.com/new](https://vercel.com/new), set **Root Directory** to `apps/react-router-example`, add the environment variable, and deploy.

## Project Structure

| Path | Purpose |
|------|---------|
| `app/routes/home.tsx` | Home route |
| `app/components/ContactForm.tsx` | Contact form |
| `app/root.tsx` | Root layout |
| `react-router.config.ts` | SPA mode config |
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

- [React contact form that sends email](https://www.staticforms.dev/blog/react-contact-form-email-tutorial)
- [All StaticForms tutorials and guides](https://www.staticforms.dev/blog)

Docs:

- [StaticForms.dev documentation](https://www.staticforms.dev/docs)
- [React Router documentation](https://reactrouter.com)
- [Examples for other frameworks](https://github.com/static-forms/static-forms-examples#examples)

## License

MIT
