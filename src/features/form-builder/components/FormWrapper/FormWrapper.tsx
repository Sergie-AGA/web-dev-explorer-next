import { SidebarProvider } from "@/components/ShadcnUi/Sidebar";
import { FormsSidebar } from "../FormsSidebar/FormsSidebar";

export default function FormWrapper() {
  return (
    <div className="flex">
      <SidebarProvider>
        <FormsSidebar />
        <main className="flex-1 min-h-screen flex flex-col p-4 pt-8 gap-4 relative overflow-hidden">
          <div>Main</div>
        </main>
      </SidebarProvider>
    </div>
  );
}
