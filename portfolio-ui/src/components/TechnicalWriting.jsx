import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import blogPosts from "../data/blogIndex";

export default function TechnicalWriting() {
  const posts = blogPosts.slice(0, 4);

  return (
    <section
      id="writing"
      className="py-28 px-6 bg-secondaryBg"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-semibold">
            Technical Writing
          </p>

          <h2 className="text-5xl font-bold mt-5">
            Sharing What I Learn
          </h2>

          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            I write about backend engineering, distributed systems,
            Java internals, databases and production lessons learned
            while building real-world software.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {posts.map(({ meta }) => (

            <motion.div
              key={meta.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg hover:border-cyan-400/30 transition"
            >

              <div className="flex items-center justify-between text-sm text-gray-400">

                <span>
                  {meta.date}
                </span>

                <span>
                  {meta.readingTime}
                </span>

              </div>

              <h3 className="text-2xl font-bold mt-5">
                {meta.title}
              </h3>

              <p className="mt-5 text-gray-400 leading-7">
                {meta.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">

                {meta.tags.map((tag) => (

                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm border border-cyan-500/20 bg-cyan-500/10 text-cyan-300"
                  >
                    {tag}
                  </span>

                ))}

              </div>

              <Link
                to={`/blog/${meta.slug}`}
                className="inline-flex items-center gap-2 mt-8 text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                Read Article →
              </Link>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}