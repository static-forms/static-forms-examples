# StaticForms Next.js Example

A simple contact form built with Next.js 15, React 19, and [StaticForms.dev](https://www.staticforms.dev).

## Features

- Next.js 15 with App Router
- React 19 with Server Components
- Client-side form handling with `useState`
- TypeScript
- CSS Modules for styling
- StaticForms.dev API integration

## Live Demo

[View Live Demo](https://your-app-name.vercel.app) *(Update this URL after deployment)*

## Local Development

### Prerequisites

From the monorepo root:

```bash
# Install dependencies
pnpm install

# Create environment file
cp apps/next-example/env.example apps/next-example/.env.local
```

### Configuration

1. Get your API key from [StaticForms.dev](https://www.staticforms.dev)
2. Add it to `.env.local`:

```env
NEXT_PUBLIC_STATICFORMS_API_KEY=your_api_key_here
```

### Running Locally

```bash
# From monorepo root
pnpm dev:next

# Or from this directory
pnpm dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Building for Production

```bash
# From monorepo root
pnpm build --filter=next-example

# Start production server
cd apps/next-example
pnpm start
```

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/static-forms/static-forms-examples&project-name=staticforms-next&root-directory=apps/next-example&env=NEXT_PUBLIC_STATICFORMS_API_KEY&envDescription=Get%20your%20API%20key%20from%20StaticForms.dev&envLink=https://www.staticforms.dev)

### Option 1: Deploy via Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your Git repository
3. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `apps/next-example`
   - **Build Command**: `cd ../.. && pnpm turbo build --filter=next-example`
   - **Output Directory**: `.next`
   - **Install Command**: `cd ../.. && pnpm install`
4. Add environment variable:
   - Key: `NEXT_PUBLIC_STATICFORMS_API_KEY`
   - Value: Your StaticForms API key
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
pnpm add -g vercel

# From this directory
cd apps/next-example
vercel

# Follow prompts and configure:
# - Build Command: cd ../.. && pnpm turbo build --filter=next-example
# - Output Directory: .next
# - Install Command: cd ../.. && pnpm install

# Add environment variable
vercel env add NEXT_PUBLIC_STATICFORMS_API_KEY

# Deploy to production
vercel --prod
```

### Environment Variables

Required environment variables for deployment:

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_STATICFORMS_API_KEY` | Your StaticForms.dev API key | `sf_xxxxxxxxxxxxx` |

**Important**: Add this in Vercel dashboard under Settings → Environment Variables

## Project Structure

```
apps/next-example/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── page.module.css       # Page styles
│   │   ├── layout.tsx            # Root layout
│   │   └── globals.css           # Global styles
│   └── components/
│       ├── ContactForm.tsx       # Contact form component
│       └── ContactForm.module.css
├── public/                        # Static assets
├── .env.local                     # Environment variables (local)
├── env.example                    # Environment template
├── next.config.ts                 # Next.js configuration
├── tsconfig.json                  # TypeScript configuration
├── vercel.json                    # Vercel deployment config
└── package.json
```

## How It Works

1. User fills out the contact form
2. Form data is sent to StaticForms.dev API
3. StaticForms handles email delivery
4. Success/error message is displayed

## StaticForms API Integration

The form uses the StaticForms.dev API endpoint:

```typescript
POST https://api.staticforms.dev/submit
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

- [Next.js Documentation](https://nextjs.org/docs)
- [StaticForms.dev Documentation](https://www.staticforms.dev/docs)
- [Vercel Deployment Documentation](https://vercel.com/docs)

## License

MIT
