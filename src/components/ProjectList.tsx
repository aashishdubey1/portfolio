'use client'

import ProjectCard from './Projects';

const ProjectList = () => {

  return (
    <div className='w-full h-fit px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center mt-20 pb-8'>
      <h1 className='text-4xl font-bold text-white mb-10'>Proof of Work</h1>

      <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-0 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10">
        {data.map((project: any, idx: number) => (
          <ProjectCard
            key={idx}
            logo={project.logo}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            source={project.source}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectList;

export interface Project {
  logo: string;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  source: string;
}

const data: Project[] = [
  {
    logo: "/globe.svg",
    title: "Global Weather App",
    description: "A web app that provides real-time weather updates for any city in the world.",
    techStack: ["Next.js", "Tailwind CSS", "OpenWeatherMap API"],
    link: "https://weather-app.example.com",
    source: "https://github.com/example/weather-app",
  },
  {
    logo: "/window.svg",
    title: "Task Manager",
    description: "A productivity tool to manage daily tasks with drag-and-drop and reminders.",
    techStack: ["React", "Redux", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    link: "https://taskmanager.example.com",
    source: "https://github.com/example/task-manager",
  },
  {
    logo: "/vercel.svg",
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase projects and skills.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://portfolio.example.com",
    source: "https://github.com/example/portfolio",
  },
  {
    logo: "/file.svg",
    title: "File Converter",
    description: "A tool to convert files between different formats (PDF, DOCX, JPG, PNG).",
    techStack: ["React", "Node.js", "Express.js", "Multer"],
    link: "https://fileconverter.example.com",
    source: "https://github.com/example/file-converter",
  },
  {
    logo: "/next.svg",
    title: "E-commerce Store",
    description: "A full-featured e-commerce platform with payment integration and admin dashboard.",
    techStack: ["Next.js", "Stripe", "Tailwind CSS", "MongoDB"],
    link: "https://ecommerce.example.com",
    source: "https://github.com/example/ecommerce-store",
  },
  {
    logo: "/pandaN.webp",
    title: "Chat Application",
    description: "A real-time chat application with group and private messaging.",
    techStack: ["React", "Socket.io", "Node.js", "Express.js", "MongoDB"],
    link: "https://chatapp.example.com",
    source: "https://github.com/example/chat-app",
  },
];