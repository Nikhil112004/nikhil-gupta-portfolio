import Image from "next/image";
import LeetCodeActivity from "./LeetCodeActivity";

type ProfileCardProps = {
  name: string;
  description: string;
  icon: string;
  href: string;
  visual?: string;
};

export default function ProfileCard({
  name,
  description,
  icon,
  href,
  visual,
}: ProfileCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:bg-white/[0.05]"
    >
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-green-500/10 blur-3xl transition duration-500 group-hover:bg-green-500/20"
      />
      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <Image
            src={icon}
            alt={`${name} icon`}
            width={28}
            height={28}
            className="object-contain"
          />
          <h3 className="text-xl font-semibold text-white">{name}</h3>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-400 sm:min-h-[84px] sm:text-base">{description}</p>
        {visual && (
          <div className="relative mt-6 overflow-hidden rounded-xl border border-white/10 bg-[#0b1220] p-3">
            <img
              src={visual}
              alt={`${name} activity`}
              className="h-[130px] w-full object-fill"
            />
          </div>
        )}

        {(name === "LeetCode" || name === "Namaste-Dev") && <LeetCodeActivity />}

        <span className="mt-5 inline-block text-sm font-medium text-green-400 transition group-hover:text-green-300">
          {" "}
          View Profile →
        </span>
      </div>
    </a>
  );
}
