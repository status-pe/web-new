import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-steel-950 border-t border-steel-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Logo />
              <div>
                <span className="font-heading font-bold text-lg tracking-tight">STATUS P-E</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-steel-400 -mt-1">Pte Ltd</span>
              </div>
            </div>
            <p className="text-steel-400 text-sm leading-relaxed mb-6">
              Your one-stop precision engineering partner in Singapore. Delivering manufacturing excellence since 2005.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-3">
              {["CNC Milling", "CNC Turning", "Precision Grinding", "Wire Cutting", "Waterjet Cutting", "Surface Treatment"].map((s) => (
                <li key={s}><a href="#services" className="text-steel-400 hover:text-brand-400 text-sm transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-steel-400 hover:text-brand-400 text-sm transition-colors">About Us</a></li>
              <li><a href="#capabilities" className="text-steel-400 hover:text-brand-400 text-sm transition-colors">Capabilities</a></li>
              <li><a href="#process" className="text-steel-400 hover:text-brand-400 text-sm transition-colors">Our Process</a></li>
              <li><a href="#contact" className="text-steel-400 hover:text-brand-400 text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-3">
              <li><a href="https://www.google.com/maps/search/?api=1&query=Blk+9010+Tampines+Street+93+%2301-137+Singapore+528844" target="_blank" rel="noopener noreferrer" className="text-steel-400 hover:text-brand-400 text-sm transition-colors flex items-start gap-2"><svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg><span>Blk 9010, Tampines St 93,<br />#01-137, Singapore 528844</span></a></li>
              <li><a href="tel:+6597373178" className="text-steel-400 hover:text-brand-400 text-sm transition-colors flex items-center gap-2"><svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>+65 9737 3178</a></li>
              <li><a href="mailto:damien.ang@statuspe.com.sg" className="text-steel-400 hover:text-brand-400 text-sm transition-colors break-all flex items-center gap-2"><svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>damien.ang@statuspe.com.sg</a></li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-steel-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-steel-500 text-xs">&copy; 2026 Status P-E Pte Ltd. All rights reserved. UEN: 200507456W</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-steel-500 hover:text-brand-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-steel-500 hover:text-brand-400 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
