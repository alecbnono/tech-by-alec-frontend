import type { ComponentType } from "react";

export interface ExperienceEntry {
  dateStart: string;
  dateEnd: string;
  title: string;
  description: string;
  image: string;
}

export interface TechStackItem {
  icon: ComponentType<{ className?: string }>;
  title: string;
}

export interface ProjectEntry {
  date: string;
  title: string;
  description: string;
  image: string;
  code: string;
  link: string;
}

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  rawDate: string;
  tags: string[];
  coverImage?: string;
  coAuthors?: string[];
  published: boolean;
}

export interface BlogListItem extends BlogFrontmatter {
  slug: string;
}

export interface MDXProps {
  components?: Record<string, ComponentType<any>>;
}

export interface BlogPostModule {
  default: ComponentType<MDXProps>;
  frontmatter: BlogFrontmatter;
}
