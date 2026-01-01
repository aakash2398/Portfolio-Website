import { Download, Briefcase, GraduationCap, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import resumeFile from "@/assets/Aakash Kumar Resume.pdf"

const highlights = [
  "3+ years of professional experience",
  "Flutter & Full-Stack expertise",
  "Production-level applications",
  "Remote & freelance ready",
  "Clean architecture advocate",
  "Performance optimization specialist",
];

const experience = [
  {
    title: "Full-Stack Web & Flutter Developer",
    company: "Freelance",
    period: "2022 - Present",
    description: "Working as a freelance developer delivering end-to-end mobile and web solutions for startups, small businesses, and individual clients.",
  },
  {
    title: "Flutter Developer",
    company: "Freelance/Contract Projects",
    period: "2024 - Present",
    description: "Developed and maintained cross-platform mobile applications for various clients using Flutter.",
  },
  {
    title: "Full-Stack Web Developer",
    company: "Freelance",
    period: "2022 - 2024",
    description: "Built responsive web applications and admin dashboards using React and Node.js.",
  },
];

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">My journey</p>
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle mx-auto mt-4">
            A summary of my professional experience, skills, and achievements.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - CTA & Highlights */}
          <div className="space-y-6">
            {/* Download Card */}
            <div className="p-6 rounded-2xl glass-card text-center hover:border-primary/50 transition-all duration-300">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Get My Full Resume
              </h3>
              <p className="text-muted-foreground mb-4">
                Download my complete resume with detailed work history, education, and certifications.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href={resumeFile} download>
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Highlights */}
            <div className="p-6 rounded-2xl glass-card hover:border-primary/50 transition-all duration-300 text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Key Highlights
              </h4>
              <ul className="space-y-3">
                {highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Experience Timeline */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Work Experience
            </h4>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-border" />

              {/* Timeline Items */}
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <div key={item.title} className="relative pl-8">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                    <div className="p-5 rounded-xl glass-card hover:border-primary/50 transition-all duration-300">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {item.period}
                        </span>
                      </div>
                      <h5 className="text-lg font-semibold text-foreground mb-1">
                        {item.title}
                      </h5>
                      <p className="text-sm text-primary mb-2">{item.company}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
