"use client";

import TechBadge from "@/features/homepage/components/TechBadge/TechBadge";
import { Button } from "@/components/ShadcnUi/Button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ShadcnUi/Dialog";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import { useUIStore } from "@/features/homepage/store/useUIStore";
import { Separator } from "@/components/ShadcnUi/Separator";
import { ITechTypes } from "@/config/technologies";
import Link from "next/link";

interface IModalData {
  children: React.ReactNode;
}

export default function AboutModal({ children }: IModalData) {
  const { toggleModal, setActiveTech } = useUIStore((state) => {
    return {
      isOpen: state.globalModal.isOpen,
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

      <DialogContent className="w-[90vw] md:w-[80vw] max-w-[800px] flex flex-col">
        <div>
          <div className="flex flex-col space-y-1.5 text-center sm:text-left mb-4">
            <DialogTitle
              className="text-lg font-semibold leading-none text-center sm:text-left mb-4"
              data-testid="about-modal-title"
            >
              About
            </DialogTitle>
          </div>
          <Separator />
        </div>
        <div className="width-[100%]">
          <p>
            This is a project that aims to explore, test and aggregate a variety
            of Web Dev functionalities within different projects.
          </p>
          <p>In general, the project uses:</p>
          <div className="my-2 flex flex-col gap-2">
            <div className="list-disc list-inside flex gap-2 flex-wrap items-center">
              <span>Frontend:</span>
              <DialogTrigger
                asChild
                onClick={() => handleTech("React JS", "frontend")}
              >
                <TechBadge data-testid="react-tech-badge" title={"React JS"} />
              </DialogTrigger>
              <DialogTrigger
                asChild
                onClick={() => handleTech("Next JS", "frontend")}
              >
                <TechBadge title={"Next JS"} />
              </DialogTrigger>
              <DialogTrigger
                asChild
                onClick={() => handleTech("Typescript", "frontend")}
              >
                <TechBadge title={"Typescript"} />
              </DialogTrigger>
              <DialogTrigger
                asChild
                onClick={() => handleTech("Tailwind CSS", "frontend")}
              >
                <TechBadge title={"Tailwind CSS"} />
              </DialogTrigger>
              <DialogTrigger
                asChild
                onClick={() => handleTech("Shadcn UI", "frontend")}
              >
                <TechBadge title={"Shadcn UI"} />
              </DialogTrigger>
            </div>
            <p className="list-disc list-inside flex gap-2 flex-wrap items-center">
              <span>Backend & Infra:</span>
              <DialogTrigger
                asChild
                onClick={() => handleTech("Supabase", "backend")}
              >
                <TechBadge title={"Supabase"} />
              </DialogTrigger>
              <DialogTrigger
                asChild
                onClick={() => handleTech("Vercel", "backend")}
              >
                <TechBadge title={"Vercel"} />
              </DialogTrigger>
            </p>
          </div>
          <p>
            Libraries which have small impact may not be listed here or in the
            project data listing.
          </p>
          <p>
            An account is available for some of the features, including a guest
            account. As for how this data is used, please refer to the
            <Button asChild variant="link" className="px-2">
              <Link href="/policies">Policies Page</Link>
            </Button>
          </p>
          <p>
            You can also use the keyboard shortcuts to open projects. Use
            &quot;Alt + 1&quot; for the first one, &quot;Alt + 2&quot; for the
            second and so on up to 9 projects.
          </p>
        </div>

        <DialogFooter className="sm:justify-center">
          <Button variant="secondary" asChild>
            <a
              href="https://github.com/Sergie-AGA/web-dev-explorer-next"
              className="flex flex-col gap-2 items-center h-[unset]"
            >
              <IconBrandGithubFilled className="flex-1" />
              <small className="text-[10px]">Github</small>
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
