# StaticForms Examples

A monorepo showcasing [StaticForms.xyz](https://www.staticforms.xyz) integration across different frameworks. Each example demonstrates a simple contact form with name, email, and message fields.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.x or later
- [pnpm](https://pnpm.io/) 9.x or later

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/static-forms-examples.git
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

