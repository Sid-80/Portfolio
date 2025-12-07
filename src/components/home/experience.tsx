import React from "react";
import { Timeline } from "../ui/timeline";

export default function Experience() {
  const data = [
    {
      title: "Associate Software Engineer",
      company: "ElasticRun",
      duration: "July 2025 – Present",
      content: (
        <div>
          <p className="mb-4 text-xs md:text-sm text-neutral-300">
            Integrated Dynamic GenAI into Frappe and developed multi-agent
            automation systems.
          </p>

          <ul className="mb-6 space-y-2 text-xs md:text-sm text-neutral-400">
            <li>
              • Added GenAI support in Frappe to create & configure AI agents
              directly from the UI.
            </li>
            <li>
              • Built a multi-agent chatbot using concurrent orchestration
              (Supervisor, Login Agent, Image Analysis Agent, AE–AR Agent).
            </li>
            <li>
              • Developed an SRE Agent for automated alert processing with K8s
              insights, PromQL analytics, and root-cause summaries.
            </li>
          </ul>
        </div>
      ),
    },

    {
      title: "Software Engineer Intern",
      company: "ElasticRun",
      duration: "June 2025 – July 2025",
      content: (
        <div>
          <p className="mb-4 text-xs md:text-sm text-neutral-300">
            Built automation workflows leveraging modern multi-agent
            architectures.
          </p>

          <ul className="mb-6 space-y-2 text-xs md:text-sm text-neutral-400">
            <li>
              • Worked with LangGraph, CrewAI, Agno, and Browser Use to build
              automation pipelines.
            </li>
            <li>
              • Explored concurrent, sequential, and blackboard agent
              orchestration models.
            </li>
            <li>
              • Developed an AI Voice Agent with reasoning + STT + TTS
              integrations.
            </li>
            <li>
              • Implemented browser-based automation using Browser Use Agent.
            </li>
          </ul>
        </div>
      ),
    },

    {
      title: "SDE-1 Intern",
      company: "RapydLaunch",
      duration: "Sept 2024 – May 2025",
      content: (
        <div>
          <p className="mb-4 text-xs md:text-sm text-neutral-300">
            Led two international products as Project Lead using scalable
            architecture & DevOps practices.
          </p>

          <ul className="space-y-2 text-xs md:text-sm text-neutral-400 mb-6">
            <li>
              • Improved SEO and performance using Next.js SSR, increasing
              organic traffic.
            </li>
            <li>
              • Designed microservice backend using RabbitMQ for async
              communication.
            </li>
            <li>• Deployed services on AWS EC2 using Docker.</li>
            <li>
              • Built CI/CD workflows with GitHub Actions for automated
              deployments.
            </li>
          </ul>
        </div>
      ),
    },

    {
      title: "Full Stack Developer (Freelance)",
      company: "Self-Employed",
      duration: "Dec 2024 – Present",
      content: (
        <div>
          <p className="mb-4 text-xs md:text-sm text-neutral-300">
            Working with clients to build scalable backend microservices & API
            architectures.
          </p>

          <ul className="space-y-2 text-xs md:text-sm text-neutral-400 mb-6">
            <li>
              • Built Node.js microservices with Express, Docker, and RabbitMQ.
            </li>
            <li>• Managed databases using MongoDB and PostgreSQL.</li>
            <li>
              • Collaborated with clients on requirements, deadlines, and
              delivery.
            </li>
          </ul>
        </div>
      ),
    },

    {
      title: "Frontend Developer Intern",
      company: "TrainingMug",
      duration: "May 2023 – Feb 2024",
      content: (
        <div>
          <p className="mb-4 text-xs md:text-sm text-neutral-300">
            Developed responsive and performant frontend modules for enterprise
            dashboards.
          </p>

          <ul className="space-y-2 text-xs md:text-sm text-neutral-400">
            <li>
              • Built admin panel components using Next.js, TypeScript, and
              TailwindCSS.
            </li>
            <li>
              • Integrated APIs and implemented CRUD operations for multiple
              features.
            </li>
            <li>
              • Improved UI performance and ensured cross-browser compatibility.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div id="exp" className=" relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
