# Project Structure

## Directory Organization

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout component
│   └── page.js            # Homepage
├── components/            # Reusable React components
│   ├── layout/           # Layout components (Header, Footer, etc.)
│   ├── sections/         # Page sections (Hero, Services, etc.)
│   └── ui/               # UI components (Button, Card, etc.)
├── lib/                  # Configuration and constants
│   └── constants.js      # Site configuration and constants
├── styles/               # Additional stylesheets
├── utils/                # Utility functions
│   ├── helpers.js        # General helper functions
│   └── validation.js     # Form validation utilities
```

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint with Next.js config
- **Formatting**: Prettier
- **Package Manager**: npm
