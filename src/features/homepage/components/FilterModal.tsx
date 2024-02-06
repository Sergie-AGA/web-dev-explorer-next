'use client'

import { Separator } from "@/components/ui/separator";
import useURLState from "@/hooks/useURLState";
import { cn } from "@/lib/utils";
import { IconSearch } from "@tabler/icons-react";

export default function FilterModal() {
    const url = useURLState()


    return (
        <div>
            <div className="flex flex-col space-y-1.5 text-center sm:text-left mb-4">
            <h3 className="text-lg font-semibold leading-none tracking-tight">Filters</h3>
            </div>
        
            <Separator />
            <form className="min-h-[100px] my-4 ">
                <div className="relative max-w-[300px]">
            <input type="text" placeholder="Search by title or description..." className="p-2 pr-6 rounded w-[100%] " />
            <button className="bg-transparent">
                <IconSearch className="absolute top-[50%] translate-y-[-50%] right-2 cursor-pointer" />
            </button>
            </div>
            </form>
        </div>
    );
}
