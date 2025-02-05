export const projects: IProject[] = [
  {
    title: "Product List POC",
    description:
      "A Proof Of Concept for a list of products. It was used by me to list things that I was selling, but currently any items listed there are purely for illustrative purposes",
    image: "projects/product-list-poc.png",
    frontend: [
      "React JS",
      "Next JS",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Zustand",
      "Yet-another-react-lightbox",
      "React-photo-album",
      "Jest",
      "Cypress",
      "Markdown",
    ],
    backend: ["Supabase"],
    other: ["Vercel"],
    type: "concept",
    path: "/product-list-poc",
    showProject: true,
    showLink: true,
  },
  {
    title: "Form Builder",
    description:
      "This project explores the functionalities of Survey JS to create a range of dynamic surveys. It consists of 2 parts: 1) A form Builder to build custom surveys with simple properties, forms and quizzes; 2) Example Forms using slightly more complex data",
    image: "/projects/form-builder.png",
    frontend: [
      "React JS",
      "Next JS",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Survey JS",
    ],
    backend: [],
    other: ["Vercel"],
    type: "tool",
    path: "/form-builder",
    showProject: true,
    showLink: true,
  },
  {
    title: "Storybook Explorer",
    description:
      "This project displays the Storybook JS implementation used in this project and explores its capabilities with addons and different options to create an organised UI documentation for the most important and reusable components in this project.",
    image: "/projects/storybook.png",
    frontend: ["Storybook JS", "TypeScript", "React JS", "Markdown"],
    backend: [],
    other: ["GitHub Pages", "GitHub Actions"],
    type: "exploration",
    path: "https://sergie-aga.github.io/web-dev-explorer-next/",
    showProject: true,
    showLink: true,
  },
  {
    title: "State Mock Endpoint",
    description:
      "A simple system that makes snapshots of an endpoint now or at a scheduled time, and stores that data for future analysis, which can help for debugging data needs to be captured at a given time.",
    image:
      "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    frontend: [],
    backend: ["Firebase"],
    other: ["Vercel"],
    type: "tool",
    path: "/state-mock-endpoint",
    showProject: false,
    showLink: true,
  },
  {
    title: "World of CSS Effects",
    description:
      "A place where diverse CSS tricks and techniques are used to achieve unique visual effects. This is a place where you can find reusable CSS snippets ready to be copied and used in a different project, including examples of usage",
    image: "projects/world-of-css.jpg",
    frontend: [
      "Next JS",
      "React JS",
      "JavaScript",
      "TypeScript",
      "Shadcn UI",
      "Zustand",
      "Tailwind CSS",
      "CSS",
      "Jest",
      "Cypress",
      "Markdown",
    ],
    backend: [],
    other: ["Vercel"],
    type: "exploration",
    path: "/world-of-css-effects",
    showProject: true,
    showLink: true,
  },
  {
    title: "Reusable Backend",
    description:
      "This is a Node JS template application using DDD and TDD with a log in functionality made from scratch with Fastify JS, Prisma JS and PostgreSQL. The page hosted in this project just contains basic information about what the actual project does. Follow the GitHub Link inside of it to see the live project",
    image: "projects/reusable-backend.png",
    frontend: [
      "Next JS",
      "React JS",
      "TypeScript",
      "Tailwind CSS",
      "Jest",
      "Cypress",
      "Markdown",
    ],
    backend: [
      "Node JS",
      "JavaScript",
      "TypeScript",
      "Fastify",
      "PostgreSQL",
      "Vitest",
      "Supertest",
      "Prisma",
      "Docker",
      "Zod",
    ],
    other: ["Vercel"],
    type: "tool",
    path: "/reusable-backend",
    showProject: true,
    showLink: true,
  },
  {
    title: "Gotta Catch 'Em All",
    description:
      "Capture Pokémon in a simple game and track your progress while earning achievements, leveling up, and unlocking new features. This projects explores using Supabase Auth, Indexed DB, React Grid Explorer, Storybook JS, and automated tests with Vitest and Cypress JS",
    image: "projects/product-list-poc.png",
    frontend: [
      "React JS",
      "Next JS",
      "Typescript",
      "Tailwind CSS",
      "ShadcnUI",
      "React Grid Layout",
    ],
    backend: ["Supabase", "Supabase Auth", "IndexedDB", "Vercel"],
    other: ["PokéAPI"],
    type: "exploration",
    path: "/pokemon",
    showProject: false,
    showLink: false,
  },
];

export interface IProject {
  title: string;
  description: string;
  image: string;
  frontend: string[] | [];
  backend: string[] | [];
  other: string[] | [];
  type: "exploration" | "concept" | "tool";
  path: string;
  showProject: boolean;
  showLink: boolean;
}
