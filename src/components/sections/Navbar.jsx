import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 md:px-40">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <a
            className="text-xl font-semibold tracking-tight text-gray-800"
            href="/"
          >
            Lara Merican
          </a>

          {/* Desktop Nav */}
          <div className="hidden space-x-8 text-sm text-gray-600 md:flex">
            <a href="/projects" className="transition hover:text-black">
              Projects
            </a>
            <a href="/about-me" className="transition hover:text-black">
              About Me
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center p-2 text-gray-700 hover:text-black"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-gray-700 transition ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-700 transition ${open ? "opacity-0" : ""}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-700 transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4 pt-2 space-y-2 text-gray-700 text-sm">
            <a
              href="/projects"
              className="block px-2 py-2 rounded hover:bg-gray-100"
            >
              Projects
            </a>
            <a
              href="/about-me"
              className="block px-2 py-2 rounded hover:bg-gray-100"
            >
              About Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
