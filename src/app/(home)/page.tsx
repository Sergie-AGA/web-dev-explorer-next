import MorphingCard from "@/components/Cards/MorphingCard/MorphingCard";
import { projects } from "@/config/projects";
import ProjectModal from "@/features/homepage/components/ProjectModal";

export default function Home() {
  return (
    <main className="py-4">
      <ul className="flex justify-between gap-6 flex-wrap">
        {projects.map((project) => {
          return (
            <ProjectModal key={project.id} project={project}>
              <MorphingCard data={project} />
            </ProjectModal>
          );
        })}
      </ul>
    </main>
  );
}
