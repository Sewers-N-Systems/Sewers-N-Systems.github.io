import { ImageWithFallback } from './figma/ImageWithFallback';

export function FeatureCards() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Features Card */}
        <div className="rounded-xl p-6 shadow-lg" style={{ backgroundColor: '#eee6d2' }}>
          <div className="aspect-video rounded-lg mb-4 overflow-hidden flex items-center justify-center bg-white/50">
            {/* Placeholder for features screenshot */}
            <span className="text-slate-600 text-sm">Features Screenshot</span>
          </div>
          <h3 className="tracking-wider mb-3 uppercase" style={{ fontFamily: 'monospace', color: '#61e38b' }}>
            Features
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: '#123c52' }}>
            Explore a full-featured sewer and utility expansion for Minecraft. From reinforced brick tunnels to modular inspection hatches, everything is crafted to bring depth, realism, and engineering consistency to your world.
          </p>
        </div>

        {/* Why Choose This Mod Card */}
        <div className="rounded-xl p-6 shadow-lg" style={{ backgroundColor: '#eee6d2' }}>
          <div className="aspect-video bg-slate-800 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
            {/* Placeholder for mod showcase screenshot */}
            <span className="text-slate-400 text-sm">Mod Showcase Screenshot</span>
          </div>
          <h3 className="tracking-wider mb-3 uppercase" style={{ fontFamily: 'monospace', color: '#61e38b' }}>
            Why Choose This Mod?
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: '#123c52' }}>
            Crafted with performance, detail, and worldbuilding in mind. Every block is optimized, visually consistent, and designed to fit into both survival and large-scale modpack environments.
          </p>
        </div>
      </div>
    </section>
  );
}