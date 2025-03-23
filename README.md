# React + TypeScript + Vite

## first step
### run npm i

## second step
in .env file replace DEMO_KEY with real key from https://api.nasa.gov/

note if you can't manage to add key please write me I will help you

## third step
### npm run dev


## Overview
This is a React application project. The goal of the project is to fetch and display data from NASA APIs while demonstrating proficiency with modern frontend technologies, including TypeScript, React, and TailwindCSS.

## Features
### Level 1 Functionality:
- **Navigation Bar**: Links to all pages.
- **Home Page**: Introductory content describing the app's purpose.
- **Page 1**: Displays "Astronomy Picture of the Day" (APOD) for the current date.
- **Page 2**: Shows an image from the Earth API based on the user's current location.
- **Page 3**: Displays the most recent enhanced image of Earth from the EPIC API.

### Level 2 Functionality:
- **Page 1**: Added a date-picker to fetch APOD for specific dates.
- **Page 2**: Implemented zoom and pan functionality for the Earth image.
- **Page 3**: Added date selection for EPIC images.

## Technologies Used
- **React**: Library for building user interfaces.
- **TypeScript**: Ensures strong typing and improves code quality.
- **Vite**: Fast development environment.
- **TailwindCSS**: For styling and responsive design.
- **NASA APIs**: Data fetched from `https://api.nasa.gov`.

## Project Structure
- **`/components`**: Contains all reusable React components.
- **`/utils`**: Includes utility functions such as `fetchEarthImage`, which abstracts API calls into separate, reusable files for better code organization and reusability.
- **Environment Variables (`.env`)**: Used to securely store and manage the NASA API key, ensuring sensitive information is protected.



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
