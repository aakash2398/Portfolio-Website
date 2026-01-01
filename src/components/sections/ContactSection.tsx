import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";

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
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out!
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
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group p-6 rounded-2xl glass-card hover:border-primary/50 transition-all duration-300 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.label}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors flex items-center justify-center gap-1">
                  {item.value}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              </a>
            ))}
          </div>

          {/* Availability Notice */}
          <div className="p-6 rounded-2xl glass-card text-start hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center justify-start gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-foreground font-medium">
                Currently Available
              </span>
            </div>
            <h4 className="text-2xl mb-3">
              Let's Build Something Great Together!
            </h4>
            <p className="text-blue-50 mb-4 text-justify">
              I'm currently available for freelance projects and full-time
              opportunities. Whether you need a web application, mobile app, or
              technical consultation, I'm here to help bring your vision to
              life.
            </p>
            <div className="flex gap-3">
              <div className="w-40 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                Freelance
              </div>
              <div className="w-40 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                Full-time
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
