import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Timeline({ timeline }) {
  const WAVE_AMPLITUDE = 210;

  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerHeight(entry.contentRect.height);
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="journey"
      className="relative py-32 px-6 bg-gradient-to-b from-primaryBg to-secondaryBg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            My Journey
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Engineering Journey
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed">
            Building reliable backend systems across fintech, logistics and
            enterprise software while continuously growing as an engineer.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Curve — height now driven by measured container height */}
          {containerHeight > 0 && (
            <svg
              className="absolute left-1/2 top-0 -translate-x-1/2 hidden md:block pointer-events-none"
              width="700"
              height={containerHeight}
              viewBox={`0 0 700 ${containerHeight}`}
              fill="none"
            >
              <path
                d={generateSinePath(
                  timeline.length,
                  containerHeight,
                  WAVE_AMPLITUDE
                )}
                stroke="url(#gradient)"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
              />

              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="700" y2="100%">
                  <stop offset="0%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          )}

          {/* Timeline */}
          <div
            ref={containerRef}
            className="relative"
            style={{
              display: "grid",
              rowGap: `80px`,
            }}
          >
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute md:left-1/2 md:-translate-x-1/2 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-4 border-primaryBg z-20 ${
                      item.type === "education"
                        ? "bg-purple-400 shadow-[0_0_18px_rgba(192,132,252,0.45)]"
                        : "bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.45)]"
                    }`}
                  />

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.02,
                      y: -6,
                    }}
                    transition={{ duration: 0.35 }}
                    className={`group w-full md:w-[40%] min-h-[340px] rounded-3xl border backdrop-blur-lg p-7 ${
                      item.type === "education"
                        ? "border-purple-400/20 bg-purple-500/5"
                        : "border-cyan-400/20 bg-white/5"
                    } ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}
                  >
                    {/* Type + Duration */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[10px] uppercase tracking-[0.35em] font-bold ${
                          item.type === "education"
                            ? "text-purple-300"
                            : "text-cyan-300"
                        }`}
                      >
                        {item.type}
                      </span>

                      <span className="text-cyan-400 text-xs font-semibold tracking-wider">
                        {item.duration}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mt-4">{item.title}</h3>

                    {/* Organization */}
                    <p
                      className={`mt-2 font-medium ${
                        item.type === "education"
                          ? "text-purple-300"
                          : "text-cyan-300"
                      }`}
                    >
                      {item.organization}
                    </p>

                    {/* Location */}
                    {item.type === "experience" && (
                      <p className="text-gray-500 text-sm mt-1">
                        {item.location}
                      </p>
                    )}

                    {item.type === "experience" ? (
                      <div className="mt-8 space-y-7">
                        <div>
                          <h4 className="text-xs uppercase tracking-[0.3em] text-cyan-300 font-semibold mb-3">
                            Ownership
                          </h4>

                          <div className="flex flex-wrap gap-2">
                            {item.ownership.map((area) => (
                              <span
                                key={area}
                                className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs"
                              >
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="border-t border-white/10 pt-5" />

                        <div>
                          <h4 className="text-xs uppercase tracking-[0.3em] text-cyan-300 font-semibold mb-3">
                            Engineering Highlights
                          </h4>

                          <ul className="space-y-3 text-sm text-gray-400 leading-relaxed">
                            {item.highlights.map((point) => (
                              <li key={point} className="flex gap-3">
                                <span className="text-cyan-400">✓</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <ul className="mt-8 space-y-3 text-sm text-gray-400 leading-relaxed">
                        {item.description.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span className="text-purple-300">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Connector to Origin */}
        <div className="hidden md:flex justify-center">
          <div className="h-20 border-l-2 border-dashed border-gray-500"></div>
        </div>

        {/* Origin */}
        <div className="text-center mt-6">
          <div className="w-4 h-4 rounded-full bg-gray-500 mx-auto mb-4"></div>

          <p className="text-gray-500 uppercase tracking-[0.3em] text-xs">
            Born 1997
          </p>
        </div>
      </div>
    </section>
  );
}

function generateSinePath(count, totalHeight, amplitude) {
  if (count <= 0 || totalHeight <= 0) return "";

  const segment = totalHeight / count;

  // Amplitude at each node (0..count). Every node keeps full amplitude
  // so joints stay tangent-continuous — only the final node (the very
  // end point) tapers to 0, flattening the curve smoothly within the
  // last segment instead of creating a kink at its start.
  const nodeAmp = Array.from({ length: count + 1 }, (_, i) =>
    i === count ? 0 : amplitude
  );

  let path = `M 350 0`;

  for (let i = 0; i < count; i++) {
    const startY = i * segment;
    const endY = (i + 1) * segment;

    const ampStart = nodeAmp[i];
    const ampEnd = nodeAmp[i + 1];

    path += `
      C ${350 + ampStart} ${startY + segment * 0.25},
        ${350 - ampEnd} ${startY + segment * 0.75},
        350 ${endY}
    `;
  }

  return path;
}