"use client"

import type React from "react"
import { useRef } from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { experienceData } from "@/constants/experience-section-data"
import { motion } from "framer-motion"
import { Badge } from "../ui/badge"
import { Calendar } from "lucide-react"

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex items-center lg:items-start justify-center flex-col my-16 px-4"
      ref={containerRef}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-2">Experience</h2>
        <div className="h-1 w-1/2 bg-gradient-to-r from-green-400 to-transparent rounded-full"></div>
      </motion.div>

      <div className="flex flex-col w-full gap-6 my-8">
        {experienceData?.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="w-full overflow-hidden border-l-4 border-l-green-400 hover:shadow-lg hover:shadow-green-400/10 transition-all duration-300">
              <CardHeader className="flex items-start justify-center w-full space-y-6 p-6">
                <CardTitle className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-2xl text-zinc-800 dark:text-zinc-100 font-bold">{experience.title}</span>
                    <div className="flex flex-wrap gap-2 items-center">
                      <Badge variant="outline" className="bg-green-400/10 text-green-400 border-green-400/20">
                        {experience.role}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    {experience.date}
                  </div>
                </CardTitle>
                <CardDescription className="dark:text-zinc-300 text-zinc-600 leading-relaxed">
                  {experience.description}
                </CardDescription>
                {experience.skills && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-zinc-100 dark:bg-zinc-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

