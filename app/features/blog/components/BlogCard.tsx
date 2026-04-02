import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router";
import type { BlogListItem } from "@/types";

interface BlogCardProps {
    post: BlogListItem;
    showImage: boolean;
    isLast: boolean;
}

export default function BlogCard({ post, showImage, isLast }: BlogCardProps) {
    return (
        <Link to={`/blog/${post.slug}`} className="group">
            <Card className={`flex flex-row gap-0 items-center p-2 bg-zinc-900 h-32 rounded-none ${!isLast ? "border-b-2 border-zinc-700" : ""}`}>
                {showImage && post.coverImage && (
                    <CardHeader className="p-0 w-52">
                        <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-48 aspect-[4/3] h-27 object-cover rounded-md"
                        />
                    </CardHeader>
                )}
                <div className="flex flex-col gap-8 justify-between h-full w-full">
                    <CardContent className="flex flex-col py-1 px-4 justify-between w-full h-full">
                        <div className="flex justify-between items-end">
                            <CardTitle className="text-zinc-200 group-hover:text-indigo-400 transition-colors duration-300">
                                {post.title}
                            </CardTitle>
                            <CardDescription className="text-zinc-600 shrink-0">
                                {post.date}
                            </CardDescription>
                        </div>
                        <div>
                            <CardDescription className="text-xs text-zinc-500 text-justify">
                                {post.description}
                            </CardDescription>
                            {post.tags.length > 0 && (
                                <div className="flex gap-2 mt-2 flex-wrap">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </CardContent>
                </div>
            </Card>
        </Link>
    );
}
