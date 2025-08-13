import techStack from "../data/techStack";
import TechStackEntry from "./TechStackEntry";

function TechStack() {
    return (
        <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-semibold">Tech Stack</h3>
            <div className="flex flex-wrap gap-2 justify-center">
                {techStack.map((item) => {
                    return <TechStackEntry icon={item.icon} title={item.title} />;
                })}
            </div>
        </div>
    );
}

export default TechStack;
