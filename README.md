# React + TypeScript + TailwindCSS + Vite

## Steps to Run the Project

1. **first step**
### run npm i

2. **second step**
in .env file replace DEMO_KEY with real key from https://api.nasa.gov/

note if you can't manage to add key please write me I will help you

3. **third step**
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
