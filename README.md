# Sentinel Standards

A modern Next.js website for Sentinel Standards, a company specializing in glycomics and proteomics research.

## Technology Stack

This project is built with:

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible UI components
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[Sanity CMS](https://www.sanity.io/)** - Headless CMS for blog content management
- **[next-sanity](https://www.sanity.io/docs/next-sanity)** - Sanity integration for Next.js

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Environment Variables

Create a `.env.local` file in the root directory with your Sanity configuration:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About pages
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   └── products/          # Product pages
├── components/            # React components
│   ├── home/             # Home page components
│   ├── blog/             # Blog components
│   └── ui/               # Reusable UI components
└── lib/                  # Utility functions
    └── sanity/           # Sanity CMS integration
        ├── client.ts     # Sanity client configuration
        ├── config.ts     # Sanity environment variables
        └── queries/      # GROQ queries for blog posts
            └── post.ts   # Post-specific queries
```

## Sanity CMS Integration

This project uses Sanity CMS for managing blog content. The integration includes:

- **Content Management**: Blog posts, authors, and categories managed through Sanity Studio
- **GROQ Queries**: Custom queries for fetching blog posts and related content
- **Image Optimization**: Automatic image URL generation and optimization

### Blog Features

- Dynamic blog post pages with slug-based routing
- Author information and images
- Category filtering
- Rich text content with Portable Text
- Optimized images with Sanity's image URL builder

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS
- [Radix UI Documentation](https://www.radix-ui.com/docs) - learn about Radix UI components
- [Sanity Documentation](https://www.sanity.io/docs) - learn about Sanity CMS
- [GROQ Query Language](https://www.sanity.io/docs/groq) - learn about GROQ queries
