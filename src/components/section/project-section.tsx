"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projectData } from "@/constants/project-section-data";
import { LinkPreview } from "../ui/link-preview";

export const ProjectSection: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center lg:items-start justify-center flex-col py-12 lg:pb-12">
      <div className="text-3xl md:text-4xl font-bold text-green-400">
        Projects
      </div>
      <div className="flex flex-col w-full gap-4 my-4">
        {projectData?.map((project, index) => (
          <Card key={index} >
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-start justify-center w-full h-full gap-4">
              {project.image}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, techIndex) => (
                  <Badge key={techIndex}>{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex items-start justify-start w-full gap-2">
              {project.hideButton ? <Button
                onClick={() => window.open(project.githubLink)}
                variant={"outline"}
                size="lg"
              >
                Github
                <FaGithub />
              </Button> : (
                <>
                  <LinkPreview
                    url={project.visitLink}

                    className="font-bold bg-clip-text"
                  >
                    <Button
                      variant={"default"}
                      size="lg"
                    >
                      Visit
                      <FaExternalLinkAlt />
                    </Button>
                  </LinkPreview>

                  <Button
                    onClick={() => window.open(project.githubLink)}
                    variant={"outline"}
                    size="lg"
                  >
                    Github
                    <FaGithub />
                  </Button>
                </>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div >

  )
}