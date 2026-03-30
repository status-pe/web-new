/* eslint-disable @next/next/no-img-element */

const capabilities = [
  {
    title: "Precision Manufacturing",
    desc: "CNC Milling, Turning, Precision Grinding, Waterjet Cutting, Laser Cutting and Wire Cutting. Multi-axis capabilities for the most complex geometries.",
    icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085",
  },
  {
    title: "End-to-End Development",
    desc: "From initial consultation to prototyping and full-scale production. We handle every stage of your project lifecycle seamlessly.",
    icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z",
  },
  {
    title: "Quality Assurance",
    desc: "Rigorous testing and assembly fitting for complex components. Every part undergoes comprehensive inspection to meet exact specifications.",
    icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",
  },
  {
    title: "Innovation Support",
    desc: "Expert reverse engineering and process improvement. We help you optimize designs and manufacturing processes for better outcomes.",
    icon: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 lg:py-32 bg-steel-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="animate-on-scroll fade-up sticky top-32">
              <span className="text-brand-400 text-sm font-semibold uppercase tracking-[0.2em]">Core Capabilities</span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4 leading-tight">
                Built for Precision,<br />Designed for Performance
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-steel-300 text-lg leading-relaxed mb-8">
                Our mission is to deliver more than just a finished part. We provide the technical reliability and manufacturing expertise necessary to drive your projects forward.
              </p>
              <a href="#contact" className="btn-shine inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-all group">
                Discuss Your Project
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <div className="mt-10 rounded-xl overflow-hidden border border-steel-700/30">
                <img src="https://images.unsplash.com/photo-1758873263428-f4b2edb45fe1?w=800&q=80" alt="Precision Machined Components" className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>

          <div className="space-y-4 stagger-children">
            {capabilities.map((cap) => (
              <div key={cap.title} className="capability-card animate-on-scroll fade-right bg-steel-800/50 rounded-xl p-8 border border-steel-700/50">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-brand-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={cap.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-2">{cap.title}</h3>
                    <p className="text-steel-400 leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
