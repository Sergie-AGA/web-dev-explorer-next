# Application Overview

This is a Next JS application which contains mini-projects that explore different aspects of Web Development. It is structured in a way that it groups each project as a unique feature with its own set of elements, while also allowing reusable global elements.

## Tech Stack

The following tech stack exists across all projects:
Frontend: React JS, Next JS, Typescript, JavaScript, Tailwind CSS and ShadcnUI, Jest
Backend & Infra: Supabase, Vercel
Libraries which have small impact may not be listed here or in the project data listing.

Further tools are used on each separate project. Please refer to their own separate documentation for more information.

## Folder Structure

The folder structure applied here is inspired by both [Bulletproof React](https://github.com/alan2207/bulletproof-react/tree/master) and Web Dev Simplified's (Advanced React Folder Structure)[https://blog.webdevsimplified.com/2022-07/react-folder-structure/], while also having some freedom for slight modifications. This means that most folders directly inside the `src` folder are only reserved for global functionality, while the features folder contains each project and each one of them mimics the `src` folder and can have components, hooks, services and everything else, but scoped to that feature.

### App

This application uses the Next JS App Router, and therefore it involves an `app` folder. A global layout is being applied but I also wanted the homepage to have its own specific layout so it works similarly to the projects. As such, the homepage is inside a Route Group called `(home)` to enable this. For better organisation, other projects are also under a `(projects)` route group.

### Components

All global components with potential to be used across different sections of the codebase are placed here. This includes grid, buttons, cards, modals and components which come from the library Shadcn UI.

### Config

The homepage of the project renders available projects and technology description based on the config files presented here.

### Features

Components, hooks and other files which are specific to the homepage or any of the mini-projects are listed here under the respective feature folder.

### Hooks

Hooks which are potentially global and can be reused across the codebase are here.
Currently, there are 2 notable global hooks:

- useKeyPress: This is a quick way of running a function based on a key press. In this example below, the code creates an event listener on keypress that fires functions if the combinations "ALT + 1" or "ALT + 2" are pressed.
  Example:
  useKeyPress([
  { keys: ["Alt", "1"], callback: doSomethingOne },
  { keys: ["Alt", "2"], callback: doSomethingTwo },
  ]);
- useURLState: holding [state in the URL](https://www.youtube.com/watch?v=ukpgxEemXsk) is an effective way of creating specific versions of a page that can be quickly accessed with a shareable link and allow users to immediately see changes on a page without clicking on buttons to get there, which can be helpful in sites such as e-commerce stores which allow different product options or filters. This is used on the homepage to facilitate filtering projects based on the url.

### Lib

Any external libraries which need setting up and are used globally are placed here.

- Supabase: The supabaseClient file used for its setup is here. Supabase is a core element of this project and reused across different projects.
- Firebase: The firebaseClient file used for its setup is here. It is intended to be used in a limited number of cases.

### Services

Any global services which need to connect with multiple parts of the application will be listed here.

### Store

Global data which uses the concept of stores go here. In general, this project uses Zustand for global data management.

### Styles

Most of the styling is handled per component with Tailwind. A global.css file exists here containing basic set up information for Tailwind. Global styles outside of tailwind may also be added here.
See the Tailwind section below for more information.

### Tests

Any tests pertaining to global elements will be here. This application uses Jest mainly for Unit Testing but it is also set up to run for Integration and E2E. There are 2 separate config files and NPM scripts for each case
Cypress has been installed for E2E tests but not yet implemented.

### Themes

A Theme Handler component is used to support multiple themes using, which is used in combination with Tailwind and Shadcn UI to easily allow theming, however, currently, only dark theme is being supported.

### Utils

Reusable utility code is placed here:

- imageHelper: This function generates an image url based on whether it's located in the project or externally
- utils: This includes the cn function, which uses a popular patter that combines clsx and Tailwind Merge to create an easy-to-use function when you need to apply tailwind class dynamically and override classes. This pattern comes from Shadcn UI.

## Testing Approach

We believe that test quality should be prioritised over quantity. Not every single component will be tested, but rather these will be prioritised:

- Pure Functions
- Reusable components (excluding Shadcn UI)
- Core interactivity elements
- Business logic

Additional components might be covered for practice purposes.

E2E test to be implemented...

## UI Setup

The styling of this project is done using Tailwind CSS and components and patterns from Shadcn UI.

### Tailwind CSS

The Tailwind config uses several custom classes to achieve a bespoke look. Colours are controlled using CSS variables defined in the `global.css` file. This file contains many definitions of global styles as well as root variables.

### Shadcn UI

Shadncn UI is a powerful UI library that is being used to power some components here. Upon installing each component, slight modifications are sometimes made and then the project is moved to the Shadcn UI folder instead of the default ui folder.
Moreover, Shadncn UI is accessible, as it uses Radix UI under the hood.

## Accessibility

Accessibility is achieved in this project in a few different ways:

- Semantic HTML is applied as much as possible
- Several components possess ARIA attributes. Using Shadcn UI ensures this is even more present
- Images possess alt attributes
- Colour contrast is taken into account
- Text sizing uses the REM unit as much as possible
- Responsiveness is taken into account for all pages

## Potential Improvements

- This project could benefit from having Storybook JS to improve how reusable components can be handled.
- Further usage of ES Lint could also benefit a more robust set of rules to be used here.
- Documenting some components and features further with easy to use examples can make it quicker for people to reuse some components
- Some components could be developed with better reusability in mind
- The useURLState hook could do with some improvements to make it smoother, more reusable and better documented
- Testing Coverage can be improved if the goal is to test widely, but this is not what this project aims for
- There are more accessibility measures which can be applied, such as "Skip to main content" links, increased usage of aria attributes and focus management
