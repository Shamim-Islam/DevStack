import bannerStack from "../assets/banner-stack.png";

function Banner() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid container grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-7xl">
            Build Your Ideal
            <span className="block bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-6 text-slate-500 md:text-base">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="rounded-md bg-linear-to-r from-orange-500 to-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center md:justify-end">
          <div className="flex items-center justify-center ">
            <img src={bannerStack} alt="Banner Stack" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
