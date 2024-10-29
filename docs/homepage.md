# Homepage

The Homepage displays all active projects in the codebase, filtering options and further info about the project as a whole and the technologies involved

## Tech Stack

Frontend: React JS, Next JS, Typescript, Tailwind CSS and ShadcnUI, Jest

## Components

The homepage uses mostly global elements but also specific components for its context

## Services

The store called `useUIStore` handles the displaying the modals for filtering and tech information as well as storing which "tech" is active, so you can click on a technology from a project modal and open the modal containing information about it.

## Tests

There are tests for the following elements

- useUIStore, which handles core business logic for displaying elements ons creen
- Basic rendering and interactivity within components
