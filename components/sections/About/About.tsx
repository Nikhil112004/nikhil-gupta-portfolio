"use client"

import { motion } from "framer-motion";
import AboutContent from "./AboutContent";
import AboutVisual from "./AboutVisual";

export default function About () {
    return (
        <section id="about" className="pl-5 pr-8 pt-8 pb-12 sm:px-6 sm:pt-10 sm:pb-14 lg:pt-10 lg:pb-16">
            <motion.div initial={{opacity: 0, y:40}}
                        whileInView={ {opacity: 1, y: 0}}
                        viewport={{once: true, amount: 0.2}}
                        transition={{duration: 0.7, ease: "easeOut"}}
            className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-2 md:items-center md:gap-12">
                <AboutContent />
                <AboutVisual />
            </motion.div>
        </section>
    )
}
