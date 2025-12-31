import { ExternalLink, Github, Smartphone, Globe, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Mobile App",
    description: "A full-featured e-commerce application with product catalog, cart management, secure checkout, and order tracking. Built with clean architecture and state management.",
    tags: ["Flutter", "Dart", "Firebase", "Stripe"],
    type: "Mobile App",
    icon: Smartphone,
    github: "https://github.com/aakashkumar/ecommerce-app",
    demo: "#",
  },
  {
    title: "Task Management Dashboard",
    description: "A productivity web app with real-time collaboration, drag-and-drop task boards, team management, and analytics dashboard.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB"],
    type: "Web App",
    icon: Globe,
    github: "https://github.com/aakashkumar/task-manager",
    demo: "#",
  },
  {
    title: "Restaurant Admin Panel",
    description: "Complete admin dashboard for restaurant management including menu management, order processing, reservation system, and sales analytics.",
    tags: ["React", "Firebase", "Tailwind CSS", "Charts"],
    type: "Admin Panel",
    icon: Layout,
    github: "https://github.com/aakashkumar/restaurant-admin",
    demo: "#",
  },
  {
    title: "Fitness Tracking App",
    description: "A health and fitness mobile application with workout tracking, meal planning, progress visualization, and social features.",
    tags: ["Flutter", "Firebase", "Google Fit API"],
    type: "Mobile App",
    icon: Smartphone,
    github: "https://github.com/aakashkumar/fitness-app",
    demo: "#",
  },
  {
    title: "Real Estate Listing Platform",
    description: "Property listing web platform with advanced search filters, virtual tours, mortgage calculator, and agent management system.",
    tags: ["React", "Node.js", "PostgreSQL", "Maps API"],
    type: "Web App",
    icon: Globe,
    github: "https://github.com/aakashkumar/realestate-platform",
    demo: "#",
  },
  {
    title: "School Management System",
    description: "Comprehensive school ERP with student management, attendance tracking, grade reporting, and parent communication portal.",
    tags: ["Flutter", "React", "Firebase", "REST API"],
    type: "Full-Stack",
    icon: Layout,
    github: "https://github.com/aakashkumar/school-management",
    demo: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">My work</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto mt-4">
            A selection of projects I've built, showcasing my expertise in mobile and web development.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group p-6 rounded-2xl glass-card hover:border-primary/50 transition-all duration-300 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {project.type}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
                <Button variant="default" size="sm" asChild className="flex-1">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
