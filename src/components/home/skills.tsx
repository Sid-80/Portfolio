import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFastapi
} from "react-icons/si";
import LogoLoop from "../ui/logo-loop";
import { BiLogoFlask } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaNode, FaDocker, FaGit, FaGithub } from "react-icons/fa";
import { SiRedux, SiShadcnui  } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";

const techLogos = [
  { node: <SiReact color="#ffffff" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs color="#ffffff" />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript color="#ffffff" />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss color="#ffffff" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiFastapi color="#ffffff" />,
    title: "FastAPI",
    href: "https://fastapi.tiangolo.com/",
  },
  {
    node: <BiLogoFlask color="#ffffff" />,
    title: "Flask",
    href: "https://flask.palletsprojects.com/en/stable/",
  },
  {
    node: <DiRedis color="#ffffff" />,
    title: "Redis",
    href: "https://redis.io/",
  },
  {
    node: <FaNode color="#ffffff" />,
    title: "Node.js",
    href: "https://nodejs.org/en",
  },
  {
    node: <SiRedux color="#ffffff" />,
    title: "Redux",
    href: "https://redux.js.org/",
  },
  {
    node: <BiLogoPostgresql color="#ffffff" />,
    title: "Postgresql",
    href: "https://www.postgresql.org/",
  },
  {
    node: <DiMongodb color="#ffffff" />,
    title: "MongoDB",
    href: "https://www.mongodb.com/",
  },
  {
    node: <IoLogoFirebase color="#ffffff" />,
    title: "Firebase",
    href: "https://firebase.google.com/",
  },
  {
    node: <FaDocker color="#ffffff" />,
    title: "Docker",
    href: "https://www.docker.com/",
  },
  {
    node: <FaGit color="#ffffff" />,
    title: "Git",
    href: "https://git-scm.com/",
  },
  {
    node: <FaGithub color="#ffffff" />,
    title: "Github",
    href: "https://github.com/",
  },
  {
    node: <SiShadcnui  color="#ffffff" />,
    title: "Shadcn-ui",
    href: "https://shadcnui.com/",
  },
];

const aiLogos = [
  {
    node: <div className=" text-xl animate-pulse text-white">CrewAI</div>,
    title: "CrewAI",
    href: "https://www.crewai.com/",
  },
  {
    node: <div className=" text-xl animate-pulse text-white">Langchain</div>,
    title: "Langchain",
    href: "https://www.langchain.com/",
  },
  {
    node: <div className=" text-xl animate-pulse text-white">Langgraph</div>,
    title: "Langgraph",
    href: "https://www.langchain.com/langgraph",
  },
  {
    node: <div className=" text-xl animate-pulse text-white">Agno</div>,
    title: "Agno",
    href: "https://docs.agno.com/",
  },
  {
    node: <div className=" text-xl animate-pulse text-white">OpenAI</div>,
    title: "OpenAI",
    href: "https://openai.com/",
  },
  {
    node: <div className=" text-xl animate-pulse text-white">Browser Use</div>,
    title: "Browser Use",
    href: "https://docs.browser-use.com/introduction",
  },
  {
    node: <div className=" text-xl animate-pulse text-white">N8N</div>,
    title: "N8N",
    href: "https://n8n.io/",
  },
  {
    node: <div className=" text-xl animate-pulse text-white">Azure AI Foundry</div>,
    title: "Azure AI Foundry",
    href: "https://ai.azure.com/",
  },
  {
    node: <div className=" text-xl animate-pulse text-white">GCP Vertex AI</div>,
    title: "GCP Vertex AI",
    href: "https://cloud.google.com/vertex-ai",
  },
];

export default function Skills() {
  return (
    <div id="skills" className="bg-[#191919] h-full w-full py-20">
      <h2 className="max-w-7xl text-[#DFD0B8] pl-4 mx-auto text-xl md:text-5xl font-bold">
        Skills
      </h2>

      <div className="mx-auto relative z-40  py-10 pt-20 max-w-5xl gap-10 flex flex-col items-center justify-center">
        <LogoLoop
          logos={techLogos}
          speed={80}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#191919"
          ariaLabel="Skills"
          className="cursor-target"
        />
        <LogoLoop
          logos={aiLogos}
          speed={80}
          direction="right"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#191919"
          className="cursor-target"
          ariaLabel="Skills"
        />
      </div>
    </div>
  );
}
