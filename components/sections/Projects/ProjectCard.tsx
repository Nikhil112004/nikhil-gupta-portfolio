import Image from "next/image";


type Project = {
    title: string;
    description: string;
    technologies: string[];
    github: string;
    live: string;
    image: string;
}

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({project}: ProjectCardProps) {
    return (
        <article className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-400/20 hover:bg-white/[0.05]">
            <div className="relative mb-6 aspect-video overflow-hidden rounded-xl border border-white/10">
                <Image
                src={project.image}
                alt={`${project.title} project preview`} fill className="object-cover transition duration-500 group-hover:scale-105"
                />
            </div>
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 min-h-[84px] text-sm leading-7 text-slate-400">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                    <span key={technology} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{technology}</span>
                ))}
            </div>
            <div className="mt-6 flex gap-4">
                {project.github && (
                    <a 
                    href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-300 transition hover:text-white">GitHub</a>
                )}
                {project.live && (
                    <a 
                    href={project.live} 
                    target="_blank"
                    rel="noopener noreferer"
                    className="text-sm font-medium text-blue-400 transition hover:text-blue-300">Live Demo</a>
                )
                }
        </div>
        </article>
    )
}