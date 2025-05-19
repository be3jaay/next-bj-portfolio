export type ExperienceProps = {
  title: string;
  role: string;
  date: string;
  description: string;
  skills?: string[];
  location?: string;
  icon?: string;
};

export const experienceData: ExperienceProps[] = [
  {
    title: "DOST Calabarzon 🚀",
    role: "Lead Full-Stack Developer Intern",
    date: "February 2025 - May 2025",
    description:
      "Led a team of four in developing a web-based application for the Department of Science and Technology (DOST) CALABARZON. The project streamlined the management and tracking of research projects within the department. Used Next.js, Laravel, and MySQL to oversee the development process, ensure code quality, and implement software development best practices. Collaborated with stakeholders to gather requirements and provide regular project updates..",
    skills: [
      "Next.js",
      "Laravel",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN",
      "MySQL",
      "Recharts",
    ],
  },
  {
    title: "PhilBizz 🌐",
    role: "Freelance Frontend Developer",
    date: "October 2024 - November 2024",
    description: `Developing client-centered web applications using React JS and Tailwind CSS. Collaborating closely with a team of three (3) developers, leveraging ClickUp for task management and Git/GitHub for version control.`,
    skills: ["React", "Tailwind CSS", "Git", "ClickUp"],
  },
  {
    title: "ARXON Solutions, LLC  💡",
    role: "Lead Software Engineer",
    date: "June 2024 - March 2025",
    description: `Developed dynamic user interfaces, API integrations, and implemented unit tests, ensuring adherence to design patterns, clean coding practices, and industry best practices.
              Fostered strong client relationships through daily stand-up meetings, overnight development and effective communication, adhering to Agile Scrum Methodology for timely project delivery.`,
    skills: ["Next.js", "TypeScript", "Material UI", "Tailwind CSS", "Jest"],
  },
];
