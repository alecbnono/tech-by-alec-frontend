import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { LuGlobe } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import type { ProjectEntry } from "@/types";

export default function ProjectCard({ date, title, description, image, code, link }: ProjectEntry) {
    return (
        <Card className="p-0 bg-[rgba(18,14,50,0.52)] backdrop-blur-xl ring-0 border border-[rgba(255,255,255,0.08)] overflow-hidden">
            <CardHeader className="p-0 w-full">
                <img src={image} className="w-full aspect-[5/3] h-full object-cover" />
            </CardHeader>
            <div className="flex flex-col gap-8 justify-between h-full">
                <CardContent className="flex flex-col gap-2 px-6">
                    <div className="flex justify-between items-end">
                        <CardTitle className="text-zinc-100 font-semibold">{title}</CardTitle>
                        <CardDescription className="text-zinc-400 text-xs">{date}</CardDescription>
                    </div>
                    <CardDescription className="text-xs text-zinc-400 text-justify">{description}</CardDescription>
                </CardContent>
                <CardFooter className="flex gap-2 pb-4">
                    <a target="_blank" href={link} className="h-fit">
                        <Button className="py-4 px-4 text-zinc-100 bg-[rgba(18,14,50,0.52)] hover:bg-[rgba(30,22,75,0.65)] border border-[rgba(255,255,255,0.08)] cursor-pointer" size="sm">
                            <LuGlobe />
                            Link
                        </Button>
                    </a>
                    <a target="_blank" href={code} className="h-fit ">
                        <Button className="py-4 px-4 text-zinc-100 bg-[rgba(18,14,50,0.52)] hover:bg-[rgba(30,22,75,0.65)] border border-[rgba(255,255,255,0.08)] cursor-pointer" size="sm">
                            <LuGithub />
                            Code
                        </Button>
                    </a>
                </CardFooter>
            </div>
        </Card>
    );
}

