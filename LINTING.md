# ESLint Configuration

This project is configured with ESLint to enforce consistent code style and catch potential errors early.

## Setup

ESLint is configured with the following plugins and rules:

- **@eslint/js**: Basic JavaScript linting rules
- **eslint-plugin-react**: React-specific linting rules
- **eslint-plugin-react-hooks**: React Hooks rules
- **eslint-plugin-jsx-a11y**: Accessibility rules for JSX
- **eslint-plugin-import**: Import/export linting

## Available Scripts

- `npm run lint` - Run ESLint with strict warnings (CI/production use)
- `npm run lint:fix` - Run ESLint and automatically fix fixable issues
- `npm run lint:check` - Run ESLint without fixing (development use)

## Configuration Highlights

- **Modern JavaScript**: ES2022 features supported
- **React 17+**: React import not required in JSX files
- **Development-friendly**: Prop-types and console warnings disabled for development
- **Code Quality**: Enforces consistent formatting, no unused variables, proper imports
- **Accessibility**: Basic accessibility rules enabled
- **Error Prevention**: Catches common JavaScript pitfalls

## Usage

### During Development

```bash
npm run lint:check
```

### Fix Issues Automatically

```bash
npm run lint:fix
```

### Before Commit/Deploy

```bash
npm run lint
```

The configuration is optimized for React development with a balance between code quality enforcement and development productivity.
