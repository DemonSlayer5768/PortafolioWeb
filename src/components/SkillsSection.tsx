import { type Skill, SkillCard } from "@components/Habilidades";
import { Code, Server, Palette, Globe, Database, Terminal } from "lucide-react";
import { HiOutlineClipboardList } from "react-icons/hi";

const skills: Skill[] = [
  {
    name: "Frontend",
    icon: Code,
    items: ["React", "Angular", "Bootstrap", "Tailwind"],
  },
  {
    name: "Backend",
    icon: Server,
    items: ["Node.js", "C#", "Python", "PhP", "C++"],
  },
  { name: "Design", icon: Palette, items: ["Figma"] },
  { name: "Web", icon: Globe, items: ["HTML5", "CSS", "Responsive Design"] },
  {
    name: "Database",
    icon: Database,
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  { name: "Tools", icon: Terminal, items: ["Git", "Docker", "AWS"] },
];

export function SkillsSection() {
  return (
    <section>
      <div className="container mx-auto px-14 py-24">
        <h1 className="text-3xl font-bold text-left mb-12 text-white-800 flex items-center">
          <HiOutlineClipboardList className="mr-4 text-4xl" /> Habilidades
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
