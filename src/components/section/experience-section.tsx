"use client";

import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { experienceData } from "@/constants/experience-section-data";

export const ExperienceSection: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center lg:items-start justify-center flex-col my-12">
      <div className="text-3xl md:text-4xl font-bold text-green-400">
        Experience
      </div>
      <div className="flex flex-col w-full gap-4 my-4">
        {experienceData?.map((experience, index) => (
          <Card className="w-full" key={index} >
            <CardHeader className="flex items-start justify-center w-full space-y-6">
              <CardTitle className="w-full flex items-start justify-between">
                <div className="flex flex-col gap-2">
                  <span className="text-2xl text-zinc-100">{experience.title}</span>
                  <span className="text-md text-zinc-400">{experience.role}</span>
                </div>
                <span className="text-sm text-zinc-400">{experience.date}</span>
              </CardTitle>
              <CardDescription className="text-white" >
                {experience.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}

      </div>
    </div >

  )
}