import { motion } from "framer-motion";

export default function Hero({ hero }) {
  return (
    <section className="min-h-screen flex items-center px-6 relative overflow-hidden bg-primaryBg">
      
      {/* Background */}
      <div className="absolute top-20 left-0 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-purple-500/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.7fr_1fr] gap-20 items-center relative z-10">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
        >
          <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-semibold">
            {hero.badge}
          </p>

          <h1 className="text-6xl lg:text-7xl font-black mt-5 leading-tight">
            {hero.name}
          </h1>

          <p className="text-2xl text-gray-300 mt-8 max-w-2xl leading-relaxed">
            {hero.headline}
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="/resume.pdf"
              download
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-7 py-3 rounded-full font-semibold transition"
            >
              Download Resume
            </a>

            <a
              href="#journey"
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black px-7 py-3 rounded-full font-semibold transition"
            >
              Explore Journey
            </a>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-10 mt-16 max-w-2xl">

            {hero.stats.map((item) => (

              <div key={item.label}>

                <h2 className="text-4xl font-bold text-cyan-400">
                  {item.number}
                </h2>

                <p className="text-gray-400 mt-2">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

          {/* Principles */}

          <div className="flex flex-wrap gap-4 mt-14">

            {hero.principles.map((item) => (

              <div
                key={item}
                className="px-5 py-3 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-300"
              >
                {item}
              </div>

            ))}

          </div>

          {/* Quote */}

          <blockquote className="mt-14 border-l-4 border-cyan-400 pl-6 text-xl italic text-gray-300 leading-relaxed max-w-3xl">
            "{hero.quote}"
          </blockquote>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: .92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-2xl scale-110"></div>

            <img
              src={hero.image.src}
              alt={hero.image.alt}
              className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border border-white/10 shadow-2xl"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}