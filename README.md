# LEV WEAR Web

This is a Fortune-100-grade website for the LEV WEAR brand, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion. It prioritizes performance, accessibility (WCAG 2.2 AA), and impeccable code structure, featuring a modern, minimal design with luxurious spacing, crisp typography, and subtle micro-interactions.

## Features

- **Next.js 14 (App Router)**: Modern React framework for building full-stack web applications.
- **TypeScript**: Type-safe JavaScript for robust and scalable code.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **shadcn/ui**: Beautifully designed, accessible, and customizable UI components.
- **Framer Motion**: For fluid animations and micro-interactions.
- **ESLint & Prettier**: Code quality and formatting.
- **Husky & lint-staged**: Git commit hooks for enforcing code standards.
- **Absolute Imports**: Configured with `@/*` alias for `src/` directory.
- **Shopify Storefront API Integration**: For product data and e-commerce functionality.
- **Printful Integration**: For print-on-demand services.
- **SEO**: Comprehensive metadata, Open Graph, Twitter Cards, and Schema.org.
- **Analytics**: Google Analytics 4 (GA4) and Meta Pixel integration.
- **Security Hardening**: Best practices for web security.

## Setup

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)
- Git

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/levwear-web.git
    cd levwear-web
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env.local` file in the root of the project based on `.env.example`:

    ```bash
    cp .env.example .env.local
    ```

    Edit `.env.local` and fill in your Shopify Storefront API credentials and GA4 Measurement ID:

    ```
    # Shopify Storefront API
    SHOPIFY_STORE_DOMAIN=your-shopify-store-domain.myshopify.com
    SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-shopify-storefront-access-token

    # Google Analytics 4
    NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
    ```

### Running the Development Server

To start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

To build the application for production:

```bash
npm run build
```

### Linting and Formatting

To check for linting errors and format the code:

```bash
npm run lint
npm run format
```

(Note: `lint-staged` and `husky` will automatically run linting and formatting checks before each commit.)

## Acceptance Criteria (Initial Setup)

- `npm run dev` starts without errors.
- `eslint .` and `prettier --check .` pass.
- shadcn/ui components generate successfully.
- Project uses `src/` directory with App Router.

## Project Structure

```
levwear-web/
├── .husky/
├── public/
├── src/
│   ├── app/
│   ├── components/
│   │   └── ui/ (shadcn/ui components)
│   ├── lib/
│   ├── types/ (custom type declarations)
│   └── ...
├── .env.example
├── .eslintrc.json
├── .prettierrc
├── next.config.mjs
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
├── tsconfig.json
└── ...
```
