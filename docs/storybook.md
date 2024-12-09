# Storybook

This project displays the Storybook JS implementation used in this project and explores its capabilities with addons and different options to create an organised UI documentation for the most important and reusable components in this project.

## Tech Stack

Frontend: Storybook, TypeScript, MDX
Others: GitHub Pages + GitHub Actions (hosting and deployment)

## Usage

Stories files are used for React components which are reusable and relevant.
MDX files are used for `utils`, `hooks`, `stores` and other pure JS/TS files.

## Add-ons

Dark-mode and accessibility add-ons are included in this project;

## Customisation

The `tailwindClasses.ts` file in conjunction with `global.css` is being used to generate custom visuals in Storybook.

## Running the project

Install all modules and run `npm run storybook`

## Live project

A live version of the Storybook instance being used here can be found on [GitHub Pages](https://sergie-aga.github.io/web-dev-explorer-next/) for this repository, which updates based on a GitHub Action that is triggered when merges happen in the `develop` branch
