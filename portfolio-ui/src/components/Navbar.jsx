import { useEffect, useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ data }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (target) => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div
          className={`font-bold tracking-wide transition-all duration-300 ${
            scrolled ? "text-xl" : "text-2xl"
          }`}
        >
          {data.personal.name}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {data.navbar.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.target)}
              className="text-sm hover:text-cyan-400 transition"
            >
              {item.label}
            </button>
          ))}

          <a
            href={data.personal.resumeLink}
            download
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-2 rounded-full font-semibold transition"
          >
            <FiDownload />
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 px-6 py-4 flex flex-col gap-4">
          {data.navbar.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.target)}
              className="text-left hover:text-cyan-400 transition"
            >
              {item.label}
            </button>
          ))}

          <a
            href={data.personal.resumeLink}
            download
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-2 rounded-full font-semibold w-fit"
          >
            <FiDownload />
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}