"use client";

import MorphingCard from "@/components/Cards/MorphingCard/MorphingCard";
import ProjectModal from "@/features/homepage/components/ProjectModal";
import { IProject, projects } from "@/config/projects";
import { useURLState } from "@/hooks/useURLState";

interface FilterCriteria {
  text?: string;
  frontend?: string[];
  backend?: string[];
  apis?: string[];
}

function filterProjects(
  projects: IProject[],
  filter: FilterCriteria
): IProject[] {
  return projects.filter((project) => {
    return (
      // Text
      (!filter.text ||
        project.title.toLowerCase().includes(filter?.text.toLowerCase()) ||
        project.description
          .toLowerCase()
          .includes(filter?.text.toLowerCase())) &&
      // Frontend
      (filter.frontend?.length
        ? project.frontend?.length &&
          filter.frontend.every((item) =>
            (project.frontend as string[])?.includes(item)
          )
        : true) &&
      // Backend
      (filter.backend?.length
        ? project.backend?.length &&
          filter.backend.every((item) =>
            (project.backend as string[])?.includes(item)
          )
        : true) &&
      // API
      (filter.apis?.length
        ? project.apis?.length &&
          filter.apis.every((item) =>
            (project.apis as string[])?.includes(item)
          )
        : true)
    );
  });
}

export default function ProjectGrid() {
  const url = useURLState({ queryAsArray: true });

  let filteredProjects = projects.filter((project) => project.showProject);
  if (url) {
    filteredProjects = filterProjects(filteredProjects, url);
  }

  return (
    <div>
      {filteredProjects.length ? (
        <ul className="flex justify-between gap-6 flex-wrap">
          {filteredProjects.map((project) => {
            return (
              <ProjectModal key={project.path} project={project}>
                <MorphingCard data={project} />
              </ProjectModal>
            );
          })}
        </ul>
      ) : (
        <p className="text-center">
          No projects found with the applied filters
        </p>
      )}
    </div>
  );
}
