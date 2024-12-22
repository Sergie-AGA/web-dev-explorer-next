import GitHubList from "@/features/reusable-backend/components/GitHubList";
import { FC } from "react";
import { IconBrandNodejs } from "@tabler/icons-react";

export interface IGHProject {
  title: string;
  description: string;
  link: string;
  icon: FC<React.SVGProps<SVGSVGElement>>;
  status: "functional" | "development";
  render: boolean;
}

const githubProject: IGHProject = {
  title: "Reusable Node JS",
  description:
    "Reusable Node JS modules including a Login feature as a template. It uses Typescript and Fastify JS for the server and Prisma and PostgreSQL for the database. Best practices such as variations of TDD and DDD are also implemented.",
  icon: IconBrandNodejs,
  link: "https://github.com/Sergie-AGA/reusable-nodejs",
  status: "functional",
  render: true,
};

export default async function Page() {
  const backendRepos = [githubProject];

  return (
    <main>
      {backendRepos.length ? (
        <GitHubList backendRepos={backendRepos} />
      ) : (
        <div className="text-center py-12">
          <h2>No Projects Found</h2>
        </div>
      )}
    </main>
  );
}
