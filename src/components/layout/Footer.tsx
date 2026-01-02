// import { Github, Linkedin, Mail, Heart } from "lucide-react";

// export function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="py-12 border-t border-border/50">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//           {/* Logo & Copyright */}
//           <div className="text-center md:text-left">
//             <a href="#home" className="text-2xl font-bold gradient-text mb-2 inline-block">
//               AK
//             </a>
//             <p className="text-sm text-muted-foreground">
//               © {currentYear} Aakash Kumar. All rights reserved.
//             </p>
//           </div>

//           {/* Built With */}
//           <p className="text-sm text-muted-foreground flex items-center gap-1">
//             Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React & Tailwind
//           </p>

//           {/* Social Links */}
//           <div className="flex items-center gap-4">
//             <a
//               href="https://github.com/aakashkumar"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
//               aria-label="GitHub"
//             >
//               <Github className="w-5 h-5" />
//             </a>
//             <a
//               href="https://linkedin.com/in/aakashkumar"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
//               aria-label="LinkedIn"
//             >
//               <Linkedin className="w-5 h-5" />
//             </a>
//             <a
//               href="mailto:aakashkumar.dev@gmail.com"
//               className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
//               aria-label="Email"
//             >
//               <Mail className="w-5 h-5" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


import { Logo } from "../logo.tsx";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-0">
          {/* Logo and Description */}
          <div>
            <Logo className="mb-4" />
            <p className="text-muted-foreground mb-4">
              Full Stack Web & Flutter Developer passionate about creating 
              exceptional digital experiences.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/aakash2398"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/aakash2398/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:a7gautam@gmail.com"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className=" mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className=" text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>API Development</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        {/* <div className="pt-8 border-t border-gray-800 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Aakash. Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and React
          </p>
        </div> */}
      </div>
    </footer>
  );
}
