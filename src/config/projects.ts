export const projects = [
  {
    id: 0,
    title: "Product List POC",
    description:
      "A Proof Of Concept for a list of products. Currently being used by me to list things that I am selling",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBH7YRBKAHOnnEAyUkandHlKT3bZiv6hp6LA&usqp=CAU",
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
  },
  {
    id: 1,
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
  },
  {
    id: 2,
    title: "State Mock Endpoint",
    description:
      "This project helps you to make a request to a given endpoint and store results for that point in time, which can be used for debugging purposes",
    image:
      "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    frontend: [],
    backend: [],
    apis: [],
    type: "tool",
    path: "",
  },

  {
    id: 3,
    title: "Supabase Explorer",
    description: "Exploring features possible within Supabase",
    image:
      "https://supabase.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-preview.50e72501.jpg&w=3840&q=75",
    frontend: [],
    backend: [],
    apis: [],
    type: "exploration",
    path: "",
  },
];

export interface IProject {
  id: number;
  title: string;
  description: string;
  image: string;
  frontend: string[];
  backend: string[];
  apis: string[];
  type: string;
  path: string;
}
