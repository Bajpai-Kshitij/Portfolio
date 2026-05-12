import { FiMail, FiLinkedin, FiPhone, FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Contact({ personal, contact }) {
  return (
    <section
      id="contact"
      className="py-32 px-6 bg-primaryBg relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Let’s Build
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Let’s Engineer Something Meaningful
          </h2>

          <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto leading-relaxed">
            Open to backend engineering, distributed systems, scalable
            architecture, and building products that solve meaningful problems.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          
          <a
            href={`mailto:${contact.email}`}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 hover:border-cyan-400/30 transition group"
          >
            <FiMail className="mx-auto text-3xl text-cyan-400 mb-4 group-hover:scale-110 transition" />
            <p className="font-semibold">Email</p>
            <p className="text-gray-400 mt-2 break-all">{contact.email}</p>
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 hover:border-cyan-400/30 transition group"
          >
            <FiLinkedin className="mx-auto text-3xl text-cyan-400 mb-4 group-hover:scale-110 transition" />
            <p className="font-semibold">LinkedIn</p>
            <p className="text-gray-400 mt-2">Professional Network</p>
          </a>

          <a
            href={`tel:${contact.phone}`}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 hover:border-cyan-400/30 transition group"
          >
            <FiPhone className="mx-auto text-3xl text-cyan-400 mb-4 group-hover:scale-110 transition" />
            <p className="font-semibold">Phone</p>
            <p className="text-gray-400 mt-2">{contact.phone}</p>
          </a>
        </div>

        {/* Resume CTA */}
        <div className="mt-14">
          <a
            href={personal.resumeLink}
            download
            className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-full font-bold text-lg transition"
          >
            <FiDownload />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}