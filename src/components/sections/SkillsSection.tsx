import { Smartphone, Globe, Server, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    skills: ["Flutter", "Dart", "Android", "iOS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    skills: ["Firebase", "REST APIs", "Node.js", "Express"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["Firebase Firestore", "MongoDB", "MySQL", "PostgreSQL"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Android Studio", "Figma"],
    color: "from-indigo-500 to-violet-500",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">What I work with</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl glass-card hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-0.5`}>
                  <div className="w-full h-full rounded-[10px] bg-card flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-foreground" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-foreground">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
