# Portfolio Project

This is a modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. The project follows a structured organization to make it easy to maintain and modify.

## Project Structure

```
├── app/                  # Next.js app directory containing pages and layouts
├── components/          # React components organized by category
│   ├── layout/         # Layout components (header, footer, etc.)
│   ├── sections/       # Main section components
│   ├── shared/         # Reusable components
│   ├── ui/            # UI components (buttons, inputs, etc.)
│   └── providers/     # Context providers
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
│   └── components/    # Component-specific types
├── public/             # Static assets
└── data/              # Data files and constants
```

## How to Modify

### Adding New Components

1. Place new components in the appropriate directory under `components/`
2. Use default exports for Single File Components
3. Follow the naming convention: `ComponentName.tsx`
4. Add corresponding types in `types/components/`

### Adding New Hooks

1. Place new hooks in the `hooks/` directory
2. Follow the naming convention: `useHookName.ts`
3. Keep hooks focused on a single responsibility

### Adding New Types

1. Place shared types in the `types/` directory
2. Place component-specific types in `types/components/`
3. Follow the naming convention: `entityName.ts`

### Best Practices

1. Each component should have a single responsibility
2. Use custom hooks for complex logic and state management
3. Keep components small and focused
4. Use TypeScript types for better maintainability
5. Follow the import/export conventions:
   - Use default exports for components
   - Use named exports for hooks and types
   - Import syntax should match export type (no curly braces for default exports)

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Configuration

Important: Do not modify the following configuration files unless specifically instructed:
- `package.json`
- `tailwind.config.ts`
- `tsconfig.json`
- `next.config.ts`

These files are carefully configured for the project's needs.
