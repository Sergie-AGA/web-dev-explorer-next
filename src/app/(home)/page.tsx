import ProjectGrid from "@/features/homepage/components/ProjectGrid/ProjectGrid";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="py-4">
      <Suspense>
        <ProjectGrid />
      </Suspense>
    </main>
  );
}
