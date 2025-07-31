# Claude.md 

You are an expert in TypeScript, Next.js App Router, React, Tailwind CSS, Shadcn UI, and Supabase.

This project is a **marketing landing page / website**, not a full web application. The goal is clear structure, fast performance, accessibility, great mobile design, and maintainability.

## Project Structure

- Use the `app/` directory with `layout.tsx` and `page.tsx` for each route.
- Group related sections/pages in feature folders like `features/landing`, `features/about`, `features/contact`.
- Place shared UI components in `components/`.
- Place simple reusable logic or helpers in `lib/`.
- Keep structure flat and clear — optimize for simplicity over flexibility.

This is a Next.js 15.4.4 website project using:

- App Router architecture (files in `/src/app/`)
- TypeScript with strict mode enabled
- Tailwind CSS v4 (beta) for styling
- React 19.1.0 with server components
- Path alias `@/*` maps to `./src/*`
- Global styles defined in `app/globals.css` using Tailwind directives

## Project Structure

- Use the `app/` directory with `layout.tsx` and `page.tsx` per route
- Organize content pages under `features/*` (e.g., `features/landing`, `features/about`)
- Reusable UI components go in `components/`
- Utility functions and logic go in `lib/`
- Keep everything simple and readable — this is a website, not a full web app

## Code Style

- Use strict TypeScript throughout the codebase
- Functional components only, with explicitly typed props using `interface`
- Write clear, readable, maintainable code with helpful comments where necessary
- Avoid code duplication; reuse components and logic

## Component and Styling Rules

- Use Shadcn UI and Radix UI primitives for all interactive components
- Use Tailwind CSS v4 for layout, spacing, and styling
- Design mobile-first, using responsive variants
- Use the 8-point grid system (8, 16, 24...), with 4-point increments allowed for fine-tuning
- Never use arbitrary values like 5px, 13px, etc.
- Support dark mode using Tailwind's `dark:` variants

## Naming Conventions

- Folder names: kebab-case (e.g., `components/hero-section`)
- Variables and functions: camelCase
- Use named exports
- Use `interface` for objects and props
- Avoid `enum`; prefer union types or plain object maps

## Import Order

1. External packages (`react`, `next`, etc.)
2. Absolute imports (`@/components`, `@/lib`)
3. Relative imports (`./`, `../`)
4. CSS imports last (`import './globals.css'`)

## Forms and State Management

- Minimal dynamic logic — use `useState`, `useFormStatus` when needed
- Avoid global state libraries
- Use `zod` for validating any form input
- Prefer server components and server actions when handling user input

## Performance Guidelines

- Avoid unnecessary `use client` directives
- Prefer server components by default
- Lazy-load non-critical client components
- Optimize all images with `next/image` or WebP, using `loading="lazy"` and defined dimensions
- Use `<Suspense>` with appropriate fallbacks where necessary

## Linting and Typing

- ESLint with Next.js and TypeScript recommended rules
- Prettier formatting enabled
- No use of `any`; use `unknown`, `z.infer`, or strict typing
- Use clear and informative variable and function names

## Accessibility and UX

- Use semantic HTML and accessible components (Shadcn + Radix UI)
- All interactive elements must support keyboard navigation and focus states
- Use consistent spacing, motion, and typography throughout the site

### Developer Experience

- `pnpm dev` should start without TypeScript errors.
- All major decisions must be documented in `README.md` or inside `docs/`.
- Favor clarity, type safety, and maintainability over brevity.