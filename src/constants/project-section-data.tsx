import Image from "next/image";
import React, { ReactElement } from "react";
import mapPride from "../../public/image/mapPride.png";
import wms from "../../public/image/wms.png";
import military from "../../public/image/military.png";
import portfolio from "../../public/image/portfolio.png";

type ProjectProps = {
  title: string;
  description: string;
  image: ReactElement;
  techStack: string[];
  visitLink: string;
  githubLink: string;
  hideButton?: boolean;
}

export const projectData: ProjectProps[] = [
  {
    title: "Map-Pride - (Data Analytics) ",
    description: `A web-based community portal designed to empower the
    LGBTQ+ community in Calamba City, Laguna, by providing an accessible
    platform that maps inclusive environments and safe spaces. `,
    image:
      <Image
        src={mapPride}
        alt="Brian James"
        className="w-full h-auto rounded-lg cursor-pointer hover:scale-90 hover:-hue-rotate-15 transition-all duration-300 ease-in-out"
        onClick={() => window.open("https://map-pride-db7f3dd938d6.herokuapp.com")}
      />,
    techStack: ["React.js", "Laravel", "PostgreSQL", "Tailwind", "Heroku", "Cloudinary"],
    visitLink: "https://map-pride-db7f3dd938d6.herokuapp.com",
    githubLink: "https://github.com/be3jaay/MapPride"
  },
  {
    title: "Water Monitoring (Not yet Complete)",
    description: `A real-time water monitoring system that tracks water parameters such as temperature, pH levels, and dissolved oxygen. The system includes real-time notifications to detect and alert users about anomalies in any of the monitored parameters.`,
    image:
      <Image
        src={wms}
        alt="Brian James"
        className="w-full h-auto rounded-lg cursor-pointer hover:scale-90 hover:-hue-rotate-15 transition-all duration-300 ease-in-out"
        onClick={() => window.open("https://next-wms-bay.vercel.app/")}
      />,
    techStack: ["Next.js", "Laravel", "MySQL", "ShadCN", "Clerk", "TanStack", "Vercel"],
    visitLink: "https://next-wms-bay.vercel.app/",
    githubLink: "https://github.com/be3jaay/next-wms"
  },
  {
    title: "Military Trello Analytics ",
    description: `A Dashboard and CRUD application designed for military use, featuring data input and dynamic graph generation for visualization. The application incorporates a Trello-like interface for organizing tasks and data efficiently, providing an interactive and user-friendly experience.`,
    image:
      <Image
        src={military}
        alt="Brian James"
        className="w-full h-auto rounded-lg cursor-pointer hover:scale-90 hover:-hue-rotate-15 transition-all duration-300 ease-in-out"
        onClick={() => window.open("https://user12345.netlify.app/")}
      />,
    techStack: ["React.js", "Node.js", "MongoDB", "Tailwind"],
    visitLink: "https://user12345.netlify.app/",
    githubLink: "https://github.com/dangrishh/Military-Trello-Analytics",
  },
  {
    title: "Portfolio",
    description: `The portfolio highlights my expertise in [e.g., web development, data analysis], featuring a clean and user-friendly design.`,
    image:
      <Image
        src={portfolio}
        alt="Brian James"
        className="w-full h-auto rounded-lg border border-zinc-800 cursor-pointer hover:scale-90 hover:-hue-rotate-15 transition-all duration-300 ease-in-out"
        onClick={() => window.open("https://next-wms-bay.vercel.app/")}
      />,
    techStack: ["Next.js", "Acernity", "ShadCN", "Tailwind", "Vercel"],
    visitLink: "https://next-wms-bay.vercel.app/",
    githubLink: "https://github.com/be3jaay/next-bj-portfolio",
    hideButton: true
  },
]
