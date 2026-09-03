"use client";
import { motion } from "framer-motion";
import SkillGroup from "./SkillGroup";
import { SKILLS } from "@/data/skills";


export default function Skills() {
    return (
        <section id="skills" className="px-5 py-12 sm:px-6 sm:py-14 lg:py-24">
        <div className="mx-auto w-full max-w-7xl"> 
        <div className="mb-8 sm:mb-10 lg:mb-12">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
        Skills
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Technologies I work with</h2>
        </div>
        <motion.div 
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{ once: true, amount: 0.2}}
        transition= {{ duration: 0.7, ease: "easeOut"}}
        className="grid gap-5 sm:gap-6 md:grid-cols-2 ">
        {SKILLS.map((group) => (
            <SkillGroup key={group.category} category={group.category} skills={group.skills}/>
        ))}
        </motion.div>
        </div>
        </section>
    )
}
