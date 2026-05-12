import { motion } from "framer-motion";

export default function Timeline({ timeline }) {
  const sectionHeight = timeline.length * 420;

  return (
    <section
      id="timeline"
      className="relative py-32 px-6 bg-gradient-to-b from-primaryBg to-secondaryBg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            My Journey
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Engineering Through Time
          </h2>

          {/* <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            From academic foundations to distributed systems engineering —
            a vertically evolving timeline of technical growth.
          </p> */}
        </div>

        <div className="relative">
          
          {/* Larger Vertical Sine Wave */}
          <svg
            className="absolute left-1/2 top-0 -translate-x-1/2 hidden md:block"
            width="700"
            height={sectionHeight + 240}
            viewBox={`0 0 700 ${sectionHeight + 240}`}
            fill="none"
          >
            <path
              d={generateSinePath(timeline.length)}
              stroke="url(#gradient)"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />

            {/* Dotted Origin */}
            <line
              x1="350"
              y1={sectionHeight}
              x2="350"
              y2={sectionHeight + 180}
              stroke="#6B7280"
              strokeWidth="3"
              strokeDasharray="8 10"
            />

            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="700" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Timeline */}
          <div className="space-y-20 relative">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  
                  {/* Timeline Node */}
                  <div
                    className={`absolute md:left-1/2 md:-translate-x-1/2 top-16 w-5 h-5 rounded-full border-4 border-primaryBg z-20 ${
                      item.type === "education"
                        ? "bg-purple-400 shadow-lg shadow-purple-500/40"
                        : "bg-cyan-400 shadow-lg shadow-cyan-500/40"
                    }`}
                  ></div>

                  {/* Timeline Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                    className={`group w-full md:w-[40%] min-h-[280px] rounded-3xl border backdrop-blur-lg p-6 ${
                      item.type === "education"
                        ? "border-purple-400/20 bg-purple-500/5"
                        : "border-cyan-400/20 bg-white/5"
                    } ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}
                  >
                    
                    {/* Type + Duration */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-[10px] uppercase tracking-[0.3em] font-bold ${
                          item.type === "education"
                            ? "text-purple-300"
                            : "text-cyan-300"
                        }`}
                      >
                        {item.type}
                      </span>

                      <span className="text-cyan-400 text-xs font-semibold tracking-widest">
                        {item.duration}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mt-2 group-hover:text-2xl transition-all duration-300">
                      {item.title}
                    </h3>

                    {/* Organization */}
                    <p
                      className={`text-sm mt-1 font-medium ${
                        item.type === "education"
                          ? "text-purple-300"
                          : "text-cyan-300"
                      }`}
                    >
                      {item.organization}
                    </p>

                    {/* Location */}
                    <p className="text-gray-500 text-xs mt-1">
                      {item.location}
                    </p>

                    {/* Description Points */}
                    <ul className="mt-5 space-y-3 text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-all duration-300">
                      {Array.isArray(item.description) ? (
                        item.description.map((point, i) => (
                          <li key={i} className="flex gap-3">
                            <span
                              className={`mt-1 ${
                                item.type === "education"
                                  ? "text-purple-300"
                                  : "text-cyan-300"
                              }`}
                            >
                              •
                            </span>
                            <span>{point}</span>
                          </li>
                        ))
                      ) : (
                        <li className="flex gap-3">
                          <span
                            className={`mt-1 ${
                              item.type === "education"
                                ? "text-purple-300"
                                : "text-cyan-300"
                            }`}
                          >
                            •
                          </span>
                          <span>{item.description}</span>
                        </li>
                      )}
                    </ul>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Origin */}
          <div className="text-center mt-28">
            <div className="w-4 h-4 rounded-full bg-gray-500 mx-auto mb-4"></div>

            <p className="text-gray-500 uppercase tracking-[0.3em] text-xs">
              27 June 1997
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function generateSinePath(count) {
  let path = `M 350 0 `;
  const amplitude = 240;
  const segment = 420;

  for (let i = 0; i < count; i++) {
    const startY = i * segment;
    const endY = (i + 1) * segment;

    path += `
      C ${350 + amplitude} ${startY + segment * 0.25},
        ${350 - amplitude} ${startY + segment * 0.75},
        350 ${endY}
    `;
  }

  return path;
}