import { render, screen } from "@testing-library/react";
import GitHubList, {
  IGHProject,
} from "@/features/reusable-backend/components/GitHubList";
import "@testing-library/jest-dom";

describe("GitHubList", () => {
  const mockRepos: IGHProject[] = [
    {
      title: "NodeJS Project",
      description: "A project built with NodeJS",
      link: "https://github.com/example/nodejs-project",
      icon: "nodejs",
      status: "functional",
      render: true,
    },
    {
      title: "PHP Project",
      description: "A project built with PHP",
      link: "https://github.com/example/php-project",
      icon: "php",
      status: "development",
      render: true,
    },
    {
      title: "C# Project",
      description: "A project built with C#",
      link: "https://github.com/example/csharp-project",
      icon: "csharp",
      status: "functional",
      render: false,
    },
  ];

  it("renders only items with render: true", () => {
    render(<GitHubList backendRepos={mockRepos} />);

    expect(screen.getByText("NodeJS Project")).toBeInTheDocument();
    expect(screen.getByText("PHP Project")).toBeInTheDocument();
    expect(screen.queryByText("C# Project")).not.toBeInTheDocument();
  });
});
