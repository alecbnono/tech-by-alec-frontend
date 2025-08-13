function ProjectCard({ date, title, description, image, code, link }) {
    return (
        <div className="flex flex-col relative rounded-xl border-white border-3 bg-slate-950 overflow-hidden hover:-translate-y-1 transition-transform duration-650">
            <img src={image} alt="" />
            <div className="flex flex-col gap-5 p-5 ">
                <div className="flex flex-col justify-between items-start">
                    <h1 className="font-semibold text-xl">{title}</h1>
                    <p className="text-slate-500">{date}</p>
                </div>
                <p className="text-justify text-slate-300">{description}</p>
                <div className="flex w-full justify-between gap-5">
                    <a
                        href={code}
                        className="py-2 rounded-xl border-3 border-white hover:border-violet-300 hover:bg-violet-300 hover:text-violet-950 transition-colors duration-300 flex-1"
                    >
                        Code
                    </a>
                    <a
                        href={link}
                        className="py-2 rounded-xl border-3 border-violet-500 bg-violet-500 text-violet-50 hover:border-violet-300 hover:bg-violet-300 hover:text-violet-950  transition-colors duration-300 flex-1"
                    >
                        Link
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
