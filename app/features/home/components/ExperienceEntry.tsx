import type { ExperienceEntry as ExperienceEntryProps } from "@/types";

export default function ExperienceEntry({ dateStart, dateEnd, title, description, image }: ExperienceEntryProps) {
    return (
        <div className="flex z-1 py-2.5 gap-10 items-center">
            <img
                src={image}
                alt=""
                className="w-15 h-15 border-2 border-white bg-white rounded-full flex-shrink-0"
            />
            <div className="text-left whitespace-normal">
                <p className="text-xs text-zinc-500">
                    {dateStart} - {dateEnd}
                </p>
                <h5 className="font-semibold text-zinc-100">{title}</h5>
                <p className="text-sm text-zinc-400">{description}</p>
            </div>
        </div>
    );
}
