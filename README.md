# KD Interiors Website

A modern React website for KD Interiors, featuring kitchen, bedroom, bathroom, and commercial renovation services.

## Environment Variables

### For Local Development

1. Create a `.env` file in the root directory
2. Add your Web3Forms API key:

```bash
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

### For Vercel Deployment

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new environment variable:
   - **Name:** `VITE_WEB3FORMS_ACCESS_KEY`
   - **Value:** `your_web3forms_access_key_here`
   - **Environment:** Production, Preview, and Development
4. Redeploy your project

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Security Notes

- API keys are stored in environment variables
- All eval() usage has been removed for security
- Form submissions use secure Web3Forms integration
- Environment variables are required for form functionality
