import type { BlogFrontmatter, BlogListItem, BlogPostModule, MDXProps } from "@/types";
import type { ComponentType } from "react";

/**
 * Eager import: loads frontmatter from every .mdx at build time.
 *
 * NOTE: Vite emits an informational warning because the same .mdx files are
 * also lazily imported below. This is expected and harmless — it just means
 * post modules won't be split into separate chunks while they are also
 * eagerly loaded here. For a personal blog this has negligible impact.
 * The warning naturally disappears as the blog grows and you move to
 * pagination or other strategies that don't eagerly load every post.
 */
const postModulesEager = import.meta.glob<{ frontmatter: Record<string, unknown> }>(
  "../data/blogs/*.mdx",
  { eager: true, import: "frontmatter" }
);

// Lazy import: loads the full MDX module (component + frontmatter) on demand
const postModulesLazy = import.meta.glob<BlogPostModule>(
  "../data/blogs/*.mdx"
);

function slugFromPath(path: string): string {
  const filename = path.split("/").pop() ?? "";
  return filename.replace(/\.mdx$/, "");
}

/**
 * Validates and normalizes raw frontmatter into a typed BlogFrontmatter.
 * Returns null if required fields are missing or invalid.
 */
function parseFrontmatter(raw: unknown, slug: string): BlogFrontmatter | null {
  if (!raw || typeof raw !== "object") {
    if (import.meta.env.DEV) {
      console.warn(`[blog] "${slug}": frontmatter is missing or not an object`);
    }
    return null;
  }

  const fm = raw as Record<string, unknown>;

  // Required: title
  if (typeof fm.title !== "string" || fm.title.trim() === "") {
    if (import.meta.env.DEV) {
      console.warn(`[blog] "${slug}": missing or invalid "title"`);
    }
    return null;
  }

  // Required: description
  if (typeof fm.description !== "string" || fm.description.trim() === "") {
    if (import.meta.env.DEV) {
      console.warn(`[blog] "${slug}": missing or invalid "description"`);
    }
    return null;
  }

  // Required: date (must be parseable)
  if (typeof fm.date !== "string" || Number.isNaN(new Date(fm.date).getTime())) {
    if (import.meta.env.DEV) {
      console.warn(`[blog] "${slug}": missing or invalid "date"`);
    }
    return null;
  }

  // Normalize tags: default to empty array, coerce to string[]
  let tags: string[] = [];
  if (Array.isArray(fm.tags)) {
    tags = fm.tags.filter((t): t is string => typeof t === "string");
  }

  // Normalize published: default to false
  const published = fm.published === true;

  // Optional: coverImage
  const coverImage =
    typeof fm.coverImage === "string" && fm.coverImage.trim() !== ""
      ? fm.coverImage
      : undefined;

  // Optional: coAuthors — normalize to string[] or undefined
  let coAuthors: string[] | undefined;
  if (Array.isArray(fm.coAuthors)) {
    const filtered = fm.coAuthors.filter(
      (a): a is string => typeof a === "string" && a.trim() !== ""
    );
    if (filtered.length > 0) {
      coAuthors = filtered;
    }
  }

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(fm.date as string));

  return {
    title: fm.title,
    description: fm.description,
    date: formattedDate,
    rawDate: fm.date as string,
    tags,
    published,
    coverImage,
    coAuthors,
  };
}

export function getAllPosts(): BlogListItem[] {
  const posts: BlogListItem[] = [];

  for (const [path, raw] of Object.entries(postModulesEager)) {
    const slug = slugFromPath(path);
    const fm = parseFrontmatter(raw, slug);
    if (!fm || !fm.published) continue;

    posts.push({ slug, ...fm });
  }

  return posts.sort(
    (a, b) => new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime()
  );
}

/**
 * Returns frontmatter for a single post by slug without loading the full module.
 * Useful for setting document title/meta before the MDX component loads.
 */
export function getPostMetaBySlug(slug: string): BlogFrontmatter | null {
  for (const [path, raw] of Object.entries(postModulesEager)) {
    if (slugFromPath(path) === slug) {
      return parseFrontmatter(raw, slug);
    }
  }
  return null;
}

/**
 * Lazily loads the full MDX post module by slug.
 * Returns the React component and validated frontmatter, or null if not found.
 */
export async function getPostBySlug(
  slug: string
): Promise<{ frontmatter: BlogFrontmatter; Content: ComponentType<MDXProps> } | null> {
  for (const [path, loader] of Object.entries(postModulesLazy)) {
    if (slugFromPath(path) === slug) {
      const mod = await loader();
      const fm = parseFrontmatter(mod.frontmatter, slug);
      if (!fm) return null;
      return {
        frontmatter: fm,
        Content: mod.default,
      };
    }
  }
  return null;
}
