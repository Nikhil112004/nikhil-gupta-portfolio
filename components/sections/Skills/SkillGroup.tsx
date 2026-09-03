import Image from "next/image";

type Skill = {
  name: string;
  icon: string;
};

type SkillGroupProps = {
  category: string;
  skills: Skill[];
};

export default function SkillGroup({
  category,
  skills,
}: SkillGroupProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <h3 className="text-lg font-semibold text-white">
        {category}
      </h3>

     <div className="mt-4 flex flex-wrap gap-2 sm:gap-2.5">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 transition hover:border-blue-400/30 hover:bg-white/10"
          >
            <Image
              src={skill.icon}
              alt={`${skill.name} icon`}
              width={18}
              height={18}
              className="object-contain"
            />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}