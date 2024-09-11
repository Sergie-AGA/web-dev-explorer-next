import ProjectWrapper from "@/features/world-css/components/ProjectWrapper";
import ProjectSidebar from "@/features/world-css/components/Sidebar/ProjectSidebar";

export default function Page() {
  return (
    <div className="flex">
      <ProjectSidebar />
      <main>
        <ProjectWrapper />
      </main>
    </div>
  );
}
