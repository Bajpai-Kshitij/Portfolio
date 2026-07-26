import { motion } from "framer-motion";

export default function EngineeringExpertise({ expertise }) {
  return (
    <section
      id="expertise"
      className="py-28 px-6 bg-primaryBg"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-3xl mx-auto mb-20">

          <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-semibold">
            Engineering Expertise
          </p>

          <h2 className="text-5xl font-bold mt-5">
            Technologies I Build With
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            My experience spans backend development, distributed systems,
            databases, cloud infrastructure, and production reliability.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {expertise.map((area, index) => (

            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 hover:border-cyan-400/30 transition-all"
            >

              <h3 className="text-2xl font-bold text-cyan-300">
                {area.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-relaxed">
                {area.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-8">

                {area.skills.map((skill) => (

                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-sm"
                  >
                    {skill}
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