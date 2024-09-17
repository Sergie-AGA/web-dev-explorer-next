import DisplayListing from "@/features/world-css/components/DisplayListing";
import ProjectSidebar from "@/features/world-css/components/Sidebar/ProjectSidebar";

export default function Page() {
  return (
    <div className="flex">
      <ProjectSidebar />
      <main className="flex-1 flex flex-col p-4 pt-8 gap-4">
        <h1 className="text-center">World of CSS Effects</h1>
        <DisplayListing />
      </main>
    </div>
  );
}