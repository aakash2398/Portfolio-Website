import { Github, Linkedin, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile1.png";
import resumefile from"@/assets/Aakash Kumar Resume.pdf";

export function HeroSection() {
  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow animation-delay-300" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative opacity-0 animate-fade-up">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glow-effect">
              <div className="absolute inset-0 gradient-border rounded-full" />
              <img
                src={profileImage}
                alt="Aakash Kumar - Flutter Developer"
                className="w-full h-full object-cover rounded-full p-1 dark:image-background-color-dark"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/30 rounded-full blur-xl animate-float animation-delay-200" />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <p className="text-primary font-mono text-sm md:text-base mb-4 opacity-0 animate-fade-up animation-delay-100">
              👋 Hello, I'm
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0 animate-fade-up animation-delay-200">
              Aakash Kumar
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 opacity-0 animate-fade-up animation-delay-300">
              <span className="gradient-text">Flutter Developer</span>
              <span className="text-muted-foreground"> | </span>
              <span className="gradient-text">Full-Stack Web Developer</span>
            </h2>

            <p className="text-muted-foreground text-lg md:text-xl mb-8 opacity-0 animate-fade-up animation-delay-400">
              Building scalable, high-performance mobile and web applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8 opacity-0 animate-fade-up animation-delay-500">
              <Button variant="hero" size="lg" asChild>
                <a href={resumefile} download>
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                onClick={handleScrollToContact}
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start opacity-0 animate-fade-up animation-delay-500">
              <a
                href="https://github.com/aakash2398"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/aakash2398/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
