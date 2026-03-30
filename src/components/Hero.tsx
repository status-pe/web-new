const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "0.01mm", label: "Tolerance Precision" },
  { value: "100%", label: "Quality Commitment" },
];

export default function Hero() {
  return (
    <section className="hero-bg grid-pattern relative min-h-screen flex items-center">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <svg viewBox="0 0 800 800" className="w-full h-full">
          <circle cx="400" cy="400" r="300" fill="none" stroke="#42a5f5" strokeWidth="0.5" opacity="0.3" />
          <circle cx="400" cy="400" r="200" fill="none" stroke="#42a5f5" strokeWidth="0.5" opacity="0.2" />
          <circle cx="400" cy="400" r="100" fill="none" stroke="#42a5f5" strokeWidth="0.5" opacity="0.1" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/10 border border-brand-500/20 rounded-full mb-8 animate-[fadeIn_0.8s_ease-out_0.2s_both]">
            <div className="w-2 h-2 bg-brand-400 rounded-full animate-pulse" />
            <span className="text-brand-300 text-sm font-medium tracking-wide">
              Singapore&apos;s Trusted Precision Partner
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
            Engineering Precision,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-200">
              Delivering Excellence
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-steel-300 leading-relaxed max-w-2xl mb-10 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
            Your one-stop precision engineering solutions partner. From CNC machining to surface treatment, we bridge the gap between complex designs and high-performance reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
            <a href="#services" className="btn-shine inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-all group">
              Explore Our Services
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-steel-600 hover:border-steel-400 text-white font-semibold rounded-lg transition-all hover:bg-white/5">
              Request a Quote
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pt-10 border-t border-white/10 animate-[fadeInUp_0.8s_ease-out_1s_both]">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-heading text-3xl lg:text-4xl font-bold stat-number">{stat.value}</div>
              <div className="text-steel-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-xs tracking-[0.3em] uppercase text-steel-400">Scroll</span>
        <div className="w-5 h-8 border border-steel-500 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-brand-400 rounded-full mt-1.5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
