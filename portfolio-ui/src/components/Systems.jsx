import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Systems({ systems }) {

  const [expanded, setExpanded] = useState(null);

  const toggleCard = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section
      id="systems"
      className="py-32 px-6 bg-gradient-to-b from-secondaryBg to-primaryBg"
    >
      <div className="max-w-7xl mx-auto">

        {/* ---------------- Heading ---------------- */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm">
            Systems I've Built
          </p>

          <h2 className="text-5xl font-bold mt-5">
            Production Systems & Engineering Case Studies
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-8">
            Production backend systems designed around reliability,
            scalability and operational ownership. Every system below
            represents a real engineering problem that I solved in
            production.
          </p>

        </div>

        {/* ---------------- Cards ---------------- */}

        <div className="grid lg:grid-cols-2 gap-10">

          {systems.map((system, index) => {

            const isOpen = expanded === index;

            return (

              <motion.div
                key={system.title}
                layout
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .45,
                  delay: index * .08
                }}
                className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-8
                    transition-all
                    hover:border-cyan-400/40
                    hover:shadow-[0_0_40px_rgba(34,211,238,.08)]
                "
              >

                {/* ---------- Title ---------- */}

                <div className="flex justify-between items-start gap-5">

                  <div>

                    <h3 className="text-2xl font-bold">
                      {system.title}
                    </h3>

                    <p className="text-cyan-400 mt-2">
                      {system.domain}
                    </p>

                  </div>

                </div>

                {/* ---------- Summary ---------- */}

                <p className="text-gray-400 mt-8 leading-8">
                  {system.summary}
                </p>

                {/* ---------- Quick Preview ---------- */}

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

                </div>

                {/* ---------- Tech ---------- */}

                <div className="flex flex-wrap gap-3 mt-8">

                  {system.stack.map((tech) => (

                    <span
                      key={tech}
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-cyan-500/10
                        border
                        border-cyan-500/20
                        text-cyan-300
                        text-sm
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* ---------- Expand Button ---------- */}

                <button
                  onClick={() => toggleCard(index)}
                  className="
                    mt-10
                    text-cyan-400
                    hover:text-cyan-300
                    transition
                    font-medium
                  "
                >
                  {isOpen
                    ? "Hide Engineering Story ↑"
                    : "Read Engineering Story →"}
                </button>

                <AnimatePresence>

                  {isOpen && (
                    <motion.div
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: .35 }}
                      className="overflow-hidden"
                    >
                                            <div className="mt-10 border-t border-white/10 pt-10 space-y-10">

                        {/* ---------- Architecture ---------- */}

                        {system.architecture && (

                          <div>

                            <h4 className="text-lg font-semibold text-white mb-5">
                              Architecture
                            </h4>

                            <div className="rounded-2xl bg-black/20 border border-white/10 p-5">

                              {system.architecture.map((step, idx) => (

                                <div
                                  key={idx}
                                  className="flex items-center"
                                >

                                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300 font-semibold">

                                    {idx + 1}

                                  </div>

                                  <div className="ml-5 flex-1">

                                    <p className="text-gray-300">
                                      {step}
                                    </p>

                                  </div>

                                </div>

                              ))}

                            </div>

                          </div>

                        )}

                        {/* ---------- Engineering Decisions ---------- */}

                        {system.decisions && (

                          <div>

                            <h4 className="text-lg font-semibold text-white mb-5">
                              Engineering Decisions
                            </h4>

                            <ul className="space-y-3">

                              {system.decisions.map((item) => (

                                <li
                                  key={item}
                                  className="flex items-start gap-3"
                                >

                                  <span className="text-cyan-400 mt-1">
                                    ✓
                                  </span>

                                  <span className="text-gray-300 leading-7">
                                    {item}
                                  </span>

                                </li>

                              ))}

                            </ul>

                          </div>

                        )}

                        {/* ---------- Challenges ---------- */}

                        {system.challenges && (

                          <div>

                            <h4 className="text-lg font-semibold text-white mb-5">
                              Challenges
                            </h4>

                            <ul className="space-y-3">

                              {system.challenges.map((item) => (

                                <li
                                  key={item}
                                  className="flex items-start gap-3"
                                >

                                  <span className="text-yellow-400 mt-1">
                                    ⚡
                                  </span>

                                  <span className="text-gray-300 leading-7">
                                    {item}
                                  </span>

                                </li>

                              ))}

                            </ul>

                          </div>

                        )}

                        {/* ---------- Impact ---------- */}

                        {system.results && (

                          <div>

                            <h4 className="text-lg font-semibold text-white mb-5">
                              Business Impact
                            </h4>

                            <ul className="space-y-3">

                              {system.results.map((item) => (

                                <li
                                  key={item}
                                  className="flex items-start gap-3"
                                >

                                  <span className="text-green-400 mt-1">
                                    ✔
                                  </span>

                                  <span className="text-gray-300 leading-7">
                                    {item}
                                  </span>

                                </li>

                              ))}

                            </ul>

                          </div>

                        )}

                        {/* ---------- Learnings ---------- */}

                        {system.learnings && (

                          <div>

                            <h4 className="text-lg font-semibold text-white mb-5">
                              Key Learnings
                            </h4>

                            <div className="rounded-2xl bg-cyan-500/5 border border-cyan-500/20 p-6">

                              <p className="text-gray-300 leading-8">
                                {system.learnings}
                              </p>

                            </div>

                          </div>

                        )}

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>

  );

}