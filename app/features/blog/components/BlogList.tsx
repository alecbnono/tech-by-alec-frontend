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
                <h2 className="text-2xl font-semibold text-zinc-50">Blog</h2>
                <p className="text-zinc-400">No posts yet. Check back soon.</p>
            </div>
        );
    }

    if (preview) {
        const previewPosts = allPosts.slice(0, 2);
        return (
            <div className="flex flex-col gap-4 items-center">
                <div className="flex flex-col gap-8">
                    <h2 className="text-2xl font-semibold text-zinc-50">Blog</h2>
                    <div className="flex flex-col glass rounded-xl overflow-hidden">
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
                    <Button className="w-fit bg-[rgba(18,14,50,0.52)] backdrop-blur-md border border-[rgba(255,255,255,0.08)] p-3 text-zinc-200 hover:bg-[rgba(30,22,75,0.65)] transition-all duration-300 cursor-pointer">
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
                <div className="flex flex-col glass rounded-xl overflow-hidden">
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
