# Web Dev Explorer

This is a project that aims to explore, test and aggregate a variety of Web Dev functionalities within different projects.
In general, the project uses:
Frontend: React JS, Next JS, Typescript, Tailwind CSS and ShadcnUI
Backend & Infra: Supabase, Vercel
Libraries which have small impact may not be listed here or in the project data listing

## Additional Repositories

There are other repositories might work as support for this one, containing a different set of features:

- [Web Dev Explorer Node JS](https://github.com/Sergie-AGA/web-dev-explorer-nodejs) - Handles additional backend features, such as: Node JS, Typescript, Fastify, PostgreSQL, among many others. This is currently not powering live applications

## Running the project

This is mainly a Next JS project. Node 18.17+ is recommended for smooth functionality.
All you should need to run this is installing the modules and running the dev script list on the package.json. Projects which use Supabase will error, as the env variables have not been committed.

## Documentation

For a more in-depth documentation on the different features and elements being used here, please refer to the following documentation:

- [💻 Application Overview](docs/application-overview.md)
- [🏠 Homepage](docs/homepage.md)
- [📦 Product List POC](docs/product-list-poc.md)
- [🌐 World of CSS](docs/world-of-css-effects.md)
- [🗂️ Reusable Backend](docs/reusable-backend.md)

## Disclaimers

- This project is under the MIT License. Any suggestions are welcome, but since this is a project I use for learning purposes I will not accept external PRs into the code. However, feel free to grab code snippets if you want and use them in any way you want without need for attribution (though crediting me where it may be applicable is always appreciated)
- A lot of features here will be made during my first attempt at exploring a specific technology. Unless it is within the scope of the project to implement best practices, I will usually not return to a feature to improve the code quality, meaning some concepts will not necessarily be using the best standards in the market for a feature. Therefore, these features are only an insight into some of the technologies I have experimented with and do not necessarily reflect my approach to using them

## Project Overview

### Project 1 - Product List POC

This project experiments a proof of concept of a store, making use of Supabase to handle the backend and modern React ecosystem to render a Product List where you can add items to a cart and trigger discounts based on specific conditions. This was used by me to sell some of my personal belongings in the past.
Frontend: Next JS, React JS, JavaScript, Typescript, Tailwind CSS, ShadcnUI, Zustand, yet-another-react-lightbox, react-photo-album, Jest, Cypress
Backend: Supabase

### Project 2 - World of CSS Effects

A place where diverse CSS tricks and techniques are used to achieve unique visual effects. This is a place where you can find reusable CSS snippets ready to be copied and used in a different project, including examples of usage.
Frontend: Next JS, React JS, JavaScript, Typescript, Tailwind CSS, ShadcnUI, Zustand, Jest, Cypress

### Project 3 - Reusable Backend

This project aggregates links to a few different GitHub repositories which contain a reusable modular backend projects in diverse programming languages and can be used as templates for new applications. It currently includes a project in Node JS, with PHP and C# being under development.
Frontend: Next JS, React JS, JavaScript, Typescript, Tailwind CSS, ShadcnUI, Zustand, Jest, Cypress
Backend: JavaScript, Node JS, Typescript, Fastify, PostgreSQL, Vitest, Supertest, Prisma, Docker, Zod, PHP, Laravel, C#, .NET, ASP.NET,

### In Progress - State Mock Endpoint

In Progress...
