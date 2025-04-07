"use client";

import React, { useEffect, useState } from "react";
import { HeroSection } from "@/components/section/hero-section";
import { ProjectSection } from "@/components/section/project-section";
import { ExperienceSection } from "@/components/section/experience-section";
import { ContactSection } from "@/components/section/contact-section";
import { Header } from "@/components/section/header";
import Loading  from "./loading";

export default function Home() {
  const [ spinner, setSpinner ] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 9000)
  }, []);

  if(spinner) return <Loading/>

  return (
    <div className="bg-white dark:bg-zinc-900 w-full h-full p-4 sm:p-6 md:px-8 lg:px-16 xl:max-w-4xl xl:mx-auto">
      <Header />
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </div>

  );
}
