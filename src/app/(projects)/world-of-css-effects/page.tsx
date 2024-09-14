import DisplayListing from "@/features/world-css/components/DisplayListing";
import ProjectSidebar from "@/features/world-css/components/Sidebar/ProjectSidebar";

export default function Page() {
  return (
    <div className="flex">
      <ProjectSidebar />
      <main className="flex-1">
        <DisplayListing />
      </main>
    </div>
  );
}
