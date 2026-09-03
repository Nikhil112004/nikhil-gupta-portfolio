"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
    return (
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{opacity: 1, y: 0}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className ="flex w-full flex-col items-center gap-5"> 
            <p className= "text-sm font-medium uppercase tracking-[0.3em] text-blue-400">Hi, I&apos;m</p>
            <h1 className="bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">Nikhil Gupta</h1>
            <h2 className="text-2xl font-semibold text-slate-300 sm:text-3xl">Full Stack Developer</h2>
            <p className="max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">I build Scalable web applications and AI-powered products using modern technologies.</p>
        </motion.div>
    )
}