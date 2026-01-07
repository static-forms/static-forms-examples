# StaticForms Examples

A monorepo showcasing [StaticForms.xyz](https://www.staticforms.xyz) integration across different frameworks. Each example demonstrates a simple contact form with name, email, and message fields.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.x or later
- [pnpm](https://pnpm.io/) 9.x or later

### Installation

```bash
# Clone the repository
git clone https://github.com/static-forms/static-forms-examples.git
cd static-forms-examples

# Install dependencies
pnpm install
```

### Configuration

1. Get your API key from [StaticForms.xyz](https://www.staticforms.xyz)
2. Create environment files in each app directory:

**Next.js** (`apps/next-example/.env.local`):
```env
NEXT_PUBLIC_STATICFORMS_API_KEY=your_api_key_here
```

**Nuxt** (`apps/nuxt-example/.env`):
```env
NUXT_PUBLIC_STATICFORMS_API_KEY=your_api_key_here
```

### Running Examples

```bash
# Run all examples simultaneously
pnpm dev

# Run specific example
pnpm dev:next    # Next.js on http://localhost:3000
pnpm dev:nuxt    # Nuxt on http://localhost:3001
```

### Building for Production

```bash
pnpm build
```

## Deployment

Both examples are deployed on Vercel and available as live demos:

- **Next.js Example**: [View Demo](https://your-next-app.vercel.app) *(Update this URL after deployment)*
- **Nuxt Example**: [View Demo](https://your-nuxt-app.vercel.app) *(Update this URL after deployment)*

### Deploy Your Own

Each app can be independently deployed to Vercel:

1. **Next.js**: See [apps/next-example/README.md](./apps/next-example/README.md) for deployment instructions
2. **Nuxt**: See [apps/nuxt-example/README.md](./apps/nuxt-example/README.md) for deployment instructions

### Quick Deploy

[![Deploy Next.js with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/static-forms/static-forms-examples&project-name=staticforms-next&root-directory=apps/next-example&env=NEXT_PUBLIC_STATICFORMS_API_KEY&envDescription=Get%20your%20API%20key%20from%20StaticForms.xyz&envLink=https://www.staticforms.xyz)

[![Deploy Nuxt with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/static-forms/static-forms-examples&project-name=staticforms-nuxt&root-directory=apps/nuxt-example&env=NUXT_PUBLIC_STATICFORMS_API_KEY&envDescription=Get%20your%20API%20key%20from%20StaticForms.xyz&envLink=https://www.staticforms.xyz)

## Project Structure

```
static-forms-examples/
├── apps/
│   ├── next-example/     # Next.js 15 + React 19
│   │   ├── src/
│   │   │   ├── app/
│   │   │   └── components/
│   │   └── package.json
│   └── nuxt-example/     # Nuxt 3 + Vue 3
│       ├── pages/
│       ├── components/
│       └── package.json
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

## Examples

### Next.js

The Next.js example uses:
- App Router with React Server Components
- Client-side form handling with `useState`
- CSS Modules for styling
- TypeScript

### Nuxt

The Nuxt example uses:
- Nuxt 3 with Composition API
- Vue's `reactive` and `ref` for state management
- Scoped styles
- TypeScript

## StaticForms API

Each example submits to the StaticForms API:

```javascript
// POST https://api.staticforms.xyz/submit
{
  "apiKey": "YOUR_API_KEY",
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!",
  "replyTo": "@",
  "subject": "New Contact Form Submission"
}
```

### Response

**Success:**
```json
{
  "success": true
}
```

**Error:**
```json
{
  "success": false,
  "message": "Error description"
}
```

## License

MIT

