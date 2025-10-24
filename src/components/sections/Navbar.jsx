export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-40">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Name */}
          <a
            className="text-xl font-semibold tracking-tight text-gray-800"
            href="/"
          >
            Lara Merican
          </a>

          {/* Navigation links */}
          <div className="hidden space-x-8 text-sm text-gray-600 md:flex">
            <a href="/projects" className="transition hover:text-black">
              Projects
            </a>
            <a href="/about-me" className="transition hover:text-black">
              About Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
