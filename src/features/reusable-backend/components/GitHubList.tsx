import { Badge } from "@/components/Shadcn-ui/badge";
import { Button } from "@/components/Shadcn-ui/button";
import { cn } from "@/utils/utils";
import {
  IconBrandCSharp,
  IconBrandGithubFilled,
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
      "Reusable PHP modules including a Login feature as a template. It uses PHP and Laravel for the server and SQLite for the backend.",
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
  // In Progress
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
      <ul className="flex flex-col gap-6 items-center mb-4">
        {backendRepos.map((repo, index) => {
          return (
            <li
              key={index}
              className="border-cyan-900 border-[2px] border-solid flex items-center gap-4 max-w-[800px] p-4 rounded-lg"
            >
              <repo.icon size="40" className="shrink-0" />
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-4">
                  <h2 className="text-lg font-bold">{repo.title}</h2>
                  <Badge
                    className={cn(
                      "capitalize pointer-events-none",
                      repo.status == "functional"
                        ? "bg-emerald-900 text-emerald-400"
                        : "bg-sky-900 text-sky-400"
                    )}
                  >
                    {repo.status}
                  </Badge>
                </div>
                <p className="text-gray-400">{repo.description}</p>
              </div>
              <div>
                <Button variant="secondary" asChild>
                  <a
                    href={repo.link}
                    className="flex gap-2 items-center h-[unset]"
                  >
                    <IconBrandGithubFilled className="flex-1" />
                    <small className="text-base">Github</small>
                  </a>
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
