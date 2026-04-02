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
            <h1 className="text-2xl font-medium">Blog</h1>

            <div className="flex flex-col sm:flex-row gap-3">
                {/* Search input */}
                <div className="relative flex-1">
                    <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 size-4" />
                    <input
                        type="text"
                        placeholder="Search posts..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-zinc-900 border-2 border-zinc-700 rounded-xl text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-indigo-600 transition-colors duration-300"
                    />
                </div>

                {/* Sort toggle */}
                <button
                    onClick={() => setSortOrder((prev) => (prev === "newest" ? "oldest" : "newest"))}
                    className="flex items-center gap-2 px-3 py-2 bg-zinc-900 border-2 border-zinc-700 rounded-xl text-sm text-zinc-300 hover:border-indigo-600 transition-colors duration-300 cursor-pointer shrink-0"
                >
                    <LuArrowDownUp className="size-4" />
                    {sortOrder === "newest" ? "Newest" : "Oldest"}
                </button>
            </div>

            <BlogList preview={false} searchQuery={searchQuery} sortOrder={sortOrder} />
        </div>
    );
}
