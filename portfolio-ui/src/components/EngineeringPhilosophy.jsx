import { motion } from "framer-motion";

export default function EngineeringPhilosophy({ philosophy }) {
  return (
    <section
      id="engineering"
      className="py-32 px-6 bg-gradient-to-b from-primaryBg to-secondaryBg"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-4xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-semibold">
            {philosophy.badge}
          </p>

          <h2 className="text-5xl font-bold mt-5">
            {philosophy.title}
          </h2>

          <p className="mt-8 text-xl text-gray-400 leading-relaxed">
            {philosophy.description}
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {philosophy.cards.map((card, index) => (

            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg hover:border-cyan-400/30 transition"
            >

              <h3 className="text-2xl font-bold text-cyan-300">
                {card.title}
              </h3>

              <p className="text-gray-400 mt-6 leading-8">
                {card.description}
              </p>

            </motion.div>

          ))}

        </div>

        <blockquote className="mt-20 border-l-4 border-cyan-400 pl-8 text-2xl italic text-gray-300 max-w-4xl">
          "{philosophy.quote}"
        </blockquote>

      </div>
    </section>
  );
}