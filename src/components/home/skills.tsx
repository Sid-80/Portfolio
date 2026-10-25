import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({
  weight: ["500", "600"],
  subsets: ["latin"],
});

type Skill = {
  name: string;
  mono: string;
  href: string;
  // Used in a shipped project or role
  used?: boolean;
};

type SkillGroup = {
  title: string;
  blurb: string;
  focus?: boolean;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Gen AI & Agents",
    blurb:
      "Agent orchestration (concurrent, sequential, blackboard), voice and browser agents, and LLM features in production.",
    focus: true,
    skills: [
      { name: "LangChain", mono: "LC", href: "https://www.langchain.com/", used: true },
      { name: "LangGraph", mono: "LG", href: "https://www.langchain.com/langgraph", used: true },
      { name: "CrewAI", mono: "CR", href: "https://www.crewai.com/", used: true },
      { name: "Agno", mono: "AG", href: "https://docs.agno.com/", used: true },
      { name: "Browser Use", mono: "BU", href: "https://docs.browser-use.com/introduction", used: true },
      { name: "Gemini", mono: "GE", href: "https://ai.google.dev/", used: true },
      { name: "OpenAI", mono: "OA", href: "https://openai.com/" },
      { name: "n8n", mono: "N8", href: "https://n8n.io/" },
      { name: "Azure AI Foundry", mono: "AZ", href: "https://ai.azure.com/" },
      { name: "Vertex AI", mono: "VX", href: "https://cloud.google.com/vertex-ai" },
    ],
  },
  {
    title: "Frontend",
    blurb: "SSR-first, typed, component-driven interfaces with an eye for performance and SEO.",
    skills: [
      { name: "Next.js", mono: "NX", href: "https://nextjs.org", used: true },
      { name: "React", mono: "RE", href: "https://react.dev" },
      { name: "TypeScript", mono: "TS", href: "https://www.typescriptlang.org", used: true },
      { name: "Tailwind CSS", mono: "TW", href: "https://tailwindcss.com", used: true },
      { name: "Redux", mono: "RX", href: "https://redux.js.org/" },
      { name: "shadcn/ui", mono: "SH", href: "https://ui.shadcn.com/" },
    ],
  },
  {
    title: "Backend",
    blurb: "REST APIs and event-driven microservices.",
    skills: [
      { name: "Node.js", mono: "NO", href: "https://nodejs.org/en", used: true },
      { name: "RabbitMQ", mono: "RQ", href: "https://www.rabbitmq.com/", used: true },
      { name: "FastAPI", mono: "FA", href: "https://fastapi.tiangolo.com/" },
      { name: "Flask", mono: "FL", href: "https://flask.palletsprojects.com/en/stable/" },
    ],
  },
  {
    title: "Databases",
    blurb: "Relational, document and caching layers.",
    skills: [
      { name: "MongoDB", mono: "MG", href: "https://www.mongodb.com/", used: true },
      { name: "PostgreSQL", mono: "PG", href: "https://www.postgresql.org/", used: true },
      { name: "Redis", mono: "RD", href: "https://redis.io/", used: true },
      { name: "Supabase", mono: "SB", href: "https://supabase.com/", used: true },
      { name: "Firebase", mono: "FB", href: "https://firebase.google.com/" },
    ],
  },
  {
    title: "DevOps & Cloud",
    blurb: "Containerised deploys and automated CI/CD.",
    skills: [
      { name: "Docker", mono: "DK", href: "https://www.docker.com/", used: true },
      { name: "AWS EC2", mono: "AW", href: "https://aws.amazon.com/ec2/", used: true },
      { name: "GitHub Actions", mono: "GA", href: "https://github.com/features/actions", used: true },
      { name: "Git", mono: "GT", href: "https://git-scm.com/" },
      { name: "GitHub", mono: "GH", href: "https://github.com/", used: true },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#1a1a1a] text-[#d6d0c6] w-full px-6 py-24 box-border"
    >
      <div className="max-w-[1120px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-3.5 max-w-[640px]">
          <h2 className="m-0 text-4xl md:text-[52px] font-medium text-[#e9dcc6] tracking-[-0.5px]">
            Skills
          </h2>
          <p className="m-0 text-base leading-[1.6] text-[#a9a398]">
            Full-stack foundations with a Gen AI edge. Grouped by where they sit
            in the stack, so you can see the whole picture at a glance.
          </p>
          <div className="flex items-center gap-2.5 text-[13px] text-[#a9a398]">
            <span aria-hidden="true" className="size-2 rounded-full bg-[#7cc0b4]" />
            <span>Used in a shipped project or role</span>
          </div>
        </div>

        <div className="flex flex-col">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="grid grid-cols-1 gap-[18px] md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-12 py-9 border-t border-[#2f2f2f]"
            >
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-3.5">
                  <span className={`${mono.className} text-[13px] text-[#7cc0b4]`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="m-0 text-[22px] font-semibold text-[#e9dcc6]">
                    {group.title}
                  </h3>
                </div>
                <p className="m-0 text-sm leading-[1.6] text-[#a9a398] max-w-[320px]">
                  {group.blurb}
                </p>
                {group.focus && (
                  <span className="self-start mt-1 px-3 py-1.5 rounded-full bg-[#2f5a57] text-[#e9f3f1] text-xs font-semibold tracking-[0.4px]">
                    Current focus
                  </span>
                )}
              </div>

              <ul className="list-none m-0 p-0 flex flex-wrap gap-2.5 content-start">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <a
                      href={skill.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-target inline-flex items-center gap-2.5 min-h-11 pl-[7px] pr-3.5 rounded-xl text-sm font-medium box-border bg-[#222222] border border-[#333333] text-[#ece4d6] transition-all duration-200 hover:bg-[#2a2a2a] hover:border-[#7cc0b4] hover:text-white hover:-translate-y-0.5"
                    >
                      <span
                        aria-hidden="true"
                        className={`${mono.className} size-[30px] rounded-lg bg-[#1f1f1f] text-[#e9dcc6] inline-flex items-center justify-center text-[11px] font-semibold`}
                      >
                        {skill.mono}
                      </span>
                      <span>{skill.name}</span>
                      {skill.used && (
                        <span
                          role="img"
                          aria-label="used in a shipped project"
                          className="size-[7px] rounded-full bg-[#7cc0b4]"
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
