import {STATS} from "@/data/stats";
export default function AboutContent() {
    return (
        <div className="space-y-5 sm:space-y-6">
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-blue-400 sm:text-sm sm:tracking-[0.3em]">About Me</p>
            <h2 className="max-w-xl text-[1.75rem] font-bold leading-[1.15] tracking-tight text-white sm:text-4xl sm:leading-tight">I&apos;m a Full Stack Developer who enjoys building real-world products.</h2>
            <p className="max-w-xl text-[0.9375rem] leading-7 text-slate-400 sm:text-lg sm:leading-8">I&apos;ve worked on real-world projects during my internships, handling both frontend and backend development. I&apos;ve built features, integrated APIs, fixed UI issues, worked with databases, and contributed to production applications for clients.</p>
            <div className="grid grid-cols-3 gap-2.5 pt-3 sm:gap-3 sm:pt-4">
                {STATS.map((stat) => (
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:-translate-y-1 hover:bg-white/10 sm:p-4" key={stat.label}>
                        <p className="text-xl font-bold text-white sm:text-2xl">{stat.value}</p>
                          <p className="mt-1 text-[0.625rem] leading-4 text-slate-400 sm:text-sm">{stat.label}</p>    
                    </div>
                ))}
           </div>
        </div>
    ) 
}
