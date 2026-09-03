"use client";
import {motion} from "framer-motion";
import ExperienceItem from "./ExperienceItem";
import { EXPERIENCE } from "@/data/experience";

export default function Experience() {
    return (
        <section id="experience" className="px-4 py-12 sm:px-6 sm:py-14 lg:py-24">
            <div className="mx-auto w-full max-w-7xl">
                <div className="mb-8 sm:mb-10 lg:mb-12">
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">Experience</p>
                    <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">Where I&apos;ve worked</h2>
                </div>
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    transition={{duration: 0.7, ease: "easeOut"}}
                    className="relative max-w-4xl space-y-5 border-l border-white/10 pl-5 sm:space-y-6 sm:pl-8"
                >
                    {EXPERIENCE.map((experience) => (
                        <ExperienceItem key={`${experience.company}-${experience.role}`} {...experience}/>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
