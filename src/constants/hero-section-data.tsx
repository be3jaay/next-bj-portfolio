import { ReactElement } from "react";
import { FaReact, FaLaravel } from "react-icons/fa";
import { RiNextjsLine, RiJavascriptLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { GrMysql } from "react-icons/gr";

type StackProps = {
  icon: ReactElement;
  title: string;
}

export const techStack: StackProps[] = [
  {
    icon: <FaReact />,
    title: "React.js"
  },
  {
    icon: <FaLaravel />,
    title: "Laravel"
  },
  {
    icon: <RiNextjsLine />,
    title: "Next.js"
  },
  {
    icon: <TbBrandTypescript />,
    title: "TypeScript"
  },
  {
    icon: <RiJavascriptLine />,
    title: "JavaScript"
  },
  {
    icon: <GrMysql />,
    title: "MySQL"
  },
  {
    icon: <AiOutlineHtml5 />,
    title: "HTML"
  },
  {
    icon: <RiTailwindCssFill />,
    title: "Tailwind"
  },
]
