function Navbar() {
  return (
    <nav className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-linear-to-r from-purple-500 to-pink-500 text-xs font-bold text-white">
            DS
          </div>

          <h2 className="text-base font-bold text-slate-900">
            Dev <span className="text-pink-500">Stack</span>
          </h2>
        </div>

        {/* Navigation Links */}
        <div className="hidden items-center gap-7 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-pink-500"
          >
            Home
          </a>

          <a
            href="#"
            className="text-sm font-medium text-slate-500 transition hover:text-pink-500"
          >
            Technologies
          </a>

          <a
            href="#"
            className="text-sm font-medium text-slate-500 transition hover:text-pink-500"
          >
            Projects
          </a>

          <a
            href="#"
            className="text-sm font-medium text-slate-500 transition hover:text-pink-500"
          >
            About
          </a>

          <a
            href="#"
            className="text-sm font-medium text-slate-500 transition hover:text-pink-500"
          >
            Contact
          </a>
        </div>

        {/* Authentication */}
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-slate-600 transition hover:text-pink-500">
            Sign In
          </button>

          <button className="rounded-full bg-pink-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-pink-600">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;