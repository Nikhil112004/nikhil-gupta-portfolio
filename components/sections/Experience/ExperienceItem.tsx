type ExperienceItemProps = {
    company: string;
    role: string;
    duration: string;
    description: string;
}

export default function ExperienceItem ({company, role, duration, description}: ExperienceItemProps) {
    return (
        <article className="relative min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-blue-400/30 hover:bg-white/[0.05] sm:p-6">
        <div aria-hidden="true" className="absolute -left-[1.85rem] top-6 h-3.5 w-3.5 rounded-full border-[3px] border-[#030712] bg-blue-500 shadow-lg shadow-blue-500/40 sm:-left-[2.45rem] sm:top-7"/>
        <p className="text-sm font-medium text-blue-400">{duration}</p>
        <h3 className="mt-2 break-words text-xl font-semibold leading-snug text-white">{role}</h3>
        <p className="mt-1 break-words text-base font-medium text-slate-300">{company}</p>
        <p className="mt-4 break-words text-sm leading-7 text-slate-400 sm:text-base">{description}</p>
        </article>
    )
}
