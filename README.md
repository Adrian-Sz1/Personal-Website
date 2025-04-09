![GitHub Tag](https://img.shields.io/github/v/tag/Adrian-Sz1/Personal-Website?label=version)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fadrianszoszkiewicz.com)
![GitHub License](https://img.shields.io/github/license/Adrian-sz1/Personal-Website)

# Personal Website

This repository contains the source code for my personal website, designed to showcase my portfolio, CV, and other relevant information about myself. The project is licensed under the MIT License, which allows you to freely use, modify, and distribute the code. The only request I have in return is that you provide appropriate attribution when using or modifying my work.

## Technologies Used

* **Frontend:**
    * Vue.js
    * Vite
* **Deployment:**
    * Docker: Used to containerize the application.
    * Nginx: Serves the static frontend assets inside the Docker container for both development and production builds.
    * Google Cloud Run: I personally deployed the project here using automated Github CI and Cloud Run triggers, however, it should be compatible with other providers with some extra tweaks to configuration.

## Project Setup
```sh
npm install
```
Create a '.env' file in the root of the project and inside enter the following:
```sh
VITE_APP_MODE=local-dev
```
This will set the required environment variable that the app uses to select the mode of the app. The environment variable can be set using the cloud provider or by passing it using -e parameter when building the Docker container with the intention of running it locally through Docker.

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Deployment

The application can be containerized with Docker and deployed to a cloud provider. It supports three deployment modes:
   - local-dev: Designed for local development, this mode runs the application on the Vite development server, providing fast reloading and easy access to development features
   - development: This mode functions as a 'dev-mode' production environment. It can be hosted or run through Docker and uses Nginx to serve the frontend content.
   - release: This is the production-grade version of the application, representing the final, stable version. It is optimized for deployment and uses Nginx to serve the content.

## Usage

To view the website, simply visit [adrianszoszkiewicz.com](https://adrianszoszkiewicz.com).
