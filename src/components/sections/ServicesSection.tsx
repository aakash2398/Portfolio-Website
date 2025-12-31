import { 
  Smartphone, 
  Globe, 
  Database, 
  Layout, 
  Plug, 
  Settings,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Flutter App Development",
    description: "Cross-platform mobile apps for Android & iOS with beautiful UI, smooth animations, and native performance.",
    features: ["Cross-platform", "Native Performance", "Clean Architecture"],
  },
  {
    icon: Globe,
    title: "Full-Stack Web Development",
    description: "Modern, responsive web applications with React, TypeScript, and scalable backend solutions.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
  },
  {
    icon: Database,
    title: "Firebase Backend",
    description: "Complete backend solutions with Firebase including authentication, real-time database, and cloud functions.",
    features: ["Authentication", "Real-time Data", "Cloud Functions"],
  },
  {
    icon: Layout,
    title: "Admin Panels & Dashboards",
    description: "Custom admin interfaces and data dashboards with analytics, reporting, and content management.",
    features: ["Data Visualization", "Role Management", "Analytics"],
  },
  {
    icon: Plug,
    title: "API Integration",
    description: "Seamless integration of third-party APIs, payment gateways, and external services.",
    features: ["REST APIs", "Payment Gateways", "Social Auth"],
  },
  {
    icon: Settings,
    title: "App Optimization & Maintenance",
    description: "Performance optimization, bug fixes, feature updates, and ongoing technical support.",
    features: ["Performance Tuning", "Bug Fixes", "Updates"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">What I offer</p>
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle mx-auto mt-4">
            Professional development services tailored to bring your ideas to life.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 rounded-2xl glass-card hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Hover Arrow */}
                {/* <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
