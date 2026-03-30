export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-steel-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="animate-on-scroll fade-left">
            <span className="text-brand-400 text-sm font-semibold uppercase tracking-[0.2em]">Get In Touch</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4 leading-tight">
              Let&apos;s Build Something Precise
            </h2>
            <div className="section-divider mb-8" />
            <p className="text-steel-300 text-lg leading-relaxed mb-10">
              Send us your requirements or technical drawings and our engineering team will get back to you with a detailed quotation.
            </p>

            <div className="space-y-6">
              <ContactItem
                icon={<><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></>}
                title="Address"
              >
                <a href="https://www.google.com/maps/search/?api=1&query=Blk+9010+Tampines+Street+93+%2301-137+Singapore+528844" target="_blank" rel="noopener noreferrer" className="text-steel-400 text-sm hover:text-brand-400 transition-colors">Blk 9010, Tampines Street 93,<br />#01-137, Singapore 528844</a>
              </ContactItem>

              <ContactItem
                icon={<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />}
                title="Phone"
              >
                <a href="tel:+6597373178" className="text-steel-400 text-sm hover:text-brand-400 transition-colors">+65 9737 3178</a>
              </ContactItem>

              <ContactItem
                icon={<path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />}
                title="Email"
              >
                <a href="mailto:damien.ang@statuspe.com.sg" className="text-steel-400 text-sm hover:text-brand-400 transition-colors">damien.ang@statuspe.com.sg</a>
              </ContactItem>
            </div>
          </div>

          <div className="animate-on-scroll fade-right">
            <form className="bg-steel-800/50 rounded-2xl p-8 border border-steel-700/50 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <FormField label="Full Name" type="text" placeholder="Your name" />
                <FormField label="Company" type="text" placeholder="Company name" />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <FormField label="Email" type="email" placeholder="you@company.com" />
                <FormField label="Phone" type="tel" placeholder="+65" />
              </div>
              <div>
                <label className="block text-sm font-medium text-steel-300 mb-2">Service Required</label>
                <select className="w-full px-4 py-3 bg-steel-900 border border-steel-700 rounded-lg text-steel-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors text-sm">
                  <option value="">Select a service</option>
                  {["CNC Milling", "CNC Turning", "Precision Grinding", "Wire Cutting", "Waterjet Cutting", "Laser Cutting", "Sheet Metal Bending", "Surface Treatment", "Prototyping", "Reverse Engineering", "Engineering Consultation", "Other"].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-steel-300 mb-2">Project Details</label>
                <textarea rows={4} placeholder="Describe your project requirements, materials, tolerances, and quantities..." className="w-full px-4 py-3 bg-steel-900 border border-steel-700 rounded-lg text-white placeholder-steel-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors text-sm resize-none" />
              </div>
              <button type="submit" className="btn-shine w-full py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-all text-sm">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-brand-500/10 rounded-lg flex items-center justify-center shrink-0">
        <svg className="w-5 h-5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">{icon}</svg>
      </div>
      <div>
        <h4 className="font-semibold text-white mb-1">{title}</h4>
        {children}
      </div>
    </div>
  );
}

function FormField({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-steel-300 mb-2">{label}</label>
      <input type={type} placeholder={placeholder} className="w-full px-4 py-3 bg-steel-900 border border-steel-700 rounded-lg text-white placeholder-steel-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors text-sm" />
    </div>
  );
}
