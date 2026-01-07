# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Turborepo monorepo demonstrating StaticForms.dev integration across different frameworks (Next.js and Nuxt). Each example implements a simple contact form that submits to the StaticForms API.

## Development Commands

```bash
# Install dependencies
pnpm install

# Run all examples simultaneously
pnpm dev

# Run specific example
pnpm dev:next    # Next.js on http://localhost:3000
pnpm dev:nuxt    # Nuxt on http://localhost:3001

# Build all apps
pnpm build

# Lint all apps
pnpm lint
```

### Per-App Commands

**Next.js** (`apps/next-example`):
```bash
cd apps/next-example
pnpm dev          # Development server with Turbopack
pnpm build        # Production build
pnpm start        # Production server
pnpm lint         # ESLint
```

**Nuxt** (`apps/nuxt-example`):
```bash
cd apps/nuxt-example
pnpm dev          # Development server
pnpm build        # Production build
pnpm generate     # Static site generation
pnpm preview      # Preview production build
pnpm lint         # ESLint
```

## Architecture

### Monorepo Structure

- **Turborepo**: Manages the monorepo build pipeline via `turbo.json`
- **pnpm workspaces**: Handles dependency management across apps (`pnpm-workspace.yaml`)
- **Apps**: Each framework example is isolated in `apps/*` with independent dependencies

### StaticForms Integration Pattern

Both examples follow the same integration pattern:

1. **Environment Configuration**: API key stored in environment variables
   - Next.js: `NEXT_PUBLIC_STATICFORMS_API_KEY` in `.env.local`
   - Nuxt: `NUXT_PUBLIC_STATICFORMS_API_KEY` in `.env`, accessed via `useRuntimeConfig()`

2. **Form Submission**: POST to `https://api.staticforms.dev/submit` with payload:
   ```typescript
   {
     apiKey: string,
     name: string,
     email: string,
     message: string,
     replyTo: "@",  // Uses sender's email
     subject: "New Contact Form Submission"
   }
   ```

3. **Response Handling**: API returns `{ success: boolean, message?: string }`

4. **State Management**: Four states tracked across both implementations:
   - `idle`: Initial form state
   - `loading`: Submitting form
   - `success`: Submission successful (shows success message)
   - `error`: Submission failed (shows error message)

### Framework-Specific Patterns

**Next.js** (`apps/next-example`):
- App Router with React Server Components
- Client component (`"use client"`) for form interactivity
- CSS Modules for styling (`ContactForm.module.css`)
- Native `fetch` API for HTTP requests
- `FormData` for extracting form values
- `useState` for state management

**Nuxt** (`apps/nuxt-example`):
- Composition API with `<script setup>`
- Nuxt's `$fetch` utility for HTTP requests
- `useRuntimeConfig()` for accessing environment variables
- `reactive()` for form data, `ref()` for status/error state
- Scoped CSS in Single File Components
- CSS variables for theming

## Environment Setup

Create these files (not committed to git):

**Next.js**: `apps/next-example/.env.local`
```env
NEXT_PUBLIC_STATICFORMS_API_KEY=your_api_key_here
```

**Nuxt**: `apps/nuxt-example/.env`
```env
NUXT_PUBLIC_STATICFORMS_API_KEY=your_api_key_here
```

Get API keys from https://www.staticforms.dev

## Turbo Configuration

The `turbo.json` defines:
- `dev`: No cache, persistent (keeps servers running)
- `build`: Caches outputs in `.next/`, `.output/`, `dist/`
- `lint`: Standard caching
