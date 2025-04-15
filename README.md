# angular-electron-template

This template provides a starting point for a modern and secure Electron app using Angular.

> This project is based on [angular-electron-boilerplate](https://github.com/frederiksen/angular-electron-boilerplate) by [@frederiksen](https://github.com/frederiksen).

## Project Overview

- **Frontend Framework**: [Angular](https://angular.io/) (v19.2.0) for the Electron renderer process
- **UI Components**: [Angular Material](https://material.angular.io/) (v19.2.0) for modern UI components
- **Language**: [TypeScript](https://www.typescriptlang.org/) (v5.5.4) for strongly-typed JavaScript
- **Build Tool**: [webpack](https://webpack.js.org/) (v5.94.0) for efficient bundling
- **Electron Version**: v33.0.0

## Security Features

- Context Isolation enabled
- Node Integration disabled
- Remote Module disabled
- Secure preload script using contextBridge

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/HankTk/angular-electron-template
cd angular-electron-template
```

2. Install dependencies:
```bash
npm install
```

3. Build and run the application:
```bash
npm run build:dev:all
npm start
```

## Available Scripts

### Development
- `npm start` - Start the Electron application
- `npm run build:dev:all` - Build all projects in development mode
- `npm run build:watch:all` - Watch all projects for changes
- `npm run build:dev:renderer` - Build Angular renderer in development mode
- `npm run build:dev:main` - Build Electron main process in development mode
- `npm run build:dev:preload` - Build preload script in development mode

### Production
- `npm run build:prod:all` - Build all projects in production mode
- `npm run build:prod:renderer` - Build Angular renderer in production mode
- `npm run build:prod:main` - Build Electron main process in production mode
- `npm run build:prod:preload` - Build preload script in production mode

### Testing
- `npm run test:test` - Run Angular unit tests
- `npm run test:e2e` - Run Angular end-to-end tests
- `npm run test:lint` - Run Angular linting

### Updates
- `npm run update:angular` - Update Angular to latest stable version
- `npm run update:electron` - Update Electron to latest stable version
- `npm run update:webpack` - Update webpack to latest stable version
- `npm run update:material` - Update Angular Material to latest stable version

### Packaging
- `npm run package` - Package the current build into an app
- `npm run release` - Build production version and package into an app

## Debugging

The project supports debugging both the main and renderer processes using Visual Studio Code.

1. Install the [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) extension
2. Build the project:
```bash
npm run build:dev:all
```
3. Set breakpoints in your code
4. Press `Ctrl+Shift+D` and select "Main + Renderer"
5. Press `F5` to start debugging

## Building for Production

To create a production build and package the application:

```bash
npm run release
```

The packaged application will be available in the `release-builds` directory. The build supports Windows, macOS, and Linux platforms.

## License

This project is licensed under the terms included in the LICENSE file.
