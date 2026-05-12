import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Hero({ data }) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full top-20 left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500/10 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm">
            Backend Systems Engineer
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            {data.personal.name}
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mt-4 font-semibold">
            {data.personal.title}
          </h2>

          <p className="text-gray-400 text-lg mt-6 max-w-xl leading-relaxed">
            {data.personal.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href={data.personal.resumeLink}
              download
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold transition"
            >
              Download Resume
            </a>

            <a
              href="#timeline"
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black px-6 py-3 rounded-full font-semibold transition"
            >
              Explore Journey
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-5 mt-8 text-2xl text-gray-300">
            <a
              href={data.personal.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FiGithub />
            </a>

            <a
              href={data.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FiLinkedin />
            </a>

            <a
              href={`mailto:${data.personal.email}`}
              className="hover:text-cyan-400 transition"
            >
              <FiMail />
            </a>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">
            
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-pulse scale-110"></div>

            {/* Profile Placeholder */}
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border border-white/10 shadow-2xl relative">
                <img
                    src={data.personal.heroImage}
                    alt={data.personal.name}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primaryBg/30 to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce">
        ↓
      </div>
    </section>
  );
}