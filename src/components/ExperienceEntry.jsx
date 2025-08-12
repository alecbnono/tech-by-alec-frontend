function ExperienceEntry({ dateStart, dateEnd, title, description, image }) {
    return (
        <div className="flex z-1 py-2.5 gap-10 items-center">
            <img
                src={image}
                alt=""
                className="w-15 h-15 border-2 border-white bg-white rounded-4xl flex-shrink-0"
            />
            <div className="text-left whitespace-normal">
                <p className="text-slate-500">
                    {dateStart} - {dateEnd}
                </p>
                <p className="font-bold ">{title}</p>
                <p className="text-slate-400">{description}</p>
            </div>
        </div>
    );
}

export default ExperienceEntry;
