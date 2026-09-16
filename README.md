# AI Resume Builder Homepage Website

A modern, AI-powered resume builder designed to create professional, ATS-optimized resumes that help job seekers stand out in the competitive job market. Built with React, TypeScript, and modern web technologies.

![AI Resume Builder](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Vite](https://img.shields.io/badge/Vite-5.4.19-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38bdf8)

## Features

- **AI Resume Agent** - Chat with AI to craft the perfect resume with industry-specific context
- **ATS Optimization** - Automatically identify and integrate keywords to pass applicant tracking systems
- **Job Search & Tracking** - Integrated job finder and application tracker
- **AI Interview Practice** - Mock interviews with AI scoring and feedback
- **Resume Scoring** - Get instant ATS compatibility scores with actionable improvement tips
- **Professional Templates** - Beautiful, recruiter-ready resume templates
- **Real-time Preview** - See changes instantly as you build your resume

## Tech Stack

### Core Technologies
- **React 18.3.1** - UI library
- **TypeScript 5.8.3** - Type-safe JavaScript
- **Vite 5.4.19** - Fast build tool and dev server
- **React Router DOM 6.30.1** - Client-side routing

### UI & Styling
- **TailwindCSS 3.4.17** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible UI components
- **shadcn/ui** - Beautiful, customizable component library
- **Lucide React** - Icon library
- **Framer Motion** - Smooth animations

### State Management & Data
- **TanStack Query 5.83.0** - Server state management
- **React Hook Form 7.61.1** - Form state management
- **Zod 3.25.76** - Schema validation

### Testing
- **Vitest 3.2.4** - Unit testing framework
- **Playwright 1.57.0** - End-to-end testing
- **Testing Library** - React component testing utilities

### Development Tools
- **ESLint 9.32.0** - Code linting
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.21** - CSS vendor prefixing

## Installation

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, or bun package manager

### Clone the repository
```bash
git clone https://github.com/bhattjee/AI-CV_Builder_Website.git
cd AI-CV_Builder_Website
```

### Install dependencies
```bash
# Using npm
npm install

# Using bun
bun install
```

## Development

### Start the development server
```bash
# Using npm
npm run dev

# Using bun
bun run dev
```

The application will be available at `http://localhost:8080`

### Build for production
```bash
# Using npm
npm run build

# Using bun
bun run build
```

### Preview production build
```bash
# Using npm
npm run preview

# Using bun
bun run preview
```

## Testing

### Run unit tests
```bash
# Using npm
npm run test

# Using bun
bun run test
```

### Run tests in watch mode
```bash
# Using npm
npm run test:watch

# Using bun
bun run test:watch
```

### Run E2E tests with Playwright
```bash
# Using npm
npx playwright test

# Using bun
bunx playwright test
```

### Lint code
```bash
# Using npm
npm run lint

# Using bun
bun run lint
```

## Project Structure

```
AI-CV_Builder_Website/
├── src/
│   ├── components/
│   │   ├── landing/          # Landing page components
│   │   │   ├── Hero.tsx
│   │   │   ├── FeaturesGrid.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── TestimonialsGrid.tsx
│   │   │   └── ...
│   │   └── ui/               # shadcn/ui components
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   ├── pages/                # Page components
│   └── test/                 # Test files
├── public/                   # Static assets
├── index.html                # HTML entry point
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # TailwindCSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## Customization

### Theme Configuration
The application uses CSS variables for theming. Modify `src/index.css` to customize colors:

```css
:root {
  --primary: 222 47% 11%;
  --secondary: 210 40% 96%;
  --accent: 210 40% 96%;
  --cta: 262 83% 58%;
  /* ... more variables */
}
```

### Component Customization
UI components are built with Radix UI and TailwindCSS. Modify components in `src/components/ui/` to fit your needs.

## Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the dist folder to Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["npm", "run", "preview"]
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)

## Support

For support, open an issue in the repository or contact the maintainers.

---

Built with ❤️ using modern web technologies
