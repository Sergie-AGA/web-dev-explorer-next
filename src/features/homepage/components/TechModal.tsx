'use client'

import TechBadge from "@/features/homepage/components/TechBadge";
import SimpleTabs from "@/components/Tabs/SimpleTabs";
import { Separator } from "@/components/ui/separator";
import { ITechnology, technologies } from "@/config/technologies";
import useURLState from "@/hooks/useURLState";
import { cn } from "@/lib/utils";

export default function TechModal() {
    const tabData = [
        {
            title: 'Frontend',
            value:  'frontend'
        },
        {
            title: 'Backend',
            value:  'backend'
        },
        {
            title: "API's",
            value:  'apis'
        },
    ];

    const url = useURLState()
    let activeTech: ITechnology | null  | undefined  = null
    activeTech = technologies.frontend.find(tech => tech.title?.toLowerCase() == url?.tech?.toLowerCase())
    if (!activeTech) {
    activeTech = technologies.backend.find(tech => tech.title?.toLowerCase() == url?.tech?.toLowerCase())
        
    }
    if (!activeTech) {
        activeTech = technologies.apis.find(tech => tech.title?.toLowerCase() == url?.tech?.toLowerCase())
    }

    return (
        <div>
            <div className="flex flex-col space-y-1.5 text-center sm:text-left mb-4">
            <h3 className="text-lg font-semibold leading-none">Technologies</h3>

            </div>
            <Separator />

<div className="my-2">
            <SimpleTabs  tabData={tabData}>
                <div className="flex flex-wrap gap-2">
                    {technologies.frontend.map(tech => (
                        <TechBadge className={cn({'bg-cyan-600': activeTech?.title == tech.title})} title={tech.title} />
                    ))}
                </div>
                <div className="flex flex-wrap gap-2">
                {technologies.backend.map(tech => (
                        <TechBadge className={cn({'bg-cyan-600': activeTech?.title == tech.title})} title={tech.title} />
                    ))}
                </div>
                <div className="flex flex-wrap gap-2">
                {technologies.apis.map(tech => (
                        <TechBadge className={cn({'bg-cyan-600': activeTech?.title == tech.title})} title={tech.title} />
                    ))}
                </div>
            </SimpleTabs></div>
            <Separator />
            <div className="min-h-[100px] my-2">
                    {
                        activeTech &&
                        <>
                            <h4 className="flex items-center gap-2"><span className="text-lg">{activeTech.title}</span> - <a href={activeTech.link} target="_blank" className="py-1 px-2 rounded bg-cyan-900 cursor-pointer text-sm leading-4">Link</a></h4>
                            <p>{activeTech.description}</p>
                        </>
                    }
            </div>
        </div>
    );
}
