"use client";

import MorphingCard from "@/components/Cards/MorphingCard/MorphingCard";
import ProjectModal from "@/features/homepage/components/ProjectModal";
import { IProject, projects } from "@/config/projects";
import { useURLState, generateQueryString } from "@/hooks/useURLState";
import TechBadge from "./TechBadge";
import { useRouter } from "next/navigation";
import { useKeyPress } from "@/hooks/useKeyPress";
import { useRef } from "react";

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
  const router = useRouter();
  const modalRefs = useRef<(HTMLDivElement | null)[]>([]);

  let filteredProjects = projects.filter((project) => project.showProject);
  if (url) {
    filteredProjects = filterProjects(filteredProjects, url);
  }

  function removeFilter(type: string, tech: string) {
    if (url) {
      if (type === "text") {
        delete url.text;
      } else {
        if (url[type] && Array.isArray(url[type])) {
          url[type] = (url[type] as string[]).filter((value) => value !== tech);

          if (url[type].length === 0) {
            delete url[type];
          }
        }
      }

      const newUrl = generateQueryString(url);
      router.push(newUrl);
    }
  }

  const keyCombos = filteredProjects.map((_, index) => ({
    keys: ["Alt", (index + 1).toString()],
    callback: () => {
      const modalRef = modalRefs.current[index];
      if (modalRef) {
        modalRef.click();
      }
    },
  }));

  useKeyPress(keyCombos);

  return (
    <div>
      {Object.keys(url).length > 0 && (
        <div className="flex flex-col gap-2 mb-4">
          <h3 className="text-lg">Filters Applied:</h3>
          <div className="flex flex-wrap gap-4">
            {url.text && (
              <div className="flex flex-wrap gap-1 items-center pt-6 relative">
                <span className="text-sm font-bold absolute top-0 left-[50%] translate-x-[-50%]">
                  Text:
                </span>
                <TechBadge
                  onClick={() => removeFilter("text", url.text as string)}
                  title={url.text as string}
                  removable={true}
                />
              </div>
            )}
            {url.frontend && (
              <div className="flex flex-wrap gap-1 items-center pt-6 relative">
                <span className="text-sm font-bold absolute top-0 left-[50%] translate-x-[-50%]">
                  Frontend:
                </span>
                {(url.frontend as string[]).map((tech) => (
                  <TechBadge
                    onClick={() => removeFilter("frontend", tech)}
                    key={tech}
                    title={tech}
                    removable={true}
                  />
                ))}
              </div>
            )}
            {url.backend && (
              <div className="flex flex-wrap gap-1 items-center pt-6 relative">
                <span className="text-sm font-bold absolute top-0 left-[50%] translate-x-[-50%]">
                  Backend:
                </span>
                {(url.backend as string[]).map((tech) => (
                  <TechBadge
                    onClick={() => removeFilter("backend", tech)}
                    key={tech}
                    title={tech}
                    removable={true}
                  />
                ))}
              </div>
            )}
            {url.apis && (
              <div className="flex flex-wrap gap-1 items-center pt-6 relative">
                <span className="text-sm font-bold absolute top-0 left-[50%] translate-x-[-50%]">
                  APIs:
                </span>
                {(url.apis as string[]).map((tech) => (
                  <TechBadge
                    onClick={() => removeFilter("apis", tech)}
                    key={tech}
                    title={tech}
                    removable={true}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      {filteredProjects.length ? (
        <ul className="flex justify-between gap-6 flex-wrap">
          {filteredProjects.map((project, index) => {
            return (
              <ProjectModal key={project.path} project={project}>
                <MorphingCard
                  data={project}
                  ref={(el) => {
                    modalRefs.current[index] = el;
                  }}
                />
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
