# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Turborepo monorepo demonstrating StaticForms.dev integration across 13 frameworks. Each app in `apps/*` implements the same contact form (name, email, message) that submits to the StaticForms API, with identical states and styling.

| App | Stack | Dev port | API key env var |
|-----|-------|----------|-----------------|
| `next-example` | Next.js 16 (App Router) | 3000 | `NEXT_PUBLIC_STATICFORMS_API_KEY` |
| `nuxt-example` | Nuxt 4 | 3001 | `NUXT_PUBLIC_STATICFORMS_API_KEY` (runtime config) |
| `react-example` | React 19 + Vite 8 | 3002 | `VITE_STATICFORMS_API_KEY` |
| `vue-example` | Vue 3.5 + Vite 8 | 3003 | `VITE_STATICFORMS_API_KEY` |
| `sveltekit-example` | SvelteKit 3 + Svelte 5 | 3004 | `PUBLIC_STATICFORMS_API_KEY` (declared in `src/env.ts`) |
| `astro-example` | Astro 7 | 3005 | `PUBLIC_STATICFORMS_API_KEY` |
| `angular-example` | Angular 22 | 3006 | `NG_APP_STATICFORMS_API_KEY` (written to `src/env.generated.ts` by `scripts/write-env.mjs`) |
| `react-router-example` | React Router 8, SPA mode | 3007 | `VITE_STATICFORMS_API_KEY` |
| `solid-start-example` | SolidStart 2 | 3008 | `VITE_STATICFORMS_API_KEY` |
| `qwik-example` | Qwik 1.20 + Qwik City (static adapter) | 3009 | `PUBLIC_STATICFORMS_API_KEY` |
| `gatsby-example` | Gatsby 5 | 3010 | `GATSBY_STATICFORMS_API_KEY` |
| `eleventy-example` | Eleventy 3 | 3011 | `STATICFORMS_API_KEY` (read in `src/_data/site.js`) |
| `html-example` | Plain HTML + vanilla JS | 3012 | `STATICFORMS_API_KEY` (injected by `scripts/build.mjs`) |

## Development Commands

Requires Node.js 24+ (`.nvmrc`) and pnpm 10.

```bash
pnpm install          # install all apps
pnpm dev              # run every example
pnpm dev:<key>        # run one: next, nuxt, react, vue, sveltekit, astro, angular,
                      # react-router, solid-start, qwik, gatsby, eleventy, html
pnpm build            # build all apps (Turborepo)
pnpm lint             # lint apps that define a lint script
```

Each app's `env.example` documents its environment variable.

## Architecture

- **Turborepo** (`turbo.json`) runs `dev`/`build`/`lint`; the API key env vars are listed in `globalEnv` so cache keys change with them.
- **pnpm workspaces** (`pnpm-workspace.yaml`): apps are independent, with no shared packages.
- **Vercel**: each app has a `vercel.json` whose `installCommand` is `pnpm install --filter <app>...`. Deploy buttons in the READMEs use `root-directory=apps/<app>`. React Router, Qwik and HTML set `framework: null` with an explicit `outputDirectory` because they deploy as static files.

### StaticForms Integration Pattern

Every example POSTs JSON from the browser to `https://api.staticforms.dev/submit`:

```typescript
{ apiKey, name, email, message, replyTo: "@", subject: "New Contact Form Submission" }
```

The API returns `{ success: boolean, message?: string }`. Each form tracks four states (`idle`, `loading`, `success`, `error`), disables fields while loading, shows the API's error message, and offers "Send another message" after success. Form values are read before fields are disabled, because disabled fields are excluded from `FormData`.

Most apps share one stylesheet (kebab-case classes such as `.form`, `.submit-button`, `.success-message`); Next.js uses the CSS Modules equivalent. Astro, Eleventy and HTML use a vanilla script that reads the key from the form's `data-api-key` attribute.

### Cross-links

Each page footer and README links to the matching staticforms.dev blog tutorial (`https://www.staticforms.dev/blog/<slug>`). When adding a framework, also add the app to the root README table, add a `dev:<key>` script, and add a `vercel.json`.
