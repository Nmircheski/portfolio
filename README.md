# 🚀 My Developer Portfolio

Welcome to my personal portfolio project! This repository showcases my front-end development skills using **Angular**, **Nx**, **TypeScript**, and other modern web technologies. The goal of this project is to demonstrate code quality, architecture decisions, and UI capabilities through a modular and scalable application setup.

---

## 🛠️ Tech Stack

- **Angular** – Framework for building dynamic front-end applications
- **Nx** – Monorepo tool for scalable development and code sharing
- **TypeScript** – Strongly-typed language for robust and maintainable code
- **Tailwind CSS** _(optional)_ – Utility-first CSS framework for styling
- **RxJS** – Reactive programming for managing asynchronous data
- **Jest / Karma** – Testing setup for unit and integration tests

---

## 📁 Project Structure

This project is built using an **Nx monorepo** layout and follows best practices for separation of concerns and code reuse.

```bash
apps/
  portfolio/                  # Main Angular application
    src/
      app/
        core/                # Core services and singleton providers
        features/            # Feature modules and pages
        shared/              # Shared components and modules
        app.module.ts        # Root module
        app.component.ts     # Root component
      assets/                # Static assets like images, fonts, etc.
      environments/          # Environment-specific configs

libs/
  ui/                        # Reusable UI components (buttons, modals, inputs, etc.)
    src/
      lib/
        components/          # Individual UI components
        index.ts             # Export public API for this library

  utils/                     # Shared utility functions, pipes, and directives
    src/
      lib/
        functions/           # Generic utility functions
        pipes/               # Custom pipes
        directives/          # Custom directives
        index.ts             # Export public API

  models/                    # Shared TypeScript interfaces and types
    src/
      lib/
        interfaces/          # Application-wide interfaces
        enums/               # Shared enums
        types/               # Custom types or aliases
        index.ts             # Export public API

  config/                    # Shared configuration (optional)
    src/
      lib/
        tokens/              # Injection tokens for config
        environment/         # Shared environment contracts
        index.ts             # Export public API
```

---

## ✨ Features

- Clean and scalable project structure using Nx
- Reusable UI components and design system
- Lazy-loaded modules for performance optimization
- Typed services and models for maintainability
- Responsive design for desktop and mobile
- Integrated unit testing for core functionality

---

## 🚧 In Progress

This is an ongoing project. Some upcoming additions:

- Full dark/light theme toggle
- End-to-end testing setup
- Detailed case studies for selected projects
- Deployment via GitHub Pages / Vercel / Azure Blob Storage

---

## 📦 Setup

To run the project locally:

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install
nx serve portfolio
```
