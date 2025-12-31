import { Mail, Linkedin, Github, MapPin, Clock, ArrowUpRight } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "a7gautam@gmail.com",
    href: "mailto:a7gautam@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/aakash2398",
    href: "https://www.linkedin.com/in/aakash2398/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/aakash2398",
    href: "https://github.com/aakash2398",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">Let's connect</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mx-auto mt-4">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group p-6 rounded-2xl glass-card hover:border-primary/50 transition-all duration-300 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors flex items-center justify-center gap-1">
                  {item.value}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              </a>
            ))}
          </div>

          {/* Availability Notice */}
          <div className="p-6 rounded-2xl glass-card text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-foreground font-medium">Available for new projects</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>India (Remote Friendly)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>IST (UTC+5:30)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
