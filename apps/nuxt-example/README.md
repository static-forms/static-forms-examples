# StaticForms Nuxt Example

A simple contact form built with Nuxt 3, Vue 3, and [StaticForms.xyz](https://www.staticforms.xyz).

## Features

- Nuxt 3 with Server-Side Rendering
- Vue 3 Composition API
- `reactive` and `ref` for state management
- TypeScript
- Scoped CSS styling
- StaticForms.xyz API integration

## Live Demo

[View Live Demo](https://your-app-name.vercel.app) *(Update this URL after deployment)*

## Local Development

### Prerequisites

From the monorepo root:

```bash
# Install dependencies
pnpm install

# Create environment file
cp apps/nuxt-example/env.example apps/nuxt-example/.env
```

### Configuration

1. Get your API key from [StaticForms.xyz](https://www.staticforms.xyz)
2. Add it to `.env`:

```env
NUXT_PUBLIC_STATICFORMS_API_KEY=your_api_key_here
```

### Running Locally

```bash
# From monorepo root
pnpm dev:nuxt

# Or from this directory
pnpm dev
```

The app will be available at [http://localhost:3001](http://localhost:3001).

## Building for Production

```bash
# From monorepo root
pnpm build --filter=nuxt-example

# Preview production build
cd apps/nuxt-example
pnpm preview
```

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/static-forms/static-forms-examples&project-name=staticforms-nuxt&root-directory=apps/nuxt-example&env=NUXT_PUBLIC_STATICFORMS_API_KEY&envDescription=Get%20your%20API%20key%20from%20StaticForms.xyz&envLink=https://www.staticforms.xyz)

### Option 1: Deploy via Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your Git repository
3. Configure the project:
   - **Framework Preset**: Nuxt.js
   - **Root Directory**: `apps/nuxt-example`
   - **Build Command**: `cd ../.. && pnpm turbo build --filter=nuxt-example`
   - **Output Directory**: `.output`
   - **Install Command**: `cd ../.. && pnpm install`
4. Add environment variable:
   - Key: `NUXT_PUBLIC_STATICFORMS_API_KEY`
   - Value: Your StaticForms API key
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
pnpm add -g vercel

# From this directory
cd apps/nuxt-example
vercel

# Follow prompts and configure:
# - Build Command: cd ../.. && pnpm turbo build --filter=nuxt-example
# - Output Directory: .output
# - Install Command: cd ../.. && pnpm install

# Add environment variable
vercel env add NUXT_PUBLIC_STATICFORMS_API_KEY

# Deploy to production
vercel --prod
```

### Environment Variables

Required environment variables for deployment:

| Variable | Description | Example |
|----------|-------------|---------|
| `NUXT_PUBLIC_STATICFORMS_API_KEY` | Your StaticForms.xyz API key | `sf_xxxxxxxxxxxxx` |

**Important**: Add this in Vercel dashboard under Settings → Environment Variables

## Project Structure

```
apps/nuxt-example/
├── pages/
│   └── index.vue              # Home page
├── components/
│   └── ContactForm.vue        # Contact form component
├── assets/
│   └── css/
│       └── main.css           # Global styles
├── public/                    # Static assets
├── .env                       # Environment variables (local)
├── env.example                # Environment template
├── nuxt.config.ts             # Nuxt configuration
├── tsconfig.json              # TypeScript configuration
├── vercel.json                # Vercel deployment config
├── app.vue                    # Root Vue component
└── package.json
```

## How It Works

1. User fills out the contact form
2. Form data is sent to StaticForms.xyz API via `$fetch`
3. StaticForms handles email delivery
4. Success/error message is displayed

## StaticForms API Integration

The form uses the StaticForms.xyz API endpoint:

```typescript
POST https://api.staticforms.xyz/submit
Content-Type: application/json

{
  "apiKey": "YOUR_API_KEY",
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!",
  "replyTo": "@",
  "subject": "New Contact Form Submission"
}
```

## Learn More

- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [StaticForms.xyz Documentation](https://www.staticforms.xyz/docs)
- [Vercel Deployment Documentation](https://vercel.com/docs)

## License

MIT
