import type { ComponentPropsWithoutRef } from "react";

function BlogImage(props: ComponentPropsWithoutRef<"img">) {
    return (
        <figure className="my-6">
            <img
                {...props}
                className="w-full rounded-xl"
                loading="lazy"
            />
            {props.alt && (
                <figcaption className="mt-2 text-center text-xs text-zinc-500">
                    {props.alt}
                </figcaption>
            )}
        </figure>
    );
}

function BlogLink(props: ComponentPropsWithoutRef<"a">) {
    const isExternal = props.href?.startsWith("http");
    return (
        <a
            {...props}
            className="text-indigo-400 underline underline-offset-2 hover:text-indigo-300 transition-colors duration-200"
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        />
    );
}

function BlogBlockquote(props: ComponentPropsWithoutRef<"blockquote">) {
    return (
        <blockquote
            {...props}
            className="border-l-4 border-indigo-600 pl-4 py-1 my-4 text-zinc-400 italic bg-zinc-900/50 rounded-r-lg"
        />
    );
}

function BlogPre(props: ComponentPropsWithoutRef<"pre">) {
    return (
        <pre
            {...props}
            className="my-4 p-4 bg-zinc-900 border border-zinc-700 rounded-xl overflow-x-auto text-sm"
        />
    );
}

function BlogCode(props: ComponentPropsWithoutRef<"code">) {
    // If inside a <pre>, render without inline styling
    const isBlock = typeof props.children === "string" && props.children.includes("\n");
    if (isBlock) {
        return <code {...props} className="text-zinc-200" />;
    }
    return (
        <code
            {...props}
            className="text-sm bg-zinc-800 text-indigo-300 px-1.5 py-0.5 rounded-md"
        />
    );
}

/**
 * Shared MDX component overrides.
 * Pass this to <Content components={mdxComponents} /> in the blog post route.
 */
export const mdxComponents = {
    img: BlogImage,
    a: BlogLink,
    blockquote: BlogBlockquote,
    pre: BlogPre,
    code: BlogCode,
};
