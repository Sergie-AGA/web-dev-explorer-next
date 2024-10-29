import GitHubList from "@/features/reusable-backend/components/GitHubList";
import { getReusableBackend } from "@/features/reusable-backend/services/getReusableBackend";

export const revalidate = 60 * 30; // 30 min

export default async function Page() {
  const backendRepos = await getReusableBackend();

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
