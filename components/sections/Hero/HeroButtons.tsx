"use client";
import { motion } from "framer-motion";

export default function HeroButtons() {
    return (
        <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition= {{ duration: 0.6, delay: 0.25, ease: "easeOut"}}
              className="flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="rounded-lg bg-blue-600 px-6 py-3 text-center font-medium text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/30">View Projects</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/20 px-6 py-3 font-medium text-center text-white transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10">Download Resume</a>
        </motion.div>     
    )
} 