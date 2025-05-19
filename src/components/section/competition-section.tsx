"use client"

import type React from "react"
import { useRef } from "react"
import { motion } from "framer-motion"
import { BrainCog, MapPin } from "lucide-react"
import { Badge } from "../ui/badge"
import { competitionData } from "@/constants/competition-section-data"

export const CompetitionSection: React.FC = () => {
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
        <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-2">Competition</h2>
        <div className="h-1 w-1/2 bg-gradient-to-r from-green-400 to-transparent rounded-full"></div>
      </motion.div>

      <div className="w-full max-w-3xl mx-auto">
        {competitionData?.map((competition, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="flex items-start gap-6 pb-8 relative">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden border-2 border-green-400/20 z-10">
                <div className="w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center">
                  <BrainCog className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">{competition.date}</div>
                <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-1">{competition.title}</h3>
                <div className="text-sm text-zinc-800 dark:text-zinc-100 mb-1 font-medium">
                  {competition.role}
                </div>
                <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                  <MapPin className="w-3.5 h-3.5 mr-1" />
                  {competition.location || "Location not specified"}
                </div>

                <p className="text-zinc-600 dark:text-zinc-300 mb-3 leading-relaxed">{competition.description}</p>

                {competition.skills && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {competition.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-zinc-100 dark:bg-zinc-800 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {index < competitionData.length - 1 && (
              <div className="absolute left-8 top-16 w-0.5 h-[calc(100%-2rem)] bg-zinc-200 dark:bg-zinc-700"></div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
