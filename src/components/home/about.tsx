"use client";

import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        clearProps: "opacity,transform",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true, // only animate once
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="max-w-3xl mx-auto py-12 px-4"
      id="about"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-6 about-item"
      >
        About Me
      </motion.h2>

      <p className="text-lg leading-relaxed mb-4 about-item">
        I’m a passionate <strong>Full Stack Developer</strong> and an emerging{" "}
        <strong>AI engineer</strong>, currently working as{" "}
        <strong>Associate Software Engineer</strong> at ElasticRun.
        I love building scalable applications that combine clean engineering,
        intuitive UI, and the power of <strong>Generative AI</strong>.
      </p>

      <p className="text-lg leading-relaxed mb-4 about-item">
        Over the years, I’ve worked on diverse projects—ranging from{" "}
        <strong>AI-driven news analytics, event-cause extraction,
        resume screening systems, financial workflow automation,</strong> to{" "}
        <strong>video streaming features</strong> and{" "}
        <strong>AI-integrated marketplaces</strong>.
      </p>

      <p className="text-lg leading-relaxed mb-4 about-item">
        I’ve always believed in learning by building. From converting deep
        learning pipelines to PyTorch, integrating PayPal payments, crafting
        dynamic editors with Excalidraw, to designing multi-agent workflows—
        every project has strengthened my ability to engineer real-world
        solutions.
      </p>

      <p className="text-lg leading-relaxed mb-4 about-item">
        I’m an open-source contributor with 100+ merged PRs and was ranked{" "}
        <strong>Top 10 in GirlScript Summer of Code</strong>. I’ve also held
        leadership roles as <strong>GDSC Web Lead</strong> and{" "}
        <strong>Vice Chairman at CESA</strong>, where I mentored teams and led
        large-scale technical initiatives.
      </p>

      <p className="text-lg leading-relaxed about-item">
        When I’m not coding, you’ll find me reading about AI systems, writing
        tech blogs, experimenting with design, or playing basketball. I’m always
        excited to build impactful products and collaborate on innovative ideas.
      </p>
    </section>
  );
}
