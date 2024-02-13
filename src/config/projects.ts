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
      "This project helps you to make a request to a given endpoint and store results for that point in time, which can be used for debugging purposes",
    image:
      "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    frontend: [],
    backend: [],
    apis: [],
    type: "tool",
    path: "/state-mock-endpoint",
    showProject: false,
    showLink: false,
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
    title: "DDD + Solid Custom Login Explorer",
    description:
      "A fully custom Full-Stack Login feature made with a flavor of Domain-driven Design and Test-driven development",
    image:
      "https://supabase.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-preview.50e72501.jpg&w=3840&q=75",
    frontend: [],
    backend: [""],
    apis: [],
    type: "exploration",
    path: "/ddd-solid-login",
    showProject: true,
    showLink: false,
  },
];

export interface IProject {
  title: string;
  description: string;
  image: string;
  frontend: string[];
  backend: string[];
  apis: string[];
  type: string;
  path: string;
  showProjects: boolean;
  showLink: boolean;
}
