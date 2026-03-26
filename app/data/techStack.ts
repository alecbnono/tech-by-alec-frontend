import type { TechStackItem } from "@/types";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { FaSquareJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaCopyright } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { TbBrandMysql } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { FaDocker } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const techStack: TechStackItem[] = [
  {
    icon: FaHtml5,
    title: "HTML",
  },
  {
    icon: FaCss3Alt,
    title: "CSS",
  },
  {
    icon: FaSquareJs,
    title: "JavaScript",
  },
  {
    icon: FaReact,
    title: "React",
  },
  {
    icon: RiTailwindCssFill,
    title: "Tailwind",
  },
  {
    icon: SiExpress,
    title: "Express.js",
  },
  {
    icon: SiNextdotjs,
    title: "Next.js",
  },
  {
    icon: FaCopyright,
    title: "C",
  },
  {
    icon: FaPython,
    title: "Python",
  },
  {
    icon: FaJava,
    title: "Java",
  },
  {
    icon: TbBrandMysql,
    title: "SQL",
  },
  {
    icon: FaGitAlt,
    title: "Git",
  },
  {
    icon: FaDocker,
    title: "Docker",
  },
  {
    icon: FaLinux,
    title: "Linux",
  },
];

export default techStack;
