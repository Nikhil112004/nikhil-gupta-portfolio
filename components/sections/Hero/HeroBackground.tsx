"use client";
import  { motion } from "framer-motion";

export default function HeroBackground() {
    return (
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div
             animate={{
                scale: [1, 1.15, 1],
                opacity: [0.15, 0.25, 0.15],
             }}
             transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
             }}
             className="absolute left-1/2 top-[19%] h-[60vw] w-[60vw] max-h-[500px] max-w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl"
            />
        </div>
    )
}