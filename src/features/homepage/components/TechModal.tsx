"use client";

import TechBadge from "@/features/homepage/components/TechBadge";
import SimpleTabs from "@/components/Tabs/SimpleTabs";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ITechnology, technologies, ITechTypes } from "@/config/technologies";
import { useUIStore } from "@/store/useUIStore";

export default function TechModal() {
  const tabData = [
    {
      title: "Frontend",
      value: "frontend",
    },
    {
      title: "Backend",
      value: "backend",
    },
    {
      title: "API's",
      value: "apis",
    },
  ];

  const [techDetails, setTechDetails] = useState<
    ITechnology | null | undefined
  >(null);

  const { activeTech, setActiveTech } = useUIStore((state) => {
    return {
      activeTech: state.activeTech,
      setActiveTech: state.setActiveTech,
    };
  });

  function handleActiveTech(category: ITechTypes, techBadge: string) {
    const techDetails = technologies[category].find(
      (tech) => tech.title?.toLowerCase() == techBadge.toLowerCase()
    );
    if (techDetails) {
      setTechDetails(techDetails);
      setActiveTech(techBadge, category);
    }
  }

  useEffect(() => {
    if (activeTech) {
      handleActiveTech(activeTech?.type, activeTech?.tech);
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col space-y-1.5 text-center sm:text-left mb-4">
        <h3 className="text-lg font-semibold leading-none">Technologies</h3>
      </div>
      <Separator />

      <div className="my-2">
        <SimpleTabs tabData={tabData} initialTab={activeTech?.type}>
          <div className="flex flex-wrap gap-2">
            {technologies.frontend.map((tech) => (
              <TechBadge
                key={tech.title}
                className={cn({
                  "bg-cyan-600": techDetails?.title == tech.title,
                })}
                title={tech.title}
                onClick={() => handleActiveTech("frontend", tech.title)}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {technologies.backend.map((tech) => (
              <TechBadge
                key={tech.title}
                className={cn({
                  "bg-cyan-600": techDetails?.title == tech.title,
                })}
                title={tech.title}
                onClick={() => handleActiveTech("backend", tech.title)}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {technologies.apis.map((tech) => (
              <TechBadge
                key={tech.title}
                className={cn({
                  "bg-cyan-600": techDetails?.title == tech.title,
                })}
                title={tech.title}
                onClick={() => handleActiveTech("apis", tech.title)}
              />
            ))}
          </div>
        </SimpleTabs>
      </div>
      <Separator />
      <div className="min-h-[100px] my-2">
        {techDetails && (
          <>
            <h4 className="flex items-center gap-2">
              <span className="text-lg">{techDetails.title}</span> -{" "}
              <a
                href={techDetails.link}
                target="_blank"
                className="py-1 px-2 rounded bg-cyan-900 cursor-pointer text-sm leading-4"
              >
                Link
              </a>
            </h4>
            <p>{techDetails.description}</p>
          </>
        )}
      </div>
    </div>
  );
}
