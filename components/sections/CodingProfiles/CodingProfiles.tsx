"use client";

import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import { CODING_PROFILES } from "@/data/codingProfiles";

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="px-5 py-12 sm:px-6 sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Coding Profiles
          </p>

          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            My coding journey &amp; activity
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {CODING_PROFILES.map((profile) => (
            <ProfileCard
              key={profile.name}
              {...profile}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
