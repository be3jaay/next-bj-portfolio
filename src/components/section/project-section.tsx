"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { projectData } from "@/constants/project-section-data"
import { LinkPreview } from "../ui/link-preview"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

export const ProjectSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex items-center flex-col lg:items-start justify-center py-16 px-4"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-2">Projects</h2>
        <div className="h-1 w-1/2 bg-gradient-to-r from-green-400 to-transparent rounded-full"></div>
      </motion.div>

      <div className="flex items-center flex-col gap-8 w-full">
        {projectData?.map((project, index) => (
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
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="h-full"
          >
            <Card className="h-full overflow-hidden border border-zinc-200 dark:border-zinc-800 group hover:border-green-400/50 dark:hover:border-green-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-400/10">
              <div className="relative overflow-hidden w-full aspect-video bg-zinc-100 dark:bg-zinc-900">
                <motion.div
                  className="absolute inset-0 z-10"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredIndex === index ? 0.15 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: "radial-gradient(circle at center, rgba(74, 222, 128, 0.8) 0%, transparent 70%)",
                  }}
                />
                <motion.div
                  className="w-full h-full"
                  animate={{
                    scale: hoveredIndex === index ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {project.image}
                </motion.div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  {project.title}
                  <motion.div animate={{ x: hoveredIndex === index ? 5 : 0 }} transition={{ duration: 0.2 }}>
                  </motion.div>
                </CardTitle>
                <CardDescription className="text-base mt-2 leading-relaxed">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col items-start justify-center w-full h-full gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-green-400/20 hover:text-green-700 dark:hover:text-green-400 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-start w-full gap-3 pt-2">
                {project.hideButton ? (
                  <Button
                    onClick={() => window.open(project.githubLink)}
                    variant="outline"
                    size="lg"
                    className="gap-2 group/button hover:border-green-400 hover:text-green-500 transition-all"
                  >
                    <Github className="w-5 h-5 group-hover/button:scale-110 transition-transform" />
                    <span>Github</span>
                  </Button>
                ) : (
                  <>
                    <LinkPreview url={project.visitLink} className="font-bold">
                      <Button
                        variant="default"
                        size="lg"
                        className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 text-white gap-2 group/button transition-all duration-300"
                      >
                        <span>Visit</span>
                        <ExternalLink className="w-4 h-4 group-hover/button:translate-x-1 group-hover/button:-translate-y-1 transition-transform" />
                      </Button>
                    </LinkPreview>

                    <Button
                      onClick={() => window.open(project.githubLink)}
                      variant="outline"
                      size="lg"
                      className="gap-2 group/button hover:border-green-400 hover:text-green-500 transition-all"
                    >
                      <Github className="w-5 h-5 group-hover/button:scale-110 transition-transform" />
                      <span>Github</span>
                    </Button>
                  </>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

