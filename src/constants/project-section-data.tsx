import Image from "next/image";
import React, { ReactElement } from "react";
import mapPride from "../../public/image/mapPride.png";
import wms from "../../public/image/wms.png";

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
        className="w-full h-auto rounded-lg cursor-pointer  hover:-hue-rotate-15 transition-all duration-300 ease-in-out"
      />,
    techStack: ["React.js", "Laravel", "PostgreSQL", "Tailwind CSS", "Cloudinary", "Chart.js"],
    visitLink: "https://map-pride-db7f3dd938d6.herokuapp.com",
    githubLink: "https://github.com/be3jaay/MapPride",
    hideButton: true
  },
  {
    title: "Water Monitoring System",
    description: `A real-time water monitoring system that tracks water parameters such as temperature, pH levels, and dissolved oxygen. The system includes real-time notifications to detect and alert users about anomalies in any of the monitored parameters.`,
    image:
      <Image
        src={wms}
        alt="Brian James"
        className="w-full h-auto rounded-lg cursor-pointer hover:-hue-rotate-15 transition-all duration-300 ease-in-out"
      />,
    techStack: ["Next.js", "Laravel", "MySQL", "ShadCN", "Clerk", "Recharts"],
    visitLink: "https://bfar-r4a-rtms.vercel.app/",
    githubLink: "https://github.com/be3jaay/next-wms",
    hideButton: false
  },
]
