import ProjectCard from "@/features/projects/components/ProjectCard";
import projects from "@/data/projects";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function ProjectGrid({ preview }: { preview: boolean }) {

    if (preview) {
        return (
            <div className="flex flex-col gap-4 items-center">
                <div className="flex flex-col gap-8">
                    <h2 className="text-2xl font-semibold text-zinc-50">Projects</h2>
                    <div className="grid grid-cols-2 gap-8">
                        {projects.slice(0, 2).map((item) => {
                            return (
                                <ProjectCard
                                    key={item.title}
                                    date={item.date}
                                    image={item.image}
                                    title={item.title}
                                    description={item.description}
                                    code={item.code}
                                    link={item.link}
                                />
                            );
                        })}
                    </div>
                </div>
                <Link to="/projects" className="h-fit">
                    <Button className="w-fit bg-[rgba(18,14,50,0.52)] backdrop-blur-md border border-[rgba(255,255,255,0.08)] p-3 text-zinc-200 hover:bg-[rgba(30,22,75,0.65)] transition-all duration-300 cursor-pointer">
                        View More <FaArrowRight />
                    </Button>
                </Link>
            </div>
        )
    }
    else {
        return (
            <>
                <h2 className="text-2xl font-semibold text-zinc-50">Projects</h2>
                <div className="grid grid-cols-2 gap-8">
                    {projects.map((item) => {
                        return (
                            <ProjectCard
                                key={item.title}
                                date={item.date}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                code={item.code}
                                link={item.link}
                            />
                        );
                    })}
                </div>
            </>
        )
    }

}
