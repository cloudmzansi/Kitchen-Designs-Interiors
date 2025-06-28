# KD Interiors Website

A modern, responsive React website for Kitchen Designs & Interiors, featuring bespoke kitchen, bedroom, bathroom, and commercial renovation services. Built with React, TypeScript, Vite, and Tailwind CSS.

## ✨ Features

- **Modern Design**: Clean, professional interface with forest green brand colors
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Image Optimization**: AVIF and WebP formats with lazy loading
- **Contact Forms**: Secure Web3Forms integration with spam protection
- **SEO Optimized**: Meta tags, structured data, and performance optimization
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Fast Loading**: Optimized images, code splitting, and efficient bundling

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with custom forest green color palette
- **Icons**: Lucide React
- **Forms**: Web3Forms for secure contact form handling
- **Deployment**: Vercel with automatic builds
- **Image Optimization**: Vite Plugin ImageMin

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kdinteriors
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Add your Web3Forms API key to `.env`:
```bash
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

### Development

```bash
npm run dev
```

The development server will start at `http://localhost:5173`

### Building for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── ImageSlider.tsx # Image gallery component
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── Kitchens.tsx    # Kitchen services
│   ├── Bedrooms.tsx    # Bedroom services
│   ├── Bathrooms.tsx   # Bathroom services
│   ├── Commercial.tsx  # Commercial services
│   └── ...            # Other pages
├── hooks/              # Custom React hooks
├── assets/             # Images and static assets
└── index.css          # Global styles
```

## 🎨 Design System

### Color Palette
- **Primary**: Forest Green (`#166534`, `#15803d`, `#16a34a`)
- **Neutral**: Gray scale (`#f9fafb` to `#111827`)
- **Accent**: White and light grays for contrast

### Typography
- **Headings**: Bold, large-scale typography for hierarchy
- **Body**: Clean, readable fonts with proper line spacing
- **CTAs**: Prominent button styling with hover effects

## 📧 Contact Form Setup

### Web3Forms Configuration

1. Sign up at [Web3Forms](https://web3forms.com/)
2. Get your API key from the dashboard
3. Add to environment variables:
   - **Local**: `.env` file
   - **Production**: Vercel environment variables

### Form Features
- Spam protection with reCAPTCHA
- Email notifications
- Form validation
- Success/error handling

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_WEB3FORMS_ACCESS_KEY` | Web3Forms API key for contact forms | Yes |

### Tailwind Configuration

Custom forest green color palette defined in `tailwind.config.js`:

```javascript
colors: {
  forest: {
    50: '#f0fdf4',
    100: '#dcfce7',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  }
}
```

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: Tailwind's responsive utilities
- **Touch Friendly**: Large touch targets and smooth interactions
- **Performance**: Optimized images and lazy loading

## 🔍 SEO & Performance

- **Meta Tags**: Dynamic meta tags for each page
- **Structured Data**: JSON-LD markup for better search results
- **Image Optimization**: AVIF format with fallbacks
- **Core Web Vitals**: Optimized for performance metrics
- **Sitemap**: Auto-generated sitemap.xml

## 🛡️ Security

- **Environment Variables**: Sensitive data stored securely
- **Form Security**: Web3Forms spam protection
- **No Eval**: Removed all eval() usage
- **HTTPS**: Secure connections in production

## 📄 License

This project is proprietary to Kitchen Designs & Interiors.

## 🤝 Support

For technical support or questions about the website, please contact the development team.

---

**Built with ❤️ for Kitchen Designs & Interiors**
