function ProjectCard({ date, title, description, image }) {
    return (
        <div className="flex flex-col relative gap-2 rounded-xl border-white border-3 bg-slate-950 overflow-hidden hover:-translate-y-1 transition-transform duration-650">
            <img src={image} alt="" />
            <div className="flex flex-col gap-5 p-5 ">
                <div className="flex justify-between">
                    <h1 className="font-semibold text-lg">{title}</h1>
                    <p>{date}</p>
                </div>
                <p className="text-justify text-slate-400">{description}</p>
                <div className="flex w-full justify-evenly gap-10">
                    <button className=" py-2 bg-violet-600 rounded-xl grow">Code</button>
                    <button className=" py-2 bg-violet-600 rounded-xl grow">Link</button>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
