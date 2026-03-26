import ProjectGrid from "@/features/projects/components/ProjectGrid";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Projects" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Projects() {
    return (
        <div className="flex flex-col gap-10">
            <ProjectGrid preview={false} />
        </div>
    )
}
