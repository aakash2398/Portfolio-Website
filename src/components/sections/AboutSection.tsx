import { Code2, Rocket, Users, Globe } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "3+ Years Experience",
    description: "Professional development expertise",
  },
  {
    icon: Rocket,
    title: "Production Apps",
    description: "Deployed scalable applications",
  },
  {
    icon: Users,
    title: "Remote Ready",
    description: "Seamless collaboration worldwide",
  },
  {
    icon: Globe,
    title: "Full-Stack",
    description: "End-to-end development",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">Get to know me</p>
          <h2 className="section-title">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              I'm <span className="text-foreground font-semibold">Aakash Kumar</span>, a 
              <span className="text-primary font-semibold"> Flutter & Full-Stack Web Developer</span> with 
              <span className="text-foreground font-semibold"> 3+ years of experience</span> in building 
              scalable, secure, and user-friendly mobile and web applications. I specialize in <span className="text-foreground font-medium">Flutter, React, Firebase</span>, 
              and modern web technologies, helping startups and businesses turn ideas into production-ready 
              digital solutions. With a strong emphasis on <span className="text-foreground font-medium">clean architecture, 
              performance optimization</span>, and real-world problem solving, I deliver solutions that 
              not only meet but exceed expectations.
            </p>

            <div className="pt-4 p-6 rounded-xl glass-card">
              <p className="text-muted-foreground">
                🌍 <span className="text-foreground font-medium">Open to remote roles</span> and 
                freelance projects. Let's build something amazing together!
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-xl glass-card hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
