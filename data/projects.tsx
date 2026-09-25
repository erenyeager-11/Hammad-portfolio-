import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiCss3,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiVercel,
} from "react-icons/si";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  html: { title: "HTML", bg: "black", fg: "white", icon: <SiHtml5 /> },
  css: { title: "CSS", bg: "black", fg: "white", icon: <SiCss3 /> },
  js: { title: "JavaScript", bg: "black", fg: "white", icon: <SiJavascript /> },
  react: { title: "React.js", bg: "black", fg: "white", icon: <RiReactjsFill /> },
  next: { title: "Next.js", bg: "black", fg: "white", icon: <RiNextjsFill /> },
  figma: { title: "Figma", bg: "black", fg: "white", icon: <SiFigma /> },
  git: { title: "Git", bg: "black", fg: "white", icon: <SiGit /> },
  github: { title: "GitHub", bg: "black", fg: "white", icon: <SiGithub /> },
  vercel: { title: "Vercel", bg: "black", fg: "white", icon: <SiVercel /> },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "mindgame",
    category: "Mini-games",
    title: "Mind Game",
    src: `${BASE_PATH}/mindgame/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.html, PROJECT_SKILLS.css],
      backend: [],
    },
    live: "https://mind-games-seven.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Brain-twisting mini-games for the minutes between grind sessions
          </TypographyP>
          <TypographyP className="font-mono">
            Mind Game is a collection of quick, brain-twisting mini-games
            built to fill the gaps between deep-work sessions. Keeps the mind
            sharp and the reflexes faster, one round at a time.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "studytracker",
    category: "Productivity",
    title: "Study Tracker",
    src: `${BASE_PATH}/studytracker/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.html, PROJECT_SKILLS.css],
      backend: [],
    },
    live: "https://focus-sigma-ruby.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A focus dashboard for deep-work sessions
          </TypographyP>
          <TypographyP className="font-mono">
            Track sessions and lock in — no distractions, no excuses. Study
            Tracker is a lightweight dashboard for logging focus time and
            staying honest about where the hours actually go.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "chess",
    category: "Game engine",
    title: "Chess",
    src: `${BASE_PATH}/chess/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.html, PROJECT_SKILLS.css],
      backend: [],
    },
    live: "https://chess-hub-rosy.vercel.app",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Fully playable chess, built from scratch
          </TypographyP>
          <TypographyP className="font-mono">
            A complete chess implementation with full move validation, a
            clean board UI, and smooth piece animations — no game library,
            just the rules written out in JavaScript.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "proposalletters",
    category: "Templates",
    title: "Proposal Letters",
    src: `${BASE_PATH}/proposalletters/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.figma],
      backend: [],
    },
    live: "https://for-you-gray-two.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Letter templates for the moments that matter most
          </TypographyP>
          <TypographyP className="font-mono">
            A small collection of beautifully designed letter templates,
            built for the messages people actually want to get right.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "linkhub",
    category: "Link-in-bio",
    title: "Link Hub",
    src: `${BASE_PATH}/linkhub/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.github],
      backend: [],
    },
    live: "https://lakshya-og.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Everything in one place, nothing in the way
          </TypographyP>
          <TypographyP className="font-mono">
            A clean personal link-in-bio page — every profile and project
            link a visitor needs, laid out with zero clutter.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "alquran",
    category: "Reading app",
    title: "Al-Qur'an",
    src: `${BASE_PATH}/alquran/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.vercel, PROJECT_SKILLS.css],
      backend: [],
    },
    live: "https://al-qur-an-three.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A clean digital Qur'an, built around the text
          </TypographyP>
          <TypographyP className="font-mono">
            Al-Qur'an is a digital reading app with careful typography and a
            reading experience designed to honour the text rather than
            distract from it.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
];
export default projects;
