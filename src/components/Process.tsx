const steps = [
  { num: "01", title: "Consultation", desc: "We study your requirements, review technical drawings, and discuss material specifications and tolerances." },
  { num: "02", title: "Prototyping", desc: "Rapid prototype development to validate designs before committing to full-scale production." },
  { num: "03", title: "Manufacturing", desc: "Precision machining using advanced CNC equipment with rigorous in-process quality checks." },
  { num: "04", title: "Testing & Delivery", desc: "Comprehensive inspection, assembly fitting, and reliable delivery to meet your production schedules." },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32 bg-steel-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20 animate-on-scroll fade-up">
          <span className="text-brand-400 text-sm font-semibold uppercase tracking-[0.2em]">How We Work</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            From Concept to Completion
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-steel-400 text-lg">
            Our streamlined process ensures precision at every stage, delivering results that exceed expectations.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block process-line" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {steps.map((step) => (
              <div key={step.num} className="animate-on-scroll fade-up text-center relative">
                <div className="relative z-10 w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-500/30">
                  <span className="font-heading font-bold text-xl">{step.num}</span>
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-steel-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
