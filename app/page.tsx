"use client"
import About from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import ExperiencePage from "@/components/shared/ExperiencePage";
import Header from "@/components/shared/Header";
import HomePage from "@/components/shared/HomePage";
import Projects from "@/components/shared/Projects";
import RecentActivity from "@/components/shared/RecentActivity";
import Skills from "@/components/shared/Skills";
import { Experience, PageInfo, Project, Skill, Social } from "@/typing";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading,setIsLoading] = useState(false);

  const getData = async() => {
    setIsLoading(true);

    const res1 = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
    );
    const data1 = await res1.json();
    const exps: Experience[] = data1;
    setExps(exps);

    const res2 = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
    );
    const data2 = await res2.json();
    const PageInfos: PageInfo = data2;
    setPageInfo(PageInfos);

    const res3 = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
    );
    const data3 = await res3.json();
    const projects: Project[] = data3;
    setProjects(projects)


    const res4 = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`
    );
    const data4 = await res4.json();
    const skills: Skill[] = data4;
    setSkills(skills)

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`
    );
    const data = await res.json();
    const social: Social[] = data;
    setSocialLinks(social)

    setIsLoading(false);
  }

  useEffect(()=>{
    getData()
  },[])

  const [pageInfo,setPageInfo] = useState<PageInfo | null>(null);
  const [socialLinks,setSocialLinks] = useState<Social[]>([]);
  const [projects,setProjects] = useState<Project[]>([]);
  const [skills,setSkills] = useState<Skill[]>([]);
  const [exps,setExps] = useState<Experience[]>([]);

  if(isLoading) return 

  return (
    <div className="overflow-x-hidden overflow-y-scroll h-screen z-20 snap-y snap-mandatory scrollbar-hide sm:scrollbar sm:scrollbar-track-gray-400/20 sm:scrollbar-thumb-[#F7AB0A]/80">
      <Header socialLinks={socialLinks} />
      <section id="hero" className="snap-start">
        {pageInfo && <HomePage pageInfo={pageInfo} />}
      </section>
      <section id="about" className="snap-center">
        {pageInfo && <About pageInfo={pageInfo} />}
      </section>
      <section id="exp" className="snap-center">
        <ExperiencePage exps={exps} />
      </section>
      <section id="project" className="snap-center">
        <Projects projects={projects} />
      </section>
      <section id="skill" className="snap-center">
        <Skills skills={skills} />
      </section>
      <section id="contact" className="snap-center">
        <Contact socialLinks={socialLinks} />
      </section>
    </div>
  );
}
