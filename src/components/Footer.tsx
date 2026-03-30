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
              <li><a href="https://www.google.com/maps/search/?api=1&query=Blk+9010+Tampines+Street+93+%2301-137+Singapore+528844" target="_blank" rel="noopener noreferrer" className="text-steel-400 hover:text-brand-400 text-sm transition-colors">Blk 9010, Tampines St 93,<br />#01-137, Singapore 528844</a></li>
              <li><a href="tel:+6597373178" className="text-steel-400 hover:text-brand-400 text-sm transition-colors">+65 9737 3178</a></li>
              <li><a href="mailto:damien.ang@statuspe.com.sg" className="text-steel-400 hover:text-brand-400 text-sm transition-colors break-all">damien.ang@statuspe.com.sg</a></li>
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
