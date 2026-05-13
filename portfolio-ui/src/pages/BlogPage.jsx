import { Link } from "react-router-dom";
import blogPosts from "../data/blogIndex";

export default function BlogPage() {
  return (
    <section className="min-h-screen bg-primaryBg text-white px-6 py-24">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <Link
            to="/"
            className="text-cyan-400 hover:text-cyan-300 transition"
          >
            ← Back to Portfolio
          </Link>

          <h1 className="text-5xl md:text-7xl font-bold mt-6">
            Engineering Blog
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl">
            Weekly technical writing on backend systems, distributed
            architecture, engineering lessons, and scalable product thinking.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              to={`/blog/${post.meta.slug}`}
              className="block rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 hover:border-cyan-400/30 transition group"
            >
              
              {/* Meta */}
              <div className="flex flex-wrap gap-4 text-sm mb-4">
                <span className="text-cyan-400">
                  {post.meta.date}
                </span>

                {post.meta.readingTime && (
                  <span className="text-gray-500">
                    {post.meta.readingTime}
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold group-hover:text-cyan-300 transition">
                {post.meta.title}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-400 mt-4 leading-relaxed">
                {post.meta.excerpt}
              </p>

              {/* Tags */}
              {post.meta.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {post.meta.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}