# CLAUDE.md

## Core Development Stack
You are an expert in TypeScript, Node.js, Next.js App Router, React, Supabase, Shadcn UI, Radix UI, and Tailwind CSS.

## Package Management & Environment
- **Package Manager**: Use `pnpm` exclusively (never npm or yarn)
- **Server Configuration**: Server always runs on port 3000
- **MCP Integration**: Utilize available MCP servers for knowledgebase and understanding
- **Console Monitoring**: Actively fetch and analyze logs from the console
- **Package Installation**: Only install packages when explicitly requested

## Development Philosophy
- Prioritize iteration and modularization over code duplication
- Proactively suggest performance improvements
- Identify potential security vulnerabilities and provide solutions
- Write concise, technical TypeScript with accurate examples
- Include comments to clarify technical concepts and functions
- Favor functional and declarative patterns over class-based approaches

## Project Structure

### Directory Organization
- **App Router**: Utilize the app/ directory structure (layout.tsx, page.tsx, loading.tsx, error.tsx)
- **Component Location**: Place components in `/app/components` grouped by use case in subdirectories
- **UI Components**: Always leverage `/components/ui` for building new components
- **Feature Grouping**: Organize files by domain (e.g., features/auth, features/dashboard)
- **Utilities**: Use lib/ for low-level logic, Supabase clients, and third-party utilities
- **Supabase Assets**: Store migrations and edge functions in the supabase/ directory
- **Directory Naming**: Use lowercase with dashes (e.g., components/auth-wizard)

### Code Architecture
- Export order: exported component → subcomponents → helpers → static content → types
- Use named exports for components
- Implement helper functions to avoid code duplication
- Create modular, reusable components

## TypeScript Standards

### Type System
- Write all code in TypeScript (no exceptions)
- Prefer interfaces over types for object shapes
- Avoid `any` type - use `unknown` or explicit types instead
- Use interfaces for component props and data models
- Replace enums with plain object maps
- Enable TypeScript strict mode

### Naming Conventions
- Use descriptive variable names with auxiliary verbs (isLoading, hasError, canSubmit)
- Maintain consistent naming patterns across the codebase

## Supabase Implementation

### Client Architecture
- Separate environments using `lib/supabase/server.ts` and `lib/supabase/client.ts`
- Never access Supabase directly in components - use server actions or API routes
- Use anon key only in client components for public queries
- Reserve service_role key for server-side operations only

### Security Configuration
- Enable Row Level Security (RLS) from project inception
- Implement Supabase Auth from day one
- Write RLS rules validating user identity via auth.uid() or request.auth
- Store secrets in Supabase function environment variables
- Limit data exposure - return only necessary fields from database

### Environment Management
- Store all keys in environment variables
- Use `.env.local` for development-only secrets
- Never expose secrets in browser-accessible code

## UI/UX Development

### Color Palette
- **Background**: `#F5F5F5` (Global background color)
- **Primary Text**: `#000` (Headlines and primary content)
- **Secondary Text**: `#626262` (Subheadings and secondary content)
- **Primary Blue**: `#3B81F5` to `#2663EB` (Gradient for main buttons)
- **Accent Blue**: `#92C5FD` (Icons and accents)

### Component Libraries
- Primary: Shadcn UI + Radix UI for component architecture
- Styling: Tailwind CSS for layout, spacing, and utilities
- Use accessible Radix primitives and Shadcn components

### Responsive Design
- Implement mobile-first approach by default
- Ensure all layouts are responsive using Tailwind
- Include dark mode support with `dark:` variants where applicable
- Maintain consistent spacing and typography

### Accessibility
- Ensure proper aria-* attributes
- Implement comprehensive focus handling
- Support full keyboard navigation

## Performance Optimization

### React Patterns
- Minimize usage of 'use client', useEffect, and setState
- Prioritize React Server Components and Server Actions
- Wrap client components in `<Suspense>` with appropriate fallbacks
- Implement lazy loading for non-critical components
- Avoid 'use client' unless required for Web APIs

### Image Optimization
- Use WebP format when possible
- Always include width and height attributes
- Implement lazy loading for images
- Optimize for Core Web Vitals: LCP, CLS, FID

### State Management
- Utilize useFormState and useFormStatus with server actions
- Implement useOptimistic for lightweight interactive state
- Avoid global state libraries unless absolutely necessary

## Security Best Practices

### Authentication & Authorization
- Implement server-side validation for all sensitive logic
- Never rely solely on client-side security checks
- Use Supabase Auth session checks on protected routes
- Clear stale sessions on logout
- Validate session/user IDs before data access or modification

### Input Validation & API Security
- Validate all inputs using zod or similar libraries
- Implement proper error handling for all API routes
- Use server actions with comprehensive validation
- Enable Vercel Web Application Firewall (WAF) to block automated threats

### Data Protection
- Never expose sensitive environment variables to the client
- Implement proper CORS policies
- Use HTTPS for all communications
- Follow the principle of least privilege for data access

## Code Quality & Developer Experience

### Linting & Formatting
- Configure ESLint, Prettier, and TypeScript strict mode
- Ensure `pnpm dev` starts cleanly with no TypeScript errors
- Maintain consistent code formatting across the project

### Documentation
- Document key architectural decisions in README.md or docs/
- Include inline documentation for complex logic
- Maintain up-to-date API documentation

### Development Workflow
- Follow official Next.js documentation for routing, rendering, and data fetching
- Test all features across different browsers and devices
- Implement proper error boundaries and loading states

## Best Practices Summary
1. Always validate inputs with zod
2. Use server-side logic for sensitive operations
3. Implement comprehensive error handling
4. Maintain clean, modular code structure
5. Prioritize performance and security equally
6. Follow React and Next.js best practices
7. Ensure accessibility compliance
8. Document important decisions and complex logic