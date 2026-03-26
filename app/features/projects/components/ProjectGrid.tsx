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
                    <h1 className="text-2xl font-medium">Projects</h1>
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
                    <Button className="w-fit border-2 border-zinc-600 p-3 bg-zinc-800/80 text-zinc-300 hover:bg-indigo-600 hover:border-indigo-600 hover:text-zinc-100 transition-colors duration-300 cursor-pointer">
                        View More <FaArrowRight />
                    </Button>
                </Link>
            </div>
        )
    }
    else {
        return (
            <>
                <h1 className="text-2xl font-medium">Projects</h1>
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
