"use client";

import MorphingCard from "@/components/Cards/MorphingCard/MorphingCard";
import ProjectModal from "@/features/homepage/components/ProjectModal";
import { IProject, projects } from "@/config/projects";
import useURLState from "@/hooks/useURLState";

interface FilterCriteria {
  text?: string;
  frontend?: string[];
  backend?: string[];
  apis?: string[];
}

// TODO: fix filters not working and TS issues here and useURLSTate file. Modal not opening anymore

function filterProjects(
  projects: IProject[],
  filter: FilterCriteria
): IProject[] {
  return projects.filter((project) => {
    return true;
    // console.log(
    //   "%c Logged!",
    //   "background: #01579b; color: white; padding: 2px 4px; border-radius: 4px"
    // );
    // console.log(!filter.frontend);
    // console.log(filter.frontend);
    // console.log(project.frontend);
    // return (
    //   (!filter.text ||
    //     project.title.toLowerCase().includes(filter.text.toLowerCase()) ||
    //     project.description
    //       .toLowerCase()
    //       .includes(filter.text.toLowerCase())) &&
    //   (!filter.frontend ||
    //     (project.frontend &&
    //       project.frontend.every((item) => filter.frontend?.includes(item))))
    // );
    // // (!filter.backend ||
    // //   (project.backend &&
    // //     project.backend.every((item) => filter.backend?.includes(item)))) &&
    // // (!filter.apis ||
    // //   (project.apis &&
    // //     project.apis.every((item) => filter.apis?.includes(item))))
  });
}

export default function ProjectGrid() {
  const url = useURLState({ queryAsArray: true });
  console.log(
    "%c my url!",
    "background: #01579b; color: white; padding: 2px 4px; border-radius: 4px"
  );
  console.log(url);

  let filteredProjects = projects;
  if (url) {
    filteredProjects = filterProjects(projects, url);
  }

  return (
    <div>
      {filteredProjects.length ? (
        <ul className="flex justify-between gap-6 flex-wrap">
          {filteredProjects.map((project) => {
            return (
              <ProjectModal key={project.id} project={project}>
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
