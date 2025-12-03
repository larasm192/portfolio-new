import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-100 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 md:px-24">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="w-16">
            <img src="/lara-logo.svg" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden space-x-8 text-sm text-gray-600 md:flex">
            <a href="/projects" className="transition hover:text-orange-500">
              Projects
            </a>
            <a href="/about-me" className="transition hover:text-orange-500">
              About Me
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="flex items-center justify-center p-2 text-gray-700 hover:text-black md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-gray-700 transition ${open ? "translate-y-1.5 rotate-45" : ""}`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-gray-700 transition ${open ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-gray-700 transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="space-y-2 pt-2 pb-4 text-sm text-gray-700 md:hidden">
            <a
              href="/projects"
              className="block rounded px-2 py-2 hover:bg-gray-100"
            >
              Projects
            </a>
            <a
              href="/about-me"
              className="block rounded px-2 py-2 hover:bg-gray-100"
            >
              About Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
