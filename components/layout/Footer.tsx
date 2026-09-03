export default function Footer() {
    return(
        <footer className="border-t border-white/10 px-6 py-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
                <p>&copy; {new Date().getFullYear()} Nikhil Gupta. All rights reserved.</p>
                <p>Built with Next.js &amp; TypeScript.</p>
            </div>
        </footer>
    )
}