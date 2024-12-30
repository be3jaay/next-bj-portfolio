"use client";

import React from "react";
import { HeroSection } from "@/components/section/hero-section";
import { ProjectSection } from "@/components/section/project-section";
import { ExperienceSection } from "@/components/section/experience-section";
import { ContactSection } from "@/components/section/contact-section";

export default function Home() {
  return (
    <div className="bg-zinc-900 w-full h-full p-4 sm:p-6 md:px-8 lg:px-16 xl:max-w-4xl xl:mx-auto">
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </div>

  );
}
