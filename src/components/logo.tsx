import { motion } from "motion/react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      className={`flex items-center gap-3 ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative w-12 h-12">
        {/* Animated geometric logo */}
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          
          {/* Outer rotating hexagon */}
          <motion.path
            d="M24 2L42 13V35L24 46L6 35V13L24 2Z"
            stroke="url(#logoGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, rotate: 0 }}
            animate={{ pathLength: 1, rotate: 360 }}
            transition={{ 
              pathLength: { duration: 2, ease: "easeInOut" },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
            style={{ originX: "24px", originY: "24px" }}
          />
          
          {/* Inner filled shape */}
          <motion.path
            d="M24 6L38 14.5V31.5L24 40L10 31.5V14.5L24 6Z"
            fill="url(#logoGradient)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ originX: "24px", originY: "24px" }}
          />
          
          {/* Letter A */}
          <motion.path
            d="M24 16L29 30H26.5L25.5 27H22.5L21.5 30H19L24 16Z M23 24.5H25L24 21.5L23 24.5Z"
            fill="white"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
        </svg>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
      
      <div className="relative">
        <motion.span 
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{ backgroundSize: "200% 200%" }}
        >
          Aakash
        </motion.span>
      </div>
    </motion.div>
  );
}