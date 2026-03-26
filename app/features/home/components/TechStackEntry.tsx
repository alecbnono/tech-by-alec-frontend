import type { TechStackItem as TechStackEntryProps } from "@/types";

export default function TechStackEntry({ icon: Icon, title }: TechStackEntryProps) {
    return (
        <div className="flex items-center gap-2 border-2 border-zinc-700 p-2 bg-zinc-950/33 rounded-xl hover:-translate-y-1 transition-transform duration-300">
            <Icon className="text-lg" />
            <div className="text-sm">{title}</div>
        </div>
    );
}
