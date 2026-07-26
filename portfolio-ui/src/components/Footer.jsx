export default function Footer({ footer, personal }) {
  return (
    <footer className="border-t border-white/10 bg-primaryBg py-10">

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">

        <div>

          <h3 className="text-2xl font-bold">
            Kshitij Bajpai
          </h3>

          <p className="text-gray-400 mt-2">
            {footer.tagline}
          </p>

        </div>

        <div className="flex gap-8 text-gray-400">

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>

          <a
            href={`mailto:${personal.email}`}
            className="hover:text-cyan-400 transition"
          >
            Email
          </a>

        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-10">

        {footer.copyright}

        <br />

        Built with{" "}

        {footer.builtWith.join(" • ")}

      </div>

    </footer>
  );
}