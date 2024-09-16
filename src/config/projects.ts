export const projects = [
  {
    title: "Product List POC",
    description:
      "A Proof Of Concept for a list of products. Currently being used by me to list things that I am selling",
    image: "projects/product-list-poc.png",
    frontend: [
      "React JS",
      "Next JS",
      "Typescript",
      "Tailwind CSS",
      "ShadcnUI",
      "Zustand",
      "Yet-another-react-lightbox",
      "React-photo-album",
    ],
    backend: ["Supabase", "AWS S3"],
    apis: [],
    type: "concept",
    path: "/product-list-poc",
    showProject: true,
    showLink: true,
  },
  {
    title: "Google Sheets to DB Integration",
    description:
      "This project allows linking Google Sheets to a database and facilitate transmission of data between them",
    image:
      "https://miro.medium.com/v2/resize:fit:717/1*pHglcoa-BSouiNT7R2p9yQ.png",
    frontend: [],
    backend: [],
    apis: [],
    type: "tool",
    path: "/sheets-database",
    showProject: false,
    showLink: false,
  },
  {
    title: "State Mock Endpoint",
    description:
      "A simple system that makes snapshots of an endpoint now or at a scheduled time, and stores that data for future analysis, which can help for debugging data needs to be captured at a given time.",
    image:
      "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    frontend: [],
    backend: ["Firebase"],
    apis: [],
    type: "tool",
    path: "/state-mock-endpoint",
    showProject: false,
    showLink: true,
  },
  {
    title: "Supabase Explorer",
    description: "Exploring features possible within Supabase",
    image:
      "https://supabase.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-preview.50e72501.jpg&w=3840&q=75",
    frontend: [],
    backend: ["Supabase"],
    apis: [],
    type: "exploration",
    path: "/supabase-explorer",
    showProject: false,
    showLink: false,
  },
  {
    title: "DDD + Solid - Custom Login Explorer",
    description:
      "A fully custom Full-Stack Login feature made with a flavor of Domain-driven Design and Test-driven development",
    image: "https://www.themexpert.com/images/easyblog_articles/702/Login.jpg",
    frontend: [],
    backend: [],
    apis: [],
    type: "exploration",
    path: "/ddd-solid-login",
    showProject: false,
    showLink: false,
  },
  {
    title: "World of CSS Effects",
    description:
      "A place where diverse CSS tricks and techniques are used to achieve unique visual effects. This is a place where you can find reusable CSS snippets ready to be copied and used in a different project, including examples of usage",
    image: "https://www.themexpert.com/images/easyblog_articles/702/Login.jpg",
    frontend: ["Tailwind CSS", "CSS"],
    backend: [],
    apis: [],
    type: "exploration",
    path: "/world-of-css-effects",
    showProject: true,
    showLink: true,
  },
];

export interface IProject {
  title: string;
  description: string;
  image: string;
  frontend: string[] | never[];
  backend: string[] | never[];
  apis: string[] | never[];
  type: "exploration" | "concept" | "tool";
  path: string;
  showProject: boolean;
  showLink: boolean;
}
