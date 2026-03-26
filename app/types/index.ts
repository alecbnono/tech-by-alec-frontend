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
