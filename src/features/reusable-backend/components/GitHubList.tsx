import ActionableListItem from "@/components/Lists/ActionableListItem";
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
              <ActionableListItem
                title={repo.title}
                description={repo.description}
                label={repo.status}
                labelType={repo.status == "development" ? "blue" : "green"}
                link={repo.link}
                icon={IconComponent}
                buttonText="GitHub"
                buttonIcon={IconBrandGithubFilled}
                isButtonDisabled={repo.status == "development"}
              />
            );
          }
        })}
      </ul>
    </main>
  );
}
