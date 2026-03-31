/* eslint-disable @next/next/no-img-element */

const services = [
  { title: "CNC Milling", desc: "Precised CNC Milling process to achieve complex geometries and tight tolerances. Suitable for both low quantity R&D or high volume production.", img: "https://images.unsplash.com/photo-1689942007817-679c21614b25?w=600&q=80" },
  { title: "CNC Turning", desc: "Precision lathe operations for cylindrical components with exceptional surface finish.", img: "https://images.unsplash.com/photo-1666634157070-6fd830fb5672?w=600&q=80" },
  { title: "Precision Grinding", desc: "Ultra-fine surface grinding for components requiring micron-level accuracy.", img: "https://images.unsplash.com/photo-1739206509849-016cb3112196?w=600&q=80" },
  { title: "Wire Cutting", desc: "Wire EDM cutting for intricate profiles and hardened materials with superior edge quality.", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80" },
  { title: "Waterjet Cutting", desc: "Cold-cutting technology for any material without heat-affected zones or distortion.", img: "https://images.unsplash.com/photo-1508465818649-14a170138405?w=600&q=80" },
  { title: "Laser Cutting", desc: "High-speed laser cutting for precise, clean edges on sheet metals and plate materials.", img: "https://images.unsplash.com/photo-1689961476752-cc6cc3a02f86?w=600&q=80" },
  { title: "Sheet Metal Bending", desc: "Precise bending and forming of sheet metal components to exact specifications.", img: "https://images.unsplash.com/photo-1758873263527-ca53b938fbd4?w=600&q=80" },
  { title: "Surface Treatment", desc: "Anodizing, plating, coating, and finishing for enhanced durability and aesthetics.", img: "https://images.unsplash.com/photo-1731317734838-12da6c9a6139?w=600&q=80" },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-steel-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll fade-up">
          <span className="text-brand-400 text-sm font-semibold uppercase tracking-[0.2em]">Our Services</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Comprehensive Manufacturing Solutions
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-steel-400 text-lg">
            From precision machining to surface finishing, we offer end-to-end manufacturing capabilities to meet your most demanding specifications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {services.map((svc) => (
            <div key={svc.title} className="service-card animate-on-scroll fade-up bg-steel-900 rounded-xl overflow-hidden border border-steel-800 hover:border-brand-500/30">
              <div className="h-44 overflow-hidden">
                <img src={svc.img} alt={svc.title} className="service-img w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg mb-2">{svc.title}</h3>
                <p className="text-steel-400 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
