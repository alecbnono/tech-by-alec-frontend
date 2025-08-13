function TechStackEntry({ icon: Icon, title }) {
    return (
        <div className="flex items-center gap-2 border-3 border-slate-700 p-2  bg-slate-950/33 rounded-xl hover:-translate-y-1.5 transition-transform duration-300">
            <Icon className="text-2xl" />
            <div>{title}</div>
        </div>
    );
}

export default TechStackEntry;
