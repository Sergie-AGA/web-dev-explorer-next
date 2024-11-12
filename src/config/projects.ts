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
    ],
    backend: ["Supabase"],
    apis: ["Vercel"],
    type: "concept",
    path: "/product-list-poc",
    showProject: true,
    showLink: true,
  },
  {
    title: "Storybook Explorer",
    description:
      "This project displays the Storybook JS implementation used in this project and explores its capabilities with addons and different options to create an organised UI documentation for the most important and reusable components in this project.",
    image:
      "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    frontend: ["Storybook JS", "TypeScript", "React JS", "Markdown & MDX"],
    backend: [],
    apis: ["GitHub Pages", "GitHub Actions"],
    type: "exploration",
    path: "https://sergie-aga.github.io/web-dev-explorer-next/?path=/docs/configure-your-project--docs",
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
    apis: ["Vercel"],
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
    ],
    backend: ["Vercel"],
    apis: [],
    type: "exploration",
    path: "/world-of-css-effects",
    showProject: true,
    showLink: true,
  },
  {
    title: "Reusable Backend",
    description:
      "This project aggregates links to a few different GitHub repositories which contain a reusable modular backend projects in diverse programming languages and can be used as templates for new applications. It currently includes projects in Node JS, PHP and C#",
    image: "projects/reusable-backend.png",
    frontend: [
      "Next JS",
      "React JS",
      "TypeScript",
      "Tailwind CSS",
      "Jest",
      "Cypress",
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
      "PHP",
      "Laravel",
      "C#",
      ".NET",
      "ASP.NET",
    ],
    apis: ["Vercel"],
    type: "tool",
    path: "/reusable-backend",
    showProject: true,
    showLink: true,
  },
];

export interface IProject {
  title: string;
  description: string;
  image: string;
  frontend: string[] | [];
  backend: string[] | [];
  apis: string[] | [];
  type: "exploration" | "concept" | "tool";
  path: string;
  showProject: boolean;
  showLink: boolean;
}
