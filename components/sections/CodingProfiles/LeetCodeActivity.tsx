"use client";

type Activity = Record<string, number>;

export default function LeetCodeActivity({ activity }: { activity: Activity }) {
  const days = Array.from({ length: 84 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (83 - index));
    const key = Math.floor(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 1000,
    ).toString();
    return { date, count: activity[key] ?? 0 };
  });

  function levelFor(count: number) {
    if (count === 0) return "activity-level-0";
    if (count <= 2) return "activity-level-1";
    if (count <= 5) return "activity-level-2";
    return "activity-level-3";
  }

  return (
    <div className="leetcode-activity" aria-label="Recent LeetCode activity">
      <div className="leetcode-months"><span>12 weeks</span><span>Today</span></div>
      <div className="leetcode-grid">
        {days.map(({ date, count }) => (
          <span
            key={date.toISOString()}
            className={levelFor(count)}
            title={`${count} submissions on ${date.toLocaleDateString()}`}
          />
        ))}
      </div>
    </div>
  );
}