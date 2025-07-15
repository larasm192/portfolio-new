export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Name */}
          <div className="text-xl font-semibold tracking-tight text-gray-800">
            Lara Merican
          </div>

          {/* Navigation links */}
          <div className="hidden space-x-8 text-sm text-gray-600 md:flex">
            <a href="#about" className="transition hover:text-black">
              About
            </a>
            <a href="#projects" className="transition hover:text-black">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-black">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
