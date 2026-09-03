export default function AboutVisual() {
    return (
        <div className="flex min-w-0 items-center justify-center">
            <div className="min-w-0 w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-blue-500/5 transition duration-500 hover:-translate-y-2 hover:border-blue-400/20 sm:p-6">
                <div className="mb-4 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400"/>
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <pre className="max-w-full overflow-x-auto scrollbar-none text-xs leading-6 text-slate-300 sm:text-sm sm:leading-7">
                    {`const developer = {
                    name: "Nikhil Gupta",
                    role: "Full Stack Developer",
                    stack: ["React", "Next.js", Node.js"],
                    status: "Available"
                    };`}
                </pre>
            </div>
        </div>
    )
}
