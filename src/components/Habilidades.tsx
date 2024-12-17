import { type LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  icon: LucideIcon;
  items: string[];
}

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="rounded-lg  p-6 transition-all hover:shadow-lg">
      <div className="flex items-center mb-4">
        <skill.icon className="w-6 h-6 text-blue-500 mr-3" />
        <h3 className="text-xl font-semibold ">{skill.name}</h3>
      </div>
      <ul className="p-2  space-y-3">
        {skill.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
