import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import blogPosts from "../data/blogIndex";

export default function BlogPost() {
  const { slug } = useParams();

  const post = blogPosts.find(
    (entry) => entry.meta.slug === slug
  );

  if (!post) {
    return (
      <section className="min-h-screen bg-primaryBg text-white px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="text-cyan-400 hover:text-cyan-300 transition"
          >
            ← Back to Blog
          </Link>

          <h1 className="text-4xl font-bold mt-10">
            Post not found
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-primaryBg text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <Link
          to="/blog"
          className="text-cyan-400 hover:text-cyan-300 transition"
        >
          ← Back to Blog
        </Link>

        {/* Meta */}
        <div className="mt-8 flex flex-wrap gap-4 text-sm">
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
        <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
          {post.meta.title}
        </h1>

        {/* Excerpt */}
        <p className="text-xl text-gray-400 mt-6 leading-relaxed">
          {post.meta.excerpt}
        </p>

        {/* Tags */}
        {post.meta.tags?.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-6">
            {post.meta.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Blog Content */}
        <article className="prose prose-invert prose-lg max-w-none mt-14 prose-headings:font-bold prose-a:text-cyan-400 prose-code:text-cyan-300 prose-blockquote:border-cyan-500/40">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.blog}
          </ReactMarkdown>
        </article>
      </div>
    </section>
  );
}