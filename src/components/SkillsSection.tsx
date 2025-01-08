import { type Skill, SkillCard } from "@components/Habilidades";
import {
  Code,
  Server,
  Palette,
  Globe,
  Database,
  Terminal,
  Icon,
} from "lucide-react";
import { HiOutlineClipboardList } from "react-icons/hi";
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaFigma,
  FaHtml5,
  FaCss3,
  FaGithub,
} from "react-icons/fa";
import { BiLogoBootstrap } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsFillTerminalFill } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";
import { PiCodeSimple } from "react-icons/pi";
import { DiMongodb, DiMysql } from "react-icons/di";
import { SiPostman } from "react-icons/si";

const skills: Skill[] = [
  {
    name: "Frontend",
    icon: Code,
    items: [
      { name: "React", icon: <FaReact className="mr-2" /> },
      {
        name: "Bootstrap",
        icon: <BiLogoBootstrap className="mr-2" />,
      },
      {
        name: "Tailwind",
        icon: <RiTailwindCssFill className="mr-2" />,
      },
      {
        name: "Angular",
        icon: <FaAngular className="mr-2" />,
      },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    items: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="mr-2" />,
      },
      { name: "JavaScript", icon: <IoLogoJavascript className="mr-2" /> },
      {
        name: "C#",
        icon: <BsFillTerminalFill className="mr-2" />,
      },
      {
        name: "Python",
        icon: <FaPython className="mr-2" />,
      },
      {
        name: "PHP",
        icon: <FaPhp className="mr-2" />,
      },
    ],
  },

  {
    name: "Design",
    icon: Palette,
    items: [{ name: "Figma", icon: <FaFigma className="mr-2" /> }],
  },
  {
    name: "Web",
    icon: Globe,
    items: [
      { name: "HTML5", icon: <FaHtml5 className="mr-2" /> },
      { name: "CSS", icon: <FaCss3 className="mr-2" /> },
      {
        name: "Responsive Design",
        icon: <PiCodeSimple className="mr-2 " />,
      },
    ],
  },
  {
    name: "Database",
    icon: Database,
    items: [
      { name: "MongoDB", icon: <DiMongodb className="mr-2" /> },
      { name: "MySQL", icon: <DiMysql className="mr-2" /> },
    ],
  },
  {
    name: "Tools",
    icon: Terminal,
    items: [
      { name: "Git", icon: <FaGithub className="mr-2" /> },
      { name: "Postman", icon: <SiPostman className="mr-2" /> },
    ],
  },
];

export function SkillsSection() {
  return (
    <section>
      <div className="container mx-auto px-14 py-24">
        <h1 className="text-3xl font-bold text-left mb-12 text-white flex items-center">
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
