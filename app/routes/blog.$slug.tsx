import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { getPostBySlug, getPostMetaBySlug } from "@/lib/blog";
import type { BlogFrontmatter, MDXProps } from "@/types";
import type { ComponentType } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { mdxComponents } from "@/components/mdx";
import { LuCalendar } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";

export function meta() {
    return [
        { title: "Blog Post | Tech by Alec" },
    ];
}

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const [Content, setContent] = useState<ComponentType<MDXProps> | null>(null);
    const [frontmatter, setFrontmatter] = useState<BlogFrontmatter | null>(null);
    const [notFound, setNotFound] = useState(false);

    // Reset state when slug changes to prevent stale content
    useEffect(() => {
        setContent(null);
        setFrontmatter(null);
        setNotFound(false);

        if (!slug) {
            setNotFound(true);
            return;
        }

        // Set document title immediately from eager metadata
        const meta = getPostMetaBySlug(slug);
        if (meta) {
            document.title = `${meta.title} | Tech by Alec`;

            // Update or create description meta tag
            let descTag = document.querySelector('meta[name="description"]');
            if (!descTag) {
                descTag = document.createElement("meta");
                descTag.setAttribute("name", "description");
                document.head.appendChild(descTag);
            }
            descTag.setAttribute("content", meta.description);
        }

        let cancelled = false;

        getPostBySlug(slug).then((result) => {
            if (cancelled) return;
            if (!result) {
                setNotFound(true);
                document.title = "Post Not Found | Tech by Alec";
                return;
            }
            setFrontmatter(result.frontmatter);
            setContent(() => result.Content);
        });

        return () => {
            cancelled = true;
        };
    }, [slug]);

    if (notFound) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8">
                <h1 className="text-9xl font-bold text-zinc-200">404</h1>
                <h2 className="text-3xl font-semibold text-zinc-200">Post Not Found</h2>
                <p className="text-zinc-400">This blog post doesn't exist.</p>
                <Link to="/blog">
                    <Button className="border-2 border-zinc-600 p-3 bg-zinc-800/80 text-zinc-300 hover:bg-indigo-600 hover:border-indigo-600 hover:text-zinc-100 transition-colors duration-300 cursor-pointer">
                        <FaArrowLeft /> Back to Blog
                    </Button>
                </Link>
            </div>
        );
    }

    if (!Content || !frontmatter) {
        return (
            <div className="flex justify-center py-20">
                <p className="text-zinc-400">Loading...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-8 rounded-2xl border border-zinc-700/60 bg-slate-950/45 backdrop-blur-md px-4 py-6 md:px-8 md:py-10">
            <Link to="/blog" className="self-start">
                <Button className="border-2 border-zinc-600 p-3 bg-zinc-800/80 text-zinc-300 hover:bg-indigo-600 hover:border-indigo-600 hover:text-zinc-100 transition-colors duration-300 cursor-pointer">
                    <FaArrowLeft /> Back to Blog
                </Button>
            </Link>

            {frontmatter.coverImage && (
                <img
                    src={frontmatter.coverImage}
                    alt={frontmatter.title}
                    className="w-full aspect-[3/1] object-cover rounded-xl"
                />
            )}

            <header className="flex flex-col gap-3">
                <h1 className="text-3xl md:text-6xl text-left font-bold text-zinc-100">{frontmatter.title}</h1>
                <div className="flex items-center gap-2 text-zinc-400">
                    <LuCalendar className="mb-1" />
                    <p className="text-sm">
                        {frontmatter.date}
                    </p>
                </div>
                {frontmatter.tags.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                        {frontmatter.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                <div>
                    {frontmatter.coAuthors && frontmatter.coAuthors.length > 0 && (
                        <div className="flex items-center gap-2">
                            <LuUsers className="text-zinc-400" />
                            <p className="text-sm text-zinc-400 text-left">
                                {"Co-authored with "}
                                <span className="text-zinc-200 font-medium">
                                    {frontmatter.coAuthors.length === 1
                                        ? frontmatter.coAuthors[0]
                                        : frontmatter.coAuthors.length === 2
                                            ? `${frontmatter.coAuthors[0]} and ${frontmatter.coAuthors[1]}`
                                            : frontmatter.coAuthors.slice(0, -1).join(", ") +
                                            ", and " +
                                            frontmatter.coAuthors[frontmatter.coAuthors.length - 1]}
                                </span>
                            </p>
                        </div>
                    )}
                </div>

            </header>

            <article className="blog-content">
                <Content components={mdxComponents} />
            </article>
        </div>
    );
}
