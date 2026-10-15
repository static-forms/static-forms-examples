# StaticForms HTML Example

A contact form built with **Plain HTML + vanilla JavaScript** that sends submissions to your inbox through [StaticForms.dev](https://www.staticforms.dev). There's no backend to write or host.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fstatic-forms%2Fstatic-forms-examples&root-directory=apps%2Fhtml-example&project-name=staticforms-html&repository-name=staticforms-html-example&env=STATICFORMS_API_KEY&envDescription=Your%20StaticForms.dev%20API%20key&envLink=https%3A%2F%2Fwww.staticforms.dev%2Fdocs)

> 📖 **Step-by-step tutorial:** [Send email from an HTML form without a server](https://www.staticforms.dev/blog/html-form-send-email-without-server) on the StaticForms blog.

## Features

- No framework and no bundler
- Vanilla JS `fetch` submission
- Tiny build script injects the API key (optional)
- Works on any static host
- Loading, success and error states
- Shared styling with every other example in [this repo](https://github.com/static-forms/static-forms-examples)

## Quick Start

```bash
# From the monorepo root
pnpm install
cp apps/html-example/env.example apps/html-example/.env
# Add your API key to the new file, then:
pnpm dev:html
```

The app runs on [http://localhost:3012](http://localhost:3012).

## Environment Variables

| Variable | Description |
|----------|-------------|
| `STATICFORMS_API_KEY` | Your StaticForms.dev API key. Get one free at [staticforms.dev](https://www.staticforms.dev). |

Locally, put it in `.env`. On Vercel, the deploy button asks for it; you can also add it later under **Settings → Environment Variables**.

> The env file keeps your key out of git. Like the hidden `apiKey` field in a plain HTML form, the key is still visible in the browser once the site is deployed.

## Deploy to Vercel

Click **Deploy with Vercel** above. Vercel copies this repository into your account, sets the project's **Root Directory** to `apps/html-example` and asks for `STATICFORMS_API_KEY`.

`vercel.json` in this folder installs only this example's dependencies from the monorepo. Output: Static (`dist/`).

To deploy manually, import the repository at [vercel.com/new](https://vercel.com/new), set **Root Directory** to `apps/html-example`, add the environment variable, and deploy.

## Project Structure

| Path | Purpose |
|------|---------|
| `src/index.html` | Page and form markup |
| `src/contact-form.js` | Form submission script |
| `scripts/build.mjs` | Copies `src/` to `dist/` and injects the API key |
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

- [Send email from an HTML form without a server](https://www.staticforms.dev/blog/html-form-send-email-without-server)
- [Contact form on GitHub Pages](https://www.staticforms.dev/blog/github-pages-contact-form-tutorial)
- [All StaticForms tutorials and guides](https://www.staticforms.dev/blog)

Docs:

- [StaticForms.dev documentation](https://www.staticforms.dev/docs)
- [HTML documentation](https://developer.mozilla.org/docs/Learn/Forms)
- [Examples for other frameworks](https://github.com/static-forms/static-forms-examples#examples)

## License

MIT
