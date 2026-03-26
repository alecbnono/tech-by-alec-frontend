import type { Route } from "./+types/home";
import HeroSection from "@/features/home/components/HeroSection";
import ExperienceTable from "@/features/home/components/ExperienceTable";
import TechStack from "@/features/home/components/TechStack";
import ProjectGrid from "@/features/projects/components/ProjectGrid";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Tech by Alec" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    return (
        <div className="flex flex-col gap-12 py-4">
            <HeroSection />
            <ProjectGrid preview={true} />
            <TechStack />
            <ExperienceTable />
        </div>
    )
}
