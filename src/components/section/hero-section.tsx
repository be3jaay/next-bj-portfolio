"use client";

import React from "react";
import Image from "next/image";
import bj from "../../../public/image/bj.jpg";
import { LinkPreview } from "../ui/link-preview";
import { Button } from "../ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { techStack } from "@/constants/hero-section-data";
import { MdOutlineFileDownload } from "react-icons/md";
import { BoxReveal } from "../magicui/box-reveal";

import { motion } from "framer-motion";

// animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const HeroSection: React.FC = () => {
  return (
    <div className="w-full lg:h-screen flex items-center lg:items-start justify-center flex-col lg:-mt-24">
      <div className="w-full gap-4 flex items-center lg:items-start lg:justify-start flex-col lg:flex-row">
        <BoxReveal boxColor="#16db65" duration={0.5}>
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
        </BoxReveal>

        <BoxReveal boxColor="#16db65" duration={0.5}>
          <div className="space-y-3 flex items-center lg:items-start flex-col">
            <div className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-200">
              Ciao, I&apos;m Brian James
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <div className="text-zinc-600 dark:text-zinc-400">
                Available for work (brianjamesdlcz@gmail.com)
              </div>
            </div>
          </div>
        </BoxReveal>
      </div>

      <div className="mt-6 w-full space-y-6 flex items-center flex-col lg:items-start lg:justify-start">
        <BoxReveal boxColor="#16db65" duration={0.5}>
          <div className="font-extralight text-base md:text-xl dark:text-neutral-200 text-center lg:text-start">
            You can call me <strong>(BJ)</strong> your friendly neighborhood <strong>Software Engineer</strong> that enjoys turning coffee into code, and I&apos;m always looking for the next challenge to enhance my skills.
          </div>
        </BoxReveal>

        <BoxReveal boxColor="#16db65" duration={0.5}>
          <div className="flex items-center gap-2">
            <a href="/brianResume.pdf" download="BrianResume.pdf" target="_blank" rel="noopener noreferrer">
              <Button className="bg-zinc-900 text-white dark:text-zinc-900 dark:bg-white rounded-full w-fit px-4 py-2">
                Download Resume
                <MdOutlineFileDownload />
              </Button>
            </a>
            <Button
              className="bg-transparent text-zinc-900 dark:text-white rounded-full w-fit px-4 py-2"
              variant={"link"}
              onClick={() => window.open("https://www.linkedin.com/in/this-is-brian/")}
            >
              Visit LinkedIn
            </Button>
          </div>
        </BoxReveal>
      </div>
      <motion.div
        className="w-full flex items-center flex-col lg:grid lg:grid-cols-4 lg:grid-row-dense auto-cols-max lg:grid-rows-auto gap-2 mt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
  {techStack?.map((item, index) => (
    <motion.div key={index} variants={itemVariants} className="w-full">
      <Card className="w-full">
        <CardHeader className="w-full flex items-center justify-center">
          <CardTitle className="text-3xl">{item.icon}</CardTitle>
          <CardDescription className="text-lg">{item.title}</CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  ))}
</motion.div>
    </div>
  );
};
