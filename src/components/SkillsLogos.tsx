"use client";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  SiMysql,
  SiAmazon,
  SiLinux,
  SiFastapi,
  SiPytorch,
  SiTensorflow,
  SiNextdotjs,
  SiSass,
  SiHuggingface,
  SiGit
} from "react-icons/si";
import { FaJava, FaPython, FaBrain, FaRobot, FaCogs } from "react-icons/fa";

const skills = [
  { name: "Python", Icon: FaPython },
  { name: "Java", Icon: FaJava },
  { name: "C++", Icon: FaCogs },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Docker", Icon: SiDocker },
  { name: "AWS", Icon: SiAmazon },
  { name: "PyTorch", Icon: SiPytorch },
  { name: "TensorFlow", Icon: SiTensorflow },
  { name: "Git", Icon: SiGit },
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss3 },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "MySQL", Icon: SiMysql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Linux", Icon: SiLinux },
  { name: "FastAPI", Icon: SiFastapi },
  { name: "Hugging Face", Icon: SiHuggingface },
];

export default function SkillsLogos() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading text-3xl md:text-4xl mb-4">Tech Stack</h2>
          <p className="subheading max-w-[700px] mx-auto">
            Technologies I use to build intelligent systems.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {skills.map(({ name, Icon }) => (
            <div key={name} className="group relative p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-[var(--accent)] hover:bg-white/10 transition-all duration-300 cursor-default">
              <Icon className="text-4xl text-gray-400 group-hover:text-[var(--accent)] transition-colors" />
              
              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[var(--accent)] text-white text-xs font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-[0_0_15px_var(--accent)]">
                {name}
                <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[var(--accent)]"></span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
