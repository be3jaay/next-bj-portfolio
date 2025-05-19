"use client"

import type React from "react"
import { useRef } from "react"
import { motion } from "framer-motion"
import { Badge } from "../ui/badge"
import { Building, Calendar } from "lucide-react"
import { experienceData } from "@/constants/experience-section-data"

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
        className="relative mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-2">Experience</h2>
        <div className="h-1 w-1/2 bg-gradient-to-r from-green-400 to-transparent rounded-full"></div>
      </motion.div>

      <div className="relative w-full max-w-5xl mx-auto">
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-green-400 via-green-400/50 to-transparent hidden md:block -translate-x-1/2"></div>

        {experienceData?.map((experience, index) => {
          const isEven = index % 2 === 0

          return (
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
              className={`flex flex-col md:flex-row items-center mb-12 md:mb-16 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-green-400 rounded-full z-10 hidden md:flex items-center justify-center">
                <div className="w-3 h-3 bg-white dark:bg-zinc-900 rounded-full"></div>
              </div>

              <div className={`md:w-1/2 flex ${isEven ? "md:justify-end" : "md:justify-start"} mb-4 md:mb-0`}>
                <div
                  className={`flex items-center bg-green-400/10 text-green-400 px-3 py-1.5 rounded-full text-sm font-medium
                    ${isEven ? "md:mr-8" : "md:ml-8"}`}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {experience.date}
                </div>
              </div>
              <div
                className={`md:w-1/2 bg-white dark:bg-zinc-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300
                  border border-zinc-200 dark:border-zinc-700 ${isEven ? "md:ml-8" : "md:mr-8"}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center">
                    <Building className="w-5 h-5 text-green-400" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-1">{experience.title}</h3>

                    <div className="mb-3">
                      <Badge variant="outline" className="dark:bg-green-400/10 dark:text-green-400 dark:border-green-400/20">
                        {experience.role}
                      </Badge>
                    </div>

                    <p className="text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">{experience.description}</p>

                    {experience.skills && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="bg-zinc-100 dark:bg-zinc-800">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
