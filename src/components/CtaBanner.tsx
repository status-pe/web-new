export default function CtaBanner() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(13,71,161,0.92) 0%, rgba(25,118,210,0.88) 100%), url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80') center/cover no-repeat",
      }}
    >
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-on-scroll fade-up">
          Ready to Start Your Next Project?
        </h2>
        <p className="text-brand-100 text-lg mb-10 max-w-2xl mx-auto animate-on-scroll fade-up">
          Whether you need a single prototype or full-scale production, our team is ready to deliver precision-engineered solutions tailored to your requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll fade-up">
          <a href="#contact" className="btn-shine inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-700 font-bold rounded-lg transition-all hover:bg-brand-50 shadow-lg">
            Get a Free Quote
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="tel:+6597373178" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-all hover:bg-white/10">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
