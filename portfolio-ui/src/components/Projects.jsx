import { motion } from "framer-motion";

export default function Projects({ projects }) {
  return (
    <section
      id="projects"
      className="py-32 px-6 bg-gradient-to-b from-secondaryBg to-primaryBg"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Systems Built
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Production-Grade Execution
          </h2>

          {/* <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Real-world engineering across payments, distributed architecture,
            automation, and operational scalability.
          </p> */}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 shadow-xl overflow-hidden"
            >
              
              {/* Gradient Accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-3xl border border-cyan-400/0 group-hover:border-cyan-400/20 transition duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}