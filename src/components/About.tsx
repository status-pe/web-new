/* eslint-disable @next/next/no-img-element */

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-steel-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="animate-on-scroll fade-up">
              <span className="text-brand-400 text-sm font-semibold uppercase tracking-[0.2em]">About Us</span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4 leading-tight">
                Your Trusted Precision Engineering Partner
              </h2>
              <div className="section-divider mb-8" />
            </div>
            <div className="space-y-5 animate-on-scroll fade-up">
              <p className="text-steel-300 leading-relaxed text-lg">
                At our core, we are a <strong className="text-white">precision engineering partner</strong> committed to bridge the gap between complex designs and high-performance reality. Specializing in <strong className="text-white">CNC Milling</strong>, we provide a comprehensive range of technical services as a one-stop solution.
              </p>
              <p className="text-steel-300 leading-relaxed">
                We pride ourselves on being a versatile resource for our clients, offering specialized support in <strong className="text-white">Prototyping, Reverse Engineering, and Engineering Consultation</strong>. Whether you are starting with a rough concept or need to recreate an existing component, our experienced team provides robust solutions tailored to your specific requirements.
              </p>
              <p className="text-steel-300 leading-relaxed">
                From meticulous <strong className="text-white">Testing and Assembly</strong> to final delivery, we ensure every product meets the highest standards of precision and functionality.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll fade-right">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-steel-800">
                <img src="https://images.unsplash.com/photo-1713371398485-7bde1bde9def?w=1200&q=80" alt="CNC Milling Machine in Operation" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-500 rounded-xl p-6 shadow-2xl max-w-[240px]">
                <div className="font-heading text-3xl font-bold">Since 2005</div>
                <div className="text-brand-100 text-sm mt-1">Delivering precision engineering excellence in Singapore</div>
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-brand-500/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
