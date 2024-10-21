import {
  IconBrandCSharp,
  IconBrandNodejs,
  IconBrandPhp,
  IconBrandPython,
} from "@tabler/icons-react";

const backendRepos = [
  {
    title: "Node Backend Builder",
    description:
      "Reusable Node JS modules including a Login feature as a template. It uses Typescript and Fastify JS for the server and Prisma and PostgreSQL for the database. Best practices such as variations of TDD and DDD are also implemented.",
    link: "https://github.com/Sergie-AGA/node-backend-builder",
    icon: IconBrandNodejs,
    status: "functional",
  },
  {
    title: "Reusable PHP",
    description:
      "Reusable PHP modules including a Login feature as a template. It uses PHP and Laravel for the server and SQLite for the backend",
    link: "https://github.com/Sergie-AGA/reusable-php",
    icon: IconBrandPhp,
    status: "development",
  },
  {
    title: "Reusable C#",
    description:
      "Reusable C# modules including a to do application as a template. It uses C# and ASP.NET for the server.",
    link: "https://github.com/Sergie-AGA/ReusableCSharp",
    icon: IconBrandCSharp,
    status: "development",
  },
  // {
  //   title: "Reusable Python",
  //   description: "",
  //   link: "",
  // icon: IconBrandPython,
  // status: "development",
  // },
];

export default function GitHubList() {
  return (
    <main className="flex flex-col">
      <ul>
        {backendRepos.map((repo, index) => {
          return <li key={index}>{repo.title}</li>;
        })}
      </ul>
    </main>
  );
}
