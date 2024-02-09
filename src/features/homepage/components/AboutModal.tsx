"use client";

import TechBadge from "@/features/homepage/components/TechBadge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import { useUIStore } from "@/store/useUIStore";
import { Separator } from "@/components/ui/separator";
import { projectMeta } from "@/config/meta";

interface IModalData {
  children: React.ReactNode;
}

export default function AboutModal({ children }: IModalData) {
  const { toggleModal } = useUIStore((state) => {
    return {
      isOpen: state.globalModal.isOpen,
      toggleModal: state.toggleModal,
    };
  });

  function handleTech() {
    toggleModal();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="w-[90vw] md:w-[80vw] max-w-[800px] flex flex-col">
        <div>
          <div className="flex flex-col space-y-1.5 text-center sm:text-left mb-4">
            <h3 className="text-lg font-semibold leading-none">About</h3>
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
            <p className="list-disc list-inside flex gap-2 flex-wrap items-center">
              <span>Frontend:</span>
              <DialogTrigger asChild onClick={handleTech}>
                <TechBadge title={"React JS"} />
              </DialogTrigger>
              <DialogTrigger asChild onClick={handleTech}>
                <TechBadge title={"Next JS"} />
              </DialogTrigger>
              <DialogTrigger asChild onClick={handleTech}>
                <TechBadge title={"Typescript"} />
              </DialogTrigger>
              <DialogTrigger asChild onClick={handleTech}>
                <TechBadge title={"Tailwind CSS"} />
              </DialogTrigger>
              <DialogTrigger asChild onClick={handleTech}>
                <TechBadge title={"Shadcn UI"} />
              </DialogTrigger>
            </p>
            <p className="list-disc list-inside flex gap-2 flex-wrap items-center">
              <span>Backend & Infra:</span>
              <DialogTrigger asChild onClick={handleTech}>
                <TechBadge title={"Supabase"} />
              </DialogTrigger>
              <DialogTrigger asChild onClick={handleTech}>
                <TechBadge title={"AWS S3"} />
              </DialogTrigger>
            </p>
          </div>
          <p>
            Libraries which have small impact may not be listed here or in the
            project data listing
          </p>
        </div>

        <DialogFooter className="sm:justify-center">
          <Button variant="secondary" asChild>
            <a
              href={projectMeta.githubURL}
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
