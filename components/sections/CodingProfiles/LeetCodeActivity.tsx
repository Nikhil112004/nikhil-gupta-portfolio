"use client";

import { useEffect, useState } from "react";

type Activity = Record<string, number>;

export default function LeetCodeActivity() {
  const [activity, setActivity] = useState<Activity>({});

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const response = await fetch("/api/leetcode");
        const data = await response.json();

        setActivity(data.activity ?? {});
      } catch (error) {
        console.error("Failed to fetch LeetCode activity:", error);
      }
    };

    fetchActivity();
  }, []);

  const days = Array.from({ length: 123 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (122 - index));

    const key = Math.floor(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 1000,
    ).toString();
    return {
      date,
      count: activity[key] ?? 0,
    };
  });

  const getLevel = (count: number) => {
    if (count === 0) return "bg-white/5";
    if (count <= 2) return "bg-green-500/30";
    if (count <= 5) return "bg-green-500/50";
    if (count <= 10) return "bg-green-500/70";
    return "bg-green-400";
  };

  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-[#0b1220] p-4">
      <div className="mb-2 grid grid-flow-col grid-rows-1 gap-1 text-[9px] text-slate-500">
        {Array.from({ length: 4 }, (_, index) => {
          const date = new Date();
          date.setMonth(date.getMonth() - (3 - index));

          return (
            <span key={index}>
              {date.toLocaleString("en-US", {
                month: "short",
              })}
            </span>
          );
        })}
      </div>
      <div className="grid grid-flow-col grid-rows-7 gap-1">
        {days.map((day) => (
          <span
            key={day.date.toISOString()}
            title={`${day.count} submissions`}
            className={`h-3 w-3 rounded-sm ${getLevel(day.count)}`}
          />
        ))}
      </div>
    </div>
  );
}
