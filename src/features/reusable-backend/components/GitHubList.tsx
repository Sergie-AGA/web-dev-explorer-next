const backendRepos = [
  {
    title: "",
    description: "",
    link: "",
    icon: "",
  },
  {
    title: "",
    description: "",
    link: "",
    icon: "",
  },
];

export default function GitHubList() {
  return (
    <main className="flex flexcol">
      <ul>
        {backendRepos.map((repo, index) => {
          return <li key={index}>{repo.title}</li>;
        })}
      </ul>
    </main>
  );
}
