import { motion } from "framer-motion";

export default function Skills({ skills }) {
  return (
    <section
      id="skills"
      className="py-32 px-6 bg-primaryBg relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Technical Ecosystem
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Skill Constellations
          </h2>

          {/* <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Structured around interconnected engineering domains.
          </p> */}
        </div>

        {/* Clusters */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-24">
          {skills.map((cluster, index) => {
            const radius = 130;
            const items = cluster.items.slice(0, 8);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-[360px] h-[360px] mx-auto"
              >
                
                {/* Center Bubble */}
                <div className="absolute top-1/2 left-1/2 w-28 h-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 backdrop-blur-lg flex items-center justify-center text-center px-3 text-lg font-bold text-cyan-300 z-20">
                  {cluster.cluster}
                </div>

                {/* Petals */}
                {items.map((skill, i) => {
                  const angle = (i / items.length) * 2 * Math.PI;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <div key={i}>
                      
                      {/* Connection Line */}
                      <div
                        className="absolute top-1/2 left-1/2 origin-left h-[2px] bg-cyan-500/20"
                        style={{
                          width: `${radius}px`,
                          transform: `translateY(-50%) rotate(${angle}rad)`
                        }}
                      ></div>

                      {/* Skill Bubble */}
                      <motion.div
                        whileHover={{
                          scale: 1.55
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 14
                        }}
                        className="absolute w-20 h-20 rounded-full bg-secondaryBg border border-white/10 flex items-center justify-center text-center text-xs text-gray-300 px-2 cursor-pointer hover:text-cyan-300 hover:border-cyan-400/40"
                        style={{
                          left: `calc(50% + ${x}px - 40px)`,
                          top: `calc(50% + ${y}px - 40px)`
                        }}
                      >
                        {skill}
                      </motion.div>
                    </div>
                  );
                })}

                {/* Outer Orbit */}
                <div className="absolute inset-[50px] rounded-full border border-cyan-500/10"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}