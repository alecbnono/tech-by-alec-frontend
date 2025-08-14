import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <div className="flex flex-col py-20 justify-center gap-20 w-full">
      <h1 className="font-bold text-6xl">Projects</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((item) => {
          return (
            <ProjectCard
              date={item.date}
              image={item.image}
              title={item.title}
              description={item.description}
              code={item.code}
              link={item.link}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Projects;
