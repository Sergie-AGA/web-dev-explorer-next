import { Button } from "@/components/ShadcnUi/Button";
import { cn } from "@/utils/utils";
import {
  IconBrandCSharp,
  IconBrandGithubFilled,
  IconBrandNodejs,
  IconBrandPhp,
  IconBrandPython,
} from "@tabler/icons-react";

const iconMap = {
  nodejs: IconBrandNodejs,
  php: IconBrandPhp,
  csharp: IconBrandCSharp,
  python: IconBrandPython,
};

export interface IGHProject {
  title: string;
  description: string;
  link: string;
  icon: keyof typeof iconMap;
  status: "functional" | "development";
  render: boolean;
}

interface IGithubListInterface {
  backendRepos: IGHProject[];
}

export default function GitHubList({ backendRepos }: IGithubListInterface) {
  return (
    <main className="flex flex-col">
      <ul className="flex flex-col gap-6 items-center mb-4">
        {backendRepos.map((repo, index) => {
          const IconComponent = iconMap[repo.icon];
          if (repo.render) {
            return (
              <li
                key={index}
                className="border-cyan-900 border-[2px] border-solid flex flex-col md:flex-row items-center gap-4 w-[100%] max-w-[800px] p-4 rounded-lg"
              >
                {IconComponent && (
                  <IconComponent size="40" className="shrink-0" />
                )}
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-4">
                    <h2 className="text-lg font-bold">{repo.title}</h2>
                    <span
                      className={cn(
                        "capitalize pointer-events-none inline-flex items-center rounded-md px-2.5 py-0.5 text-xs",
                        repo.status == "functional"
                          ? "bg-emerald-900 text-emerald-400"
                          : "bg-sky-900 text-sky-400"
                      )}
                    >
                      {repo.status}
                    </span>
                  </div>
                  <p className="text-gray-400">{repo.description}</p>
                </div>
                <div>
                  <Button
                    asChild
                    variant="secondary"
                    disabled={repo.status === "development"}
                    className={cn({
                      "pointer-events-none opacity-50":
                        repo.status === "development",
                    })}
                  >
                    <a
                      href={repo.link}
                      className="flex gap-2 items-center h-[unset]"
                    >
                      <IconBrandGithubFilled className="flex-1" />
                      <small className="text-base font-bold">Github</small>
                    </a>
                  </Button>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </main>
  );
}
