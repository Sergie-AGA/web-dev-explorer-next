# World of CSS Effects

A place where diverse CSS tricks and techniques are used to achieve unique visual effects. This is a place where you can find reusable CSS snippets ready to be copied and used in a different project, including examples of usage.

## Tech Stack

Frontend: Next JS, React JS, JavaScript, Typescript, Tailwind CSS, ShadcnUI, Zustand, Jest

## Components

Each effect in this project is mostly comprised of:

1. A reusable file which can be copied and pasted into any project for quick usage;
2. A wrapper file where you can manipulate the props being passed into the component for better demonstration on this website;
   Some of them also use custom css styles outside of Tailwind to facilitate things.

Existing effects include:

- Text SFX
  - Glitch Text Effect
  - Neon Text Effect
  - Switching Text Effect
  - Random Colour Text Effect
  - Moving Text Effect
- Background
  - Icon Generator
  - Square Generator
- CSS Art
  - CSS Phone

## Store

A Zustand store is used to determine which components render. The property `activeSidebar` controls which elements are visible on the sidebar, while `activeSection` and `activeComponent` work together to define what renders in the main area of the project.

## Tests

There are Jest tests for the following elements

- Any of the listed effects
- `CssPhoneContainer`, as it involves more interactive points
- `ProjectSidebar`, since it involves stateful interactivity
- `useUIChange` store, as it uses core business logic

There are E2E Cypress tests for interacting with each of the existing effects
