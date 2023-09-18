# Turborepo MicroFrontend Template

A template for experimental and project purpose.

See it live on [DEMO](https://turbomicrofe-adanamanya.vercel.app/ )


## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `app`: micro frontend app
    - shell (header and footer)
    - user-list (showing list of user)
    - home (homepage)
- `ui`: a stub React component library shared by `form` and `shell`, and `user-list` application
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd [foldername]
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd [foldername]
pnpm dev
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
