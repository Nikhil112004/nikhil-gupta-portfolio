import LeetCodeActivity from "./LeetCodeActivity";

type ProfileCardProps = {
  name: string;
  description: string;
  icon: string;
  href: string;
  visual?: string;
  activity: Record<string, number>;
};

export default function ProfileCard({
  name,
  description,
  icon,
  href,
  visual,
  activity,
}: ProfileCardProps) {
  const label = name === "Namaste-Dev" ? "Namaste JS" : name;
  const caption = {
    GitHub: "Open source · projects",
    LeetCode: "Data structures · algorithms",
    "Namaste-Dev": "JavaScript · frontend learning",
  }[name] ?? "Developer profile";

  return (
    <article className="profile-card">
      <div className="profile-card-top">
        <span className="profile-icon-wrap"><img src={icon} alt="" /></span>
        <span className="profile-caption">{caption}</span>
      </div>
      <h3>{label}</h3>
      <p>{description}</p>
      {(name === "LeetCode" || name === "Namaste-Dev") && <LeetCodeActivity activity={activity} />}
      {visual && (
        <div className="profile-visual">
          <img src={visual} alt="GitHub contribution activity" loading="lazy" />
        </div>
      )}
      <a href={href} target="_blank" rel="noopener noreferrer" className="profile-link">
        Visit {label} <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}
