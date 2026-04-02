import BlogCard from "@/features/blog/components/BlogCard";
import { getAllPosts } from "@/lib/blog";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useMemo } from "react";

export type SortOrder = "newest" | "oldest";

interface BlogListProps {
    preview: boolean;
    searchQuery?: string;
    sortOrder?: SortOrder;
}

export default function BlogList({ preview, searchQuery = "", sortOrder = "newest" }: BlogListProps) {
    const allPosts = getAllPosts();

    const filteredAndSorted = useMemo(() => {
        const query = searchQuery.toLowerCase().trim();

        let posts = allPosts;

        if (query) {
            posts = posts.filter((post) => {
                const titleMatch = post.title.toLowerCase().includes(query);
                const descMatch = post.description.toLowerCase().includes(query);
                const tagMatch = post.tags.some((tag) => tag.toLowerCase().includes(query));
                return titleMatch || descMatch || tagMatch;
            });
        }

        if (sortOrder === "oldest") {
            return [...posts].sort(
                (a, b) => new Date(a.rawDate).getTime() - new Date(b.rawDate).getTime()
            );
        }

        // Default: newest first (already sorted by getAllPosts)
        return posts;
    }, [allPosts, searchQuery, sortOrder]);

    if (allPosts.length === 0) {
        return (
            <div className="flex flex-col gap-8">
                <h1 className="text-2xl font-medium">Blog</h1>
                <p className="text-zinc-400">No posts yet. Check back soon.</p>
            </div>
        );
    }

    if (preview) {
        const previewPosts = allPosts.slice(0, 2);
        return (
            <div className="flex flex-col gap-4 items-center">
                <div className="flex flex-col gap-8">
                    <h1 className="text-2xl font-medium">Blog</h1>
                    <div className="flex flex-col border-2 border-zinc-600 rounded-xl overflow-hidden">
                        {previewPosts.map((post, index) => (
                            <BlogCard
                                key={post.slug}
                                post={post}
                                showImage={true}
                                isLast={index === previewPosts.length - 1}
                            />
                        ))}
                    </div>
                </div>
                <Link to="/blog" className="h-fit">
                    <Button className="w-fit border-2 border-zinc-600 p-3 bg-zinc-800/80 text-zinc-300 hover:bg-indigo-600 hover:border-indigo-600 hover:text-zinc-100 transition-colors duration-300 cursor-pointer">
                        View More <FaArrowRight />
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <>
            {filteredAndSorted.length === 0 ? (
                <p className="text-zinc-400">No posts match your search.</p>
            ) : (
                <div className="flex flex-col border-2 border-zinc-600 rounded-xl overflow-hidden">
                    {filteredAndSorted.map((post, index) => (
                        <BlogCard
                            key={post.slug}
                            post={post}
                            showImage={false}
                            isLast={index === filteredAndSorted.length - 1}
                        />
                    ))}
                </div>
            )}
        </>
    );
}
