import { IGHProject } from "@/app/(projects)/reusable-backend/page";
import ActionableListItem from "@/components/Lists/ActionableListItem";
import { IconBrandGithubFilled } from "@tabler/icons-react";

interface IGithubListInterface {
  backendRepos: IGHProject[];
}

export default function GitHubList({ backendRepos }: IGithubListInterface) {
  return (
    <main className="flex flex-col">
      <ul className="flex flex-col gap-6 items-center mb-4">
        {backendRepos.map((repo, index) => {
          if (repo.render) {
            return (
              <ActionableListItem
                title={repo.title}
                description={repo.description}
                label={repo.status}
                labelType={repo.status == "development" ? "blue" : "green"}
                link={repo.link}
                icon={repo.icon}
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
