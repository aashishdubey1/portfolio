'use client'

import { MagicCard } from '@/components/magicui/magic-card'
import ShinyText from './blocks/TextAnimations/ShinyText/ShinyText';
import { Project } from './ProjectList';


const ProjectCard = (props: Project) => {
    const { logo, title, description, techStack, link, source } = props;
    return (
        <MagicCard className='h-[300px] w-[300px] !border-none rounded-lg flex flex-col items-center justify-between p-4'>
            <img src={logo} alt={title} className="h-6 w-6 object-contain mb-2 mx-auto" />
            <h2 className="text-xl text-white font-bold text-center mb-2">{title}</h2>
            <ShinyText text={description} disabled={false} speed={3} className='mb-3 text-center '/>
            <div className="flex flex-wrap gap-1 justify-center mb-2">
                {techStack && techStack.map((tech: string, idx: number) => (
                    <span key={idx} className="bg-transparent text-xs px-2 py-0.5 rounded border-1 border-white/60 text-white font-semibold hover:bg-white hover:text-black  transition-all duration-200 cursor-pointer">{tech}</span>
                ))}
            </div>
            <div className="flex gap-2 justify-center mt-3">
                {link && <a href={link} target="_blank" rel="noopener noreferrer" className="text-xs underline text-white">Live</a>}
                {source && <a href={source} target="_blank" rel="noopener noreferrer" className="text-xs underline text-white">Source</a>}
            </div>
        </MagicCard>
    )
}

export default ProjectCard