"use client";

import TechBadge from "@/features/homepage/components/TechBadge/TechBadge";
import SimpleTabs from "@/components/Tabs/SimpleTabs";
import { Button } from "@/components/ShadcnUi/Button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ShadcnUi/Dialog";
import { IProject } from "@/config/projects";
import Link from "next/link";
import { useUIStore } from "@/features/homepage/store/useUIStore";
import { Separator } from "@/components/ShadcnUi/Separator";
import { generateImageUrl } from "@/utils/imageHelpers";
import { ITechTypes } from "@/config/technologies";

interface IModalData {
  project: IProject;
  children: React.ReactNode;
}

export default function ProjectModal({ project, children }: IModalData) {
  const imageUrl = generateImageUrl(project?.image);

  const tabData = [
    {
      title: "Description",
      value: "description",
    },
    {
      title: "Frontend",
      value: "frontend",
    },
    {
      title: "Backend",
      value: "backend",
    },
    {
      title: "APIs",
      value: "apis",
    },
  ];

  const { toggleModal, setActiveTech } = useUIStore((state) => {
    return {
      toggleModal: state.toggleModal,
      setActiveTech: state.setActiveTech,
    };
  });

  function handleTech(tech: string, type: ITechTypes) {
    setActiveTech(tech, type);
    toggleModal();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent
        data-testid="project-modal"
        className="w-[90%] md:w-[80%] max-w-[600px] flex flex-col"
      >
        <div>
          <div className="flex flex-col space-y-1.5 text-center sm:text-left mb-4">
            <h3 className="text-lg font-semibold leading-none">
              {project.title}
            </h3>
          </div>
          <Separator />
        </div>
        <SimpleTabs tabData={tabData}>
          <div className="flex gap-4">
            <div className="rounded overflow-hidden w-[100px] h-[100px] flex-[0_0_100]">
              <img
                src={imageUrl}
                alt="Project Image"
                className="object-cover w-[100%] h-[100%]"
              />
            </div>
            <p className="flex-1">
              {project.description || "No description available currently"}
            </p>
          </div>
          <div>
            {project.frontend?.length ? (
              <div className="flex flex-wrap gap-2">
                {project.frontend.map((tech) => (
                  <DialogTrigger
                    key={tech}
                    asChild
                    onClick={() => handleTech(tech, "frontend")}
                  >
                    <TechBadge title={tech} />
                  </DialogTrigger>
                ))}
              </div>
            ) : (
              <p>No notable frontend technology was used for this project</p>
            )}
          </div>
          <div>
            {project.backend?.length ? (
              <div className="flex flex-wrap gap-2">
                {project.backend.map((tech) => (
                  <DialogTrigger
                    key={tech}
                    asChild
                    onClick={() => handleTech(tech, "backend")}
                  >
                    <TechBadge title={tech} />
                  </DialogTrigger>
                ))}
              </div>
            ) : (
              <p>No notable backend technology was used for this project</p>
            )}
          </div>
          <div>
            {project.apis?.length ? (
              <div className="flex flex-wrap gap-2">
                {project.apis.map((tech) => (
                  <DialogTrigger
                    key={tech}
                    asChild
                    onClick={() => handleTech(tech, "apis")}
                  >
                    <TechBadge title={tech} />
                  </DialogTrigger>
                ))}
              </div>
            ) : (
              <p>No notable API&apos;s were used for this project</p>
            )}
          </div>
        </SimpleTabs>

        <DialogFooter className="sm:justify-center">
          {project.showLink ? (
            <Button data-testid="see-project-button" asChild>
              <Link href={project.path}>See Project</Link>
            </Button>
          ) : (
            <span data-testid="coming-soon">Coming soon...</span>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
