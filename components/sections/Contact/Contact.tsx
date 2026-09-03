"use client"
import {motion} from "framer-motion";
import ContactContent from "./ContactContent";

export default function Contact() {
    return (
        <section id="contact" className="px-5 py-12 sm:px-6 sm:py-14 lg:py-16">
            <motion.div 
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{ duration: 0.7, ease: "easeOut"}}
            className="mx-auto w-full max-w-7xl">
                <ContactContent />
            </motion.div>
        </section>
    )
}
