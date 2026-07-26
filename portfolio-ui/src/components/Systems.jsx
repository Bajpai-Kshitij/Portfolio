import { motion } from "framer-motion";

export default function Systems({ systems }) {
  return (
    <section
      id="systems"
      className="py-32 px-6 bg-gradient-to-b from-secondaryBg to-primaryBg"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm">
            Systems I've Built
          </p>

          <h2 className="text-5xl font-bold mt-5">
            Engineering Systems That Solved Real Problems
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {systems.map((system, index) => (

            <motion.div
              key={system.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .12 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 hover:border-cyan-400/30 transition"
            >

              <h3 className="text-2xl font-bold">
                {system.title}
              </h3>

              <p className="text-cyan-400 mt-2">
                {system.domain}
              </p>

              <div className="mt-8 space-y-6">

                <div>
                  <h4 className="font-semibold text-white">
                    Problem
                  </h4>

                  <p className="text-gray-400 mt-2">
                    {system.problem}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Solution
                  </h4>

                  <p className="text-gray-400 mt-2">
                    {system.solution}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Impact
                  </h4>

                  <p className="text-gray-400 mt-2">
                    {system.impact}
                  </p>
                </div>

              </div>

              <div className="flex flex-wrap gap-3 mt-8">

                {system.stack.map((tech) => (

                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}