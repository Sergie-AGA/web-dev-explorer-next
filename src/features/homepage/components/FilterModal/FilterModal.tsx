"use client";

import { FormEvent, useState } from "react";
import { Separator } from "@/components/ShadcnUi/Separator";
import { useURLState } from "@/hooks/useURLState";
import { cn } from "@/utils/utils";
import { IconFilter, IconFilterOff } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ShadcnUi/Button";
import { technologies } from "@/config/technologies";
import SearchInput from "@/components/Form/SearchInput";
import TechBadge from "../TechBadge/TechBadge";

interface ITechFilters {
  frontend: string[];
  backend: string[];
  other: string[];
}

type Category = "frontend" | "backend" | "other";

export default function FilterModal() {
  const emptyCats = {
    frontend: [],
    backend: [],
    other: [],
  };
  const url = useURLState({ queryAsArray: true });

  const initialFilters = JSON.parse(JSON.stringify(emptyCats));

  initialFilters.frontend = url?.frontend || [];
  initialFilters.backend = url?.backend || [];
  initialFilters.other = url?.other || [];

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
    const apiQuery = techs.other?.length && `other=${techs.other.join(",")}`;

    const query = `?${[textQuery, frontendQuery, backendQuery, apiQuery]
      .filter(Boolean)
      .join("&")}`;
    router.push(query);
  }

  function clearTechs() {
    setTechs(emptyCats);
  }

  function handleSearch(text: string) {
    setSearchValue(text);
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
        <SearchInput
          placeholder="Search by title or description..."
          handleSearch={handleSearch}
          searchValue={searchValue as string}
        />
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
                data-testid="frontend-tech-filter-badge"
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
          <h2 className="text-sm">Others</h2>
          <div className="flex flex-wrap gap-2">
            {technologies.other.map((tech) => (
              <TechBadge
                onClick={() => handleTech("other", tech.title)}
                key={tech.title}
                isLink={false}
                className={cn({
                  "bg-cyan-600": techs.other?.includes(tech.title),
                })}
                title={tech.title}
              />
            ))}
          </div>
        </div>
        <div className="mt-4 flex flex-col md:flex-row gap-4 items-center w-[100%]">
          <Button
            variant="outline"
            className="flex gap-2"
            data-testid="apply-filter-button"
          >
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
