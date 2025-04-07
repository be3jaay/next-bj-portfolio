type ExperienceProps = {
  title: string;
  role: string;
  date: string;
  description: string;
  skills?: string[]; // Add optional skills property
};

export const experienceData: ExperienceProps[] = [
  {
    title: "DOST Calabarzon",
    role: "Lead Full-Stack Developer Intern",
    date: "February 2025 - Present",
    description:
      "Leading a team of 5 developers in the development of a web-based application for the Department of Science and Technology (DOST) Calabarzon. The project aims to streamline the process of managing and tracking research projects within the department. Utilizing Next JS, Laravel, and MySQL, I am responsible for overseeing the development process, ensuring code quality, and implementing best practices in software development. Collaborating closely with stakeholders to gather requirements and provide regular updates on project progress.",
    skills: [
      "Next.js",
      "Laravel",
      "MySQL",
      "Team Leadership",
      "Agile Development",
    ],
  },
  {
    title: "NCLEX Power",
    role: "Software Engineer",
    date: "June 2024 - March 2025",
    description: `Developed dynamic user interfaces, API integrations, and implemented unit tests, ensuring adherence to design patterns, clean coding practices, and industry best practices.
              Fostered strong client relationships through daily stand-up meetings, overnight development and effective communication, adhering to Agile Scrum Methodology for timely project delivery.`,
    skills: ["Next.js", "API Integration", "Unit Testing", "Agile Scrum"],
  },
  {
    title: "PhilBizz",
    role: "Freelance Frontend Developer",
    date: "October 2024 - November 2024",
    description: `Developing client-centered web applications using React JS and Tailwind CSS. Collaborating closely with a team of three (3) developers, leveraging ClickUp for task management and Git/GitHub for version control.`,
    skills: ["React", "Tailwind CSS", "Git", "ClickUp"],
  },
];
