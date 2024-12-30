"use client";

import React from "react";
import Image from "next/image";
import bj from "../../../public/image/bj.jpg";
import { LinkPreview } from "../ui/link-preview";
import { Button } from "../ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { techStack } from "@/constants/hero-section-data";
import { MdOutlineFileDownload } from "react-icons/md";

export const HeroSection: React.FC = () => {
  return (
    <div className="w-full lg:h-screen flex items-center lg:items-start justify-center flex-col">
      <div className="w-full gap-4 flex items-center lg:items-start lg:justify-start flex-col lg:flex-row">
        <LinkPreview
          url="https://github.com/be3jaay"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          <Image
            src={bj}
            alt="Brian James"
            width={100}
            height={100}
            className="rounded-full border-2 border-green-400 p-1"
          />
        </LinkPreview>
        <div className="space-y-3 flex items-start flex-col">
          <div className="text-3xl md:text-4xl font-bold text-zinc-200">
            Ciao, I&apos;m Brian James
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <div className="text-zinc-400">
              Available for work (brianjamesdlcz@gmail.com)
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 w-full space-y-6 flex items-center flex-col lg:items-start lg:justify-start">
        <div className="font-extralight text-base md:text-xl dark:text-neutral-200 text-center lg:text-start">
          You can call me <strong>(BJ)</strong> your friendly neighborhood <strong>Software Engineer </strong>that enjoy turning coffee into code
          , and I&apos;m always looking for the next challenge to enhance my skills.
        </div>
        <div className="flex items-center gap-2">
          <a href="/brianResume.pdf" download="BrianResume.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="bg-black dark:bg-white rounded-full w-fit px-4 py-2">
              Download Resume
              <MdOutlineFileDownload />
            </Button>
          </a>
          <Button
            className="bg-transparent text-white rounded-full w-fit px-4 py-2"
            variant={"link"}
            onClick={() => window.open("https://www.linkedin.com/in/this-is-brian/")}
          >
            Visit LinkedIn
          </Button>
        </div>
      </div>

      <div className="w-full flex items-center flex-col lg:grid lg:grid-cols-4 lg:grid-row-dense auto-cols-max lg:grid-rows-auto gap-2 mt-12">
        {techStack?.map((item, index) => (
          <Card className="w-full" key={index}>
            <CardHeader className="flex items-center justify-center">
              <CardTitle className="text-3xl">
                {item.icon}
              </CardTitle>
              <CardDescription className="text-lg" >{item.title}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div >
  )
}