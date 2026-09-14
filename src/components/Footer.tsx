import logo from "../assets/logo-text.png";
function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto container px-4 py-12">
        {/* Footer Main Content */}
        <div className="grid gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <img src={logo} alt="DevStack Logo" className="h-9 " />
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex gap-5">
              <a
                href="#"
                className="text-xs font-medium text-slate-600 hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-xs font-medium text-slate-600 hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-xs font-medium text-slate-600 hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="md:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-wide text-slate-800">
              Product
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="block text-xs text-slate-500 hover:text-pink-500"
              >
                Home
              </a>

              <a
                href="#"
                className="block text-xs text-slate-500 hover:text-pink-500"
              >
                Technologies
              </a>

              <a
                href="#"
                className="block text-xs text-slate-500 hover:text-pink-500"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="md:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-wide text-slate-800">
              Company
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="block text-xs text-slate-500 hover:text-pink-500"
              >
                About
              </a>

              <a
                href="#"
                className="block text-xs text-slate-500 hover:text-pink-500"
              >
                Contact
              </a>

              <a
                href="#"
                className="block text-xs text-slate-500 hover:text-pink-500"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="md:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-wide text-slate-800">
              Legal
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="block text-xs text-slate-500 hover:text-pink-500"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="block text-xs text-slate-500 hover:text-pink-500"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-10 border-t border-slate-100 pt-6">
          <div className="flex flex-col justify-between gap-3 text-xs text-slate-400 sm:flex-row">
            <p>© 2026 Dev Stack. All rights reserved.</p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-pink-500">
                Privacy
              </a>

              <a href="#" className="hover:text-pink-500">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
