import techStack from "@/data/techStack";
import TechStackEntry from "./TechStackEntry";

export default function TechStack() {
    return (
        <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-medium">Skills</h3>
            <div className="flex flex-wrap gap-2 justify-center">
                {techStack.map((item) => {
                    return <TechStackEntry key={item.title} icon={item.icon} title={item.title} />;
                })}
            </div>
        </div>
    );
}
