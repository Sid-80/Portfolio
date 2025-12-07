"use client";
import TargetCursor from "@/components/ui/target-cursor";
import { NavbarHero } from "@/components/home/navbar";
import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Experience from "@/components/home/experience";
import { Work } from "@/components/home/work";
import Skills from "@/components/home/skills";
import Footer from "@/components/home/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" bg-[#F5EFE6]">
      <NavbarHero />

      <Hero />

      <About />

      <Experience />

      <Work />

      <Skills />

      <Footer />

      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
    </div>
  );
}
