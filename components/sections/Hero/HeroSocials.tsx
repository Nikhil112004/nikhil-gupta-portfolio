"use client";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/data/socials";
import { CodeXml, BookOpen, X} from "lucide-react";

const SOCIAL_ICONS = {
  GitHub: CodeXml,
  LinkedIn: CodeXml,
  Twitter: X,
  LeetCode: CodeXml,
  "Namaste-Dev": BookOpen,
}; 
 
export default function HeroSocials() {
    return (
        <motion.div
            initial={{opacity: 0, y: 15}}
            animate={{opacity: 1, y: 0}}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut"}}
            className="flex items-center gap-5">
            {SOCIAL_LINKS.map((social) =>  {
                const Icon = SOCIAL_ICONS[social.name as keyof typeof SOCIAL_ICONS];
                return (
                    <a key={social.name} aria-label={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className=" text-slate-400 transition hover:-translate-y-1 hover:text-white"><img src={social.src} alt={social.name} className="w-6 h-5"/></a>
                )
            }    
            )}
        </motion.div>
    )
}

