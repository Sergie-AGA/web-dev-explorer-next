"use client";

import { FormEvent, useState } from "react"; // Import FormEvent type
import { Separator } from "@/components/ui/separator";
import { useURLState } from "@/hooks/useURLState";
import { cn } from "@/lib/utils";
import {
  IconFilter,
  IconFilterOff,
  IconSearch,
  IconX,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { technologies } from "@/config/technologies";
import TechBadge from "./TechBadge";

interface ITechFilters {
  frontend: string[];
  backend: string[];
  apis: string[];
}

type Category = "frontend" | "backend" | "apis";

export default function FilterModal() {
  const emptyCats = {
    frontend: [],
    backend: [],
    apis: [],
  };
  const url = useURLState({ queryAsArray: true });

  const initialFilters = JSON.parse(JSON.stringify(emptyCats));

  initialFilters.frontend = url?.frontend || [];
  initialFilters.backend = url?.backend || [];
  initialFilters.apis = url?.apis || [];

  const [searchValue, setSearchValue] = useState(url?.text || "");
  const [techs, setTechs] = useState<ITechFilters>(initialFilters);
  const router = useRouter();
  function handleTech(category: Category, tech: string) {
    const newTechs = { ...techs };

    if (newTechs[category].includes(tech)) {
      const indexToRemove = newTechs[category].indexOf(tech);
      newTechs[category].splice(indexToRemove, 1);
    } else {
      newTechs[category] = [...newTechs[category], tech];
    }

    setTechs(newTechs);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const textQuery = searchValue && `text=${searchValue}`;
    const frontendQuery =
      techs.frontend?.length && `frontend=${techs.frontend.join(",")}`;
    const backendQuery =
      techs.backend?.length && `backend=${techs.backend.join(",")}`;
    const apiQuery = techs.apis?.length && `apis=${techs.apis.join(",")}`;

    const query = `?${[textQuery, frontendQuery, backendQuery, apiQuery]
      .filter(Boolean)
      .join("&")}`;
    router.push(query);
  }

  function clearSearch() {
    setSearchValue("");
  }

  function clearTechs() {
    setTechs(emptyCats);
  }

  return (
    <div>
      <div className="flex flex-col space-y-1.5 text-center sm:text-left mb-4">
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          Filters
        </h3>
      </div>

      <Separator />
      <form
        onSubmit={handleSubmit}
        className="min-h-[100px] my-4 flex flex-col gap-4 items-start"
      >
        <div className="relative w-[100%] max-w-[300px]">
          <input
            type="text"
            placeholder="Search by title or description..."
            className="p-2 pr-6 rounded w-[100%]"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {searchValue ? (
            <IconX
              onClick={clearSearch}
              className="absolute top-[50%] translate-y-[-50%] right-2 cursor-pointer"
            />
          ) : (
            <IconSearch className="absolute top-[50%] translate-y-[-50%] right-2" />
          )}
        </div>
        <div>
          <h2 className="text-sm">Frontend</h2>
          <div className="flex flex-wrap gap-2">
            {technologies.frontend.map((tech) => (
              <TechBadge
                onClick={() => handleTech("frontend", tech.title)}
                isLink={false}
                key={tech.title}
                className={cn({
                  "bg-cyan-600": techs.frontend?.includes(tech.title),
                })}
                title={tech.title}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm">Backend</h2>
          <div className="flex flex-wrap gap-2">
            {technologies.backend.map((tech) => (
              <TechBadge
                onClick={() => handleTech("backend", tech.title)}
                key={tech.title}
                isLink={false}
                className={cn({
                  "bg-cyan-600": techs.backend?.includes(tech.title),
                })}
                title={tech.title}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm">API&apos;s</h2>
          <div className="flex flex-wrap gap-2">
            {technologies.apis.map((tech) => (
              <TechBadge
                onClick={() => handleTech("apis", tech.title)}
                key={tech.title}
                isLink={false}
                className={cn({
                  "bg-cyan-600": techs.apis?.includes(tech.title),
                })}
                title={tech.title}
              />
            ))}
          </div>
        </div>
        <div className="mt-4 flex flex-col md:flex-row gap-4 items-center w-[100%]">
          <Button variant="outline" className="flex gap-2">
            <IconFilter />
            Apply Filters
          </Button>
          <Button
            type="button"
            onClick={clearTechs}
            variant="ghost"
            className="flex gap-2"
          >
            <IconFilterOff />
            Clear Tech Filters
          </Button>
        </div>
      </form>
    </div>
  );
}
