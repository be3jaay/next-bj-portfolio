"use client";

import React from "react";
import { HeroSection } from "@/components/section/hero-section";
import { ProjectSection } from "@/components/section/project-section";
import { ExperienceSection } from "@/components/section/experience-section";
import { ContactSection } from "@/components/section/contact-section";

export default function Home() {
  return (
    <div className="bg-zinc-900 w-full h-full p-4 md:px-16 lg:px-[35rem]">
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
