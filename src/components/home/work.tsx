"use client";

import React from "react";
import { Card, Carousel } from "../ui/apple-cards-carousl";

export function Work() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div id="work" className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Artificial Intelligence",
    title: "Blox AI",
    src: "/bloxai.png",
    url: "https://blox-ai.vercel.app/",
    tags: ["Langchain.js", "Next.js", "Supabase", "TS", "MongoDB"]
  },
  {
    category: "Productivity",
    title: "Smart Briefs",
    url: "https://smartbreifs.vercel.app/",
    tags: ["Langchain.js", "Gemini", "Next.js", "Node.js", "MongoDB"],
    src: "/smart-briefs.png",
  },
  {
    category: "Product",
    title: "Git-re",
    url: "https://git-re.vercel.app/",
    tags: ["Next.js", "Github API", "Redis", "Langchain.js"],
    src: "/git-re.png",
  }
];
