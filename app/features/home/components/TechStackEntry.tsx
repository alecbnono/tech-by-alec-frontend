import type { TechStackItem as TechStackEntryProps } from "@/types";

export default function TechStackEntry({ icon: Icon, title }: TechStackEntryProps) {
    return (
        <div className="flex items-center gap-2 glass p-2 rounded-xl hover:-translate-y-1 transition-transform duration-300">
            <Icon className="text-lg" />
            <div className="text-sm">{title}</div>
        </div>
    );
}
