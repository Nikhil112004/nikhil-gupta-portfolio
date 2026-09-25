"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Code2 } from "lucide-react";
import { CODING_PROFILES } from "@/data/codingProfiles";
import ProfileCard from "./ProfileCard";

type Activity = Record<string, number>;

export default function CodingProfiles() {
  const railRef = useRef<HTMLDivElement>(null);
  const [activity, setActivity] = useState<Activity>({});

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/leetcode", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: { activity?: Activity } | null) => {
        if (data?.activity) setActivity(data.activity);
      })
      .catch(() => {
        // Keep the cards usable when the activity endpoint is unavailable.
      });

    return () => controller.abort();
  }, []);

  function moveRail(direction: -1 | 1) {
    const rail = railRef.current;
    if (!rail) return;

    const card = rail.querySelector<HTMLElement>(".profile-card");
    rail.scrollBy({
      left: direction * ((card?.offsetWidth ?? 260) + 12),
      behavior: "smooth",
    });
  }

  return (
    <section id="coding-profiles" className="portfolio-section">
      <div className="section-heading profile-heading">
        <div>
          <h2>Contribution Activity</h2>
          <p>GitHub | LeetCode | Namaste JS</p>
        </div>
        <div className="carousel-controls">
          <button type="button" onClick={() => moveRail(-1)} aria-label="Previous profile">
            <ArrowLeft size={15} />
          </button>
          <button type="button" onClick={() => moveRail(1)} aria-label="Next profile">
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
      <div className="profile-viewport">
        <div className="profile-rail" ref={railRef}>
          {CODING_PROFILES.map((profile) => (
            <ProfileCard key={profile.name} {...profile} activity={activity} />
          ))}
        </div>
      </div>
      <p className="swipe-hint"><Code2 size={13} /> Swipe to explore all three profiles</p>
    </section>
  );
}