# Adrian Szoszkiewicz - Personal Website

This repository contains the source code for my personal website, designed to showcase my portfolio, CV, and other relevant information about myself.

## Purpose

The primary purpose of this website is to:

* Provide a centralized location for my professional portfolio.
* Display my CV and relevant experience.
* Offer easy access to my contact information.
* Present my skills and projects in a clear and engaging manner.

## Technologies Used

* **Frontend:**
    * Vue.js
      
* **Deployment:**
    * Docker: For containerization of the application.
    * Google Cloud Run: For containerized deployment.
    * Nginx: Used as the production web server and serves the website.

## Project Setup
```sh
npm install
```

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
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Deployment

The website is containerized using Docker and deployed on Google Cloud Run using GCP triggers, it is deployed across two environments:

* **Release:** Served using Nginx on Google Cloud Run for public access acting as the stable production website for users to see and interact with.
* **UAT/Testing:** A separate server (inaccessible to the public through the use of GCP IAM authentication) used for testing and staging updates before deployment to release.

## Usage

To view the website, simply visit [adrianszoszkiewicz.com](https://adrianszoszkiewicz.com).
