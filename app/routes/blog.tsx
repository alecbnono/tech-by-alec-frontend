import BlogList from "@/features/blog/components/BlogList";
import type { SortOrder } from "@/features/blog/components/BlogList";
import { useState } from "react";
import { LuSearch, LuArrowDownUp } from "react-icons/lu";

export function meta() {
    return [
        { title: "Blog | Tech by Alec" },
        { name: "description", content: "Blog posts by Alec." },
    ];
}

export default function Blog() {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState<SortOrder>("newest");

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-semibold text-zinc-50">Blog</h1>

            <div className="flex flex-col sm:flex-row gap-3">
                {/* Search input */}
                <div className="relative flex-1">
                    <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 size-4" />
                    <input
                        type="text"
                        placeholder="Search posts..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-[rgba(18,14,50,0.45)] backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-xl text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-[rgba(255,255,255,0.2)] transition-all duration-300"
                    />
                </div>

                {/* Sort toggle */}
                <button
                    onClick={() => setSortOrder((prev) => (prev === "newest" ? "oldest" : "newest"))}
                    className="flex items-center gap-2 px-3 py-2 glass rounded-xl text-sm text-zinc-300 hover:bg-[rgba(30,22,75,0.65)] transition-all duration-300 cursor-pointer shrink-0"
                >
                    <LuArrowDownUp className="size-4" />
                    {sortOrder === "newest" ? "Newest" : "Oldest"}
                </button>
            </div>

            <BlogList preview={false} searchQuery={searchQuery} sortOrder={sortOrder} />
        </div>
    );
}
